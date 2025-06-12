export default function Searchbar() {
    return (
        <div className="flex items-center justify-center">
            <div className="relative w-[300px]">
                <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3 text-[#6C3989]">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
                        <path
                            fillRule="evenodd"
                            d="M10.5 3.75a6.75 6.75 0 1 0 0 13.5 6.75 6.75 0 0 0 0-13.5ZM2.25 10.5a8.25 8.25 0 1 1 14.59 5.28l4.69 4.69a.75.75 0 1 1-1.06 1.06l-4.69-4.69A8.25 8.25 0 0 1 2.25 10.5Z"
                            clipRule="evenodd"
                        />
                    </svg>
                </div>
                <input
                    type="text"
                    placeholder="Rechercher..."
                    className="w-full rounded-md border-2 border-[#6C3989] p-2 pl-10 focus:ring-2 focus:ring-[#6C3989] focus:outline-none"
                />
            </div>
        </div>
    );
}
