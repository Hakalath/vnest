import React, { createContext, useContext, useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Platform } from 'react-native';
import { DEFAULT_API_URL, setApiUrl as updateGlobalApiUrl } from '@/config';
import { loadControllers } from '@/services/exerciseManagementService';
import { loadAVPControllers } from '@/services/avpService';

export type DataSourceType = 'local' | 'api';

interface DataSourceConfig {
  dataSource: DataSourceType;
  apiUrl: string;
  setDataSource: (source: DataSourceType) => Promise<void>;
  setApiUrl: (url: string) => Promise<void>;
}

const DataSourceContext = createContext<DataSourceConfig | undefined>(undefined);

const DATA_SOURCE_KEY = '@vnest_data_source';
const API_URL_KEY = '@vnest_api_url';

export function DataSourceProvider({ children }: { children: React.ReactNode }) {
  const [dataSource, setDataSourceState] = useState<DataSourceType>('local');
  const [apiUrl, setApiUrlState] = useState<string>(DEFAULT_API_URL);

  // Load saved settings on mount
  useEffect(() => {
    loadSettings();
  }, []);

  const loadSettings = async () => {
    try {
      const savedDataSource = await AsyncStorage.getItem(DATA_SOURCE_KEY);
      const savedApiUrl = await AsyncStorage.getItem(API_URL_KEY);
      
      let finalDataSource: DataSourceType;
      // Force local-only mode: ignore any saved setting and always use local
      finalDataSource = 'local';
      setDataSourceState(finalDataSource);
      // Remove any persisted API choice to avoid future confusion
      await AsyncStorage.removeItem(DATA_SOURCE_KEY);
      
      let finalApiUrl: string;
      if (savedApiUrl) {
        finalApiUrl = savedApiUrl;
        setApiUrlState(finalApiUrl);
      } else {
        finalApiUrl = DEFAULT_API_URL;
      }
      
      // Initialize global configuration
      updateGlobalApiUrl(finalApiUrl);
      loadControllers(finalDataSource);
      loadAVPControllers(finalDataSource);
      
      console.log(`📱 Initialized data source: ${finalDataSource}, API URL: ${finalApiUrl}`);
    } catch (error) {
      console.error('Error loading data source settings:', error);
    }
  };

  const setDataSource = async (source: DataSourceType) => {
    try {
      // Ignore requested source and enforce local-only mode
      const finalSource: DataSourceType = 'local';
      await AsyncStorage.setItem(DATA_SOURCE_KEY, finalSource);
      setDataSourceState(finalSource);
      
      // Switch controllers to local-only
      loadControllers(finalSource);
      loadAVPControllers(finalSource);
      
      const modeDescription = 'Local Database (JSON files on web, Realm on mobile)';
      
      console.log(`🔄 Data Source Changed: Enforced ${modeDescription}`);
      console.log(`💡 Tip: App is now using local JSON data only`);
    } catch (error) {
      console.error('Error saving data source:', error);
    }
  };

  const setApiUrl = async (url: string) => {
    try {
      await AsyncStorage.setItem(API_URL_KEY, url);
      setApiUrlState(url);
      
      // Update global API URL configuration
      updateGlobalApiUrl(url);
      
      console.log(`🌐 Updated API URL to: ${url}`);
    } catch (error) {
      console.error('Error saving API URL:', error);
    }
  };

  return (
    <DataSourceContext.Provider value={{
      dataSource,
      apiUrl,
      setDataSource,
      setApiUrl
    }}>
      {children}
    </DataSourceContext.Provider>
  );
}

export function useDataSource(): DataSourceConfig {
  const context = useContext(DataSourceContext);
  if (!context) {
    throw new Error('useDataSource must be used within a DataSourceProvider');
  }
  return context;
}