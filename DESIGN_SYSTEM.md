# Tasker Design System

## Overview

The Tasker design system provides a comprehensive set of design tokens, components, and guidelines to ensure consistency across the application. This system is built on top of TailwindCSS and provides semantic color names, typography scales, spacing, and component variants.

## Design Tokens

### Colors

#### Primary Colors

- `primary-50` to `primary-900`: Blue color palette for primary actions and branding
- Main brand color: `primary-500` (#3b82f6)

#### Secondary Colors

- `secondary-50` to `secondary-900`: Green color palette for success states and secondary actions
- Main secondary color: `secondary-500` (#22c55e)

#### Accent Colors

- `accent-red`: Error states and destructive actions (#ef4444)
- `accent-yellow`: Warning states (#eab308)
- `accent-orange`: Special highlights (#f97316)
- `accent-purple`: Premium features (#8b5cf6)

#### Neutral Colors

- `neutral-50` to `neutral-900`: Grayscale palette for text and backgrounds
- Text colors: `text-primary`, `text-secondary`, `text-tertiary`, `text-inverse`
- Background colors: `background-primary`, `background-secondary`, `background-tertiary`

### Typography

#### Font Families

- `font-sans`: Inter (Primary body text)
- `font-display`: Poppins (Headings and display text)

#### Font Sizes

- `text-xs` to `text-6xl`: Comprehensive size scale
- Responsive typography with mobile-first approach

#### Font Weights

- `font-normal` (400)
- `font-medium` (500)
- `font-semibold` (600)
- `font-bold` (700)
- `font-extrabold` (800)

### Spacing

#### Standard Spacing Scale

- `xs`: 0.25rem (4px)
- `sm`: 0.5rem (8px)
- `md`: 1rem (16px)
- `lg`: 1.5rem (24px)
- `xl`: 2rem (32px)
- `2xl`: 3rem (48px)
- `3xl`: 4rem (64px)
- `4xl`: 6rem (96px)

### Border Radius

#### Radius Scale

- `none`: 0
- `sm`: 0.125rem (2px)
- `base`: 0.25rem (4px)
- `md`: 0.375rem (6px)
- `lg`: 0.5rem (8px)
- `xl`: 0.75rem (12px)
- `2xl`: 1rem (16px)
- `3xl`: 1.5rem (24px)
- `full`: 9999px (fully rounded)

### Shadows

#### Shadow Variants

- `shadow-soft`: Subtle elevation for cards
- `shadow-medium`: Medium elevation for modals
- `shadow-large`: Strong elevation for overlays

### Animations

#### Duration

- `fast`: 150ms
- `normal`: 300ms
- `slow`: 500ms

#### Easing

- `ease`: Default easing
- `ease-in`: Accelerating
- `ease-out`: Decelerating
- `ease-in-out`: Smooth transitions

## Components

### Button

```jsx
<Button
  variant="primary" // primary, secondary, outline, ghost, danger
  size="md" // sm, md, lg, xl
  disabled={false}
  fullWidth={false}
  onClick={handleClick}
>
  Button Text
</Button>
```

### Card

```jsx
<Card
  variant="default" // default, elevated, outlined, ghost
  padding="md" // none, sm, md, lg, xl
  onClick={handleClick}
>
  Card content
</Card>
```

### Input

```jsx
<Input
  type="text"
  placeholder="Enter text"
  label="Input Label"
  error={false}
  helperText="Helper text"
  fullWidth={true}
  size="md" // sm, md, lg
/>
```

### Container

```jsx
<Container
  maxWidth="default" // sm, md, lg, xl, 2xl, default, full
  padding="default" // none, sm, md, lg, xl, default
>
  Content
</Container>
```

## Layout Guidelines

### Container Usage

- Use `Container` component for consistent page layouts
- Default max-width: 1200px
- Responsive padding: 1rem mobile, 2rem tablet, 3rem desktop

### Spacing Patterns

- Section padding: `py-20` (80px vertical)
- Component spacing: `gap-8` (32px) for cards, `gap-6` (24px) for forms
- Text spacing: `mb-6` (24px) for headings, `mb-4` (16px) for paragraphs

### Grid Systems

- Mobile: Single column
- Tablet: Two columns (`md:grid-cols-2`)
- Desktop: Three or four columns (`lg:grid-cols-3`, `lg:grid-cols-4`)

## Usage Guidelines

### Color Usage

- Use `text-primary` for main headings
- Use `text-secondary` for body text
- Use `text-tertiary` for muted text
- Use `background-primary` for main content areas
- Use `background-secondary` for page backgrounds

### Typography Hierarchy

- Page titles: `text-4xl lg:text-6xl font-bold`
- Section headings: `text-3xl lg:text-4xl font-bold`
- Card headings: `text-xl font-bold`
- Body text: `text-lg` or `text-base`

### Component Variants

- Use `primary` variant for main CTAs
- Use `secondary` variant for secondary actions
- Use `outline` variant for less prominent actions
- Use `ghost` variant for subtle interactions

## File Structure

```
src/
├── components/
│   ├── ui/           # Reusable UI components
│   ├── layout/       # Layout components
│   ├── forms/        # Form-specific components
│   └── sections/     # Page section components
├── constants/
│   └── design-system.js  # Design tokens
├── pages/            # Page components
├── hooks/            # Custom React hooks
├── utils/            # Utility functions
└── styles/           # Global styles
```

## Best Practices

1. **Consistency**: Always use design system tokens instead of hardcoded values
2. **Accessibility**: Ensure proper contrast ratios and focus states
3. **Responsive**: Design mobile-first with progressive enhancement
4. **Performance**: Use Tailwind's purge to remove unused styles
5. **Maintainability**: Keep components small and focused on single responsibilities

## Getting Started

1. Import the design system constants:

```jsx
import { DESIGN_SYSTEM, COMPONENT_TOKENS } from "../constants/design-system";
```

2. Use the predefined components:

```jsx
import Button from "../components/ui/Button";
import Card from "../components/ui/Card";
```

3. Apply design tokens in your CSS classes:

```jsx
<div className="rounded-lg bg-background-primary p-6 text-text-primary shadow-soft">
  Content
</div>
```

## Contributing

When adding new components or modifying existing ones:

1. Follow the established naming conventions
2. Use design system tokens consistently
3. Include proper TypeScript types
4. Add comprehensive documentation
5. Test across different screen sizes
6. Ensure accessibility compliance
