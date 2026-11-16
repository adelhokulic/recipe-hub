import Link from "next/link";
import { Card } from "react-bootstrap";

// TODO (kasnije): primi title i message kroz props, da isti blok
// možeš koristiti i za tag ili kuhinju koja ne postoji

const NotFound = () => {
	return (
		<div className="d-flex justify-content-center py-5">
			<Card className="border-0 shadow-sm text-center p-4 p-md-5" style={{ maxWidth: 520 }}>
				<div
					className="bg-primary bg-opacity-10 rounded-circle d-flex align-items-center justify-content-center mx-auto mb-3"
					style={{ width: 96, height: 96, fontSize: "2.8rem" }}
				>
					🍽️
				</div>
				<p className="text-primary fw-bold small text-uppercase mb-1">404</p>
				<h1 className="fs-2 fw-bold">Recipe not found</h1>
				<p className="text-secondary">
					The recipe you are looking for does not exist or has been removed.
				</p>

				<div className="d-flex flex-wrap justify-content-center gap-2 mt-3">
					<Link href="/" className="btn btn-primary rounded-pill px-4">
						Back to home
					</Link>
					<Link href="/recipes" className="btn btn-outline-secondary rounded-pill px-4">
						Browse all recipes
					</Link>
				</div>
			</Card>
		</div>
	);
};

export default NotFound;
