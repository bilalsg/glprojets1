import React from 'react';

interface RefusedMessageProps {
  text: string;
}

const RefusedMessage: React.FC<RefusedMessageProps> = ({ text }) => {
  return (
    <div className="bg-red-50 border-s-4 border-red-500 p-4 mb-2 dark:bg-red-800/30" role="alert">
      <div className="flex">
        <div className="flex-shrink-0">
          <span className="inline-flex justify-center items-center w-8 h-8 rounded-full border-4 border-red-100 bg-red-200 text-red-800 dark:border-red-900 dark:bg-red-800 dark:text-red-400">
            <svg className="flex-shrink-0 w-4 h-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M18 6 6 18"/><path d="m6 6 12 12"/>
            </svg>
          </span>
        </div>
        <div className="ms-3">
          <h3 className="text-gray-800 font-semibold dark:text-white">
            Refused!
          </h3>
          <p className="text-sm text-gray-700 dark:text-gray-400">
            {text}
          </p>
        </div>
      </div>
    </div>
  );
};

export default RefusedMessage;

