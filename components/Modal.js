import ModalSubsection from './ModalSubsection'

import { backgroundColorByTypeOfTense } from '../utils/utils'


const Modal = (props) => {
	const backgroundColor = backgroundColorByTypeOfTense(props.dataForModal.type)

	return (
		<div className="modal fade" id="BigModalWithScroll" tabIndex="-1" role="dialog" aria-labelledby="myExtraLargeModalLabel" aria-hidden="true">
			<div className="modal-dialog modal-xl modal-dialog-centered modal-dialog-scrollable">
				<div className="modal-content">
					<div className={`modal-header ${backgroundColor}`}>
						<h5 className="modal-title text-monospace text-white" >{props.dataForModal.name || ''}</h5>
						<button type="button" className="close" data-dismiss="modal" aria-label="Close">
							<span aria-hidden="true">&times;</span>
						</button>
					</div>
					<div className="modal-body pt-4">
						<ModalSubsection title={'When To Use'} data={props.dataForModal.whenToUse || []}/>
						<ModalSubsection title={'Rules'} data={props.dataForModal.rules || []}/>
						<ModalSubsection title={'Examples'} data={props.dataForModal.examples || []}/>
					</div>
					<div className="modal-footer">
						<div className="col-md-6 col-xl-4 mx-auto">
							<button type="button" className="btn btn-md btn-block btn-secondary" data-dismiss="modal">Close</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Modal
