"use client";
import React, {ReactNode, useState} from 'react';
import Modal from "@/components/Modal";
import {ModalContext} from "@/contexts/ModalContext";

type ModalProviderProps = {
  children: ReactNode;
}

const ModalProvider: React.FC<ModalProviderProps> = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [content, setContent] = useState<ReactNode>(null);
  const [header, setHeader] = useState<ReactNode>('');
  const [fullScreen, setFullScreen] = useState<boolean>(false);
  const [resolveFn, setResolveFn] = useState<(() => void) | null>(null);

  const openModal = (content: ReactNode, header?: string|ReactNode, fullScreen?: boolean): Promise<void> => {
    return new Promise((resolve) => {
      setContent(content);
      setHeader(header || '');
      setIsOpen(true);
      setFullScreen(fullScreen || false);

      // Guarda la función resolve para llamarla cuando el modal se cierre
      setResolveFn(() => resolve);
    });
  };

  const closeModal = () => {
    setIsOpen(false);
    setContent(null);
    setHeader('');
    setFullScreen(false);

    // Llama a la función resolve cuando el modal se cierre
    if (resolveFn) {
      resolveFn();
      setResolveFn(null);
    }
  };

  return (
    <ModalContext.Provider value={{ openModal, closeModal }}>
      {children}
      {isOpen && (
        <Modal
          header={header}
          onClose={closeModal}
          fullScreen={fullScreen}
        >
          {content}
        </Modal>
      )}
    </ModalContext.Provider>
  );
};

export default ModalProvider;
