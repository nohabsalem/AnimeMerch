export default function Modal({ open, onClose, children }) {
    if (!open) return null;
    return (
        <div className="bg-opacity-50 fixed inset-0 z-50 flex items-center justify-center bg-black/10 p-4 backdrop-blur-sm">
            <div className="relative max-h-[90vh] w-full max-w-lg overflow-auto rounded-lg bg-white p-6 shadow-lg sm:max-w-md md:max-w-lg">
                <button
                    onClick={onClose}
                    className="absolute top-2 right-2 cursor-pointer rounded-lg bg-red-600 px-4 py-2 text-2xl text-white transition hover:bg-red-700"
                    aria-label="Fermer"
                >
                    &times;
                </button>
                {children}
            </div>
        </div>
    );
}
