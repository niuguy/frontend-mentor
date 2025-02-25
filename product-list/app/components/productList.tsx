import { useState } from 'react';
import productData from '../data.json';
import shoppingCartIcon from '../assets/images/icon-add-to-cart.svg';
import { useCart } from '../context/CartContext';

interface ProductImage {
  thumbnail: string;
  mobile: string;
  tablet: string;
  desktop: string;
}

interface Product { 
  id: number;
  image: ProductImage;
  name: string;
  category: string;
  price: number;
}

export function ProductList() {
  const [products] = useState<Product[]>(productData);
  const { addToCart, updateQuantity, getItemQuantity } = useCart();
  // 动态导入图片
  const importAll = (r: Record<string, { default: string }>) => {
    const imageMap: Record<string, string> = {};
    Object.entries(r).forEach(([key, value]) => {
      imageMap[key.replace('../assets/images/', '')] = value.default;
    });
    return imageMap;
  };
  const imageImports = importAll(import.meta.glob('../assets/images/*.jpg', { eager: true }));

  const handleAddToCart = (product: Product) => {
    addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      image: imageImports[product.image.desktop.replace('./assets/images/', '')]
    });
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
      {products.map((product, index) => {
        const quantity = getItemQuantity(product.id);
        const isInCart = quantity > 0;
        
        return (
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
              <div className="absolute bottom-0 left-0 right-0 flex justify-center transform translate-y-1/2">
                {!isInCart ? (
                  <button 
                    onClick={() => handleAddToCart(product)}
                    className="flex items-center justify-center gap-2 bg-white border border-[#B24529] text-[#B24529] py-1.5 px-4 text-sm rounded-full hover:bg-[#B24529] hover:text-white transition-colors md:text-xs md:py-1 md:px-3"
                  >
                    <img src={shoppingCartIcon} alt="" className="w-3.5 h-3.5 md:w-3 md:h-3" />
                    <span>Add to Cart</span>
                  </button>
                ) : (
                  <div className="flex items-center justify-between bg-[#B24529] text-white py-1 px-2 rounded-full w-24 md:w-20">
                    <button 
                      onClick={() => updateQuantity(product.id, quantity - 1)}
                      className="flex items-center justify-center w-6 h-6 rounded-full"
                    >
                      <span className="text-xl">−</span>
                    </button>
                    <span className="text-sm font-medium">{quantity}</span>
                    <button 
                      onClick={() => updateQuantity(product.id, quantity + 1)}
                      className="flex items-center justify-center w-6 h-6 rounded-full"
                    >
                      <span className="text-xl">+</span>
                    </button>
                  </div>
                )}
              </div>
            </div>
            <div className="mt-2">
              <span className="text-sm text-gray-500">{product.category}</span>
              <h3 className="text-lg font-semibold">{product.name}</h3>
              <div className="flex justify-between items-center mt-1">
                <p className="text-[#B24529]">${product.price.toFixed(2)}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}