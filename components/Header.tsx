'use client';

import Link from "next/link";
import { usePathname } from "next/navigation";

const nav = [
    {
        label: "home",
        path: "/"
    },
    {
        label: "about",
        path: "/about"
    },
    {
        label: "github",
        path: "https://github.com/makors/readme.sh"
    }
]

export default function Header() {
    const pathname = usePathname();
    return (
        <header className="flex justify-between items-center pt-1 md:pt-4 pb-2 md:pb-4">
            <div className="flex-col">
                <Link href="/" className="text-xl font-bold">
                    readme.sh
                </Link>
                <p className="hidden md:block text-gray-400 italic text-sm">
                    a dev blog of sorts
                </p>
            </div>

            <nav className="flex gap-4">
                {nav.map(
                    (item) => (
                        <Link href={item.path} key={item.label} className={item.path === pathname ? "text-white" : "text-gray-400"}>
                            {item.label}
                        </Link>
                    )
                )}
            </nav>
        </header>
    )
}