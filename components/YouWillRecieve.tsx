import React from 'react';
import SH2Text from './text/SH2Text';
import Certificate from './icons/Certificate';
import Formulas from './icons/Formulas';
import SH4Text from './text/SH4Text';
import CertificateIcon from './icons/CertificateIcon';

const YouWillReceive = () => {
  return (
    <div>

   
    <SH2Text text='YOU WILL RECIEVE' color={''}/>
    <div className="grid grid-cols-2 gap-4">
      <div className="flex items-center">
        <CertificateIcon fill="black" />
        <SH4Text text="Certificate of Completion" />
      </div>
      <br>
      </br>
      <div className="flex items-center">
      <CertificateIcon fill="black"/>
        <SH4Text text="Formulas" />
      </div>
    </div>
    </div>
  );
}

export default YouWillReceive;




{/* to do: dynamically pull point value as well as the tier */ }
{/* to do: if nothing is int he formula acf field, do not populate this */ }