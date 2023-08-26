import React, { useState, useEffect } from 'react';
import ErrorModal from '../components/ErrorModal';

const useErrorHandler = () => {
  const [error, setError] = useState(null);

  useEffect(() => {
    const errorHandler = (error) => {
      setError(error);
    };

    // Set up global error handler
    window.addEventListener('error', errorHandler);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener('error', errorHandler);
    };
  }, []);

  // Function to clear the error
  const clearError = () => {
    setError(null);
  };

  return { error, clearError };
};

export default useErrorHandler;
