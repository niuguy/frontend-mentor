import { CartProvider } from './context/CartContext';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <CartProvider>
          {/* Your existing layout */}
          {children}
        </CartProvider>
      </body>
    </html>
  );
} 