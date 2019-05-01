import Card from './Card'

import verbTenses from '../data/verbTenses.json'
{
	for (const key in verbTenses.data) {
		//console.log(verbTenses.data[key])
	}	
}

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
					return <Card key={tense.id} backgroundColor={backgroundColor}/>
				})
			}
		</div>
	)
}
  
export default GroupOfCards