import { getAllRecipes } from "@/services/recipeService";
import RecipeCard from "@/components/RecipeCard";
import { Col, Row } from "react-bootstrap";

const Recipes = async () => {
	const data = await getAllRecipes();
	const recipes = data.recipes;
	return (
		<>
			<div className="mb-4">
				<h1 className="fw-bold">All Recipes</h1>
				<p className="text-secondary mb-0">Number of recipes: {data.total}</p>
			</div>

			{/* xs={1}: jedna kolona na mobitelu, sm={2}: dvije, lg={3}: tri */}
			<Row xs={1} sm={2} lg={3} className="g-4">
				{recipes.map((recipe) => {
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

export default Recipes;
