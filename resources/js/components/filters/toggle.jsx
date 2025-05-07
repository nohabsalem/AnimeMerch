export default function ToggleFilters() {
    return (
        <>
            <div className="flex">
                <button
                    className="mr-2 cursor-pointer rounded-xl bg-[#FF39B7] px-3 font-semibold text-white"
                    onClick={() => setShowFilters(!showFilters)}
                >
                    Filtres
                </button>

                <button
                    className="py- cursor-pointer rounded-xl border-2 border-[#6C3989] px-3 font-semibold"
                    onClick={() => setShowFilters(!showFilters)}
                >
                    ⨯ Réinitaliser les filtres
                </button>
            </div>
        </>
    );
}
