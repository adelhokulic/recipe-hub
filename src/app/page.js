import { getRecipes } from "@/services/recipeService";
import RecipeCard from "@/components/RecipeCard";
import BrowseLayout from "@/components/BrowseLayout";
import PageHeader from "@/components/PageHeader";
import { Col, Row } from "react-bootstrap";

const Home = async () => {
	const data = await getRecipes();
	const recipes = data.recipes;
	return (
		<BrowseLayout active="/">
			<PageHeader
				eyebrow="Featured"
				title="Popular Recipes"
				subtitle="Hand-picked dishes to cook this week."
			/>

			<Row xs={1} sm={2} xl={3} className="recipe-grid g-4">
				{recipes.map((recipe) => {
					return (
						<Col key={recipe.id}>
							<RecipeCard recipe={recipe} />
						</Col>
					);
				})}
			</Row>
		</BrowseLayout>
	);
};

export default Home;
