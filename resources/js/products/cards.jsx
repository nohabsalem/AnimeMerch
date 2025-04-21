import React from 'react';
import square from "@/assets/img/jotaro.svg";
import useCart from "../pages/cart/cart";

export default function ProductCards() {
    const { addToCart } = useCart();

    const products = [
        { id: 1, imageUrl: square, name: 'Produit 1', price: 29.99 },
        { id: 2, imageUrl: square, name: 'Produit 2', price: 19.99 },
        { id: 3, imageUrl: square, name: 'Produit 3', price: 24.99 },
        { id: 4, imageUrl: square, name: 'Produit 4', price: 14.99 },
    ];

    return (
        <div className="max-w-6xl mx-auto px-4 py-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 justify-center">
                {products.slice(0, 3).map((product) => (
                    <div
                        key={product.id}
                        className="w-full sm:w-64 md:w-64 border border-gray-300 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 bg-white flex flex-col items-center"
                    >
                        <img
                            src={product.imageUrl}
                            alt={product.name}
                            className="w-full h-40 object-contain rounded-t-xl p-4"
                        />
                        <div className="flex flex-col items-center px-4 pb-4 w-full">
                            <h3 className="text-base font-semibold text-gray-800">{product.name}</h3>
                            <p className="text-sm text-gray-600 mb-3">{product.price.toFixed(2)} €</p>
                            <button
                                onClick={() => addToCart(product)}
                                className="mt-auto w-full py-2 bg-pink-500 hover:bg-pink-600 text-white rounded-md font-sm transition duration-200"
                            >
                                Ajouter au panier
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
