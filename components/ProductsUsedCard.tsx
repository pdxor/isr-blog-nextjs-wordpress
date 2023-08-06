import React from 'react';
import Image from 'next/image';
import SH2CardText from './text/SH2CardText';
import B1Text from './text/B1Text';
import SH4Text from './text/SH4Text';
import Link from 'next/link';

const ProductsUsedCard = () => {
  return (
    <Link href={'/'}>
      <div style={{ position: 'relative', flex: 'none', order: 0, flexGrow: 0 }}>
         <div style={{ position: 'relative', width: '148px', height: '148px' }}>
         
         <Image
        src="https://btcu2023react.wpengine.com/wp-content/uploads/2023/05/Rectangle-23.png"
        alt="Image"
        width={148}
        height={148}
      />
            <div
              style={{
                position: 'absolute',
                bottom: '8px',
                right: '8px',
                backgroundColor: 'rgba(0, 0, 0, 0.5)',
                padding: '4px 8px',
                color: 'white',
                borderRadius: '5px'
              }}
            >
              <SH4Text text='SHOP' />
              
            </div>
            </div>
      <SH2CardText text='Item Name' color={''}/>
      <B1Text text='Brand Name'/>
    </div>  
    </Link>
  );
}

export default ProductsUsedCard;



{/* to do: fetch gallery, item & brand name from ACF Field */ }
