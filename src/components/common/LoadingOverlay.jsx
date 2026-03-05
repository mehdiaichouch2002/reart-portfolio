import React from "react";

const LoadingOverlay = () => (
  <div className="fixed inset-0 flex items-center justify-center z-50">
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm" />
    <div className="relative z-10">
      <div
        className="h-12 w-12 animate-spin rounded-full border-4 border-white border-r-transparent"
        role="status"
      >
        <span className="sr-only">Loading...</span>
      </div>
    </div>
  </div>
);

export default LoadingOverlay;
