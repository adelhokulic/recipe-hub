import Link from "next/link";

const NotFound = ({
	title = "Recipe not found",
	message = "The recipe you are looking for does not exist or has been removed",
}) => {
	return (
		<div className="d-flex justify-content-center py-5 fade-in">
			<div className="surface text-center p-4 p-md-5" style={{ maxWidth: 520 }}>
				<div
					className="bg-primary-subtle rounded-circle d-flex align-items-center justify-content-center mx-auto mb-3"
					style={{ width: 96, height: 96, fontSize: "2.8rem" }}
				>
					🍽️
				</div>
				<p className="eyebrow mb-1">404</p>
				<h1 className="fs-2 fw-bold">{title}</h1>
				<p className="text-secondary">{message}</p>

				<div className="d-flex flex-wrap justify-content-center gap-2 mt-3">
					<Link href="/" className="btn btn-primary rounded-pill px-4">
						Back to home
					</Link>
					<Link href="/recipes" className="btn btn-outline-secondary rounded-pill px-4">
						Browse all recipes
					</Link>
				</div>
			</div>
		</div>
	);
};

export default NotFound;
