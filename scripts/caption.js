var captionArray = ['Use ALL the references!','Not unlike Skyrim','Open Source!','Chandeliers!','Contains 0 arrows, 0 knees, and 8 arrow to the knee references','Squids!','Javascript!','C#!','Impossible Geometry!','Physics!','Science!','Hi!','Recursion!','Yours for only free-nintey-nine!','Visit our blag!','Long release cycles!','3-Dimmensional!','Not anti-aliased!','Cross-Platform!','It&#146;s the best of games!','Filler images!'];
document.getElementById('caption').innerHTML = captionArray[Math.floor(Math.random()*captionArray.length)];
var today = new Date();
var y = today.getFullYear();
if ( y == 2012 ){
	var m = today.getMonth()+1;
	if ( m == 11 ){
		var d = today.getDate();
		if ( d == 20 ){
			document.getElementById('caption').innerHTML = "Happy Lemon Tuesday!";
		};
	};
};