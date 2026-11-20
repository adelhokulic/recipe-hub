import "bootstrap/dist/css/bootstrap.min.css";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Container } from "react-bootstrap";

export const metadata = {
	title: "RecipeHub",
	description: "Find your perfect recipe",
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body className="d-flex flex-column min-vh-100">
				<Navbar />
				<main className="flex-grow-1">
					<Container className="py-4 py-lg-5">{children}</Container>
				</main>
				<Footer />
			</body>
		</html>
	);
}
