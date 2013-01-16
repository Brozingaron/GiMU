var captionArray = ['Use ALL the references!','Not unlike Skyrim!','Open Source!','Chandeliers!','Contains 0 arrows, 0 knees, and 8 arrow to the knee references!','Squids!','Javascript!','C#!','Impossible Geometry!','Physics!','Science!','Recursion!','Yours for only free-ninety-nine!','Visit our blag!','Long release cycles!','3-Dimensional!','Anti-aliased!','Cross-Platform!','It&#146;s the best of games!','Flat planets!','1-dimensional time!','SMOOOOOOOOOOOSH!','Uses Google+!','Book our Face!','Share us to your birds!','Tumbl over us!','Random text!','It&#146;s a game!','This isn&#146;t a screenshot!','Lens Flares!','Unity!','Non-volumetric clouds!','Procrastination!','Photoshopped!','Play it on your &Uuml;ber-Hax Linux Box!'];
function random () {
var random = Math.floor(Math.random()*captionArray.length)
document.getElementById('caption').innerHTML = captionArray[random];
};
random();