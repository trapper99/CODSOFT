

import React from 'react'

/**
 * Renders a menu with options to edit and delete an item.
 * @param {Object} props - The component props.
 * @param {string} props.type - Determines the positioning of the menu.
 * @param {Function} props.setOpenEditModal - Opens the edit modal.
 * @param {Function} props.setOpenDeleteModal - Opens the delete modal.
 * @returns {JSX.Element} The rendered component.
 */
function ElipsisMenu({ type, setOpenEditModal, setOpenDeleteModal }) {
  const menuPosition = type === "Boards" ? "absolute top-16 right-5" : "absolute top-6 right-4";

  const handleEditClick = () => {
    setOpenEditModal();
  };

  const handleDeleteClick = () => {
    setOpenDeleteModal();
  };

  return (
    <div className={menuPosition}>
      <div className="flex justify-end items-center">
        <div className="w-40 text-sm z-50 font-medium shadow-md shadow-[#364e7e1a] bg-white dark:bg-[#20212c] space-y-4 py-5 px-4 rounded-lg h-auto pr-12">
          <p
            onClick={handleEditClick}
            className="cursor-pointer dark:text-gray-400 text-gray-700"
            onKeyDown={handleEditClick}
          >
            Edit {type}
          </p>
          <p
            onClick={handleDeleteClick}
            className="cursor-pointer dark:text-gray-400 text-gray-700"
            onKeyDown={handleDeleteClick}
          >
            Delete {type}
          </p>
        </div>
      </div>
    </div>
  );
}

export default ElipsisMenu;