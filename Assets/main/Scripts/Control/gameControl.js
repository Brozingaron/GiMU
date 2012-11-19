#pragma strict

static var paused:boolean = false;

function Start(){
	Time.timeScale = 1.0;
	Screen.lockCursor = true;
};

function pause(){
	Time.timeScale = 0.0;
	paused = true;
	GetComponent(MouseLook).enabled = false;
	GetComponent(pauseGUI).enabled = true;
	Screen.lockCursor = false;
};

function resume(){
	Time.timeScale = 1.0;
	paused = false;
	GetComponent(MouseLook).enabled = true;
	GetComponent(pauseGUI).enabled = false;
	Screen.lockCursor = true;
};

function Update(){
	if(Input.GetButtonDown("Pause")){
		if(!paused){pause();};
		else{resume();};
	};
};