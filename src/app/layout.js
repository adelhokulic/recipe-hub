import { Geist, Geist_Mono } from "next/font/google";
import "bootstrap/dist/css/bootstrap.min.css";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Container } from "react-bootstrap";

const geistSans = Geist({
	variable: "--font-geist-sans",
	subsets: ["latin"],
});

const geistMono = Geist_Mono({
	variable: "--font-geist-mono",
	subsets: ["latin"],
});

export const metadata = {
	title: "RecipeHub",
	description: "Find your perfect recipe",
};

export default function RootLayout({ children }) {
	return (
		<html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
			<body className="d-flex flex-column min-vh-100 bg-light">
				<Navbar />
				<main className="flex-grow-1">
					<Container className="py-4">{children}</Container>
				</main>
				<Footer />
			</body>
		</html>
	);
}
