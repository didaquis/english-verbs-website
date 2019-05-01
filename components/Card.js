function Card(props) {
  return (
	<div className="col-md-6 col-xl-4 mb-3">
		<div className={`card ${props.backgroundColor}`}>
			<div className="card-header">
				<h5 className="card-title mb-0 text-monospace text-white">Special title treatment</h5>
			</div>
			<div className="card-body bg-light">
				<h6 className="card-subtitle mb-2 text-monospace">Card subtitle</h6>
				<p className="card-text mb-4">With supporting text below as a natural lead-in to additional content.</p>

				<h6 className="card-subtitle mb-2 text-monospace">Card subtitle</h6>
				<p className="card-text mb-4">With supporting text below as a natural lead-in to additional content.</p>

				<h6 className="card-subtitle mb-2 text-monospace">Card subtitle</h6>
				<p className="card-text mb-4">With supporting text below as a natural lead-in to additional content.</p>
				
				<button type="button" className="btn btn-md btn-block btn-outline-dark">More examples</button>
			</div>
		</div>
	</div>
  )
}

export default Card