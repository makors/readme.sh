'use client';

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Github, Home, User } from "lucide-react";
import ThemeToggle from "./ThemeToggle";

const nav = [
    {
        label: "home",
        path: "/",
        icon: Home
    },
    {
        label: "about",
        path: "/about",
        icon: User
    },
    {
        label: "github",
        path: "https://github.com/makors/readme.sh",
        icon: Github
    }
]

export default function Header() {
    const pathname = usePathname();
    return (
        <header className="sticky top-0 z-50 w-full border-b border-gray-800/50 bg-[#0d1117]/80 backdrop-blur-sm">
            <div className="container max-w-4xl mx-auto px-4 md:px-6">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center py-6">
                    <div className="flex flex-col mb-6 md:mb-0">
                        <Link 
                            href="/" 
                            className="group flex items-center gap-2 text-2xl font-bold hover:text-blue-400 transition-all duration-300"
                        >
                            <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                                readme.sh
                            </span>
                            <div className="w-2 h-2 bg-blue-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        </Link>
                        <p className="text-gray-400 italic text-sm mt-1">
                            a dev blog of sorts
                        </p>
                    </div>

                    <div className="flex items-center gap-4">
                        <nav className="flex gap-1">
                            {nav.map((item) => {
                                const Icon = item.icon;
                                const isActive = item.path === pathname;
                                const isExternal = item.path.startsWith('http');
                                
                                return (
                                    <Link 
                                        href={item.path} 
                                        key={item.label} 
                                        className={`
                                            flex items-center gap-2 px-4 py-2 rounded-lg transition-all duration-300
                                            ${isActive 
                                                ? "text-white bg-gray-800/50 border border-gray-700/50 shadow-lg" 
                                                : "text-gray-400 hover:text-white hover:bg-gray-800/30"
                                            }
                                            ${isExternal ? "hover:bg-blue-500/20 hover:text-blue-400" : ""}
                                        `}
                                        target={isExternal ? '_blank' : undefined}
                                        rel={isExternal ? 'noopener noreferrer' : undefined}
                                    >
                                        <Icon className="w-4 h-4" />
                                        <span className="hidden sm:inline">{item.label}</span>
                                    </Link>
                                );
                            })}
                        </nav>
                        
                        <div className="hidden md:block w-px h-6 bg-gray-700/50"></div>
                        <ThemeToggle />
                    </div>
                </div>
            </div>
        </header>
    )
}