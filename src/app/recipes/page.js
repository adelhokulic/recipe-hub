import { getRecipes } from "@/services/recipeService";
import RecipeCard from "@/components/RecipeCard";
import { Col, Row } from "react-bootstrap";
import NotFound from "@/components/NotFound";
import RecipesPagination from "@/components/RecipesPagination";

const Recipes = async ({ searchParams }) => {
	const query = await searchParams;
	const pageNumber = Math.max(1, Number(query.page)) || 1;
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
		<>
			<div className="mb-4">
				<h1 className="fw-bold">All Recipes</h1>
				<p className="text-secondary mb-0">
					Page {pageNumber} of {totalPages}
				</p>
			</div>

			<Row xs={1} sm={2} lg={3} className="g-4">
				{recipes.map((recipe) => {
					return (
						<Col key={recipe.id}>
							<RecipeCard recipe={recipe} />
						</Col>
					);
				})}
			</Row>
			<RecipesPagination currentPage={pageNumber} totalPages={totalPages} />
		</>
	);
};

export default Recipes;
