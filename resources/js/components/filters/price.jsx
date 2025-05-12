import { useState } from 'react';

export default function PriceFilter({ minPrice, maxPrice, setMinPrice, setMaxPrice }) {
    const [showPriceFilter, setShowPriceFilter] = useState(false);

    return (
        <div className="flex flex-col gap-4">
            <button
                onClick={() => setShowPriceFilter(!showPriceFilter)}
                className="flex w-full cursor-pointer items-center justify-between border-b-2 border-b-[#6C3989] text-left font-semibold"
            >
                <span>Prix</span>
                <svg
                    className={`h-5 w-5 transform transition-transform duration-300 ${showPriceFilter ? 'rotate-180' : 'rotate-0'}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
            </button>

            {showPriceFilter && (
                <>
                    <div className="flex w-40 flex-col">
                        <input
                            type="number"
                            id="minPrice"
                            placeholder="Min (€)"
                            value={minPrice}
                            onChange={(e) => setMinPrice(e.target.value)}
                            min={1}
                            max={100}
                            className="border-0 border-b-2 border-black bg-gray-100 px-2 py-1 text-sm placeholder-gray-500 focus:outline-none"
                        />
                    </div>

                    <div className="flex w-40 flex-col">
                        <input
                            type="number"
                            id="maxPrice"
                            placeholder="Max (€)"
                            value={maxPrice}
                            onChange={(e) => setMaxPrice(e.target.value)}
                            min={1}
                            max={100}
                            className="border-0 border-b-2 border-black bg-gray-100 px-2 py-1 text-sm placeholder-gray-500 focus:outline-none"
                        />
                    </div>
                </>
            )}
        </div>
    );
}
