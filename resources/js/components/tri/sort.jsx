import { useState } from 'react';
import ArrowDown from '../../assets/img/arrow-down.svg';
import ArrowUp from '../../assets/img/arrow-up.svg';
import SortArrow from '../../assets/img/sort-arrow.svg';

export default function Sort({ sort, setSort }) {
    const [showOptions, setShowOptions] = useState(false);

    const options = [
        {
            label: 'Prix croissant',
            value: 'price-asc',
            icon: <img src={ArrowUp} alt="Flèche haut" width={16} height={16} className="ml-2" />,
        },
        {
            label: 'Prix décroissant',
            value: 'price-desc',
            icon: <img src={ArrowDown} alt="Flèche bas" width={16} height={16} className="ml-2" />,
        },
    ];

    const handleSortChange = (value) => {
        setSort(value);
        setShowOptions(false);
    };

    return (
        <div className="relative inline-block text-left">
            <button
                onClick={() => setShowOptions((prev) => !prev)}
                className="flex items-center gap-2 rounded-xl border-2 border-black px-4 py-2 text-xl font-semibold"
            >
                <img src={SortArrow} alt="Flèche de tri" className="h-4 w-4" />
                <span className="text-sm">Trier par</span>
            </button>

            {showOptions && (
                <div className="absolute z-10 mt-2 w-56 border border-gray-200 bg-white shadow-md">
                    {options.map((option) => (
                        <button
                            key={option.value}
                            onClick={() => handleSortChange(option.value)}
                            className={`flex w-full items-center justify-between px-4 py-2 hover:bg-gray-100 ${
                                sort === option.value ? 'font-bold' : ''
                            }`}
                        >
                            <span>{option.label}</span>
                            {option.icon}
                        </button>
                    ))}
                </div>
            )}
        </div>
    );
}
