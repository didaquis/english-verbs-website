import Header from '../components/Header'
import Footer from '../components/Footer'
import Jumbotron from '../components/Jumbotron'
import GroupOfCards from '../components/GroupOfCards'

function Index() {
	return (
		<React.StrictMode>
			<div className="bg-dark h-100 min-vh-100 d-flex flex-column">
				<Header/>
				<main className="container mb-3">
					<div className="row">
						<div className="col-lg-12 text-center">
							<Jumbotron title={'📚'} subtitle={'A website with examples of use of tenses in English'} />
						</div>
					</div>
					<GroupOfCards />
				</main>
				<Footer />
			</div>
		</React.StrictMode>
	)
}

export default Index