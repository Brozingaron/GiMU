#pragma strict

var day = Color(29,152,283);
var night = Color(55,25,109);
var t = 0.0;

function Start () {
	transform.eulerAngles.x = 360 * (time.ticks / time.dayLength);
}

function Update () {
	transform.Rotate(Vector3.right,(Time.timeScale*(Time.deltaTime/5)));
		
	t = -0.5*Mathf.Cos(((Mathf.PI)/864)*time.ticks)+0.5;
	GameObject.Find("MainCamera").camera.backgroundColor = Color.Lerp(night,day,t);
	RenderSettings.fogColor = Color.Lerp(night,day,t);
}