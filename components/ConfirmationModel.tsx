import React from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

type ConfirmationModelProps = {
  open: boolean; // State to manage the dialog visibility
  onOpenChange: (isOpen: boolean) => void; // Handler for open state change
  title?: string; // Optional dialog title
  description?: string; // Optional dialog description
  onConfirm: () => void; // Callback for confirm action
  onCancel?: () => void; // Optional callback for cancel action
};

function ConfirmationModel({
  open,
  onOpenChange,
  title = "Are you absolutely sure?",
  description = "This action cannot be undone. This will permanently delete your account and remove your data from our servers.",
  onConfirm,
  onCancel,
}: ConfirmationModelProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="bg-black text-white rounded-md p-6">
        <DialogHeader>
          <DialogTitle className="text-lg font-semibold">{title}</DialogTitle>
          <DialogDescription className="text-sm text-gray-300">{description}</DialogDescription>
        </DialogHeader>

        {/* Buttons to confirm or cancel */}
        <div className="mt-4 flex justify-end gap-4">
          <button
            onClick={() => {
              onCancel?.();
              onOpenChange(false);
            }}
            className="px-4 py-2 rounded-md bg-gray-700 text-white hover:bg-gray-600 transition"
          >
            Cancel
          </button>
          <button
            onClick={() => {
              onConfirm();
              onOpenChange(false);
            }}
            className="px-4 py-2 rounded-md bg-red-600 text-white hover:bg-red-500 transition"
          >
            Confirm
          </button>
        </div>
      </DialogContent>
    </Dialog>
  );
}

export default ConfirmationModel;
