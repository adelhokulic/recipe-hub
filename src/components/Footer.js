import Link from "next/link";
import { Col, Container, Row } from "react-bootstrap";
import { getAllCuisine } from "@/services/recipeService";

const Footer = async () => {
	const cuisines = await getAllCuisine();
	const counts = cuisines.recipes.reduce((sum, recipe) => {
		sum[recipe.cuisine] = sum[recipe.cuisine] + 1 || 1;
		return sum;
	}, {});
	const names = Object.keys(counts);
	names.sort((a, b) => counts[b] - counts[a]);

	const topCuisines = names.slice(0, 5);
	return (
		<footer className="bg-white border-top mt-5">
			<Container className="py-5">
				<Row className="gy-4">
					<Col md={6}>
						<Link href="/" className="fw-bold fs-5 text-dark text-decoration-none">
							<span className="text-primary">Recipe</span>Hub
						</Link>
						<p className="text-secondary mt-2 mb-0">
							Simple recipes from kitchens around the world.
						</p>
					</Col>

					<Col xs={6} md={3}>
						<h6 className="text-uppercase fw-bold small mb-3">Cuisines</h6>
						<ul className="list-unstyled d-flex flex-column gap-2 mb-0">
							{topCuisines.map((cuisine) => {
								return (
									<li key={cuisine}>
										<Link
											href={`/cuisine/${cuisine}`}
											className="text-secondary text-decoration-none"
										>
											{cuisine}
										</Link>
									</li>
								);
							})}
						</ul>
					</Col>

					<Col xs={6} md={3}>
						<h6 className="text-uppercase fw-bold small mb-3">Popular tags</h6>
						<ul className="list-unstyled d-flex flex-column gap-2 mb-0">
							<li>
								<Link href="/tags/Pizza" className="text-secondary text-decoration-none">
									Pizza
								</Link>
							</li>
							<li>
								<Link href="/tags/Dessert" className="text-secondary text-decoration-none">
									Dessert
								</Link>
							</li>
							<li>
								<Link href="/tags/Vegetarian" className="text-secondary text-decoration-none">
									Vegetarian
								</Link>
							</li>
							<li>
								<Link href="/tags/Quick" className="text-secondary text-decoration-none">
									Quick
								</Link>
							</li>
						</ul>
					</Col>
				</Row>
			</Container>

			<div className="border-top py-3 text-center small text-secondary">
				© {new Date().getFullYear()} RecipeHub. Data from{" "}
				<a href="https://dummyjson.com" target="_blank" rel="noopener noreferrer">
					DummyJSON
				</a>
				.
			</div>
		</footer>
	);
};

export default Footer;
