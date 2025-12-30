import { Divide } from "lucide-react";
import { cn } from "@/lib/utils";
import { useState, useEffect } from "react";


const navItems = [
    { name: "Home", href: "#hero" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
];

export const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false); // closed by default

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
            // Optionally close menu on scroll
            setIsMenuOpen(false);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Close menu on route change/hash change
    useEffect(() => {
        const closeMenu = () => setIsMenuOpen(false);
        window.addEventListener("hashchange", closeMenu);
        return () => window.removeEventListener("hashchange", closeMenu);
    }, []);

    return (
        <nav
            className={cn(
                "fixed w-full z-40 transition-all duration-300",
                isScrolled
                    ? "py-3 bg-background/80 backdrop-blur-md shadow-xs"
                    : "py-5"
            )}
        >
            <div className="container flex items-center justify-between">
                <a
                    className="text-xl font-bold text-primary flex items-center"
                    href="#hero"
                >
                    <span className="relative z-10">
                        <span className="text-glow text-foreground">Sevgi Nur ÖKSÜZ </span>{" "}
                        Portfolio
                    </span>
                </a>
                {/* desktop nav */}
                <div className="hidden md:flex space-x-8">
                    {navItems.map((item, key) => (
                        <a
                            key={key}
                            href={item.href}
                            className="text-foreground/80 hover:text-primary transition-colors duration-300"
                        >
                            {item.name}
                        </a>
                    ))}
                </div>

                {/* mobile menu button */}
                <button
                    className="md:hidden p-2 z-50 flex flex-col justify-center items-center h-10 w-10"
                    aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                    onClick={() => setIsMenuOpen((open) => !open)}
                >
                    <span
                        className={cn(
                            "block w-6 h-0.5 bg-foreground mb-1 transition-transform duration-300",
                            isMenuOpen ? "rotate-45 translate-y-2" : ""
                        )}
                    ></span>
                    <span
                        className={cn(
                            "block w-6 h-0.5 bg-foreground mb-1 transition-opacity duration-300",
                            isMenuOpen ? "opacity-0" : ""
                        )}
                    ></span>
                    <span
                        className={cn(
                            "block w-6 h-0.5 bg-foreground transition-transform duration-300",
                            isMenuOpen ? "-rotate-45 -translate-y-2" : ""
                        )}
                    ></span>
                </button>

                {/* mobile nav */}
                <div
                    className={cn(
                        "fixed inset-0 bg-background/95 backdrop-blur-md z-40 flex flex-col items-center justify-center transition-all duration-300 md:hidden",
                        isMenuOpen
                            ? "opacity-100 pointer-events-auto"
                            : "opacity-0 pointer-events-none"
                    )}
                >
                    <div className="flex flex-col space-y-8 text-xl">
                        {navItems.map((item, key) => (
                            <a
                                key={key}
                                href={item.href}
                                className="text-foreground/80 hover:text-primary transition-colors duration-300"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                {item.name}
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </nav>
    );
};