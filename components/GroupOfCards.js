import Card from './Card'
import Modal from '../components/Modal'

import verbTenses from '../data/verbTenses.json'
import { backgroundColorByTypeOfTense } from '../utils/utils'

class GroupOfCards extends React.Component {
	constructor() {
		super();
		this.state = {
			tenses: verbTenses.data,
			dataForModal: {}
		};
	}

	handlerOnClickButtonForOpenModal = (id) => {
		this.state.tenses.map((tense) => {
			if(tense.id === id) {
				this.setState({ dataForModal: tense });
			}
		})
	}

	render() {
		return (
			<React.Fragment>
				<Modal dataForModal={this.state.dataForModal}/>
				{
					this.state.tenses.map(tense => {
						const backgroundColor = backgroundColorByTypeOfTense(tense.type)

						return (
							<Card
								key={tense.id}
								id={tense.id}
								backgroundColor={backgroundColor}
								header={tense.name}
								whenToUse={tense.whenToUse}
								rules={tense.rules}
								examples={tense.examples}
								handlerOnClickButtonForOpenModal={this.handlerOnClickButtonForOpenModal}
							/>
						)
					})
				}
			</React.Fragment>
		)
	}
}
  
export default GroupOfCards