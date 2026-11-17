import Link from "next/link";
import {
	Container,
	Nav,
	Navbar as BsNavbar,
	NavbarCollapse,
	NavbarToggle,
} from "react-bootstrap";

const Navbar = () => {
	return (
		<BsNavbar bg="white" sticky="top" expand="md" className="border-bottom shadow-sm">
			<Container>
				<Link href="/" className="navbar-brand fw-bold fs-4">
					<span className="text-primary">Recipe</span>Hub
				</Link>

				<NavbarToggle aria-controls="main-nav" />

				<NavbarCollapse id="main-nav">
					<Nav className="ms-auto">
						<Link href="/" className="nav-link">
							Home
						</Link>
						<Link href="/recipes" className="nav-link">
							Recipes
						</Link>

						<div className="vr mx-2 d-none d-md-block" />

						<Link href="/meal-type/breakfast" className="nav-link">
							Breakfast
						</Link>
						<Link href="/meal-type/lunch" className="nav-link">
							Lunch
						</Link>
						<Link href="/meal-type/dinner" className="nav-link">
							Dinner
						</Link>
					</Nav>
				</NavbarCollapse>
			</Container>
		</BsNavbar>
	);
};

export default Navbar;
