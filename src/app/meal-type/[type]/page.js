import NotFound from "@/components/NotFound";
import RecipeCard from "@/components/RecipeCard";
import BrowseLayout from "@/components/BrowseLayout";
import PageHeader from "@/components/PageHeader";
import { getRecipeByMealType } from "@/services/recipeService";
import { Col, Row } from "react-bootstrap";

const MealType = async ({ params }) => {
	const paramsResponse = await params;
	const type = decodeURIComponent(paramsResponse.type);
	const data = await getRecipeByMealType(type);
	if (!data)
		return (
			<NotFound
				title={`No recipes found for meal type ${type}`}
				message="The recipes for meal type you are looking for do not exist or have been removed"
			/>
		);
	return (
		<BrowseLayout active={`/meal-type/${type}`}>
			<PageHeader
				eyebrow="Meal type"
				title={
					<>
						<span className="text-capitalize">{type}</span> recipes
					</>
				}
				subtitle={`${data.total} ${data.total === 1 ? "recipe" : "recipes"}`}
			/>

			<Row xs={1} sm={2} xl={3} className="recipe-grid g-4">
				{data.recipes.map((recipe) => {
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

export default MealType;
