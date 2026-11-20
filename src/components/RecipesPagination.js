import Link from "next/link";
const RecipesPagination = ({ currentPage, totalPages }) => {
	return (
		<nav aria-label="Recipes pages" className="mt-5">
			<ul className="pagination justify-content-between align-items-center gap-3 surface p-2 mb-0">
				<li className={`page-item ${currentPage === 1 ? "disabled" : ""}`}>
					<Link
						href={`/recipes?page=${currentPage - 1}`}
						className="page-link rounded-pill border-0 px-3 fw-medium"
					>
						« Previous
					</Link>
				</li>

				<li className="text-secondary small">
					Page <span className="fw-bold text-body">{currentPage}</span> of{" "}
					{totalPages}
				</li>

				<li
					className={`page-item ${currentPage === totalPages ? "disabled" : ""}`}
				>
					<Link
						href={`/recipes?page=${currentPage + 1}`}
						className="page-link rounded-pill border-0 px-3 fw-medium"
					>
						Next »
					</Link>
				</li>
			</ul>
		</nav>
	);
};

export default RecipesPagination;
