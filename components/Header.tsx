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
        <header className="flex flex-col md:flex-row justify-between items-start md:items-center pt-4 pb-3 border-b border-gray-800 mb-4">
            <div className="flex flex-col mb-4 md:mb-0">
                <Link href="/" className="text-2xl font-bold hover:text-blue-400 transition-colors">
                    readme.sh
                </Link>
                <p className="text-gray-400 italic text-sm">
                    a dev blog of sorts
                </p>
            </div>

            <nav className="flex gap-5">
                {nav.map((item) => (
                    <Link 
                        href={item.path} 
                        key={item.label} 
                        className={`${
                            item.path === pathname 
                                ? "text-white font-medium" 
                                : "text-gray-400 hover:text-white"
                        } transition-colors`}
                        target={item.path.startsWith('http') ? '_blank' : undefined}
                        rel={item.path.startsWith('http') ? 'noopener noreferrer' : undefined}
                    >
                        {item.label}
                    </Link>
                ))}
            </nav>
        </header>
    )
}