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
		<Card className="recipe-card h-100 border-0 shadow-sm overflow-hidden">
			<div className="ratio ratio-4x3">
				<Image
					src={recipe.image}
					alt={recipe.name}
					width={500}
					height={375}
					className="object-fit-cover"
				/>
				<div className="p-2 d-flex justify-content-end align-items-start">
					<Badge bg="dark" pill className="bg-opacity-75">
						★ {recipe.rating}
					</Badge>
				</div>
			</div>

			<CardBody className="d-flex flex-column">
				<p className="text-primary text-uppercase small fw-semibold mb-1">
					{recipe.cuisine}
				</p>

				<CardTitle as="h2" className="fs-5">
					<Link
						href={`/recipes/${recipe.id}`}
						className="stretched-link text-dark text-decoration-none"
					>
						{recipe.name}
					</Link>
				</CardTitle>

				<div className="mt-auto pt-2 d-flex justify-content-between align-items-center text-secondary">
					<span>⏱ {recipe.prepTimeMinutes} min</span>

					<Badge bg={diffColor(recipe.difficulty)} pill>
						{recipe.difficulty}
					</Badge>
				</div>
			</CardBody>
		</Card>
	);
};

export default RecipeCard;
