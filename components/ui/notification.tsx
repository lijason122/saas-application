"use client";

import { useEffect, useState } from "react";

interface NotificationProps {
  message: string;
  type: "success" | "error" | "info";
  duration?: number;
  onClose?: () => void;
}

const Notification = ({ message, type, duration = 3000, onClose }: NotificationProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isAnimating, setIsAnimating] = useState(true);

  useEffect(() => {
    // Trigger fade-in animation
    const fadeInTimer = setTimeout(() => {
      setIsVisible(true);
    }, 10); // Small delay to ensure the element is rendered

    // Auto-dismiss timer
    const dismissTimer = setTimeout(() => {
      setIsVisible(false);
      setTimeout(() => onClose?.(), 300); // Wait for animation to complete
    }, duration);

    return () => {
      clearTimeout(fadeInTimer);
      clearTimeout(dismissTimer);
    };
  }, [duration, onClose]);

  const getTypeStyles = () => {
    switch (type) {
      case "success":
        return "bg-green-500 text-white";
      case "error":
        return "bg-red-500 text-white";
      case "info":
        return "bg-blue-500 text-white";
      default:
        return "bg-gray-500 text-white";
    }
  };

  return (
    <div
      className={`fixed top-4 left-1/2 transform -translate-x-1/2 z-50 px-4 py-3 rounded-lg shadow-lg transition-all duration-500 ease-out ${
        isVisible ? "opacity-100 translate-y-0 scale-100" : "opacity-0 -translate-y-4 scale-95"
      } ${getTypeStyles()}`}
    >
      <div className="flex items-center gap-2">
        <span className="text-sm font-medium">{message}</span>
        <button
          onClick={() => {
            setIsVisible(false);
            setTimeout(() => onClose?.(), 300);
          }}
          className="ml-2 text-white hover:text-gray-200 transition-colors"
        >
          ×
        </button>
      </div>
    </div>
  );
};

export default Notification;
