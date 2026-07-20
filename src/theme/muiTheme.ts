import { createTheme } from "@mui/material/styles";

export const muiTheme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#0288d1", // Modern clean blue tint
      light: "#5eb8ff",
      dark: "#005b9f",
    },
    secondary: {
      main: "#ed6c02", // Culinary warning/orange accent
    },
    background: {
      default: "#f8f9fa", // Neutral production gray backdrop
      paper: "#ffffff",
    },
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    h5: {
      fontWeight: 600,
      letterSpacing: "0.5px",
    },
    h6: {
      fontWeight: 500,
    },
    body2: {
      color: "#555555",
    },
  },
  components: {
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 12,
          transition: "transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out",
          "&:hover": {
            transform: "translateY(-4px)",
            boxShadow: "0 8px 24px rgba(0,0,0,0.12)",
          },
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none", // Modern flat look over heavy caps
          borderRadius: 8,
          fontWeight: 600,
        },
      },
    },
  },
});
