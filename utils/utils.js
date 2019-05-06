
const backgroundColorByTypeOfTense = (tenseType) => {
	let backgroundColor = 'bg-primary'

	switch (tenseType) {
		case 'past':
			backgroundColor = 'bg-warning'
			break
		case 'present':
			backgroundColor = 'bg-info'
			break
		case 'future':
			backgroundColor = 'bg-danger'
			break
	}

	return backgroundColor
}

module.exports = { backgroundColorByTypeOfTense }