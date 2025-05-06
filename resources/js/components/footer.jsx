import { Link } from '@inertiajs/react';

export default function Footer() {
    return (
        <footer className="w-full bg-[#6C3989] px-6 py-5 text-white">
            <div className="flex items-center justify-center gap-4">
                <Link href="/" className="mb-2 text-sm hover:underline sm:mb-0">
                    Accueil
                </Link>
                <Link href="/about" className="mb-2 text-sm hover:underline sm:mb-0">
                    À propos de nous
                </Link>
                <Link href="/privacy-policy" className="mb-2 text-sm hover:underline sm:mb-0">
                    Politique de Confidentialité
                </Link>
                <Link href="/terms-of-sale" className="mb-2 text-sm hover:underline sm:mb-0">
                    CGV
                </Link>
                <p className="text-sm">© 2025 AnimeMerch. Tous droits réservés.</p>
            </div>
        </footer>
    );
}
