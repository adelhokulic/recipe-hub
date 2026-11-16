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
