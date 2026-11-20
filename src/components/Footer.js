import Link from "next/link";
import { Col, Container, Row } from "react-bootstrap";
import { getTopCuisines } from "@/services/recipeService";

const Footer = async () => {
	const topCuisines = await getTopCuisines(5);

	return (
		<footer className="app-footer bg-white border-top mt-5">
			<Container className="py-5">
				<Row className="gy-4">
					<Col md={6}>
						<Link href="/" className="brand-logo fs-5">
							<span>Recipe</span>Hub
						</Link>
						<p className="text-secondary mt-2 mb-0" style={{ maxWidth: 320 }}>
							Simple recipes from kitchens around the world.
						</p>
					</Col>

					<Col xs={6} md={3}>
						<h2 className="sidebar-title ms-0 mb-3">Cuisines</h2>
						<ul className="list-unstyled d-flex flex-column gap-2 mb-0">
							{topCuisines.map((cuisine) => {
								return (
									<li key={cuisine.name}>
										<Link href={`/cuisine/${cuisine.name}`}>{cuisine.name}</Link>
									</li>
								);
							})}
						</ul>
					</Col>

					<Col xs={6} md={3}>
						<h2 className="sidebar-title ms-0 mb-3">Popular tags</h2>
						<ul className="list-unstyled d-flex flex-column gap-2 mb-0">
							<li>
								<Link href="/tags/Pizza">Pizza</Link>
							</li>
							<li>
								<Link href="/tags/Dessert">Dessert</Link>
							</li>
							<li>
								<Link href="/tags/Vegetarian">Vegetarian</Link>
							</li>
							<li>
								<Link href="/tags/Quick">Quick</Link>
							</li>
						</ul>
					</Col>
				</Row>
			</Container>

			<div className="border-top">
				<Container className="py-3 d-flex flex-column flex-sm-row justify-content-between gap-2 small text-secondary">
					<span>© {new Date().getFullYear()} RecipeHub</span>
					<span>
						Data from{" "}
						<a href="https://dummyjson.com" target="_blank" rel="noopener noreferrer">
							DummyJSON
						</a>{" "}
						· Built by{" "}
						<a
							href="https://github.com/adelhokulic"
							target="_blank"
							rel="noopener noreferrer"
						>
							Adel Hokulić
						</a>
					</span>
				</Container>
			</div>
		</footer>
	);
};

export default Footer;
