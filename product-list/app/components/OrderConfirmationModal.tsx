import { useState } from 'react';
import { useCart } from '../context/CartContext';

interface OrderConfirmationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function OrderConfirmationModal({ isOpen, onClose }: OrderConfirmationModalProps) {
  const { cartItems, clearCart } = useCart();
  
  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
  };
  
  const handleStartNewOrder = () => {
    clearCart();
    onClose();
  };
  
  if (!isOpen) return null;
  
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center md:items-center">
      <div className="bg-white w-full h-full md:h-auto md:max-w-md md:rounded-lg md:shadow-xl">
        <div className="p-6 h-full flex flex-col">
          <div className="flex justify-center mb-4 mt-4">
            <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center">
              <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
              </svg>
            </div>
          </div>
          
          <h2 className="text-2xl font-bold text-center text-gray-900 mb-2">Order Confirmed</h2>
          <p className="text-center text-gray-600 mb-6">We hope you enjoy your food!</p>
          
          <div className="space-y-4 bg-gray-50 p-4 rounded-lg mb-6 flex-grow overflow-auto">
            {cartItems.map((item) => (
              <div key={item.id} className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  {item.image && (
                    <img src={item.image} alt={item.name} className="w-10 h-10 object-cover rounded" />
                  )}
                  <div>
                    <p className="font-medium">{item.name}</p>
                    <p className="text-sm text-gray-600">
                      {item.quantity}x <span className="text-gray-500">@ ${item.price.toFixed(2)}</span>
                    </p>
                  </div>
                </div>
                <span className="font-medium">${(item.quantity * item.price).toFixed(2)}</span>
              </div>
            ))}
            
            <div className="pt-4 border-t border-gray-200">
              <div className="flex justify-between font-bold">
                <span>Order Total</span>
                <span>${calculateTotal().toFixed(2)}</span>
              </div>
            </div>
          </div>
          
          <button
            onClick={handleStartNewOrder}
            className="w-full bg-[#B24529] text-white rounded-full py-3 font-medium mt-auto"
          >
            Start New Order
          </button>
        </div>
      </div>
    </div>
  );
} 