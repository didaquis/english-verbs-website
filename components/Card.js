import CardSubsection from './CardSubsection'

function Card(props) {
	return (
		<div className="col-md-6 col-xl-3 mb-3">
			<div className={`card ${props.backgroundColor}`}>
				<div style={{ minHeight: '74px' }} className="card-header">
					<h5 className="card-title mb-0 text-monospace text-white">{props.header}</h5>
				</div>
				<div className="card-body bg-light">
					<CardSubsection title={'When To Use'} data={props.whenToUse}/>
					<CardSubsection title={'Rules'} data={props.rules}/>
					<CardSubsection title={'Examples'} data={props.examples}/>
					<button type="button" className="btn btn-md btn-block btn-outline-dark">More examples</button>
				</div>
			</div>
		</div>
	)
}

export default Card