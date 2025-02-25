import { useState } from 'react';
import { useCart } from '../context/CartContext';
import { OrderConfirmationModal } from './OrderConfirmationModal';

export function ShoppingCart() {
  const { cartItems, removeFromCart, updateQuantity } = useCart();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
  };

  const handleConfirmOrder = () => {
    setIsModalOpen(true);
  };

  return (
    <>
      <div className="bg-gray-50 p-6 rounded-lg sticky top-6">
        <h2 className="text-xl font-semibold mb-4">Your Cart ({cartItems.length})</h2>
        
        {cartItems.length === 0 ? (
          <p className="text-gray-500 py-4">Your cart is empty</p>
        ) : (
          cartItems.map((item) => (
            <div key={item.id} className="flex items-center justify-between py-3 border-b">
              <div>
                <p className="font-medium">{item.name}</p>
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <span>{item.quantity}x</span>
                  <span>@ ${item.price.toFixed(2)}</span>
                  <span>${(item.quantity * item.price).toFixed(2)}</span>
                </div>
              </div>
              <button 
                onClick={() => removeFromCart(item.id)}
                className="text-gray-400 hover:text-red-600"
              >
                <span className="material-icons text-sm">close</span>
              </button>
            </div>
          ))
        )}
        
        {cartItems.length > 0 && (
          <div className="mt-6">
            <div className="flex justify-between font-semibold">
              <span>Order Total</span>
              <span>${calculateTotal().toFixed(2)}</span>
            </div>
            <div className="mt-2 text-sm text-gray-600 flex items-center gap-2">
              <span className="material-icons text-green-500">eco</span>
              This is a carbon-neutral delivery
            </div>
            <button 
              onClick={handleConfirmOrder}
              className="mt-4 w-full bg-[#B24529] text-white rounded-full py-3 font-medium"
            >
              Confirm Order
            </button>
          </div>
        )}
      </div>

      <OrderConfirmationModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />
    </>
  );
}
