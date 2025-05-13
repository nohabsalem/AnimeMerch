// components/sort/index.jsx
import { useState } from 'react';
import SortArrow from '../../assets/img/sort-arrow.svg';

export default function Sort({ sort, setSort }) {
    const [showFilters, setShowFilters] = useState(true);

    // const [showSort, setShowSort] = useState(false);
    const options = ['Prix croissant', 'Prix décroissant', 'Nom A-Z', 'Nom Z-A'];
    const handleToggleFilters = () => {
        setShowFilters(!showFilters);
    };

    return (
        <>
            <div className="flex items-center gap-2">
                <img src={SortArrow} alt="Sort Arrow" className="ml-2 h-4 w-4" />
                <select className="" onClick={handleToggleFilters}>
                    Trier par :
                </select>
                <option value="ascending">Prix croissant</option>
                <option value="descending">Prix décroissant</option>
            </div>
        </>
    );
}
