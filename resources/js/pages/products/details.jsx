import Footer from '@/components/footer';
import Header from '@/components/header';
import { useState } from 'react';

import useCart from '../cart/cart';
import { products } from '../products/cards';

export default function ProductDetails({ id }) {
    const product = products.find((p) => p.id === parseInt(id));
    const { addToCart } = useCart();

    const [selectedImage, setSelectedImage] = useState(product?.imageUrl || '');
    const [showDescription, setShowDescription] = useState(false);
    const [showMatiere, setShowMatiere] = useState(false);

    const images = [product.imageUrl, product.imageUrl, product.imageUrl];

    if (!product) {
        return <div className="py-10 text-center text-red-500">Produit introuvable.</div>;
    }

    return (
        <>
            <Header />

            <div className="flex min-h-screen flex-col items-center bg-white px-6 py-8">
                <div className="flex w-full max-w-5xl flex-col gap-6 md:flex-row">
                    {/* Miniatures à gauche */}
                    <div className="flex gap-3 md:w-20 md:flex-col">
                        {images.map((img, idx) => (
                            <img
                                key={idx}
                                src={img}
                                alt={`Miniature ${idx}`}
                                className={`h-16 w-16 cursor-pointer border-2 object-cover ${
                                    selectedImage === img ? 'border-pink-500' : 'border-transparent'
                                }`}
                                onClick={() => setSelectedImage(img)}
                            />
                        ))}
                    </div>

                    {/* Image principale */}
                    <div className="flex flex-1 items-center justify-center">
                        <img src={selectedImage} alt={product.name} className="w-full max-w-md rounded-xl object-contain shadow" />
                    </div>

                    {/* Détails produit — Ton bloc conservé tel quel */}
                    <div className="space-y-4 md:w-1/3">
                        <h1 className="text-2xl font-bold text-gray-800">{product.name}</h1>
                        <p>{product.price} €</p>

                        {/* Description avec toggle */}
                        <div>
                            <button
                                onClick={() => setShowDescription(!showDescription)}
                                className="w-full cursor-pointer text-left font-semibold text-gray-700 underline"
                            >
                                Description
                            </button>
                            {showDescription && (
                                <div className="mt-2 text-gray-600">
                                    <p>{product.description}</p>
                                </div>
                            )}

                            <button
                                onClick={() => setShowMatiere(!showMatiere)}
                                className="w-full cursor-pointer text-left font-semibold text-gray-700 underline"
                            >
                                Matière
                            </button>
                            {showMatiere && (
                                <div className="mt-2 text-gray-600">
                                    <p>{product.matiere}</p>
                                </div>
                            )}
                        </div>
                        <div className="mt-4">
                            <h2 className="text-lg font-semibold text-gray-800">Tailles disponibles :</h2>
                            <div className="mt-2 flex flex-wrap gap-2">
                                {product.sizes.map((size) => (
                                    <button
                                        key={size.id}
                                        disabled={size.stock === 0}
                                        className={`w-12 cursor-pointer rounded-md border p-2 text-sm font-medium transition-colors ${
                                            size.stock === 0
                                                ? 'cursor-not-allowed bg-gray-200 text-gray-400'
                                                : 'border-gray-300 bg-white text-gray-800 hover:border-[#FF39B7]'
                                        }`}
                                    >
                                        {size.name}
                                    </button>
                                ))}
                            </div>
                        </div>

                        <button
                            className="cursor-pointer rounded-md bg-[#FF39B7] px-6 py-2 text-white shadow transition hover:bg-pink-600"
                            onClick={() => {
                                // Inertia.get('/cart');
                                alert('Produit ajouté au panier !');
                                console.log('Ajouté au panier:', product);
                                addToCart(product);
                            }}
                        >
                            {' '}
                            Ajouter au panier
                        </button>
                    </div>
                </div>
            </div>

            <Footer />
        </>
    );
}
