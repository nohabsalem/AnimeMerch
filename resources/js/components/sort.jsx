import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/20/solid';
import { router } from '@inertiajs/react';
import { useState } from 'react';
import ArrowDown from '../assets/img/arrow-down.svg';
import ArrowUp from '../assets/img/arrow-up.svg';
import Arrows from '../assets/img/arrows.svg';

export default function Sort() {
    const [selectedSort, setSelectedSort] = useState(null);

    const handleSortSelect = (value) => {
        setSelectedSort(value);

        // 🔥 Recharge la liste côté serveur avec Inertia
        router.get(route('products.indexView'), { sort: value }, { preserveScroll: true });
    };

    const getLabel = () => {
        switch (selectedSort) {
            case 'price_asc':
                return (
                    <>
                        <img src={ArrowUp} height={15} width={15} />
                        Prix croissant
                    </>
                );
            case 'price_desc':
                return (
                    <>
                        <img src={ArrowDown} height={15} width={15} />
                        Prix décroissant
                    </>
                );
            default:
                return (
                    <>
                        <img src={Arrows} height={15} width={15} />
                        Tri
                    </>
                );
        }
    };

    return (
        <Menu as="div" className="relative inline-block text-left">
            <div>
                <MenuButton className="inline-flex w-full cursor-pointer justify-center gap-x-1.5 rounded-xl border-2 border-[#6C3989] bg-white px-2 py-1 text-sm font-medium text-[#6C3989] shadow-xs ring-1 ring-gray-300 ring-inset hover:bg-gray-50">
                    {getLabel()}
                    <ChevronDownIcon aria-hidden="true" className="-mr-1 size-5" />
                </MenuButton>
            </div>

            <MenuItems
                transition
                className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black/5 transition focus:outline-hidden data-closed:scale-95 data-closed:transform data-closed:opacity-0 data-enter:duration-100 data-enter:ease-out data-leave:duration-75 data-leave:ease-in"
            >
                <div className="py-1">
                    <MenuItem
                        as="div"
                        onClick={() => handleSortSelect('price_asc')}
                        className="flex cursor-pointer items-center justify-between px-4 py-2 text-sm text-gray-700 data-focus:bg-gray-100 data-focus:text-gray-900 data-focus:outline-hidden"
                    >
                        Prix croissant
                        <img src={ArrowUp} height={15} width={15} />
                    </MenuItem>
                    <MenuItem
                        as="div"
                        onClick={() => handleSortSelect('price_desc')}
                        className="flex cursor-pointer items-center justify-between px-4 py-2 text-sm text-gray-700 data-focus:bg-gray-100 data-focus:text-gray-900 data-focus:outline-hidden"
                    >
                        Prix décroissant
                        <img src={ArrowDown} height={15} width={15} />
                    </MenuItem>
                </div>
            </MenuItems>
        </Menu>
    );
}
