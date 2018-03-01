var data = {
  rsvp: ['ixd@ucsd.edu']
};

/*
 * GET tasks page.
 */
exports.adminView = function(req, res){
  res.render('rsvp', data);
};

exports.addRSVP = function(req, res) {
	var rsvpEmail = req.body.rsvpEmail;
	//print post
	console.log(rsvpEmail);

	data.rsvp.push(rsvpEmail); //add to data

	//send task name back to browser
	res.send(rsvpEmail);
}
