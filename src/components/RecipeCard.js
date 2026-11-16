import Link from "next/link";
import styles from "./RecipeCard.module.css";
import Image from "next/image";

const RecipeCard = ({ recipe }) => {
	return (
		<Link href={`/recipes/${recipe.id}`} className={styles.card}>
			<div className={styles.imageWrapper}>
				<Image
					src={recipe.image}
					alt={recipe.name}
					width="500"
					height="300"
					className={styles.image}
				/>
				<span className={styles.rating}>★ {recipe.rating}</span>
			</div>

			<div className={styles.body}>
				<p className={styles.cuisine}>{recipe.cuisine}</p>

				<h2 className={styles.title}>{recipe.name}</h2>

				<div className={styles.meta}>
					<span>⏱ {recipe.prepTimeMinutes} min</span>

					<span
						className={`${styles.badge} ${styles[recipe.difficulty.toLowerCase()]}`}
					>
						{recipe.difficulty}
					</span>
				</div>
			</div>
		</Link>
	);
};

export default RecipeCard;
