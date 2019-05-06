const ModalSubsection = (props) => {
	return (
		<React.Fragment>
			<h6 className="mt-2 mb-1 font-weight-bold">{props.title}</h6>
			
			<ul className="list-style">
				{
					
					props.data.map( (data, index) => {
						return (
							<li key={index} className="mb-1">{data}</li>
						)
					})
				}
			</ul>
		</React.Fragment>
	)
}

export default ModalSubsection