import Link from "next/link";
import Image from "next/image";
import { Badge, Card, CardBody, CardTitle } from "react-bootstrap";

const RecipeCard = ({ recipe }) => {
	const diffColor = (diff) => {
		if (diff === "Easy") {
			return "success";
		} else if (diff === "Medium") {
			return "warning";
		} else {
			return "danger";
		}
	};
	return (
		<Card className="recipe-card h-100 overflow-hidden">
			<div className="card-media ratio ratio-4x3 overflow-hidden">
				<Image
					src={recipe.image}
					alt={recipe.name}
					width={500}
					height={375}
					className="object-fit-cover"
				/>
				<div className="p-3 d-flex justify-content-end align-items-start">
					<Badge pill className="rating-badge fw-semibold shadow-sm">
						★ {recipe.rating}
					</Badge>
				</div>
			</div>

			<CardBody className="d-flex flex-column p-3 p-xl-4">
				<p className="eyebrow mb-2">{recipe.cuisine}</p>

				<CardTitle as="h2" className="fs-5 fw-semibold lh-sm mb-3">
					<Link
						href={`/recipes/${recipe.id}`}
						className="stretched-link text-body text-decoration-none"
					>
						{recipe.name}
					</Link>
				</CardTitle>

				<div className="mt-auto pt-3 border-top d-flex justify-content-between align-items-center small text-secondary">
					<span>⏱ {recipe.prepTimeMinutes} min prep</span>

					<Badge
						pill
						bg={`${diffColor(recipe.difficulty)}-subtle`}
						text={`${diffColor(recipe.difficulty)}-emphasis`}
						className="fw-semibold"
					>
						{recipe.difficulty}
					</Badge>
				</div>
			</CardBody>
		</Card>
	);
};

export default RecipeCard;
