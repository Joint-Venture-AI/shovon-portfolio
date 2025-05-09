"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

export default function Navbar() {
	const [isOpen, setIsOpen] = useState(false);
	const [isScrolled, setIsScrolled] = useState(false);
	const navbarRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const handleScroll = () => {
			if (window.scrollY > 10) {
				setIsScrolled(true);
			} else {
				setIsScrolled(false);
			}
			setIsOpen(false);
		};

		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	useEffect(() => {
		const handleClickOutside = (event: MouseEvent) => {
			if (
				navbarRef.current &&
				!navbarRef.current.contains(event.target as Node)
			) {
				setIsOpen(false);
			}
		};

		document.addEventListener("mousedown", handleClickOutside);
		return () => {
			document.removeEventListener("mousedown", handleClickOutside);
		};
	}, []);

	const navLinks = [
		{ href: "#about", label: "About" },
		{ href: "#skills", label: "Skills" },
		{ href: "#projects", label: "Projects" },
		{ href: "#contact", label: "Contact" },
	];

	return (
		<header
			ref={navbarRef}
			className={cn(
				"fixed top-0 left-0 right-0 z-50 transition-all duration-300",
				isScrolled
					? "bg-white/90 backdrop-blur-md shadow-sm py-4"
					: "bg-transparent py-6"
			)}
		>
			<div className="container mx-auto px-4">
				<div className="flex items-center justify-between">
					<Link href="/" className="text-2xl font-bold text-primary">
						Shovon
					</Link>

					{/* Desktop Navigation */}
					<nav className="hidden md:flex items-center space-x-8">
						{navLinks.map((link) => (
							<Link
								key={link.href}
								href={link.href}
								className={cn(
									"text-sm font-medium transition-colors hover:text-primary",
									isScrolled ? "text-gray-900" : "text-white"
								)}
							>
								{link.label}
							</Link>
						))}
						<Button
							className="bg-[#1dbf73] hover:bg-[#19a463] text-white"
							onClick={() =>
								window.open("https://www.fiverr.com/code_craf", "_blank")
							}
						>
							Fiverr Profile
						</Button>
					</nav>

					{/* Mobile Navigation Toggle */}
					<button
						className="md:hidden"
						onClick={() => setIsOpen(!isOpen)}
						aria-label="Toggle Menu"
					>
						{isOpen ? (
							<X className={isScrolled ? "text-gray-900" : "text-white"} />
						) : (
							<Menu className={isScrolled ? "text-gray-900" : "text-white"} />
						)}
					</button>
				</div>
			</div>

			{/* Mobile Navigation Menu */}
			{isOpen && (
				<div className="md:hidden bg-white fixed top-[66px] right-4 shadow-sm border rounded-lg ">
					<div className="container mx-auto p-0">
						<nav className="flex flex-col space-y-2">
							{navLinks.map((link) => (
								<Link
									key={link.href}
									href={link.href}
									className="text-gray-900 text-sm font-medium px-4 py-2 hover:bg-gray-500/50"
									onClick={() => setIsOpen(false)}
								>
									{link.label}
								</Link>
							))}
							<div className="px-4 pb-2">
								<Button
									className="bg-[#1dbf73] hover:bg-[#19a463] text-white"
									onClick={() =>
										window.open("https://www.fiverr.com/code_craf", "_blank")
									}
								>
									Fiverr Profile
								</Button>
							</div>
						</nav>
					</div>
				</div>
			)}
		</header>
	);
}
