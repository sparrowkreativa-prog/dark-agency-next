'use client';
import { useEffect, useState } from 'react';

export default function ChatButton() {
  const [unread, setUnread] = useState(0);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      if (!window.Tawk_API?.onLoad) return;
      clearInterval(interval);

      window.Tawk_API.onLoad = () => {};

      window.Tawk_API.hideWidget();

      window.Tawk_API.onUnreadCountChanged = (count) => {
        setUnread(count);
      };
      window.Tawk_API.onChatMaximized = () => setOpen(true);
      window.Tawk_API.onChatMinimized = () => setOpen(false);
      window.Tawk_API.onChatHidden = () => setOpen(false);
    }, 300);

    return () => clearInterval(interval);
  }, []);

  const toggle = () => {
    if (!window.Tawk_API) return;
    window.Tawk_API.toggle();
  };

  return (
    <button className={`vn-chat-btn${open ? ' vn-chat-btn--open' : ''}`} onClick={toggle} aria-label="Otvori chat">
      {unread > 0 && <span className="vn-chat-unread">{unread}</span>}

      {/* Chat icon */}
      <span className="vn-chat-icon vn-chat-icon--chat">
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
        </svg>
      </span>

      {/* Close icon */}
      <span className="vn-chat-icon vn-chat-icon--close">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
        </svg>
      </span>

      <style>{`
        .vn-chat-btn {
          position: fixed;
          bottom: 24px;
          right: 24px;
          z-index: 9999;
          width: 56px;
          height: 56px;
          border-radius: 50%;
          background: #911f39;
          border: none;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #fff;
          box-shadow: 0 6px 28px rgba(145,31,57,0.45);
          transition: transform 0.25s cubic-bezier(0.22,1,0.36,1), box-shadow 0.25s;
          animation: vn-chat-pulse 3s ease-in-out infinite;
        }
        @media (max-width: 768px) {
          .vn-chat-btn {
            bottom: 80px;
            right: 16px;
          }
        }
        .vn-chat-btn:hover {
          transform: scale(1.08);
          box-shadow: 0 10px 36px rgba(145,31,57,0.6);
          animation: none;
        }
        .vn-chat-btn--open {
          background: #6b1629;
          animation: none;
        }
        @keyframes vn-chat-pulse {
          0%, 100% { box-shadow: 0 6px 28px rgba(145,31,57,0.45); }
          50%       { box-shadow: 0 6px 40px rgba(145,31,57,0.7), 0 0 0 8px rgba(145,31,57,0.1); }
        }

        .vn-chat-unread {
          position: absolute;
          top: 1px;
          right: 1px;
          width: 18px;
          height: 18px;
          border-radius: 50%;
          background: #22c55e;
          border: 2px solid #fff;
          font-size: 9px;
          font-weight: 800;
          color: #fff;
          display: flex;
          align-items: center;
          justify-content: center;
          line-height: 1;
        }

        .vn-chat-icon {
          position: absolute;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: opacity 0.2s, transform 0.25s cubic-bezier(0.22,1,0.36,1);
        }
        .vn-chat-icon--chat  { opacity: 1; transform: scale(1) rotate(0deg); }
        .vn-chat-icon--close { opacity: 0; transform: scale(0.5) rotate(-90deg); }

        .vn-chat-btn--open .vn-chat-icon--chat  { opacity: 0; transform: scale(0.5) rotate(90deg); }
        .vn-chat-btn--open .vn-chat-icon--close { opacity: 1; transform: scale(1) rotate(0deg); }
      `}</style>
    </button>
  );
}
