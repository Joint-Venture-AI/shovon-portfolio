import type React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import Navbar from "@/components/navbar";
import { generateMetaData } from "@/lib/generateMetaData";

const inter = Inter({ subsets: ["latin"] });

export const metadata = generateMetaData({
	title: "Shovon | AI Developer & Machine Learning Expert",
	description:
		"Portfolio of Shovon, an AI developer with expertise in artificial intelligence, natural language processing, and mobile app development.",
});

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en" className="select-none">
			<body className={inter.className}>
				<ThemeProvider
					attribute="class"
					defaultTheme="light"
					enableSystem
					disableTransitionOnChange
				>
					<Navbar />
					{children}
				</ThemeProvider>
			</body>
		</html>
	);
}
