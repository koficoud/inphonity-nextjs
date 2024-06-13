"use client";
import React, { useEffect } from "react";
import Script from "next/script";

const ChatInitializer = () => {
  useEffect(() => {
    // Inicializar FrontChat solo cuando la librería está disponible
    if (window.FrontChat) {
      window.FrontChat("init", {
        chatId: "d6353afc25546e5590163b5dfff6bd55",
      });
    } else {
      // En caso de que el script tarde en cargar
      const interval = setInterval(() => {
        if (window.FrontChat) {
          clearInterval(interval);
          window.FrontChat("init", {
            chatId: "d6353afc25546e5590163b5dfff6bd55",
          });
        }
      }, 100); // Revisa cada 100ms
    }
  }, []);

  return null;
};

export default ChatInitializer;
