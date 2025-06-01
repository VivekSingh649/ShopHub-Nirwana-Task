import React from "react";

const LoadingSpinner = () => {
  return (
    <div className="w-full bg-white rounded-2xl overflow-hidden shadow-xl animate-pulse">
      <div className="h-48 bg-gray-200" />
      <div className="p-6">
        <div className="flex items-center justify-between mb-3">
          <div className="h-6 w-20 bg-gray-200 rounded-full" />
          <div className="h-6 w-24 bg-gray-200 rounded-full" />
        </div>
        <div className="h-6 bg-gray-200 rounded mb-3" />
        <div className="h-4 bg-gray-200 rounded mb-4" />
        <div className="h-12 bg-gray-200 rounded-xl" />
      </div>
    </div>
  );
};

export default LoadingSpinner;
