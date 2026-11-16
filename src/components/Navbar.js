import styles from "./Navbar.module.css";

// TODO: uvezi Link iz "next/link" (default import, bez vitičastih zagrada)

const Navbar = () => {
	return (
		<header className={styles.header}>
			<nav className={styles.nav}>
				{/* TODO: zamijeni <a> s <Link> (href ostaje isti) */}
				<a href="/" className={styles.logo}>
					<span className={styles.logoMark}>Recipe</span>Hub
				</a>

				<ul className={styles.links}>
					<li>
						{/* TODO: zamijeni <a> s <Link> */}
						<a href="/" className={styles.link}>
							Home
						</a>
					</li>
					<li>
						{/* TODO: zamijeni <a> s <Link> */}
						<a href="/recipes" className={styles.link}>
							Recipes
						</a>
					</li>
				</ul>
			</nav>
		</header>
	);
};

export default Navbar;
