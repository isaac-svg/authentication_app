import React from 'react';

function AnimatedBackground() {
  return (
    <div className="relative h-screen bg-gray-200">
      <div className="absolute inset-0 bg-gradient-to-b from-white via-transparent to-white animate-move-background"></div>
      <div className="h-screen flex items-center justify-center">
        <p className="text-2xl text-white font-semibold">
          Your Content Goes Here
        </p>
      </div>
    </div>
  );
}

export default AnimatedBackground;
