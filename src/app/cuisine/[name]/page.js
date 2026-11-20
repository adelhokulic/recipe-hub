import NotFound from "@/components/NotFound";
import RecipeCard from "@/components/RecipeCard";
import BrowseLayout from "@/components/BrowseLayout";
import PageHeader from "@/components/PageHeader";
import { getAllRecipes } from "@/services/recipeService";
import { Col, Row } from "react-bootstrap";

const CuisinePage = async ({ params }) => {
	const paramsResponse = await params;
	const cuisine = decodeURIComponent(paramsResponse.name);
	const data = await getAllRecipes();
	const filtered = data.recipes.filter(
		(recipe) => recipe.cuisine.toLowerCase() === cuisine.toLowerCase(),
	);
	if (filtered.length === 0)
		return (
			<NotFound
				title={`No recipes found for cuisine ${cuisine}`}
				message="The recipes for cuisine you are looking for do not exist or have been removed"
			/>
		);
	return (
		<BrowseLayout active={`/cuisine/${cuisine}`}>
			<PageHeader
				eyebrow="Cuisine"
				title={`Recipes from cuisine "${cuisine}"`}
				subtitle={`${filtered.length} ${filtered.length === 1 ? "recipe" : "recipes"}`}
			/>

			<Row xs={1} sm={2} xl={3} className="recipe-grid g-4">
				{filtered.map((recipe) => {
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

export default CuisinePage;
