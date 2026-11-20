import { Col, Row } from "react-bootstrap";
import BrowseSidebar from "@/components/BrowseSidebar";

const BrowseLayout = ({ active, children }) => {
	return (
		<Row className="g-4 g-xl-5">
			<Col lg={3}>
				<BrowseSidebar active={active} />
			</Col>
			<Col lg={9}>{children}</Col>
		</Row>
	);
};

export default BrowseLayout;
