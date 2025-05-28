import { Link } from '@inertiajs/react';
import logo from '../assets/img/jojo-logo.png';
const navigation = {
    Mentions: [
        { name: 'Politique de Confidentialité', href: '/privacy-policy' },
        { name: 'Conditions de Vente', href: '/terms-of-sale' },
    ],
    Support: [{ name: 'Nous contacter', href: '' }],
    Entreprise: [{ name: 'À propos de nous', href: '/about-us' }],
};

export default function Footer() {
    return (
        <footer className="bg-[#6C3989]">
            <div className="mx-auto max-w-7xl px-6 py-16 sm:py-24 lg:px-8 lg:py-32">
                <div className="xl:grid xl:grid-cols-3 xl:gap-8">
                    <Link href="/">
                        <img alt="Entreprise name" src={logo} className="h-15" />
                    </Link>

                    <div className="mt-16 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
                        <div className="md:grid md:grid-cols-2 md:gap-8">
                            <div className="mt-10 md:mt-0">
                                <h3 className="text-md text-sm/6 font-semibold text-white">Support</h3>
                                <ul role="list" className="mt-6 space-y-4">
                                    {navigation.Mentions.map((item) => (
                                        <li key={item.name}>
                                            <a href={item.href} className="text-md text-sm/6 text-white hover:text-white">
                                                {item.name}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                        <div className="md:grid md:grid-cols-2 md:gap-8">
                            <div>
                                <h3 className="text-md text-sm/6 font-semibold text-white">Entreprise</h3>
                                <ul role="list" className="mt-6 space-y-4">
                                    {navigation.Entreprise.map((item) => (
                                        <li key={item.name}>
                                            <a href={item.href} className="text-md text-sm/6 text-white hover:text-white">
                                                {item.name}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="mt-10 md:mt-0">
                                <h3 className="text-md text-sm/6 font-semibold text-white">Mentions</h3>
                                <ul role="list" className="mt-6 space-y-4">
                                    {navigation.Support.map((item) => (
                                        <li key={item.name}>
                                            <a href={item.href} className="text-md text-sm/6 text-white hover:text-white">
                                                {item.name}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
