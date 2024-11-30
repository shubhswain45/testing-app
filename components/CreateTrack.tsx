"use client"
import { Plus } from 'lucide-react';
import React, { useState } from 'react';
import CreateTrackDialog from './CreateTrackDialog';

const PlusIconButton = () => {
  const [songDialogOpen, setSongDialogOpen] = useState(false);

  const handleDialogOpen = () => {
    setSongDialogOpen(true); // Open the dialog when the Plus icon is clicked
  };

  return (
    <div>
      {/* Plus button that triggers the dialog */}
      <button 
        className="fixed right-5 bottom-5 w-12 h-12 bg-green-500 rounded-full flex items-center justify-center shadow-lg hover:bg-green-600"
        onClick={handleDialogOpen} // Set the state to open dialog on click
      >
        <Plus size={24} color="#fff" />
      </button>

      {/* CreateTrackDialog, passing the songDialogOpen state */}
      <CreateTrackDialog 
        songDialogOpen={songDialogOpen} 
        setSongDialogOpen={setSongDialogOpen} 
      />
    </div>
  );
};

export default PlusIconButton;
