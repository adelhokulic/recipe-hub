export const getAllCuisine = async () => {
	const response = await fetch(
		`${process.env.RECIPE_API_URL}recipes?limit=0&select=cuisine`,
		{
			next: {
				revalidate: 3600,
			},
		},
	);
	return await response.json();
};
export const getRecipes = async (limit = 9) => {
	const response = await fetch(
		`${process.env.RECIPE_API_URL}recipes?limit=${limit}`,
		{
			next: {
				revalidate: 3600,
			},
		},
	);
	return await response.json();
};
export const getRecipeById = async (id) => {
	const response = await fetch(`${process.env.RECIPE_API_URL}/recipes/${id}`);
	if (response.status === 404) {
		return false;
	}
	return await response.json();
};
