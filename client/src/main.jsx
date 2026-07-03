import React from 'react';
import ReactDOM from 'react-dom/client';
import { ChakraProvider, extendTheme, ColorModeScript } from '@chakra-ui/react';
import App from './App.jsx';

const theme = extendTheme({
  config: {
    initialColorMode: 'light',
    useSystemColorMode: false,
  },
  fonts: {
    heading: `'Inter', sans-serif`,
    body: `'Inter', sans-serif`,
  },
  colors: {
    brand: {
      50: '#eff6ff',
      100: '#dbeafe',
      200: '#bfdbfe',
      300: '#93c5fd',
      400: '#60a5fa',
      500: '#3b82f6',
      600: '#2563eb',
      700: '#1d4ed8',
      800: '#1e40af',
      900: '#1e3a8a',
    },
    dark: {
      bg: '#f8fafc',
      card: '#ffffff',
      border: '#e2e8f0',
      hover: '#f1f5f9',
      text: '#0f172a',
      muted: '#64748b',
    },
  },
  styles: {
    global: {
      body: {
        bg: 'dark.bg',
        color: 'dark.text',
        fontFamily: `'Inter', sans-serif`,
      },
    },
  },
  components: {
    Button: {
      defaultProps: {
        colorScheme: 'brand',
      },
    },
  },
});

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ColorModeScript initialColorMode={theme.config.initialColorMode} />
    <ChakraProvider theme={theme}>
      <App />
    </ChakraProvider>
  </React.StrictMode>
);
