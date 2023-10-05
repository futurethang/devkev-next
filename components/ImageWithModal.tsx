"use client";
// ImageWithModal.tsx
import React, { useState } from "react";
import Image from "next/image";
import Modal from "react-modal";

// Make sure to bind modal to your appElement (http://reactcommunity.org/react-modal/accessibility/)
Modal.setAppElement("#app_root");

Modal.defaultStyles = {
  overlay: {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  content: {
    position: "absolute",
    top: "40px",
    left: "40px",
    right: "40px",
    bottom: "40px",
    overflow: "none",
    WebkitOverflowScrolling: "touch",
    // borderRadius: '4px',
    outline: "none",
    // padding: '20px'
  },
};

export const ImageWithModal = ({ src }: any) => {
  const [showModal, setShowModal] = useState(false);

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <>
      <div
        className="relative h-64 w-full m-10 mx-auto cursor-pointer"
        onClick={() => setShowModal(true)}
      >
        <Image
          className="object-contain object-left shadow-lg rounded align-middle border-none"
          src={src}
          alt="Blog Image"
          fill
        />
      </div>
      <Modal
        isOpen={showModal}
        onRequestClose={closeModal}
        contentLabel="Image Modal"
      >
        <div className="flex justify-end z-100">
          <button onClick={closeModal}>Close</button>
        </div>
        <div className="relative object-fit w-full h-full">
          <Image
            className="object-contain rounded align-middle border-none absolute inset-0"
            src={src}
            alt="Blog Image"
            fill
            onClick={closeModal}
          />
        </div>
      </Modal>
    </>
  );
};
