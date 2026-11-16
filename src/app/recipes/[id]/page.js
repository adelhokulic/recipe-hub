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

const RecipesId = async ({ params }) => {
	const paramsResponse = await params;

	const data = Number(paramsResponse.id)
		? await getRecipeById(paramsResponse.id)
		: null;
	if (!data) {
		return <NotFound />;
	}

	return (
		<article>
			<Link
				href="/"
				className="d-inline-block mb-4 text-secondary text-decoration-none"
			>
				← Back to recipes
			</Link>

			<Row className="g-4 align-items-center mb-5">
				<Col md={6}>
					<div className="ratio ratio-1x1 rounded-4 overflow-hidden shadow-sm">
						<Image
							src={data.image}
							alt={data.name}
							width={600}
							height={600}
							priority
							className="object-fit-cover"
						/>
					</div>
				</Col>

				<Col md={6}>
					<p className="text-primary text-uppercase small fw-semibold mb-1">
						{data.cuisine}
					</p>
					<h1 className="display-6 fw-bold">{data.name}</h1>
					<p className="fw-semibold">
						★ {data.rating}{" "}
						<span className="text-secondary fw-normal">
							({data.reviewCount} reviews)
						</span>
					</p>

					<Row xs={2} lg={4} className="g-2 my-3">
						<Col>
							<Card body className="h-100 border-0 shadow-sm">
								<div className="fs-5 fw-bold">{data.prepTimeMinutes} min</div>
								<div className="small text-secondary">Prep time</div>
							</Card>
						</Col>
						<Col>
							<Card body className="h-100 border-0 shadow-sm">
								<div className="fs-5 fw-bold">{data.cookTimeMinutes} min</div>
								<div className="small text-secondary">Cook time</div>
							</Card>
						</Col>
						<Col>
							<Card body className="h-100 border-0 shadow-sm">
								<div className="fs-5 fw-bold">{data.servings}</div>
								<div className="small text-secondary">Servings</div>
							</Card>
						</Col>
						<Col>
							<Card body className="h-100 border-0 shadow-sm">
								<div className="fs-5 fw-bold">
									{data.caloriesPerServing} kcal
								</div>
								<div className="small text-secondary">Per serving</div>
							</Card>
						</Col>
					</Row>

					<div className="d-flex flex-wrap gap-2">
						{data.tags.map((tag) => {
							return (
								<Link
									key={tag}
									href={`/tags/${tag}`}
									className="btn btn-outline-primary btn-sm rounded-pill"
								>
									#{tag}
								</Link>
							);
						})}
					</div>
				</Col>
			</Row>

			<Row className="g-4 align-items-start">
				<Col md={4}>
					<Card className="border-0 shadow-sm">
						<ToggleIngredients>
							<ListGroup variant="flush">
								{data.ingredients.map((ingredient) => {
									return (
										<ListGroupItem key={ingredient}>
											{ingredient}
										</ListGroupItem>
									);
								})}
							</ListGroup>
						</ToggleIngredients>
					</Card>
				</Col>

				<Col md={8}>
					<Card className="border-0 shadow-sm">
						<CardHeader className="bg-white py-3">
							<h2 className="fs-5 fw-bold mb-0">Instructions</h2>
						</CardHeader>
						<ListGroup as="ol" numbered variant="flush">
							{data.instructions.map((instruction) => {
								return (
									<ListGroupItem as="li" key={instruction}>
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
