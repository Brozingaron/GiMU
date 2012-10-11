#pragma strict

var customSkin : GUISkin;
var paused:boolean = false;
var updated:boolean = false;

function Start () {
	Screen.lockCursor = true;
};

function Update () {
	if(Input.GetButtonDown("Pause") && !paused && !updated){
		Time.timeScale = 0.0;
		paused = true;
		updated = true;
		GetComponent(MouseLook).enabled = false;
		Screen.lockCursor = false;
	};
		if(Input.GetButtonDown("Pause") && paused && !updated){
		Time.timeScale = 1.0;
		paused = false;
		updated = true;
		GetComponent(MouseLook).enabled = true;
		Screen.lockCursor = true;
	};
	updated = false;
};

function onGUI (){
	GUI.skin = customSkin;
	
	GUILayout.Button("Resume");
	GUILayout.Button("Quit");
};