import Card from './Card'
import Modal from '../components/Modal'

import verbTenses from '../data/verbTenses.json'

class GroupOfCards extends React.Component {
	constructor() {
		super();
		this.state = {
			dataForModal: null
		};
	}

	handlerOnClickButtonForOpenModal = (id) => {
		this.setState({ dataForModal: id });
	}

	render() {
		return (
			<React.Fragment>
				<Modal data={this.state.dataForModal}/>
				{
					verbTenses.data.map(tense => {
						let backgroundColor = 'bg-primary'

						switch (tense.type) {
							case 'past':
								backgroundColor = 'bg-warning'
								break;
							case 'present':
								backgroundColor = 'bg-info'
								break;
							case 'future':
								backgroundColor = 'bg-danger'
								break;
						}

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