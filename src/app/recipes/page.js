import { getRecipes } from "@/services/recipeService";
import RecipeCard from "@/components/RecipeCard";
import { Col, Row } from "react-bootstrap";
import NotFound from "@/components/NotFound";
import RecipesPagination from "@/components/RecipesPagination";
import BrowseLayout from "@/components/BrowseLayout";
import PageHeader from "@/components/PageHeader";

const Recipes = async ({ searchParams }) => {
	const query = await searchParams;
	const pageNumber = Math.max(1, Math.floor(Number(query.page))) || 1;
	const pageLimiter = 9;
	const skip = (pageNumber - 1) * pageLimiter;
	const data = await getRecipes(pageLimiter, skip);
	const recipes = data.recipes;

	const totalPages = Math.ceil(data.total / pageLimiter);
	if (pageNumber > totalPages)
		return (
			<NotFound
				title="Page not found"
				message="The page you are looking for does not exist or has been removed"
			/>
		);
	return (
		<BrowseLayout active="/recipes">
			<PageHeader
				eyebrow="Browse"
				title="All Recipes"
				subtitle={`${data.total} recipes · Page ${pageNumber} of ${totalPages}`}
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
			<RecipesPagination currentPage={pageNumber} totalPages={totalPages} />
		</BrowseLayout>
	);
};

export default Recipes;
