import { getRecipeById } from "@/services/recipeService";
import Link from "next/link";
import NotFound from "@/components/NotFound";

import {
	Card,
	CardHeader,
	Col,
	ListGroup,
	ListGroupItem,
	Row,
} from "react-bootstrap";
import Image from "next/image";
import ToggleIngredients from "@/components/ToggleIngredients";
import CalorieCalculator from "@/components/CalorieCalculator";

const RecipesId = async ({ params }) => {
	const paramsResponse = await params;

	const data = Number(paramsResponse.id)
		? await getRecipeById(paramsResponse.id)
		: null;
	if (!data) {
		return <NotFound />;
	}

	return (
		<article className="fade-in">
			<Link
				href="/recipes"
				className="d-inline-flex align-items-center gap-1 mb-4 small fw-medium text-secondary text-decoration-none"
			>
				← Back to recipes
			</Link>

			<Row className="g-4 g-xl-5">
				<Col lg={5}>
					<div className="sticky-media d-flex flex-column gap-3">
						<div className="recipe-media ratio ratio-1x1">
							<Image
								src={data.image}
								alt={data.name}
								width={600}
								height={600}
								priority
								className="object-fit-cover"
							/>
						</div>

						<div className="d-flex flex-wrap gap-2">
							{data.tags.map((tag) => {
								return (
									<Link key={tag} href={`/tags/${tag}`} className="tag-pill">
										#{tag}
									</Link>
								);
							})}
						</div>
					</div>
				</Col>

				<Col lg={7} className="d-flex flex-column gap-4">
					<header>
						<p className="eyebrow mb-2">{data.cuisine}</p>
						<h1 className="display-6 fw-bold mb-2">{data.name}</h1>
						<p className="mb-0 fw-semibold">
							<span className="text-warning">★</span> {data.rating}{" "}
							<span className="text-secondary fw-normal">
								({data.reviewCount} reviews)
							</span>
						</p>
					</header>

					<div className="surface p-3">
						<Row xs={2} md={4} className="g-2">
							<Col>
								<div className="stat-tile">
									<div className="stat-value">{data.prepTimeMinutes} min</div>
									<div className="stat-label">Prep time</div>
								</div>
							</Col>
							<Col>
								<div className="stat-tile">
									<div className="stat-value">{data.cookTimeMinutes} min</div>
									<div className="stat-label">Cook time</div>
								</div>
							</Col>
							<Col>
								<div className="stat-tile">
									<div className="stat-value">{data.servings}</div>
									<div className="stat-label">Servings</div>
								</div>
							</Col>
							<Col>
								<div className="stat-tile">
									<div className="stat-value">{data.caloriesPerServing} kcal</div>
									<div className="stat-label">Per serving</div>
								</div>
							</Col>
						</Row>
					</div>

					<CalorieCalculator
						caloriesPerServing={data.caloriesPerServing}
						servings={data.servings}
					/>

					<Card className="surface overflow-hidden">
						<ToggleIngredients>
							<ListGroup variant="flush">
								{data.ingredients.map((ingredient) => {
									return (
										<ListGroupItem key={ingredient} className="px-4 py-2">
											{ingredient}
										</ListGroupItem>
									);
								})}
							</ListGroup>
						</ToggleIngredients>
					</Card>

					<Card className="surface overflow-hidden">
						<CardHeader className="bg-white py-3 px-4">
							<h2 className="fs-5 fw-bold mb-0">Instructions</h2>
						</CardHeader>
						<ListGroup as="ol" numbered variant="flush" className="steps-list">
							{data.instructions.map((instruction) => {
								return (
									<ListGroupItem as="li" key={instruction} className="px-4">
										{instruction}
									</ListGroupItem>
								);
							})}
						</ListGroup>
					</Card>
				</Col>
			</Row>
		</article>
	);
};
export default RecipesId;
