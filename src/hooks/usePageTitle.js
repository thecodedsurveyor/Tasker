import { useEffect } from "react";

export const usePageTitle = (title, suffix = " | Tasker") => {
  useEffect(() => {
    const fullTitle = title + suffix;
    document.title = fullTitle;
    
    // Cleanup function to reset title when component unmounts
    return () => {
      document.title = "Tasker - Intelligent Task Management Platform";
    };
  }, [title, suffix]);
}; 