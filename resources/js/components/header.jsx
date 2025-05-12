import logo from '@/assets/img/jojo-logo.png';
import { Link, usePage } from '@inertiajs/react';
export default function Header() {
    const { auth } = usePage().props;

    return (
        <header className="w-full bg-[#6C3989] px-6 py-3 text-white">
            <div className="flex items-center justify-between">
                <Link href="/">
                    <img src={logo} alt="Logo" className="h-12 w-auto" />
                </Link>

                <nav className="flex items-center justify-end gap-4 bg-[#6C3989]">
                    {auth.user ? (
                        <>
                            <Link
                                href={route('cart')}
                                className="inline-block rounded-sm border border-transparent px-5 py-1.5 text-sm leading-normal text-white hover:border-[#fff] dark:text-[#EDEDEC]"
                            >
                                Panier
                            </Link>

                            <Link
                                href={route('dashboard')}
                                className="inline-block rounded-sm border border-transparent px-5 py-1.5 text-sm leading-normal text-white hover:border-[#fff] dark:text-[#EDEDEC]"
                            >
                                Mon compte
                            </Link>
                        </>
                    ) : (
                        <>
                            <Link
                                href={route('cart')}
                                className="inline-block rounded-sm border border-transparent px-5 py-1.5 text-sm leading-normal text-white hover:border-[#fff] dark:text-[#EDEDEC]"
                            >
                                Panier
                            </Link>
                            <Link
                                href={route('login')}
                                className="inline-block rounded-sm border border-transparent px-5 py-1.5 text-sm leading-normal text-white hover:border-[#fff] dark:text-[#EDEDEC]"
                            >
                                Log in
                            </Link>
                            <Link
                                href={route('register')}
                                className="inline-block rounded-sm border border-transparent px-5 py-1.5 text-sm leading-normal text-white hover:border-[#fff] dark:text-[#EDEDEC]"
                            >
                                Register
                            </Link>
                        </>
                    )}
                </nav>
            </div>
        </header>
    );
}
