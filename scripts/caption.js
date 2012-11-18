var captionArray = ['Use ALL the references!','Not unlike Skyrim','Open Source!','Chandeliers!','Contains 0 arrows, 0 knees, and 8 arrow to the knee references','Squids!','Javascript!','C#!','Impossible Geometry!','Physics!','Science!','Recursion!','Yours for only free-ninety-nine!','Visit our blag!','Long release cycles!','3-Dimensional!','Not anti-aliased!','Cross-Platform!','It&#146;s the best of games!','Filler images!','2-dimensional planets','1-dimensional time!','SMOOOOOOOOOOOSH!','Uses Google+!','Book our Face!','Share us to your birds!','Tumbl over us!','Random text!','It&#146;s a game!','31 levels of randomness!'];
var random = Math.floor(Math.random()*captionArray.length)
document.getElementById('caption').innerHTML = captionArray[random];
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