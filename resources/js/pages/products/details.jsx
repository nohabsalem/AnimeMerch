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
    const [selectedSize, setSelectedSize] = useState(null);
    const images = [product.imageUrl, product.imageUrl, product.imageUrl];

    if (!product) {
        return <div className="py-10 text-center text-red-500">Produit introuvable.</div>;
    }

    return (
        <div className="flex min-h-screen flex-col">
            <Header />

            <main className="flex flex-grow flex-col items-center bg-white px-6 pt-16 pb-8">
                <div className="flex w-full max-w-5xl flex-col gap-6 md:flex-row">
                    {/* Miniatures */}
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

                    {/* Infos produit */}
                    <div className="space-y-4 md:w-1/3">
                        <h1 className="text-2xl font-bold text-gray-800">{product.name}</h1>
                        <p>{product.price} €</p>

                        {/* Description & matière */}
                        <div>
                            <button
                                onClick={() => setShowDescription(!showDescription)}
                                className="w-full cursor-pointer text-left font-semibold text-gray-700 underline"
                            >
                                Description
                            </button>
                            {showDescription && <p className="mt-2 text-gray-600">{product.description}</p>}

                            <button
                                onClick={() => setShowMatiere(!showMatiere)}
                                className="mt-4 w-full cursor-pointer text-left font-semibold text-gray-700 underline"
                            >
                                Matière
                            </button>
                            {showMatiere && <p className="mt-2 text-gray-600">{product.matiere}</p>}
                        </div>

                        {/* Tailles */}
                        <div className="mt-4">
                            <h2 className="text-lg font-semibold text-gray-800">Tailles disponibles :</h2>
                            <div className="mt-2 flex flex-wrap gap-2">
                                {product.sizes.map((size) => (
                                    <button
                                        key={size.id}
                                        onClick={() => setSelectedSize(size)}
                                        disabled={size.stock === 0}
                                        className={`w-12 rounded-md border p-2 text-sm font-medium transition-colors ${
                                            selectedSize?.id === size.id
                                                ? 'border-pink-500 bg-pink-100 text-pink-800'
                                                : 'border-gray-300 bg-white text-gray-800 hover:border-pink-500'
                                        } ${size.stock === 0 ? 'cursor-not-allowed bg-gray-200 text-gray-400' : 'cursor-pointer'}`}
                                    >
                                        {size.name}
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Bouton */}
                        <button
                            className="mt-4 rounded-md bg-[#FF39B7] px-6 py-2 text-white shadow transition hover:bg-pink-600"
                            onClick={() => {
                                if (!selectedSize) {
                                    alert('Veuillez sélectionner une taille.');
                                    return;
                                }

                                const productToAdd = {
                                    id: product.id,
                                    name: product.name,
                                    imageUrl: product.imageUrl,
                                    price: product.price,
                                    size: selectedSize.name,
                                    quantity: 1,
                                };

                                addToCart(productToAdd);
                                alert(`Produit ajouté au panier !\nTaille : ${selectedSize.name}`);
                                console.log('Ajouté au panier:', productToAdd);
                            }}
                        >
                            Ajouter au panier
                        </button>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
}
