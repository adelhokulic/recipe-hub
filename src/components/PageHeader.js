const PageHeader = ({ eyebrow, title, subtitle }) => {
	return (
		<header className="page-header fade-in">
			{eyebrow && <p className="eyebrow mb-1">{eyebrow}</p>}
			<h1 className="fw-bold mb-1">{title}</h1>
			{subtitle && <p className="text-secondary mb-0">{subtitle}</p>}
		</header>
	);
};

export default PageHeader;
