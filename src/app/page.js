import { getRecipes } from "@/services/recipeService";
import styles from "./page.module.css";
import RecipeCard from "@/components/RecipeCard";

const Home = async () => {
	const data = await getRecipes();
	const recipes = data.recipes;
	return (
		<>
			<div className={styles.heading}>
				<h1 className={styles.title}>Popular Recipes</h1>
				<p className={styles.subtitle}>Hand-picked dishes to cook this week.</p>
			</div>

			<div className={styles.grid}>
				{recipes.map((recipe) => {
					return <RecipeCard key={recipe.id} recipe={recipe} />;
				})}
			</div>
		</>
	);
};

export default Home;
