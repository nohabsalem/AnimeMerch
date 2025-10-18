import { useState } from 'react';

const allSizes = ['S', 'M', 'L', 'XL'];

export default function SizeSelector({ variants, onSelectSize }) {
    const [selectedSize, setSelectedSize] = useState(null);

    const availableSizes = variants.reduce((acc, v) => {
        acc[v.size] = v.stock > 0;
        return acc;
    }, {});

    function handleSizeClick(size) {
        if (availableSizes[size]) {
            setSelectedSize(size);
            if (onSelectSize) onSelectSize(size);
        }
    }

    return (
        <>
            <h3 className="mb-2 font-semibold">Taille :</h3>
            <div className="grid max-w-xs grid-cols-5 gap-2">
                {allSizes.map((size) => {
                    const isAvailable = availableSizes[size];
                    const isSelected = selectedSize === size;
                    return (
                        <button
                            key={size}
                            disabled={!isAvailable}
                            onClick={() => handleSizeClick(size)}
                            className={`rounded border px-3 py-1 text-center ${isAvailable ? 'cursor-pointer' : 'cursor-not-allowed text-gray-400'} ${isSelected ? 'bg-[#6c3989] font-bold text-white' : ''} `}
                            aria-pressed={isSelected}
                        >
                            {size}
                        </button>
                    );
                })}
            </div>
        </>
    );
}
