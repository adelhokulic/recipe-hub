import { getRecipes } from "@/services/recipeService";
import RecipeCard from "@/components/RecipeCard";
import { Col, Row } from "react-bootstrap";

const Home = async () => {
	const data = await getRecipes();
	const recipes = data.recipes;
	return (
		<>
			<div className="mb-4">
				<h1 className="fw-bold">Popular Recipes</h1>
				<p className="text-secondary mb-0">Hand-picked dishes to cook this week.</p>
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

export default Home;
