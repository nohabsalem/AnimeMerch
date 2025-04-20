import React from 'react';
import square from "@/assets/img/square.png";

export default function ProductCards() {
    const products = [
        { id: 1, imageUrl: square, name: 'Produit 1' },
        { id: 2, imageUrl: square, name: 'Produit 2' },
    ];

    return (
        <div className="flex gap-4 overflow-x-auto p-4">
            {products.map((product) => (
                <div
                    key={product.id}
                    className="flex-shrink-0 w-44 h-56 border-2 border-black flex flex-col items-center p-3 rounded-md shadow-md bg-white"
                >
                    <img
                        src={product.imageUrl}
                        alt={product.name}
                        className="w-full h-auto"
                    />
                    <p className="mt-3 text-center font-medium">{product.name}</p>
                </div>
            ))}
        </div>
    );
}