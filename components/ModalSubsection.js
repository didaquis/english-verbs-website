const ModalSubsection = (props) => {
	return (
		<React.Fragment>
			<h6 className="mt-2 mb-1 font-weight-bold">{props.title}</h6>
			
			<div className="mb-4">
				{
					
					props.data.map( (data, index) => {
						return (
							<p key={index} className="mb-1">{data}</p>
						)
					})
				}
			</div>
		</React.Fragment>
	)
}

export default ModalSubsection