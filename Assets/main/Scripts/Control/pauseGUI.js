var x = Screen.width;
var y = Screen.height;
var skin : GUISkin;

function OnGUI(){
	GUI.skin = skin;
	GUI.Box (Rect (0,0,Screen.width,Screen.height), "GiMU");
	
	if (GUI.Button (Rect (0.5*Screen.width-120,0.25*Screen.height,240,60), "Resume")) {
		GetComponent(gameControl).resume();
	};
	
	if (GUI.Button (Rect (0.5*Screen.width-120,0.25*Screen.height+70,240,60), "Reset")) {
		GetComponent(gameControl).resume();
		Application.LoadLevel("main");
	};
	
	if (GUI.Button (Rect (0.5*Screen.width-120,0.25*Screen.height+140,240,60), "Quit")) {
		Application.Quit();
	};
}