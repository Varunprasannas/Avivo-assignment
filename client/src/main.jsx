import React from 'react';
import ReactDOM from 'react-dom/client';
import { ChakraProvider, extendTheme, ColorModeScript } from '@chakra-ui/react';
import App from './App.jsx';

const theme = extendTheme({
  config: {
    initialColorMode: 'light',
    useSystemColorMode: true,
  },
  fonts: {
    heading: `'Inter', sans-serif`,
    body: `'Inter', sans-serif`,
  },
  colors: {
    brand: {
      50: '#f5f7ff',
      100: '#eef2ff',
      200: '#e0e7ff',
      300: '#c7d2fe',
      400: '#a5b4fc',
      500: '#4f46e5', // Bright rich Indigo
      600: '#4338ca',
      700: '#3730a3',
      800: '#312e81',
      900: '#1e1b4b',
    },
  },
  semanticTokens: {
    colors: {
      'dark.bg': {
        default: '#f5f8ff',
        _dark: '#090d16',
      },
      'dark.card': {
        default: '#ffffff',
        _dark: '#111827',
      },
      'dark.border': {
        default: '#e2e8f0',
        _dark: 'rgba(255, 255, 255, 0.08)',
      },
      'dark.hover': {
        default: '#f1f5f9',
        _dark: '#1e293b',
      },
      'dark.text': {
        default: '#0f172a',
        _dark: '#f8fafc',
      },
      'dark.muted': {
        default: '#64748b',
        _dark: '#94a3b8',
      },
    },
  },
  styles: {
    global: {
      body: {
        bg: 'dark.bg',
        color: 'dark.text',
        fontFamily: `'Inter', sans-serif`,
        transitionProperty: 'background-color, color',
        transitionDuration: '0.2s',
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
