function Jumbotron(props) {
	return (
		<div className="jumbotron mt-4 bg-dark text-light">
			<h1 className="mb-2">{props.title}</h1>
			<h2 className="mb-0">{props.subtitle}</h2>
		</div>
	)
}

export default Jumbotron