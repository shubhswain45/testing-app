import RoundedIcons from '@/components/RoundedIcon';
import React from 'react';

function Index() {
  return (
    <div className="bg-[#121212] rounded-lg p-4 h-full overflow-y-auto">
      <RoundedIcons/>
      {/* Example Content */}
      <h1 className="text-2xl font-bold text-white mb-4">Scrollable Content</h1>
      <div className="space-y-4">
        {Array.from({ length: 50 }, (_, index) => (
          <p key={index} className="text-gray-300">
            This is a sample paragraph to demonstrate scrolling. You can replace this content with your actual data. Line number: {index + 1}
          </p>
        ))}
      </div>
    </div>
  );
}

export default Index;
