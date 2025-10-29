import Footer from '@/components/footer';
import Header from '@/components/header';
import ProductImageSelector from '@/components/ImageSelector';
import SizeSelector from '@/components/SizeSelector';
import { Link } from '@inertiajs/react';
import { useState } from 'react';
import useCart from '../cart/cart';

export default function ProductDetails({ product }) {
    const { addToCart } = useCart();
    // const images = product?.images?.length > 0 ? product.images.map((img) => img.image_path) : [product?.image_path || '/default-product.jpg'];
    const images =
        product?.images?.length > 0
            ? product.images.map((img) => '/' + img.image_path)
            : [product?.image_path ? '/' + product.image_path : '/default-product.jpg'];

    const [showDescription, setShowDescription] = useState(false);
    const [selectedQuantity, setSelectedQuantity] = useState(1);
    const [selectedSize, setSelectedSize] = useState(null);

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

    /* Vérifie que variants est bien un tableau */
    const variants = Array.isArray(product.variants) ? product.variants : [];
    const hasVariants = variants.length > 0;

    const variantForSize = variants.find((v) => v.size === selectedSize);
    const stockForSize = variantForSize ? variantForSize.stock : product.stock;

    return (
        <>
            <div className="flex min-h-screen flex-col">
                <Header />
                <main className="flex flex-grow flex-col items-center bg-white px-6 pt-16 pb-8">
                    <div className="flex w-full max-w-5xl flex-col gap-6 md:flex-row">
                        {/* Colonne images */}
                        <div className="flex flex-1 flex-col items-center gap-4">
                            <ProductImageSelector images={images} productName={product.name} />
                        </div>

                        <div className="space-y-4 md:w-1/3">
                            <h1 className="text-2xl font-bold text-gray-800">{product.name}</h1>
                            <p className="text-lg">{product.price} €</p>
                            <p className="text-sm text-gray-500">Stock disponible : {stockForSize}</p>

                            {hasVariants ? (
                                <SizeSelector variants={variants} onSelectSize={setSelectedSize} />
                            ) : (
                                <p className="text-gray-500 italic">Aucune taille spécifique disponible</p>
                            )}

                            <div>
                                <button
                                    onClick={() => setShowDescription(!showDescription)}
                                    className="w-full cursor-pointer text-left font-semibold text-gray-700 underline"
                                >
                                    Description
                                </button>
                                {showDescription && <p className="mt-2 text-gray-600">{product.description}</p>}
                            </div>

                            <div className="mt-4">
                                <label htmlFor="quantity" className="block font-medium">
                                    Quantité :
                                </label>
                                <input
                                    id="quantity"
                                    type="number"
                                    min={1}
                                    max={stockForSize}
                                    value={selectedQuantity}
                                    onChange={(e) => setSelectedQuantity(Number(e.target.value))}
                                    className="w-20 border p-2"
                                    disabled={hasVariants && !selectedSize}
                                />
                            </div>

                            <button
                                className="mt-4 cursor-pointer rounded-md bg-[#FF39B7] px-6 py-2 text-white shadow transition"
                                disabled={
                                    (hasVariants && !selectedSize) || stockForSize === 0 || selectedQuantity < 1 || selectedQuantity > stockForSize
                                }
                                onClick={() => {
                                    if (hasVariants && !selectedSize) {
                                        alert('Veuillez sélectionner une taille.');
                                        return;
                                    }
                                    if (selectedQuantity < 1 || selectedQuantity > stockForSize) {
                                        alert('Quantité invalide.');
                                        return;
                                    }
                                    addToCart({
                                        ...product,
                                        size: hasVariants ? selectedSize : null,
                                        quantity: selectedQuantity,
                                    });
                                    alert(`Produit${hasVariants ? ` (${selectedSize})` : ''} ajouté au panier !`);
                                }}
                            >
                                {!hasVariants
                                    ? stockForSize === 0
                                        ? 'Indisponible'
                                        : 'Ajouter au panier'
                                    : !selectedSize
                                      ? 'Sélectionnez une taille'
                                      : stockForSize === 0
                                        ? 'Indisponible'
                                        : 'Ajouter au panier'}
                            </button>
                        </div>
                    </div>
                </main>
                <Footer />
            </div>
        </>
    );
}
