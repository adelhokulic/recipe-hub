"use client";

import { useState } from "react";
import { Button, Card, InputGroup } from "react-bootstrap";

const CalorieCalculator = ({ caloriesPerServing, servings }) => {
	const [choosenServings, setChoosenServings] = useState(servings);

	const caloriesSum = choosenServings * caloriesPerServing;

	return (
		<Card body className="surface bg-primary-subtle border-primary-subtle">
			<div className="d-flex flex-wrap justify-content-between align-items-center gap-3">
				<div>
					<div className="small fw-semibold text-primary-emphasis mb-1">
						Calories for servings
					</div>
					<InputGroup size="sm" style={{ width: 140 }}>
						<Button
							disabled={choosenServings === 1}
							onClick={() => setChoosenServings(choosenServings - 1)}
							variant="outline-primary"
						>
							−
						</Button>
						<InputGroup.Text className="flex-grow-1 justify-content-center bg-white fw-bold border-primary">
							{choosenServings}
						</InputGroup.Text>
						<Button
							variant="outline-primary"
							onClick={() => setChoosenServings(choosenServings + 1)}
						>
							+
						</Button>
					</InputGroup>
				</div>

				<div className="text-end">
					<div className="fs-3 fw-bold text-primary lh-1">{caloriesSum} kcal</div>
					<div className="small text-secondary mt-1">
						{caloriesPerServing} kcal per serving
					</div>
				</div>
			</div>
		</Card>
	);
};

export default CalorieCalculator;
