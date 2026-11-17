import Link from "next/link";
const RecipesPagination = ({ currentPage, totalPages }) => {
	return (
		<nav aria-label="Recipes pages" className="mt-5">
			<ul className="pagination justify-content-center align-items-center gap-3">
				<li className={`page-item ${currentPage === 1 ? "disabled" : ""}`}>
					<Link
						href={`/recipes?page=${currentPage - 1}`}
						className="page-link rounded-pill px-3"
					>
						« Previous
					</Link>
				</li>

				<li className="text-secondary small">
					Page {currentPage} of {totalPages}
				</li>

				<li
					className={`page-item ${currentPage === totalPages ? "disabled" : ""}`}
				>
					<Link
						href={`/recipes?page=${currentPage + 1}`}
						className="page-link rounded-pill px-3"
					>
						Next »
					</Link>
				</li>
			</ul>
		</nav>
	);
};

export default RecipesPagination;
