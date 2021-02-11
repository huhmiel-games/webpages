import PropTypes from 'prop-types';
import React from 'react';


/**
 * The page layout component
 */
const Page = ({ title, header, main, footer, script, stylesheet, _relativeURL, _ID }) => (
	<html lang="fr" className="h-100">
		<head>
			<title>Huhmiel Games - {title}</title>
			<meta charSet="utf-8" />
			<meta httpEquiv="x-ua-compatible" content="ie=edge" />
			<meta name="viewport" content="width=device-width, initial-scale=1" />
			<meta name="description" content="Huhmiel games home"/>
			<link defer rel="icon" href={_relativeURL(`/assets/img/favicon.png`, _ID)} />
			<link defer rel="stylesheet" href={_relativeURL(`/assets/css/bootstrap.css`, _ID)} />
			<link defer rel="stylesheet" href={_relativeURL(`/assets/css/site.css`, _ID)} />

			{
				stylesheet != undefined
					? (<link rel="stylesheet" href={_relativeURL(`/assets/css/${stylesheet}.css`, _ID)} />)
					: null
			}
		</head>
		<body className="d-flex flex-column h-100">

			<header role="navigation" className="mb-auto">
				{header}
			</header>

			<main className="d-flex flex-column flex-shrink-0 justify-content-center align-items-center mt-3">
				{main}
			</main>

			<footer className="footer mt-auto py-1 bg-dark">
				<div className="text-light text-center text-small">
					{footer}
				</div>
			</footer>

			{
				script != undefined
					? (<script src={_relativeURL(`/assets/js/${script}.js`, _ID)} />)
					: null
			}
		</body>
	</html>
);

Page.propTypes = {
	/**
		 * title: Homepage
		 */
	title: PropTypes.string.isRequired,

	/**
	 * main: (partials)(5)
	 */
	main: PropTypes.node.isRequired,

	/**
	 * footer: (partials)(2)
	 */
	footer: PropTypes.node.isRequired,
};

Page.defaultProps = {};

export default Page;
