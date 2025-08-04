# Auto Scroll to Top on Route Change

## 🎯 Overview

Automatically scrolls to the top of the page whenever a user navigates to a different route, providing a consistent and intuitive user experience.

## ✨ Features

### 1. **Automatic Behavior**

- Scrolls to top on every route change
- Smooth scrolling animation
- No user interaction required
- Works across all pages

### 2. **Configurable Options**

- **Behavior**: Smooth or instant scrolling
- **Top Position**: Custom scroll position (default: 0)
- **Enabled/Disabled**: Toggle functionality
- **Delay**: Optional delay before scrolling

### 3. **Performance Optimized**

- Only triggers on actual route changes
- Cleanup on component unmount
- Efficient event handling

## 🛠️ Implementation

### Components Created

1. **ScrollToTopOnRouteChange.jsx** - Main component
2. **useScrollToTopOnRouteChange.js** - Custom hook

### Usage Examples

#### Basic Usage

```jsx
// In App.jsx
import ScrollToTopOnRouteChange from "./components/ui/ScrollToTopOnRouteChange";

// Add to your app
<ScrollToTopOnRouteChange />;
```

#### Using the Hook Directly

```jsx
import { useScrollToTopOnRouteChange } from "./hooks/useScrollToTopOnRouteChange";

const MyComponent = () => {
  // Basic usage
  useScrollToTopOnRouteChange();

  // With custom options
  useScrollToTopOnRouteChange({
    behavior: "smooth",
    top: 0,
    enabled: true,
    delay: 100,
  });

  return <div>My Component</div>;
};
```

### Configuration Options

| Option     | Type    | Default  | Description                          |
| ---------- | ------- | -------- | ------------------------------------ |
| `behavior` | string  | "smooth" | Scroll behavior ("smooth" or "auto") |
| `top`      | number  | 0        | Target scroll position               |
| `enabled`  | boolean | true     | Enable/disable the feature           |
| `delay`    | number  | 0        | Delay before scrolling (ms)          |

## 🎨 User Experience

### Before Implementation

- Users stay at their scroll position when navigating
- Confusing when content appears below the fold
- Poor UX for long pages

### After Implementation

- Users always start at the top of new pages
- Consistent navigation experience
- Better content discovery
- Professional feel

## 📱 Browser Compatibility

- Works in all modern browsers
- Graceful fallback for older browsers
- No additional dependencies required

## 🚀 Benefits

- **Better UX**: Users always see the top of new pages
- **Consistent Navigation**: Predictable behavior across the app
- **Content Discovery**: Ensures users see important content
- **Professional Feel**: Matches user expectations from modern websites

## 🔧 Customization Examples

### Instant Scroll (No Animation)

```jsx
useScrollToTopOnRouteChange({
  behavior: "auto",
  delay: 0,
});
```

### Scroll with Delay

```jsx
useScrollToTopOnRouteChange({
  behavior: "smooth",
  delay: 200, // Wait 200ms before scrolling
});
```

### Scroll to Custom Position

```jsx
useScrollToTopOnRouteChange({
  top: 100, // Scroll to 100px from top
  behavior: "smooth",
});
```

### Conditional Usage

```jsx
useScrollToTopOnRouteChange({
  enabled: shouldScrollToTop, // Only scroll when condition is true
  behavior: "smooth",
});
```

This feature ensures users always have the best possible navigation experience when moving between pages in your application!
