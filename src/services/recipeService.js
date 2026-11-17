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
export const getRecipes = async (limit = 9, skip = 0) => {
	const response = await fetch(
		`${process.env.RECIPE_API_URL}recipes?limit=${limit}&skip=${skip}`,
		{
			next: {
				revalidate: 3600,
			},
		},
	);
	return await response.json();
};
export const getRecipeById = async (id) => {
	const response = await fetch(`${process.env.RECIPE_API_URL}recipes/${id}`);
	if (response.status === 404) {
		return false;
	}
	return await response.json();
};

export const getRecipeByTag = async (tag) => {
	const response = await fetch(
		`${process.env.RECIPE_API_URL}recipes/tag/${tag}`,
		{
			next: {
				revalidate: 3600,
			},
		},
	);
	const data = await response.json();
	if (data.recipes.length === 0) {
		return false;
	}
	return data;
};

export const getAllRecipes = async () => {
	const response = await fetch(`${process.env.RECIPE_API_URL}recipes?limit=0`, {
		next: {
			revalidate: 3600,
		},
	});
	return await response.json();
};
