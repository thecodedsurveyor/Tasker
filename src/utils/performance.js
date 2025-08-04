// Performance monitoring utilities
export const measurePerformance = (name, fn) => {
  const start = performance.now();
  const result = fn();
  const end = performance.now();
  console.log(`${name} took ${end - start} milliseconds`);
  return result;
};

// Bundle size monitoring
export const getBundleSize = () => {
  if (window.performance && window.performance.memory) {
    return {
      used: window.performance.memory.usedJSHeapSize,
      total: window.performance.memory.totalJSHeapSize,
      limit: window.performance.memory.jsHeapSizeLimit
    };
  }
  return null;
};

// Page load performance
export const getPageLoadMetrics = () => {
  if (window.performance && window.performance.timing) {
    const timing = window.performance.timing;
    return {
      domContentLoaded: timing.domContentLoadedEventEnd - timing.navigationStart,
      loadComplete: timing.loadEventEnd - timing.navigationStart,
      firstPaint: window.performance.getEntriesByType('paint')[0]?.startTime || 0
    };
  }
  return null;
};

// Resource loading performance
export const getResourceTiming = () => {
  if (window.performance && window.performance.getEntriesByType) {
    return window.performance.getEntriesByType('resource').map(resource => ({
      name: resource.name,
      duration: resource.duration,
      size: resource.transferSize
    }));
  }
  return [];
}; 