import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/20/solid';

export default function Sort() {
    return (
        <Menu as="div" className="relative inline-block text-left">
            <div>
                <MenuButton className="inline-flex w-full cursor-pointer justify-center gap-x-1.5 rounded-xl border-2 border-[#FF39B7] bg-white px-2 py-1 text-sm font-medium text-[#FF39B7] shadow-xs ring-1 ring-gray-300 ring-inset hover:bg-gray-50">
                    Tri
                    <ChevronDownIcon aria-hidden="true" className="-mr-1 size-5 text-[#FF39B7]" />
                </MenuButton>
            </div>

            <MenuItems
                transition
                className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black/5 transition focus:outline-hidden data-closed:scale-95 data-closed:transform data-closed:opacity-0 data-enter:duration-100 data-enter:ease-out data-leave:duration-75 data-leave:ease-in"
            >
                <div className="py-1">
                    <MenuItem>
                        <a
                            href="#"
                            className="block px-4 py-2 text-sm text-gray-700 data-focus:bg-gray-100 data-focus:text-gray-900 data-focus:outline-hidden"
                        >
                            Account settings
                        </a>
                    </MenuItem>
                    <MenuItem>
                        <a
                            href="#"
                            className="block px-4 py-2 text-sm text-gray-700 data-focus:bg-gray-100 data-focus:text-gray-900 data-focus:outline-hidden"
                        >
                            Support
                        </a>
                    </MenuItem>
                    <MenuItem>
                        <a
                            href="#"
                            className="block px-4 py-2 text-sm text-gray-700 data-focus:bg-gray-100 data-focus:text-gray-900 data-focus:outline-hidden"
                        >
                            License
                        </a>
                    </MenuItem>
                    <form action="#" method="POST">
                        <MenuItem>
                            <button
                                type="submit"
                                className="block w-full px-4 py-2 text-left text-sm text-gray-700 data-focus:bg-gray-100 data-focus:text-gray-900 data-focus:outline-hidden"
                            >
                                Sign out
                            </button>
                        </MenuItem>
                    </form>
                </div>
            </MenuItems>
        </Menu>
    );
}
