import React from 'react';
import ProductsUsedCard from './ProductsUsedCard';
import SH2Text from './text/SH2Text';

const ProductsUsed = () => {
  return (
    <div className="pb-4">
      <div>
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center">
          <SH2Text text="PRODUCTS USED" color="black" />

          </div>
         
        </div>
        <div className="flex overflow-x-auto space-x-4">
          <ProductsUsedCard />
          <ProductsUsedCard /> 

       
        </div>
      </div>
    </div>
  );
}

export default ProductsUsed;




