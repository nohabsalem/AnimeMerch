import { useRef, useState } from 'react';

const ArrowUp = () => (
    <svg width="32" height="32" className="mx-auto mb-2 cursor-pointer text-black hover:text-[#6c3989]" viewBox="0 0 24 24" fill="none">
        <path d="M12 8l-6 6h12l-6-6z" fill="currentColor" />
    </svg>
);
const ArrowDown = () => (
    <svg width="32" height="32" className="mx-auto mt-2 cursor-pointer text-black hover:text-[#6c3989]" viewBox="0 0 24 24" fill="none">
        <path d="M12 16l6-6H6l6 6z" fill="currentColor" />
    </svg>
);

export default function ProductImageSelector({ images, productName }) {
    const [activeIndex, setActiveIndex] = useState(0);
    const thumbnailsRef = useRef();

    // Défilement programmatique (pour desktop)
    const scrollToThumbnail = (index) => {
        if (thumbnailsRef.current && thumbnailsRef.current.children[index]) {
            thumbnailsRef.current.children[index].scrollIntoView({
                behavior: 'smooth',
                block: 'nearest',
                inline: 'nearest',
            });
        }
    };

    const handlePrev = () => {
        setActiveIndex((prev) => {
            const newIndex = Math.max(prev - 1, 0);
            scrollToThumbnail(newIndex);
            return newIndex;
        });
    };

    const handleNext = () => {
        setActiveIndex((prev) => {
            const newIndex = Math.min(prev + 1, images.length - 1);
            scrollToThumbnail(newIndex);
            return newIndex;
        });
    };

    if (!images || images.length === 0) {
        return <img src="/default-product.jpg" alt={productName || 'Produit'} className="w-full max-w-md rounded-xl object-contain shadow" />;
    }

    return (
        <div className="flex w-full flex-col gap-4 md:flex-row">
            {/* Miniatures et flèches (flèches desktop seulement) */}
            <div className="order-2 mt-4 flex flex-col items-center md:order-1 md:mt-0 md:flex-col">
                {/* Fleche haut desktop */}
                <button className="hidden focus:outline-none md:block" aria-label="Précédent" onClick={handlePrev} disabled={activeIndex === 0}>
                    <ArrowUp />
                </button>
                {/* Miniatures scrollables */}
                <div
                    ref={thumbnailsRef}
                    className="scrollbar-thin scrollbar-thumb-[#6c3989] flex flex-row gap-2 overflow-x-auto py-2 md:flex-col md:overflow-x-hidden md:overflow-y-auto"
                >
                    {images.map((img, i) => (
                        <img
                            key={i}
                            src={img}
                            alt={`${productName} miniature ${i + 1}`}
                            onClick={() => {
                                setActiveIndex(i);
                                scrollToThumbnail(i);
                            }}
                            className={`my-1 h-16 w-16 cursor-pointer rounded-lg border object-cover md:h-20 md:w-20 ${
                                activeIndex === i ? 'border-2 border-[#6c3989]' : 'border-gray-300'
                            }`}
                            style={{
                                outline: activeIndex === i ? '2px solid #6c3989' : 'none',
                            }}
                        />
                    ))}
                </div>
                {/* Fleche bas desktop */}
                <button
                    className="hidden focus:outline-none md:block"
                    aria-label="Suivant"
                    onClick={handleNext}
                    disabled={activeIndex === images.length - 1}
                >
                    <ArrowDown />
                </button>
            </div>
            {/* Image principale */}
            <div className="order-1 flex min-h-[250px] flex-1 items-center justify-center rounded-lg border p-4 md:order-2">
                <img src={images[activeIndex]} alt={`${productName} image principale`} className="max-h-full max-w-full rounded-lg object-contain" />
            </div>
        </div>
    );
}
