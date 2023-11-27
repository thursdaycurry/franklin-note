import { useEffect, useState } from 'react';

const Modal = ({ setIsModalOpen }) => {
  const [modalStyle, setModalStyle] = useState({
    opacity: 0,
    visibility: 'hidden',
  });

  useEffect(() => {
    // Trigger the transition a moment after the component mounts
    const timer = setTimeout(() => {
      setModalStyle({
        opacity: 1,
        visibility: 'visible',
      });
    }, 10); // Start the transition very shortly after the component mounts

    // Optional: cleanup function to clear the timeout if the component unmounts early
    return () => clearTimeout(timer);
  }, []);

  const closeModal = () => {
    // Start the closing transition
    setModalStyle({
      opacity: 0,
      visibility: 'hidden',
    });
    // Wait for the transition to finish before unmounting the modal
    setTimeout(() => {
      setIsModalOpen(false);
    }, 300); // Should match the duration of your transition
  };

  return (
    <div
      className="fixed inset-0 transition-opacity duration-300"
      style={{ ...modalStyle, backdropFilter: 'blur(5px)' }}
    >
      <div
        className="relative top-20 mx-auto p-5 border w-96 shadow-lg rounded-md bg-white transition-all duration-300 transform"
        style={modalStyle}
      >
        <div className="mt-3 text-center">
          <h3 className="text-lg leading-6 font-medium text-gray-900 mt-2">
            Tutorial
          </h3>
          <img src="/images/modal_tutorial.jpg" alt="modal_tutorial" />{' '}
          {/* The image element */}
          {/* Modal content */}
          <h4 className="text-md leading-4 text-gray-900 mt-2 mb-2">
            Press enter(↳) to add comments
          </h4>
          {/* ... other modal contents ... */}
          <div className="items-center px-4 py-3">
            <button
              className="px-4 py-2 bg-gray-300 text-gray-800 text-base font-medium rounded-md w-full shadow-sm hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-400"
              onClick={closeModal}
            >
              Got it!
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
