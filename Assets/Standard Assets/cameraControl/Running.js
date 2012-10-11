var walkSpeed: float = 7; // regular speed
var crchSpeed: float = 3; // crouching speed
var runSpeed: float = 15; // run speed

private var chMotor: CharacterMotor;
private var tr: Transform;

function Start(){
    chMotor = GetComponent(CharacterMotor);
    tr = transform;
    var ch:CharacterController = GetComponent(CharacterController);
}

function Update(){
    var vScale = 1.0;
    var speed = walkSpeed;
    if (Input.GetButton("Sprint")){
        speed = runSpeed;
    }
    chMotor.movement.maxForwardSpeed = speed; // set max speed
    chMotor.movement.maxSidewaysSpeed = speed; // set max speed
    chMotor.movement.maxBackwardsSpeed = speed-2; // set max speed
}