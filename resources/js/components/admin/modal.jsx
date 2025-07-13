// components/Modal.jsx
export default function Modal({ open, onClose, children }) {
    if (!open) return null;
    return (
        <div className="bg-opacity-50 fixed inset-0 z-50 flex items-center justify-center bg-black/10 backdrop-blur-sm">
            <div className="relative w-full max-w-lg rounded-lg bg-white p-6 shadow-lg">
                <button
                    onClick={onClose}
                    className="absolute top-2 right-2 cursor-pointer rounded-lg bg-red-600 px-4 py-2 text-2xl text-white"
                    aria-label="Fermer"
                >
                    &times;
                </button>
                {children}
            </div>
        </div>
    );
}
