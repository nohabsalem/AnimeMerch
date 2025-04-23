import { useState, useEffect } from 'react';

export default function useCart() {
    const [cart, setCart] = useState(() => {
        const saved = localStorage.getItem('cart');
        return saved ? JSON.parse(saved) : [];
    });

    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cart));
    }, [cart]);

    const addToCart = (item) => {
        setCart((prev) => [...prev, item]);
    };

    const removeFromCart = (indexToDelete) => {
        setCart((prev) => prev.filter((item, index) => indexToDelete !== index));
    };

    const clearCart = () => setCart([]);

    return { cart, addToCart, removeFromCart, clearCart };
}
