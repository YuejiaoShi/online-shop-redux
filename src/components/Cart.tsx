import { createPortal } from 'react-dom';

import CartItems from './CartItems.tsx';

type CartProps = {
  onClose: () => void;
};

export default function Cart({ onClose }: CartProps) {
  // createPortal : render a component's children into a different part of the DOM,
  return createPortal(
    <>
      <div className="cart-backdrop" />
      <dialog id="cart-modal" open>
        <h2>Your Cart</h2>
        <CartItems />
        <p id="cart-actions">
          <button onClick={onClose}>Close</button>
        </p>
      </dialog>
    </>,
    document.getElementById('modal')!
  );
}
