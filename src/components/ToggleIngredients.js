"use client";

import { useState } from "react";
import { Button, Card } from "react-bootstrap";

const ToggleIngredients = ({ children }) => {
	const [isVisible, setIsVisible] = useState(true);

	return (
		<>
			<Card.Header className="bg-white d-flex justify-content-between align-items-center py-3">
				<h2 className="fs-5 fw-bold mb-0">Ingredients</h2>
				<Button
					variant="outline-primary"
					size="sm"
					className="rounded-pill px-3"
					onClick={() => setIsVisible(!isVisible)}
				>
					{isVisible ? "Hide" : "Show"}
				</Button>
			</Card.Header>

			{isVisible && children}
		</>
	);
};

export default ToggleIngredients;
