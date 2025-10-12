"use client";

import React from "react";
import { FloatingWhatsApp } from "react-floating-whatsapp";
const waAvatarUrl = '/wa_avatar.png';

/**
 * Repo: https://github.com/awran5/react-floating-whatsapp
 */

const WhatsappButton: React.FC = () => {
  return (
    <div className="App">
      <FloatingWhatsApp
        phoneNumber="94742530708"
        accountName="Nizar"
        allowEsc
        notification
        notificationSound
        chatMessage="Hello, How can we help you?"
        darkMode={true}
        avatar={waAvatarUrl}
      />
    </div>
  );
}

export default WhatsappButton;