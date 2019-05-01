import Card from './Card'

import verbTenses from '../data/verbTenses.json'

function GroupOfCards() {
	return (
		<div className="row">
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
							backgroundColor={backgroundColor}
							header={tense.name}
							whenToUse={tense.whenToUse}
							rules={tense.rules}
							examples={tense.examples}
						/>
					)
				})
			}
		</div>
	)
}
  
export default GroupOfCards