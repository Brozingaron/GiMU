#pragma strict

static var ticks = 0.0;
static var second = 0.0;
static var minute = 0.0;
static var hour = 0.0;
static var day = 0.0;

static var timeRate = 0.02;

static var dayLength = 86400 * timeRate;

function Start () {
	ticks += 0.1 * dayLength;
};

function Update () {
	ticks += Time.deltaTime;
	
	second = ticks / timeRate;
	minute = second / 60;
	hour = minute / 60;
	day = hour / 24;
	
	
	if(hour >= 24){
		ticks = 0;
	};
};