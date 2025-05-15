import logo from '@/assets/img/jojo-logo.png';
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { Link, usePage } from '@inertiajs/react';

export default function Navbar() {
    const { auth } = usePage().props;

    return (
        <Disclosure as="nav" className="bg-[#6C3989]">
            <div className="mx-auto px-2 sm:px-6 lg:px-8">
                <div className="relative flex h-16 items-center justify-between">
                    <div className="absolute inset-y-0 right-0 flex items-center sm:hidden">
                        {/* Mobile menu button*/}
                        <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2 text-white hover:text-white focus:ring-2 focus:ring-white focus:outline-hidden focus:ring-inset">
                            <span className="absolute -inset-0.5" />
                            <span className="sr-only">Open main menu</span>
                            <Bars3Icon aria-hidden="true" className="block size-6 group-data-open:hidden" />
                            <XMarkIcon aria-hidden="true" className="hidden size-6 group-data-open:block" />
                        </DisclosureButton>
                    </div>

                    <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-between">
                        <div className="flex shrink-0 items-center">
                            <Link href="/">
                                <img src={logo} alt="Logo" className="h-12 w-auto" />
                            </Link>
                        </div>
                        <div className="hidden sm:flex sm:items-center sm:space-x-4">
                            {auth.user ? (
                                <>
                                    <Link
                                        href="/cart"
                                        className="rounded-md border border-transparent px-3 py-2 text-sm text-white transition hover:border-white"
                                    >
                                        Panier
                                    </Link>

                                    <Link
                                        href="/dashboard"
                                        className="rounded-md border border-transparent px-3 py-2 text-sm text-white transition hover:border-white"
                                    >
                                        Mon compte
                                    </Link>
                                </>
                            ) : (
                                <>
                                    <Link
                                        href="/cart"
                                        className="rounded-md border border-transparent px-3 py-2 text-sm text-white transition hover:border-white"
                                    >
                                        Panier
                                    </Link>
                                    <Link
                                        href="/login"
                                        className="rounded-md border border-transparent px-3 py-2 text-sm text-white transition hover:border-white"
                                    >
                                        Se connecter
                                    </Link>
                                    <Link
                                        href="/register"
                                        className="rounded-md border border-transparent px-3 py-2 text-sm text-white transition hover:border-white"
                                    >
                                        S'inscrire
                                    </Link>
                                </>
                            )}
                        </div>
                    </div>
                </div>
            </div>

            <DisclosurePanel className="sm:hidden">
                <div className="space-y-1 px-2 pt-2 pb-3">
                    {auth.user ? (
                        <>
                            <Link
                                href="/cart"
                                className="hover:white block rounded-md px-3 py-2 text-base text-white transition hover:bg-white hover:text-[#6C3989] hover:underline"
                            >
                                Panier
                            </Link>
                            <Link
                                to="/dashboard"
                                className="block rounded-md px-3 py-2 text-base text-white transition hover:bg-white hover:text-[#6C3989]"
                            >
                                Mon compte
                            </Link>
                        </>
                    ) : (
                        <>
                            <Link
                                href="/cart"
                                className="hover:white block rounded-md px-3 py-2 text-base text-white transition hover:bg-white hover:text-[#6C3989] hover:underline"
                            >
                                Panier
                            </Link>
                            <Link
                                to="/login"
                                className="block rounded-md px-3 py-2 text-base text-white transition hover:bg-white hover:text-[#6C3989]"
                            >
                                Se connecter
                            </Link>
                            <Link
                                to="/register"
                                className="block rounded-md px-3 py-2 text-base text-white transition hover:bg-white hover:text-[#6C3989]"
                            >
                                S'inscrire
                            </Link>
                        </>
                    )}
                </div>
            </DisclosurePanel>
        </Disclosure>
    );
}
