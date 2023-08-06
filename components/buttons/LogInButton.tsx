import React from 'react';
import SH4Text from '../text/SH4Text';

export function LogInButton() {
  const handleLogin = () => {
    // add code here to handle login action
    console.log('Logging in...');
  };

  return (
    <button
      className="text-center bg-black text-white block w-full py-2 px-6 rounded text-sm"
      onClick={handleLogin}
    >
     <SH4Text text='LOGIN'/>
    </button>
  );
};

export default LogInButton;
