import { useState } from 'react';

export default function SizeFilter() {
    const [showSizeFilter, setShowSizeFilter] = useState(false);
    const [selectedSizes, setSelectedSizes] = useState([]);

    const handleCheckboxChange = (size) => {
        setSelectedSizes((prevSizes) => (prevSizes.includes(size) ? prevSizes.filter((s) => s !== size) : [...prevSizes, size]));
    };

    return (
        <div className="flex w-full flex-col gap-4">
            <button
                onClick={() => setShowSizeFilter(!showSizeFilter)}
                className="flex w-full items-center justify-between border-b-2 border-b-[#6C3989] text-left font-semibold"
            >
                <span>Taille</span>
                <svg
                    className={`h-5 w-5 transform transition-transform duration-300 ${showSizeFilter ? 'rotate-180' : 'rotate-0'}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
            </button>

            {showSizeFilter && (
                <div className="flex w-full flex-col rounded-md text-sm font-semibold">
                    {['XS', 'S', 'M', 'L', 'XL'].map((size) => (
                        <div key={size} className="flex items-center gap-2">
                            <input
                                type="checkbox"
                                id={`size${size}`}
                                name={`size${size}`}
                                className="h-4 w-4 cursor-pointer accent-[#6C3989]"
                                checked={selectedSizes.includes(size)}
                                onChange={() => handleCheckboxChange(size)}
                            />
                            <label htmlFor={`size${size}`} className="cursor-pointer">
                                {size}
                            </label>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}
