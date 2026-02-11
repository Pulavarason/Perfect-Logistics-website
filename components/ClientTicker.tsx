"use client";

import { useState } from 'react';

export default function ClientTicker() {
  const [isPaused, setIsPaused] = useState(false);

  const clients = [
    { name: "BPCL", fullName: "Bharat Petroleum", domain: "bharatpetroleum.in" },
    { name: "Shell", fullName: "Shell India Marketing", domain: "shell.co.in" },
    { name: "Indian Oil", fullName: "Indian Oil Petronas", domain: "iocl.com" },
    { name: "TCS", fullName: "Tata Consultancy Services", domain: "tcs.com" },
    { name: "HCL", fullName: "HCL Technologies", domain: "hcltech.com" },
    { name: "Cognizant", fullName: "Cognizant Technology Solutions", domain: "cognizant.com" },
    { name: "Cisco", fullName: "Cisco Systems India", domain: "cisco.com" },
    { name: "Ford", fullName: "Ford India Pvt Ltd", domain: "india.ford.com" },
    { name: "Airtel", fullName: "Bharti Airtel Limited", domain: "airtel.in" },
    { name: "Lanco", fullName: "Lanco Infratech Limited", domain: "lancogroup.com" },
    { name: "Suzlon", fullName: "Suzlon Wind Energy", domain: "suzlon.com" },
    { name: "DLF", fullName: "DLF Infocity Chennai", domain: "dlf.in" },
    { name: "ELF Gas", fullName: "ELF Gas India Ltd", domain: "elfgas.in" },
    { name: "Udupi Power", fullName: "Udupi Power Projects", domain: "udupipower.com" },
    { name: "Tatsuno", fullName: "Tatsuno India Pvt Ltd", domain: "tatsuno.co.jp" },
    { name: "Primeware", fullName: "Primeware Logistics", domain: "primeware.in" },
    { name: "Fly Jac", fullName: "Fly Jac Logistics", domain: "flyjac.in" },
    { name: "Schenker", fullName: "Schenker India Pvt Ltd", domain: "dbschenker.com" }
  ];

  // Triple for seamless loop
  const duplicatedClients = [...clients, ...clients, ...clients];

  // Method 1: Using Clearbit Logo API (free, automatic)
  const getClearbitLogo = (domain: string) => `https://logo.clearbit.com/${domain}`;

  // Method 2: Using Google S2 Favicon (fallback)
  const getGoogleFavicon = (domain: string) => `https://www.google.com/s2/favicons?domain=${domain}&sz=128`;

  return (
    <>
      <style jsx>{`
        * {
          font-family: -apple-system, BlinkMacSystemFont, "Trebuchet MS", Roboto, Ubuntu, sans-serif;
        }

        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-33.333%); }
        }

        @keyframes glow {
          0%, 100% { box-shadow: 0 0 20px rgba(59, 130, 246, 0.3); }
          50% { box-shadow: 0 0 30px rgba(59, 130, 246, 0.5); }
        }

        .ticker-wrapper {
          overflow: hidden;
          background: linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #0f172a 100%);
          position: relative;
          border-bottom: 2px solid rgba(59, 130, 246, 0.3);
          border-top: 2px solid rgba(59, 130, 246, 0.3);
        }

        .ticker-wrapper::before,
        .ticker-wrapper::after {
          content: '';
          position: absolute;
          top: 0;
          width: 120px;
          height: 100%;
          z-index: 2;
          pointer-events: none;
        }

        .ticker-wrapper::before {
          left: 0;
          background: linear-gradient(90deg, #0f172a 0%, transparent 100%);
        }

        .ticker-wrapper::after {
          right: 0;
          background: linear-gradient(270deg, #0f172a 0%, transparent 100%);
        }

        .ticker-content {
          display: flex;
          animation: scroll 60s linear infinite;
          will-change: transform;
        }

        .ticker-content.paused {
          animation-play-state: paused;
        }

        .ticker-item {
          flex-shrink: 0;
          padding: 0 2.5rem;
          display: flex;
          align-items: center;
          gap: 1rem;
          transition: transform 0.3s ease;
        }

        .ticker-item:hover {
          transform: scale(1.05);
        }

        .logo-container {
          width: 48px;
          height: 48px;
          background: white;
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 8px;
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
          transition: all 0.3s ease;
        }

        .ticker-item:hover .logo-container {
          box-shadow: 0 6px 25px rgba(59, 130, 246, 0.4);
          transform: translateY(-2px);
        }

        .logo-container img {
          width: 100%;
          height: 100%;
          object-fit: contain;
        }

        .trusted-badge {
          animation: glow 3s ease-in-out infinite;
        }

        .divider {
          width: 2px;
          height: 24px;
          background: linear-gradient(180deg, transparent, #3b82f6, transparent);
        }
      `}</style>

      <section className="ticker-wrapper w-full">
        <div className="py-3 relative">
          {/* Enhanced Trusted By Badge */}
          <div className="trusted-badge absolute left-4 top-1/2 -translate-y-1/2 bg-gradient-to-r from-blue-600 to-blue-500 px-4 py-2 rounded-lg z-10 hidden md:block border border-blue-400">
            <div className="flex items-center gap-2">
              <svg className="w-4 h-4 text-yellow-300" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              <span className="text-white text-xs font-bold tracking-wider">TRUSTED BY</span>
            </div>
          </div>

          <div 
            className={`ticker-content ${isPaused ? 'paused' : ''}`}
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            {duplicatedClients.map((client, index) => (
              <div key={index} className="ticker-item">
                <div className="logo-container">
                  <img 
                    src={getClearbitLogo(client.domain)}
                    alt={`${client.name} logo`}
                    onError={(e) => {
                      // Fallback to Google favicon if Clearbit fails
                      e.currentTarget.src = getGoogleFavicon(client.domain);
                    }}
                  />
                </div>
                <span className="text-white text-sm font-semibold whitespace-nowrap tracking-wide">
                  {client.name}
                </span>
                <div className="divider"></div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}