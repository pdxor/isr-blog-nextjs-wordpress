import React, { ReactNode } from 'react';

interface FullWidthFormProps {
  placeholder: string;
  fill?: string;
  icon?: ReactNode;
}

const FullWidthForm = ({ placeholder, fill, icon }: FullWidthFormProps) => {
  return (
    <form
      className="bg-white border border-black flex items-center px-10 py-2"
      style={{
        boxSizing: 'border-box',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '10px',
        background: '#FFFFFF',
        border: '1px solid #000000',
        fill,
        width: '100%',
        height: '60px', // Set form height to 60px
      }}
    >
      {icon && <div className="mr-1">{icon}</div>}
      <input className="w-full bg-transparent focus:outline-none" type="text" placeholder={placeholder} />
    </form>
  );
};

export default FullWidthForm;
