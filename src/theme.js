import { createTheme } from '@mui/material/styles';
import { globalStyleOverrides } from './sxStyles.js';

const theme = createTheme({
  palette: {
    primary: { main: '#552064', dark: '#40134f', light: '#6e2c80' },
    secondary: { main: '#c59751' },
    success: { main: '#2bb69a' },
    warning: { main: '#f59e0b' },
    error: { main: '#ef4444' },
    text: { primary: '#242124', secondary: '#6b7280' },
    background: { default: '#ffffff', paper: '#ffffff' },
    divider: '#e5e7eb',
  },
  typography: {
    fontFamily:
      '"DM Sans", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
    fontWeightRegular: 400,
    fontWeightMedium: 600,
    fontWeightBold: 700,
    h1: { fontFamily: '"DM Sans", sans-serif', fontWeight: 700 },
  },
  shape: { borderRadius: 2 },
  spacing: 8,
  shadows: [
    'none',
    '0 1px 3px rgba(0, 0, 0, 0.05)',
    '0 4px 16px rgba(0, 0, 0, 0.06)',
    '0 10px 25px rgba(0, 0, 0, 0.08)',
    ...Array(21).fill('0 10px 25px rgba(0, 0, 0, 0.08)'),
  ],
  components: {
    MuiCssBaseline: {
      styleOverrides: globalStyleOverrides,
    },
    MuiButton: {
      styleOverrides: {
        root: { borderRadius: 2, textTransform: 'none' },
      },
    },
  },
});

export default theme;
