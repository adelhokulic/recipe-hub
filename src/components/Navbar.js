import Link from "next/link";
import { Container, Nav, Navbar as BsNavbar } from "react-bootstrap";

// Bootstrapov Navbar preimenujemo u BsNavbar, jer se i naša komponenta zove Navbar
const Navbar = () => {
	return (
		<BsNavbar bg="white" sticky="top" className="border-bottom shadow-sm">
			<Container>
				<Link href="/" className="navbar-brand fw-bold fs-4">
					<span className="text-primary">Recipe</span>Hub
				</Link>

				<Nav className="ms-auto">
					<Link href="/" className="nav-link">
						Home
					</Link>
					<Link href="/recipes" className="nav-link">
						Recipes
					</Link>
				</Nav>
			</Container>
		</BsNavbar>
	);
};

export default Navbar;
