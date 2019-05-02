import Layout from '../components/Layout'
import Jumbotron from '../components/Jumbotron'
import GroupOfCards from '../components/GroupOfCards'

const Index = () => {
	return (
		<Layout>
			<div className="row">
				<div className="col-lg-12 text-center">
					<Jumbotron title={'📚'} subtitle={'A website with examples of use of tenses in English'} />
				</div>
			</div>
			<div className="row">
				<GroupOfCards />
			</div>
		</Layout>
	)
}

export default Index