interface DeleteModalProps {
  onCancel: () => void;
  onConfirm: () => void;
}

const DeleteModal = ({ onCancel, onConfirm }: DeleteModalProps) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 max-w-sm w-full">
        <h2 className="text-xl font-bold mb-4">Delete comment</h2>
        <p className="text-gray-500 mb-6">
          Are you sure you want to delete this comment? This will remove the comment and can't be undone.
        </p>
        <div className="flex gap-4">
          <button
            className="flex-1 bg-gray-500 text-white font-bold py-3 px-4 rounded-lg"
            onClick={onCancel}
          >
            NO, CANCEL
          </button>
          <button
            className="flex-1 bg-red-500 text-white font-bold py-3 px-4 rounded-lg"
            onClick={onConfirm}
          >
            YES, DELETE
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeleteModal; 