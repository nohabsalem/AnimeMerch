import React from 'react';
import square from "@/assets/img/square.png";
import useCart from "../pages/cart/cart"

export default function ProductCards() {
    const { addToCart } = useCart();

    const products = [
        { id: 1, imageUrl: square, name: 'Produit 1', price: 29.99 },
        { id: 2, imageUrl: square, name: 'Produit 2', price: 19.99 },
    ];

    return (
        <div className="flex gap-4 overflow-x-auto p-4">
            {products.map((product) => (
                <div
                    key={product.id}
                    className="flex-shrink-0 w-44 h-64 border-2 border-black flex flex-col items-center p-3 rounded-md shadow-md bg-white"
                >
                    <img
                        src={product.imageUrl}
                        alt={product.name}
                        className="w-full h-24 object-contain"
                    />
                    <p className="mt-3 text-center font-medium">{product.name}</p>
                    <p className="text-sm text-gray-600">{product.price} €</p>
                    <button
                        onClick={() => addToCart(product)}
                        className="mt-auto px-3 py-1 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors text-sm"
                    >
                        Ajouter au panier
                    </button>
                </div>
            ))}
        </div>
    );
}
