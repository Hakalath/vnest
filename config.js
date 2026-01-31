// Default API URL - loaded from environment variable or fallback to localhost
const getDefaultApiUrl = () => {
  // For web builds, this would be set via environment variable
  // or determined at runtime based on the deployment environment
  if (typeof process !== 'undefined' && process.env?.REACT_APP_API_URL) {
    return process.env.REACT_APP_API_URL;
  }
  // Fallback for development - can be changed via DataSourceContext
  return "http://localhost:8080";
};

export const DEFAULT_API_URL = getDefaultApiUrl();

// This will be dynamically set by DataSourceContext
export let API_URL = DEFAULT_API_URL;

export function setApiUrl(url) {
  API_URL = url;
}