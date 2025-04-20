import { Link } from '@inertiajs/react';

export default function Footer() {
    return (
        <footer className="w-full bg-[#6C3989] text-white py-5 px-6">
            <div className="flex items-center justify-center gap-4">
                <Link to="/" className="text-sm hover:underline mb-2 sm:mb-0">
                    Accueil
                </Link>
                <Link to="/about" className="text-sm hover:underline mb-2 sm:mb-0">
                    À propos de nous
                </Link>
                <Link to="/privacy-policy" className="text-sm hover:underline mb-2 sm:mb-0">
                    Politique de Confidentialité
                </Link>
                <Link to="/terms-and-conditions" className="text-sm hover:underline mb-2 sm:mb-0">
                    CGV
                </Link>
                <p className="text-sm">© 2025 AnimeMerch. Tous droits réservés.</p>

            </div>
        </footer>
    );
}