# Tasker Design System & Theming Guide

## Overview

This document outlines the comprehensive design system for the Tasker application, including light and dark theme support, CSS custom properties, and component guidelines.

## Table of Contents

1. [Theme Foundation](#theme-foundation)
2. [Color System](#color-system)
3. [Typography](#typography)
4. [Spacing](#spacing)
5. [Component Guidelines](#component-guidelines)
6. [Theme Implementation](#theme-implementation)
7. [Accessibility](#accessibility)
8. [Extending the System](#extending-the-system)

## Theme Foundation

### CSS Custom Properties

The design system uses CSS custom properties (CSS variables) for all design tokens, enabling dynamic theme switching and consistent styling across components.

**Location**: `src/styles/theme.css`

### Theme Structure

```css
:root {
  /* Base colors */
  --color-primary-500: #3b82f6;
  --color-text-primary: #171717;
  --color-background-primary: #ffffff;

  /* Semantic colors */
  --color-text-primary: #171717;
  --color-text-secondary: #525252;
  --color-background-primary: #ffffff;
  --color-background-secondary: #f5f5f5;
}

[data-theme="dark"] {
  /* Dark theme overrides */
  --color-text-primary: #ffffff;
  --color-background-primary: #0f0f0f;
}
```

## Color System

### Primary Colors

- **Primary-500**: Main brand color (#3b82f6)
- **Primary-600**: Hover states (#2563eb)
- **Primary-50-900**: Full color scale for various use cases

### Semantic Colors

#### Text Colors

- `text-primary`: Main text color
- `text-secondary`: Secondary text color
- `text-tertiary`: Muted text color
- `text-inverse`: Text on colored backgrounds

#### Background Colors

- `background-primary`: Main background
- `background-secondary`: Secondary background
- `background-tertiary`: Tertiary background

#### Border Colors

- `border-primary`: Primary border color
- `border-secondary`: Secondary border color

### Usage Examples

```jsx
// Text colors
<h1 className="text-text-primary">Main heading</h1>
<p className="text-text-secondary">Secondary text</p>

// Background colors
<div className="bg-background-primary">Main content</div>
<div className="bg-background-secondary">Secondary content</div>

// Border colors
<div className="border border-border-primary">Bordered element</div>
```

## Typography

### Font Families

- `font-sans`: Inter (body text)
- `font-display`: Poppins (headings)

### Font Sizes

- `text-xs`: 0.75rem
- `text-sm`: 0.875rem
- `text-base`: 1rem
- `text-lg`: 1.125rem
- `text-xl`: 1.25rem
- `text-2xl`: 1.5rem
- `text-3xl`: 1.875rem
- `text-4xl`: 2.25rem
- `text-5xl`: 3rem
- `text-6xl`: 3.75rem

### Line Heights

- `leading-tight`: 1.25
- `leading-normal`: 1.5
- `leading-relaxed`: 1.75

## Spacing

### Spacing Scale

- `spacing-0`: 0
- `spacing-1`: 0.25rem (4px)
- `spacing-2`: 0.5rem (8px)
- `spacing-3`: 0.75rem (12px)
- `spacing-4`: 1rem (16px)
- `spacing-5`: 1.25rem (20px)
- `spacing-6`: 1.5rem (24px)
- `spacing-8`: 2rem (32px)
- `spacing-10`: 2.5rem (40px)
- `spacing-12`: 3rem (48px)
- `spacing-16`: 4rem (64px)
- `spacing-20`: 5rem (80px)
- `spacing-24`: 6rem (96px)
- `spacing-32`: 8rem (128px)

## Component Guidelines

### Button Components

```jsx
// Primary button
<Button className="bg-primary-500 text-white hover:bg-primary-600">
  Primary Action
</Button>

// Secondary button
<Button variant="outline" className="border-border-primary text-text-primary">
  Secondary Action
</Button>
```

### Card Components

```jsx
<Card className="border-border-primary border bg-background-primary shadow-soft">
  <h3 className="text-text-primary">Card Title</h3>
  <p className="text-text-secondary">Card content</p>
</Card>
```

### Form Components

```jsx
<Input
  className="border-border-primary border bg-background-primary text-text-primary"
  placeholder="Enter text..."
/>
```

## Theme Implementation

### Theme Context

The theme system uses React Context for state management:

```jsx
import { useTheme } from "../context/ThemeContext";

const MyComponent = () => {
  const { theme, toggleTheme, isDark } = useTheme();

  return (
    <button onClick={toggleTheme}>
      Switch to {isDark ? "light" : "dark"} mode
    </button>
  );
};
```

### Theme Toggle Component

```jsx
import ThemeToggle from "../components/ui/ThemeToggle";

// Usage in navigation
<ThemeToggle />;
```

### Theme Provider Setup

```jsx
import { ThemeProvider } from "./context/ThemeContext";

function App() {
  return (
    <ThemeProvider>
      <YourApp />
    </ThemeProvider>
  );
}
```

## Accessibility

### Contrast Ratios

All color combinations meet WCAG AA standards:

- **Normal text**: 4.5:1 minimum contrast ratio
- **Large text**: 3:1 minimum contrast ratio

### Focus States

```css
.focus-visible {
  outline: 2px solid var(--color-primary-500);
  outline-offset: 2px;
}
```

### High Contrast Mode

The system automatically adapts to high contrast mode preferences:

```css
@media (prefers-contrast: high) {
  :root {
    --color-text-primary: #000000;
    --color-background-primary: #ffffff;
  }
}
```

### Reduced Motion

Respects user motion preferences:

```css
@media (prefers-reduced-motion: reduce) {
  * {
    transition: none !important;
    animation: none !important;
  }
}
```

## Extending the System

### Adding New Colors

1. **Define in CSS custom properties**:

```css
:root {
  --color-new-500: #your-color;
  --color-new-600: #your-darker-color;
}
```

2. **Add to Tailwind config**:

```js
colors: {
  new: {
    500: 'var(--color-new-500)',
    600: 'var(--color-new-600)',
  }
}
```

3. **Update dark theme**:

```css
[data-theme="dark"] {
  --color-new-500: #your-dark-color;
  --color-new-600: #your-darker-dark-color;
}
```

### Adding New Spacing Values

1. **Add to CSS custom properties**:

```css
:root {
  --spacing-36: 9rem;
}
```

2. **Add to Tailwind config**:

```js
spacing: {
  '36': 'var(--spacing-36)',
}
```

### Creating New Components

1. **Use semantic color classes**:

```jsx
const NewComponent = ({ children }) => (
  <div className="border-border-primary border bg-background-primary text-text-primary">
    {children}
  </div>
);
```

2. **Include theme transitions**:

```jsx
<div className="theme-transition">{/* Component content */}</div>
```

### Best Practices

1. **Always use semantic color classes** instead of hard-coded colors
2. **Include theme transitions** for smooth theme switching
3. **Test in both light and dark modes**
4. **Verify contrast ratios** meet accessibility standards
5. **Use consistent spacing** from the design system
6. **Follow the established naming conventions**

### Testing Themes

1. **Manual testing**: Switch between light and dark modes
2. **System preference**: Test with system theme changes
3. **Accessibility**: Verify contrast ratios and focus states
4. **Performance**: Ensure smooth transitions without performance issues

## File Structure

```
src/
├── styles/
│   └── theme.css              # CSS custom properties
├── context/
│   └── ThemeContext.jsx       # Theme state management
├── components/
│   └── ui/
│       └── ThemeToggle.jsx    # Theme toggle component
└── pages/                     # Page components using theme
```

## Migration Guide

### From Hard-coded Colors

**Before**:

```jsx
<div className="bg-white text-black border-gray-200">
```

**After**:

```jsx
<div className="bg-background-primary text-text-primary border-border-primary">
```

### From Fixed Spacing

**Before**:

```jsx
<div className="p-4 m-2">
```

**After**:

```jsx
<div className="p-4 m-2"> {/* Already using design system */}
```

This design system provides a solid foundation for consistent, accessible, and maintainable theming across the Tasker application.
