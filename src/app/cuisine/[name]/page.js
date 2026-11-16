import NotFound from "@/components/NotFound";
import RecipeCard from "@/components/RecipeCard";
import {
	getAllRecipes,
} from "@/services/recipeService";
import { Col, Row } from "react-bootstrap";

const CuisinePage = async ({ params }) => {
	const paramsResponse = await params;
	const cuisine = decodeURIComponent(paramsResponse.name);
	const data = await getAllRecipes();
	const filtered = data.recipes.filter((recipe) => recipe.cuisine === cuisine);
	if (filtered.length === 0)
		return (
			<NotFound
				title={`No recipes found for cuisine ${cuisine}`}
				message="The recipes for cuisine you are looking for do not exist or have been removed"
			/>
		);
	return (
		<>
			<div className="mb-4">
				<h1 className="fw-bold">Recipes from cuisine "{cuisine}"</h1>
				<p className="text-secondary mb-0">Number of recipes: {filtered.length}</p>
			</div>

			<Row xs={1} sm={2} lg={3} className="g-4">
				{filtered.map((recipe) => {
					return (
						<Col key={recipe.id}>
							<RecipeCard recipe={recipe} />
						</Col>
					);
				})}
			</Row>
		</>
	);
};

export default CuisinePage;
