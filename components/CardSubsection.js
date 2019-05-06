const CardSubsection = (props) => {
	const limitOfParagraphs = 3
	return (
		<React.Fragment>
			<h6 className="card-subtitle mt-2 mb-1 font-weight-bold">{props.title}</h6>
			
			<ul className="list-style">
				{
					props.data.map( (data, index) => {
						if (index >= limitOfParagraphs) {
							return null
						}

						return (
							<li key={index} className="mb-1">{data}</li>
						)
					})
				}
			</ul>
		</React.Fragment>
	)
}

export default CardSubsection