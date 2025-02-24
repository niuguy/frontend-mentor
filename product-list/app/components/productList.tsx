import { useState } from 'react';
import productData from '../data.json';
import shoppingCartIcon from '../assets/images/icon-add-to-cart.svg';

interface ProductImage {
  thumbnail: string;
  mobile: string;
  tablet: string;
  desktop: string;
}

interface Product {
  image: ProductImage;
  name: string;
  category: string;
  price: number;
}

export function ProductList() {
  const [products] = useState<Product[]>(productData);
  // 动态导入图片
  const importAll = (r: Record<string, { default: string }>) => {
    const imageMap: Record<string, string> = {};
    Object.entries(r).forEach(([key, value]) => {
      imageMap[key.replace('../assets/images/', '')] = value.default;
    });
    return imageMap;
  };
  const imageImports = importAll(import.meta.glob('../assets/images/*.jpg', { eager: true }));


  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
      {products.map((product, index) => (
        <div key={index} className="product-card">
          <div className="relative">
            <img
              src={imageImports[product.image.desktop.replace('./assets/images/', '')]}
              srcSet={`
                ${imageImports[product.image.mobile.replace('./assets/images/', '')]} 375w,
                ${imageImports[product.image.tablet.replace('./assets/images/', '')]} 768w,
                ${imageImports[product.image.desktop.replace('./assets/images/', '')]} 1024w
              `}
              sizes="(max-width: 375px) 375px,
                     (max-width: 768px) 768px,
                     1024px"
              alt={product.name}
              className="w-full object-cover rounded-lg"
            />
            {/* Move the Add to Cart button here and style it */}
            <button className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center justify-center gap-1 sm:gap-2 bg-white text-[#B24529] px-3 py-1.5 sm:px-4 sm:py-2 text-sm sm:text-base rounded-full hover:bg-[#B24529] hover:text-white transition-colors">
              <img src={shoppingCartIcon} alt="" className="w-3 h-3 sm:w-4 sm:h-4" />
              <span>Add to Cart</span>
            </button>
          </div>
          <div className="mt-2">
            <span className="text-sm text-gray-500">{product.category}</span>
            <h3 className="text-lg font-semibold">{product.name}</h3>
            <div className="flex justify-between items-center mt-1">
              <p className="text-[#B24529]">${product.price.toFixed(2)}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}