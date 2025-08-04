// Design System Constants
export const DESIGN_SYSTEM = {
  // Colors
  colors: {
    primary: {
      50: '#eff6ff',
      100: '#dbeafe',
      200: '#bfdbfe',
      300: '#93c5fd',
      400: '#60a5fa',
      500: '#3b82f6', // Main blue
      600: '#2563eb',
      700: '#1d4ed8',
      800: '#1e40af',
      900: '#1e3a8a',
    },
    secondary: {
      50: '#f0fdf4',
      100: '#dcfce7',
      200: '#bbf7d0',
      300: '#86efac',
      400: '#4ade80',
      500: '#22c55e', // Main green
      600: '#16a34a',
      700: '#15803d',
      800: '#166534',
      900: '#14532d',
    },
    accent: {
      red: '#ef4444',
      yellow: '#eab308',
      orange: '#f97316',
      purple: '#8b5cf6',
    },
    neutral: {
      50: '#fafafa',
      100: '#f5f5f5',
      200: '#e5e5e5',
      300: '#d4d4d4',
      400: '#a3a3a3',
      500: '#737373',
      600: '#525252',
      700: '#404040',
      800: '#262626',
      900: '#171717',
    },
    text: {
      primary: '#171717',
      secondary: '#525252',
      tertiary: '#737373',
      inverse: '#ffffff',
    },
    background: {
      primary: '#ffffff',
      secondary: '#f5f5f5',
      tertiary: '#fafafa',
    },
  },

  // Typography
  typography: {
    fontFamily: {
      sans: ['Inter', 'system-ui', 'sans-serif'],
      display: ['Poppins', 'system-ui', 'sans-serif'],
    },
    fontSize: {
      xs: '0.75rem',
      sm: '0.875rem',
      base: '1rem',
      lg: '1.125rem',
      xl: '1.25rem',
      '2xl': '1.5rem',
      '3xl': '1.875rem',
      '4xl': '2.25rem',
      '5xl': '3rem',
      '6xl': '3.75rem',
    },
    fontWeight: {
      normal: '400',
      medium: '500',
      semibold: '600',
      bold: '700',
      extrabold: '800',
    },
    lineHeight: {
      tight: '1.25',
      normal: '1.5',
      relaxed: '1.75',
    },
  },

  // Spacing
  spacing: {
    xs: '0.25rem',
    sm: '0.5rem',
    md: '1rem',
    lg: '1.5rem',
    xl: '2rem',
    '2xl': '3rem',
    '3xl': '4rem',
    '4xl': '6rem',
  },

  // Border Radius
  borderRadius: {
    none: '0',
    sm: '0.125rem',
    base: '0.25rem',
    md: '0.375rem',
    lg: '0.5rem',
    xl: '0.75rem',
    '2xl': '1rem',
    '3xl': '1.5rem',
    full: '9999px',
  },

  // Shadows
  shadows: {
    none: 'none',
    sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
    base: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
    md: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
    lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
    xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
    soft: '0 2px 15px -3px rgba(0, 0, 0, 0.07), 0 10px 20px -2px rgba(0, 0, 0, 0.04)',
    medium: '0 4px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
    large: '0 10px 40px -10px rgba(0, 0, 0, 0.15), 0 2px 10px -2px rgba(0, 0, 0, 0.04)',
  },

  // Transitions
  transitions: {
    fast: '150ms ease-in-out',
    normal: '300ms ease-in-out',
    slow: '500ms ease-in-out',
  },

  // Breakpoints
  breakpoints: {
    sm: '640px',
    md: '768px',
    lg: '1024px',
    xl: '1280px',
    '2xl': '1536px',
  },

  // Z-index
  zIndex: {
    hide: -1,
    auto: 'auto',
    base: 0,
    docked: 10,
    dropdown: 1000,
    sticky: 1100,
    banner: 1200,
    overlay: 1300,
    modal: 1400,
    popover: 1500,
    skipLink: 1600,
    toast: 1700,
    tooltip: 1800,
  },
};

// Component-specific design tokens
export const COMPONENT_TOKENS = {
  // Button variants
  button: {
    primary: {
      background: DESIGN_SYSTEM.colors.primary[500],
      text: DESIGN_SYSTEM.colors.text.inverse,
      hover: DESIGN_SYSTEM.colors.primary[600],
      focus: DESIGN_SYSTEM.colors.primary[700],
    },
    secondary: {
      background: DESIGN_SYSTEM.colors.secondary[500],
      text: DESIGN_SYSTEM.colors.text.inverse,
      hover: DESIGN_SYSTEM.colors.secondary[600],
      focus: DESIGN_SYSTEM.colors.secondary[700],
    },
    outline: {
      background: 'transparent',
      text: DESIGN_SYSTEM.colors.primary[500],
      border: DESIGN_SYSTEM.colors.primary[500],
      hover: DESIGN_SYSTEM.colors.primary[50],
    },
    ghost: {
      background: 'transparent',
      text: DESIGN_SYSTEM.colors.text.primary,
      hover: DESIGN_SYSTEM.colors.neutral[100],
    },
  },

  // Card variants
  card: {
    default: {
      background: DESIGN_SYSTEM.colors.background.primary,
      border: DESIGN_SYSTEM.colors.neutral[200],
      shadow: DESIGN_SYSTEM.shadows.soft,
    },
    elevated: {
      background: DESIGN_SYSTEM.colors.background.primary,
      border: 'transparent',
      shadow: DESIGN_SYSTEM.shadows.medium,
    },
  },

  // Input variants
  input: {
    default: {
      background: DESIGN_SYSTEM.colors.background.primary,
      border: DESIGN_SYSTEM.colors.neutral[300],
      text: DESIGN_SYSTEM.colors.text.primary,
      focus: DESIGN_SYSTEM.colors.primary[500],
    },
    error: {
      background: DESIGN_SYSTEM.colors.background.primary,
      border: DESIGN_SYSTEM.colors.accent.red,
      text: DESIGN_SYSTEM.colors.text.primary,
      focus: DESIGN_SYSTEM.colors.accent.red,
    },
  },
};

// Layout constants
export const LAYOUT = {
  container: {
    maxWidth: '1200px',
    padding: {
      mobile: '1rem',
      tablet: '2rem',
      desktop: '3rem',
    },
  },
  header: {
    height: '80px',
    mobileHeight: '60px',
  },
  sidebar: {
    width: '280px',
    mobileWidth: '100%',
  },
};

// Animation constants
export const ANIMATIONS = {
  duration: {
    fast: '150ms',
    normal: '300ms',
    slow: '500ms',
  },
  easing: {
    ease: 'ease',
    easeIn: 'ease-in',
    easeOut: 'ease-out',
    easeInOut: 'ease-in-out',
  },
}; 