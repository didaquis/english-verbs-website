const CardSubsection = (props) => {
	const limitOfParagraphs = 3
	return (
		<React.Fragment>
			<h6 className="card-subtitle mt-2 mb-1 font-weight-bold">{props.title}</h6>
			
			<div className="mb-4">
				{
					props.data.map( (data, index) => {
						if (index >= limitOfParagraphs) {
							return null
						}

						return (
							<p key={index} className="card-text mb-1">{data}</p>
						)
					})
				}
			</div>
		</React.Fragment>
	)
}

export default CardSubsection