// routes/api/[id].json.js
// import db from './_database.js'; // the underscore tells Sapper this isn't a route

export function get(req, res, next) {
	// the `id` parameter is available because this file
	// is called [id].json.js
	const { id } = req.params;

	const article = {id: id, title: "Foo", body: "baosidfj;aosdija;odsifa;sdoifa;iadijdifjas;dfj"};

	if (article !== null) {
		res.setHeader('Content-Type', 'application/json');
		res.end(JSON.stringify(article));
	} else {
		next();
	}
}