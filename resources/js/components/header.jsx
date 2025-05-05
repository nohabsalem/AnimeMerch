import { Link, usePage } from '@inertiajs/react';

export default function Header() {
    const { auth } = usePage().props;

    return (
        <header className="w-full bg-[#6C3989] px-6 py-3 text-white">
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
                            // className="text-[#1b1b18]dark:text-[#EDEDEC] inline-block rounded-sm border px-5 py-1.5 text-sm leading-normal"
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
        </header>
    );
}
