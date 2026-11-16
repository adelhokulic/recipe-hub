import NotFound from "@/components/NotFound";
import RecipeCard from "@/components/RecipeCard";
import { getRecipeByTag } from "@/services/recipeService";
import { Col, Row } from "react-bootstrap";

const TagsPage = async ({ params }) => {
	const paramsResponse = await params;
	const tag = decodeURIComponent(paramsResponse.tag);
	const data = await getRecipeByTag(tag);
	if (!data)
		return (
			<NotFound
				title={`No recipes found for tag ${tag}`}
				message="The recipes for tag you are looking for do not exist or has been removed"
			/>
		);
	return (
		<>
			<div className="mb-4">
				<h1 className="fw-bold">Recipes tagged "{tag}"</h1>
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

export default TagsPage;
