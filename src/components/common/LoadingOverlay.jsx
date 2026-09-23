import React from "react";

const LoadingOverlay = () => (
  <div className="fixed inset-0 flex items-center justify-center z-50 bg-paper/70">
    <div
      className="h-10 w-10 animate-spin rounded-full border-[3px] border-cobalt border-r-transparent"
      role="status"
    >
      <span className="sr-only">Loading...</span>
    </div>
  </div>
);

export default LoadingOverlay;
