import React from "react";

interface UdonLogoProps {
  className?: string;
  showNetwork?: boolean;
}

export const UdonLogo: React.FC<UdonLogoProps> = ({ 
  className = "", 
  showNetwork = true 
}) => {
  return (
    <div className={`logo-area ${className}`}>
      <div className="udon-bowl-icon">
        <div className="steam steam-1"></div>
        <div className="steam steam-2"></div>
        <div className="steam steam-3"></div>
        <div className="bowl">
          <div className="line"></div>
        </div>
        <div className="chopstick chopstick-1"></div>
        <div className="chopstick chopstick-2"></div>
      </div>
      <div className="brand">
        <span className="brand-title">
          Udon<span className="highlight">Fi</span>
        </span>
        {showNetwork && <span className="brand-network">Soroban Testnet</span>}
      </div>
    </div>
  );
};
