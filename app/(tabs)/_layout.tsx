import { Tabs } from 'expo-router';
import React from 'react';

import { HapticTab } from '@/components/haptic-tab';
import { IconSymbol } from '@/components/ui/icon-symbol';
import Ionicons from '@expo/vector-icons/Ionicons';

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: "#477bb6",
        headerShown: false,
        tabBarButton: HapticTab,
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Koti',
          tabBarIcon: ({ color }) => <IconSymbol size={28} name="house.fill" color={color} />,
          tabBarStyle: { display: 'none' },
        }}
      />
      <Tabs.Screen
        name="history"
        options={{
        title: 'Edistyminen',
          tabBarIcon: ({ color }) => <Ionicons size={28} name="trending-up-outline" color={color} />
        }}
      />
      <Tabs.Screen
        name="levelselect"
        options={{
          title: 'Tasot',
          tabBarIcon: ({ color }) => <IconSymbol size={28} name="paperplane.fill" color={color} />,
        }}
      />
      <Tabs.Screen
        name="instructions"
        options={{
          title: 'Ohjeet',
          tabBarIcon: ({ color }) => <Ionicons size={28} name="information-circle" color={color} />,
        }}
      />
      <Tabs.Screen
        name="settings"
        options={{
          title: 'Asetukset',
          tabBarIcon: ({ color }) => <Ionicons size={28} name="settings-sharp" color={color} />,
        }}
      />
      
    </Tabs>
  );
}
