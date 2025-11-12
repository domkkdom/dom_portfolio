// components/Footer.jsx
import React from "react";

const Footer = () => {
  return (
    <footer className="w-full py-6">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between">
        {/* Branding */}
        <div className="mb-4 md:mb-0 text-center md:text-left">
          <h1 className="text-lg font-semibold">JesusBlessing Dominion</h1>
          <p className="text-gray-600 text-sm">Building clean & modern web apps</p>
        </div>

        {/* Social Links */}
        <div className="flex space-x-6 justify-center md:justify-end">
          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/yourprofile"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-blue-500 transition-colors"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M19 0h-14c-2.8 0-5 2.2-5 5v14c0 2.8 2.2 5 5 5h14c2.8 0 5-2.2 5-5v-14c0-2.8-2.2-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.2c-1 0-1.8-.8-1.8-1.8s.8-1.8 1.8-1.8 1.8.8 1.8 1.8-.8 1.8-1.8 1.8zm13.5 11.2h-3v-5.5c0-1.3-.5-2.2-1.7-2.2-1 0-1.6.7-1.9 1.4-.1.3-.1.7-.1 1.1v5.2h-3v-10h3v1.3c.4-.6 1.1-1.4 2.7-1.4 2 0 3.5 1.3 3.5 4.1v6z" />
            </svg>
          </a>

          {/* Twitter/X */}
          <a
            href="https://x.com/home"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-blue-400 transition-colors"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M24 4.6c-.9.4-1.8.6-2.8.8 1-.6 1.7-1.5 2-2.6-.9.6-1.9 1-3 1.2-.9-.9-2.2-1.5-3.6-1.5-2.7 0-4.9 2.2-4.9 4.9 0 .4 0 .8.1 1.1-4.1-.2-7.7-2.2-10.1-5.3-.4.7-.6 1.5-.6 2.4 0 1.7.9 3.2 2.2 4.1-.8 0-1.5-.2-2.2-.6v.1c0 2.3 1.6 4.3 3.7 4.7-.4.1-.8.2-1.3.2-.3 0-.6 0-.9-.1.6 1.9 2.3 3.3 4.3 3.3-1.6 1.3-3.6 2-5.8 2-.4 0-.8 0-1.2-.1 2 1.3 4.4 2 6.9 2 8.3 0 12.8-6.9 12.8-12.8 0-.2 0-.4 0-.6.9-.7 1.7-1.5 2.3-2.4z" />
            </svg>
          </a>

          {/* GitHub */}
          <a
            href="https://github.com/yourprofile"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-black transition-colors"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 .5c-6.6 0-12 5.4-12 12 0 5.3 3.4 9.8 8.2 11.4.6.1.8-.3.8-.6v-2.2c-3.3.7-4-1.6-4-1.6-.5-1.2-1.2-1.5-1.2-1.5-1-.7.1-.7.1-.7 1.1.1 1.7 1.1 1.7 1.1 1 .1.9-.8.9-.8-.6-1.1-1.6-1.4-1.6-1.4-1.1-.8 0-.8 0-.8 1.2.1 1.8 1.3 1.8 1.3 1 1.7 2.6 1.2 3.2.9.1-.7.4-1.2.7-1.5-2.6-.3-5.3-1.3-5.3-5.8 0-1.3.5-2.4 1.2-3.2-.1-.3-.5-1.6.1-3.4 0 0 1-.3 3.3 1.2.9-.2 1.8-.3 2.7-.3s1.8.1 2.7.3c2.3-1.5 3.3-1.2 3.3-1.2.6 1.8.2 3.1.1 3.4.7.9 1.2 2 1.2 3.2 0 4.5-2.7 5.5-5.3 5.8.4.3.8 1 .8 2v3c0 .3.2.7.8.6 4.8-1.6 8.2-6.1 8.2-11.4 0-6.6-5.4-12-12-12z" />
            </svg>
          </a>
        </div>
      </div>

      <div className="mt-6 text-center text-gray-500 text-sm">
        &copy; {new Date().getFullYear()} JesusBlessing Dominion. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
