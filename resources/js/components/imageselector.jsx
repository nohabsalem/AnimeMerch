import { useState } from 'react';

export default function ProductImageSelector({ images, productName }) {
    const [activeIndex, setActiveIndex] = useState(0);

    if (!images || images.length === 0) {
        return <img src="/default-product.jpg" alt={productName || 'Produit'} className="w-full max-w-md rounded-xl object-contain shadow" />;
    }

    return (
        // flex-col sur mobile : miniatures en bas, md:flex-row sur desktop : miniatures à gauche
        <div className="flex w-full flex-col gap-4 md:flex-row">
            {/* Miniatures */}
            <div className="order-2 mt-4 flex flex-row gap-2 overflow-x-auto py-2 md:order-1 md:mt-0 md:flex-col md:overflow-x-hidden md:overflow-y-auto">
                {images.map((img, i) => (
                    <img
                        key={i}
                        src={img}
                        alt={`${productName} miniature ${i + 1}`}
                        onClick={() => setActiveIndex(i)}
                        className={`h-16 w-16 cursor-pointer rounded-lg border object-cover md:h-20 md:w-20 ${
                            activeIndex === i ? 'border-2 border-[#6c3989]' : 'border-gray-300'
                        }`}
                    />
                ))}
            </div>
            {/* Image principale */}
            <div className="order-1 flex min-h-[250px] flex-1 items-center justify-center rounded-lg border p-4 md:order-2">
                <img src={images[activeIndex]} alt={`${productName} image principale`} className="max-h-full max-w-full rounded-lg object-contain" />
            </div>
        </div>
    );
}
