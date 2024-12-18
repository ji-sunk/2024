// import React from 'react';
import ReactDOM from 'react-dom';
import React, { useState } from 'react';

interface PopupProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

const Popup: React.FC<PopupProps> = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return ReactDOM.createPortal(
    <div
      className="popup-overlay"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        background: 'rgba(0, 0, 0, 0.5)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 1000,
      }}
      onClick={onClose} // 오버레이 클릭 시 닫기
    >
      <div
        className="popup-content"
        style={{
          background: '#fff',
          borderRadius: '8px',
          maxWidth: '500px',
          width: '100%',
          padding: '20px',
          position: 'relative',
        }}
        onClick={(e) => e.stopPropagation()} // 내부 클릭 시 이벤트 전파 방지
      >
        {/* 닫기 버튼 */}
        <button
          onClick={onClose}
          style={{
            position: 'absolute',
            top: '10px',
            right: '10px',
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            fontSize: '18px',
          }}
        >
          ✖
        </button>
        {children}
      </div>
    </div>,
    document.body,
  );
};

export default Popup;
