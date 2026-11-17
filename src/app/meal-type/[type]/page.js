import NotFound from "@/components/NotFound";
import RecipeCard from "@/components/RecipeCard";
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
		<>
			<div className="mb-4">
				<h1 className="fw-bold">
					<span className="text-capitalize">{type}</span> recipes
				</h1>
				<p className="text-secondary mb-0">Number of recipes: {data.total}</p>
			</div>

			<Row xs={1} sm={2} lg={3} className="g-4">
				{data.recipes.map((recipe) => {
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

export default MealType;
