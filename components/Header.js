import Head from 'next/head'

const Header = () => {
	return (
		<Head>
			<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
			<meta name="description" content="A website with examples of use of tenses in English" />
			<title>English Verbs</title>

			<link href="/vendor/bootstrap/css/bootstrap.min.css" rel="stylesheet" />
			<link rel="shortcut icon" sizes="16x16 24x24 32x32 48x48 64x64" href="/favicon.ico" />
			<script src="/vendor/jquery/jquery.min.js"></script>
			<script src="/vendor/bootstrap/js/bootstrap.bundle.min.js"></script>
		</Head>
	)
}

export default Header
