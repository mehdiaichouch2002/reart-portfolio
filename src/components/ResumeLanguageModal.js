import React from 'react';
import { FaFile } from 'react-icons/fa';

const ResumeLanguageModal = ({ isOpen, onClose }) => {
  const handleDownload = (language) => {
    const resumeUrl = language === 'en' 
      ? '/Mehdi-Aichouch-EN.pdf' 
      : '/Mehdi-Aichouch-FR.pdf';
    
    const link = document.createElement('a');
    link.href = resumeUrl;
    link.download = `Mehdi-Aichouch-${language.toUpperCase()}.pdf`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 backdrop-blur-sm"
      onClick={onClose}
    >
      <div 
        className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 rounded-lg p-8 max-w-md w-full mx-4 shadow-2xl transform transition-all border border-cyan-500/30"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="text-center mb-6">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-cyan-500/10 rounded-full mb-4">
            <FaFile size={32} className="text-cyan-400" />
          </div>
          <h2 className="text-2xl font-bold text-white mb-2">
            Choose Resume Language
          </h2>
          <p className="text-gray-400">
            Select your preferred language to download my resume
          </p>
        </div>

        <div className="space-y-3">
          <button
            onClick={() => handleDownload('en')}
            className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-semibold py-4 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/50 flex items-center justify-center space-x-3 border border-cyan-400/20"
          >
            <span className="text-2xl">🇬🇧</span>
            <span>English Version</span>
          </button>

          <button
            onClick={() => handleDownload('fr')}
            className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-4 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-purple-500/50 flex items-center justify-center space-x-3 border border-purple-400/20"
          >
            <span className="text-2xl">🇫🇷</span>
            <span>Version Française</span>
          </button>
        </div>

        <button
          onClick={onClose}
          className="w-full mt-4 text-gray-400 hover:text-white font-medium py-2 transition-all duration-300 hover:bg-gray-800/50 rounded-lg"
        >
          Cancel
        </button>
      </div>
    </div>
  );
};

export default ResumeLanguageModal;