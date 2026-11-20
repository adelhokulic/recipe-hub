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
		<BsNavbar sticky="top" expand="md" className="app-navbar border-bottom py-0">
			<Container className="h-100">
				<Link href="/" className="navbar-brand brand-logo fs-4">
					<span>Recipe</span>Hub
				</Link>

				<NavbarToggle aria-controls="main-nav" className="border-0 shadow-none" />

				<NavbarCollapse id="main-nav">
					<Nav className="ms-auto align-items-md-center gap-md-1">
						<Link href="/" className="nav-link">
							Home
						</Link>
						<Link href="/recipes" className="nav-link">
							Recipes
						</Link>

						<div className="vr mx-2 my-3 d-none d-md-block" />

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
