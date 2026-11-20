import NotFound from "@/components/NotFound";
import RecipeCard from "@/components/RecipeCard";
import BrowseLayout from "@/components/BrowseLayout";
import PageHeader from "@/components/PageHeader";
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
				message="The recipes for tag you are looking for do not exist or have been removed"
			/>
		);
	return (
		<BrowseLayout active={`/tags/${tag}`}>
			<PageHeader
				eyebrow="Tag"
				title={`Recipes tagged "${tag}"`}
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

export default TagsPage;
