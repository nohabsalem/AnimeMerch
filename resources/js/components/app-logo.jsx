import { Link } from '@inertiajs/react';
import Logo from '../assets/img/jojo-logo.png';
// import AppLogoIcon from './app-logo-icon';
export default function AppLogo() {
    return (
        <>
            <div className="bg-sidebar-primary text-sidebar-primary-foreground flex aspect-square size-8 items-center justify-center rounded-md">
                <Link href="/">
                    <img src={Logo} alt="Logo" className="w-auto" />
                </Link>
                {/* <AppLogoIcon className="size-5 fill-current text-white dark:text-black" /> */}
            </div>
            <div className="ml-1 grid flex-1 text-left text-sm text-[#6C3989]">
                <span className="mb-0.5 truncate leading-none font-semibold">Anime Merch</span>
            </div>
        </>
    );
}
