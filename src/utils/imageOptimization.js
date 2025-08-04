// Image optimization utilities
export const optimizeImage = (src, width, quality = 80) => {
  // For production, you would use a CDN or image optimization service
  // This is a placeholder for image optimization logic
  return src;
};

// Font loading optimization
export const preloadFonts = () => {
  const fonts = [
    'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap',
    'https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap'
  ];

  fonts.forEach(font => {
    const link = document.createElement('link');
    link.rel = 'preload';
    link.as = 'style';
    link.href = font;
    link.onload = () => {
      link.rel = 'stylesheet';
    };
    document.head.appendChild(link);
  });
};

// WebP support detection
export const supportsWebP = () => {
  const elem = document.createElement('canvas');
  if (elem.getContext && elem.getContext('2d')) {
    return elem.toDataURL('image/webp').indexOf('data:image/webp') === 0;
  }
  return false;
};

// Responsive image srcset generator
export const generateSrcSet = (src, sizes = [320, 640, 960, 1280]) => {
  return sizes
    .map(size => `${src}?w=${size} ${size}w`)
    .join(', ');
}; 