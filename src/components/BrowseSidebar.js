import Link from "next/link";
import { getTopCuisines } from "@/services/recipeService";

const mealTypes = [
	"Breakfast",
	"Lunch",
	"Dinner",
	"Snack",
	"Dessert",
	"Appetizer",
	"Side Dish",
	"Beverage",
];

const popularTags = [
	"Pizza",
	"Pasta",
	"Chicken",
	"Vegetarian",
	"Salad",
	"Soup",
	"Dessert",
	"Quick",
];

const BrowseSidebar = async ({ active = "" }) => {
	const topCuisines = await getTopCuisines(6);
	const current = active.toLowerCase();

	const linkClass = (href) => {
		return `sidebar-link ${href.toLowerCase() === current ? "active" : ""}`;
	};

	const chipClass = (href) => {
		return `chip ${href.toLowerCase() === current ? "active" : ""}`;
	};

	return (
		<>
			<nav aria-label="Browse recipes" className="chip-row d-lg-none mb-4">
				<Link href="/recipes" className={chipClass("/recipes")}>
					All recipes
				</Link>
				{mealTypes.map((type) => {
					const href = `/meal-type/${type.toLowerCase()}`;
					return (
						<Link key={type} href={href} className={chipClass(href)}>
							{type}
						</Link>
					);
				})}
			</nav>

			<aside className="sidebar-sticky d-none d-lg-block">
				<div className="surface p-3 d-flex flex-column gap-4">
					<div>
						<Link href="/recipes" className={linkClass("/recipes")}>
							All recipes
						</Link>
					</div>

					<div>
						<h2 className="sidebar-title">Meal type</h2>
						{mealTypes.map((type) => {
							const href = `/meal-type/${type.toLowerCase()}`;
							return (
								<Link key={type} href={href} className={linkClass(href)}>
									{type}
								</Link>
							);
						})}
					</div>

					<div>
						<h2 className="sidebar-title">Top cuisines</h2>
						{topCuisines.map((cuisine) => {
							const href = `/cuisine/${cuisine.name}`;
							return (
								<Link key={cuisine.name} href={href} className={linkClass(href)}>
									{cuisine.name}
									<span className="badge rounded-pill text-bg-light fw-medium">
										{cuisine.count}
									</span>
								</Link>
							);
						})}
					</div>

					<div>
						<h2 className="sidebar-title">Popular tags</h2>
						<div className="d-flex flex-wrap gap-2 px-2">
							{popularTags.map((tag) => {
								const href = `/tags/${tag}`;
								return (
									<Link key={tag} href={href} className={chipClass(href)}>
										#{tag}
									</Link>
								);
							})}
						</div>
					</div>
				</div>
			</aside>
		</>
	);
};

export default BrowseSidebar;
