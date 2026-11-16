import Link from "next/link";
import styles from "./Footer.module.css";
import { getAllCuisine } from "@/services/recipeService";

const Footer = async () => {
	const cuisines = await getAllCuisine();
	const counts = cuisines.recipes.reduce((sum, recipe) => {
		sum[recipe.cuisine] = sum[recipe.cuisine] + 1 || 1;
		return sum;
	}, {});
	const names = Object.keys(counts);
	names.sort((a, b) => counts[b] - counts[a]);

	const topCuisines = names.slice(0,5);
	return (
		<footer className={styles.footer}>
			<div className={styles.inner}>
				<div className={styles.brand}>
					<Link href="/" className={styles.logo}>
						<span className={styles.logoMark}>Recipe</span>Hub
					</Link>
					<p className={styles.tagline}>
						Simple recipes from kitchens around the world.
					</p>
				</div>

				<div className={styles.column}>
					<h3 className={styles.heading}>Cuisines</h3>
					<ul className={styles.list}>
						{topCuisines.map((cuisine) => {
							return (
								<li key={cuisine}>
									<Link href={`/cuisine/${cuisine}`}>
										{cuisine}
									</Link>
								</li>
							);
						})}
					</ul>
				</div>

				<div className={styles.column}>
					<h3 className={styles.heading}>Popular tags</h3>
					<ul className={styles.list}>
						<li>
							<Link href="/tags/Pizza">Pizza</Link>
						</li>
						<li>
							<Link href="/tags/Dessert">Dessert</Link>
						</li>
						<li>
							<Link href="/tags/Vegetarian">Vegetarian</Link>
						</li>
						<li>
							<Link href="/tags/Quick">Quick</Link>
						</li>
					</ul>
				</div>
			</div>

			<div className={styles.bottom}>
				<p>
					© {new Date().getFullYear()} RecipeHub. Data from{" "}
					<a
						href="https://dummyjson.com"
						target="_blank"
						rel="noopener noreferrer"
					>
						DummyJSON
					</a>
					.
				</p>
			</div>
		</footer>
	);
};

export default Footer;
