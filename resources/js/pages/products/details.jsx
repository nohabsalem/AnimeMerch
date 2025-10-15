import Footer from '@/components/footer';
import Header from '@/components/header';
import { Link } from '@inertiajs/react';
import { useState } from 'react';
import useCart from '../cart/cart';

export default function ProductDetails({ product }) {
    const { addToCart } = useCart();
    const images = product?.images?.length > 0 ? product.images.map((img) => img.image_path) : [product?.image_path || '/default-product.jpg'];
    // Récupérer dynamiquement les images du produit
    // const images =
    //     product?.images && product.images.length > 0 ? product.images.map((img) => img.image_path) : [product?.image_path || '/default-product.jpg'];

    const [selectedImage, setSelectedImage] = useState(images[0]);
    const [showDescription, setShowDescription] = useState(false);
    const [selectedQuantity, setSelectedQuantity] = useState(1);

    if (!product) {
        return (
            <div className="py-10 text-center text-red-500">
                Produit introuvable.
                <button className="mx-auto mt-4 block cursor-pointer rounded-md bg-[#FF39B7] px-4 py-2 text-white">
                    <Link href="/products">Retourner à la boutique</Link>
                </button>
            </div>
        );
    }

    return (
        <>
            <div className="flex min-h-screen flex-col">
                <Header />

                <main className="flex flex-grow flex-col items-center bg-white px-6 pt-16 pb-8">
                    <div className="flex w-full max-w-5xl flex-col gap-6 md:flex-row">
                        {/* Sélecteur d'images dynamique */}
                        <div className="flex flex-1 flex-col items-center gap-4">
                            {/* Image principale */}
                            <img src={selectedImage} alt={product.name} className="w-full max-w-md rounded-xl object-contain shadow" />

                            {/* Miniatures responsive */}
                            <div className="flex max-h-80 gap-2 overflow-x-auto py-2 md:flex-col md:overflow-x-hidden md:overflow-y-auto">
                                {images.map((img, idx) => (
                                    <img
                                        key={idx}
                                        src={img}
                                        alt={`Miniature ${idx + 1}`}
                                        onClick={() => setSelectedImage(img)}
                                        className={`h-16 w-16 cursor-pointer rounded border object-cover transition md:h-20 md:w-20 ${
                                            selectedImage === img ? 'border-2 border-[#6c3989]' : 'border-gray-300'
                                        }`}
                                    />
                                ))}
                            </div>
                        </div>

                        <div className="space-y-4 md:w-1/3">
                            <h1 className="text-2xl font-bold text-gray-800">{product.name}</h1>
                            <p className="text-lg">{product.price} €</p>
                            <p className="text-sm text-gray-500">Stock disponible : {product.stock}</p>

                            <div>
                                <button
                                    onClick={() => setShowDescription(!showDescription)}
                                    className="w-full cursor-pointer text-left font-semibold text-gray-700 underline"
                                >
                                    Description
                                </button>
                                {showDescription && <p className="mt-2 text-gray-600">{product.description}</p>}
                            </div>

                            {/* Quantité */}
                            <div className="mt-4">
                                <label htmlFor="quantity" className="block font-medium">
                                    Quantité :
                                </label>
                                <input
                                    id="quantity"
                                    type="number"
                                    min={1}
                                    max={product.stock}
                                    value={selectedQuantity}
                                    onChange={(e) => setSelectedQuantity(Number(e.target.value))}
                                    className="w-20 border p-2"
                                />
                            </div>

                            {/* Ajouter au panier */}
                            <button
                                className="mt-4 cursor-pointer rounded-md bg-[#FF39B7] px-6 py-2 text-white shadow transition"
                                disabled={product.stock === 0}
                                onClick={() => {
                                    if (selectedQuantity < 1 || selectedQuantity > product.stock) {
                                        alert('Quantité invalide.');
                                        return;
                                    }
                                    addToCart({
                                        ...product,
                                        quantity: selectedQuantity,
                                    });
                                    alert('Produit ajouté au panier !');
                                }}
                            >
                                {product.stock === 0 ? 'Indisponible' : 'Ajouter au panier'}
                            </button>
                        </div>
                    </div>
                </main>

                <Footer />
            </div>
        </>
    );
}
