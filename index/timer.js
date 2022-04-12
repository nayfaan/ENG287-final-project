var timeTotal = 983*x/1000; //seconds
var fRate = 500;
var timeElapsed = 0;
var n = 0;
var timerObject;
var bgm = new Audio("sounds/mixdown.mp3");

function fRotate() {
	document.getElementById('timerLine').style.transform = "rotate(" + n + "deg)";
	
	n += (360 / timeTotal) * fRate / 1000;
	
	timeElapsed += fRate;
	
	
	
	var appElement = document.querySelector('[ng-app=myApp]');
    var $scope = angular.element(appElement).scope().$root;
    $scope.$apply(function() {
///*HIDE MAP START        
		
		if(357*x <= timeElapsed && timeElapsed <= 409*x){
    $scope.map.speakeasy = 'hidden'; 
}
else{
    $scope.map.speakeasy = 'visible'; 
}

if(864*x <= timeElapsed && timeElapsed <= 936*x){
    $scope.map.tailor = 'hidden';
}
else{
    $scope.map.tailor = 'visible'; 
}

if(207*x <= timeElapsed && timeElapsed <= 223*x){
    $scope.map.orgy = 'hidden'; 
}
else if( 323*x <= timeElapsed && timeElapsed <= 333*x){
    $scope.map.orgy = 'hidden';
}
else{
    $scope.map.orgy = 'visible'; 
}

if(timeElapsed <= 708*x){
    $scope.map.showers = 'hidden'; 
}
else if(855*x <= timeElapsed){
    $scope.map.showers = 'hidden'; 
}
else{
    $scope.map.showers = 'visible'; 
}

if(675*x <= timeElapsed){
    $scope.map.MD = 'hidden'; 
}
else{
    $scope.map.MD = 'visible'; 
}

if(timeElapsed <= 355*x){
    $scope.map.duncan = 'hidden'; 
}
else{
    $scope.map.duncan = 'visible'; 
}

if(130*x <= timeElapsed){
    $scope.map.forest = 'hidden'; 
}
else{
    $scope.map.forest = 'visible'; 
}

if(854*x <= timeElapsed && timeElapsed <= 888*x){
    $scope.map.cemetery = 'hidden'; 
}
else{
    $scope.map.cemetery = 'visible'; 
}

if(404*x <= timeElapsed && timeElapsed <= 431*x){
    $scope.map.luggageRm = 'hidden'; 
}
else{
    $scope.map.luggageRm = 'visible'; 
}

if(timeElapsed <= 140*x){
    $scope.map.crypt = 'hidden'; 
}
else if(197*x <= timeElapsed && timeElapsed <= 371*x){
    $scope.map.crypt = 'hidden'; 
}
else if(390*x <= timeElapsed){
    $scope.map.crypt = 'hidden'; 
}
else{
    $scope.map.crypt = 'visible'; 
}

if(434*x <= timeElapsed && timeElapsed <= 442*x){
    $scope.map.detective = 'hidden'; 
}
else if(520*x <= timeElapsed && timeElapsed <= 527*x){
    $scope.map.detective = 'hidden'; 
}
else{
    $scope.map.detective = 'visible'; 
}

if(219*x <= timeElapsed && timeElapsed <= 226*x){
    $scope.map.taxidermy = 'hidden';
}
else if(439*x <= timeElapsed && timeElapsed <= 469*x){
    $scope.map.taxidermy = 'hidden';
}
else{
    $scope.map.taxidermy = 'visible'; 
}

if(358*x <= timeElapsed && timeElapsed <= 403*x){
    $scope.map.solo.speakeasy = 'hidden'; 
	document.getElementById("speakeasyMap1").style.visibility = 'hidden';
}
else{
    $scope.map.solo.speakeasy = 'visible'; 
}

if(865*x <= timeElapsed && timeElapsed <= 930*x){
    $scope.map.solo.tailor = 'hidden';
	document.getElementById("tailorMap1").style.visibility = 'hidden';
	document.getElementById("tailorMap2").style.visibility = 'hidden';
}
else{
    $scope.map.solo.tailor = 'visible'; 
}

if(855*x <= timeElapsed && timeElapsed <= 880*x){
    $scope.map.solo.cemetery = 'hidden'; 
	document.getElementById("cemeteryMap1").style.visibility = 'hidden';
	document.getElementById("cemeteryMap2").style.visibility = 'hidden';
}
else{
    $scope.map.solo.cemetery = 'visible'; 
}

if(405*x <= timeElapsed && timeElapsed <= 430*x){
    $scope.map.solo.luggageRm = 'hidden'; 
}
else{
    $scope.map.solo.luggageRm = 'visible'; 
}

if(440*x <= timeElapsed && timeElapsed <= 463*x){
    $scope.map.solo.taxidermy = 'hidden';
	document.getElementById("taxidermyMap1").style.visibility = 'hidden';
	document.getElementById("taxidermyMap2").style.visibility = 'hidden';
}
else{
    $scope.map.solo.taxidermy = 'visible';
}
		
//*/HIDE MAP END		
    });
	
	if (n <= 360) {
	timerObject = setTimeout(fRotate, fRate);
	}
	else {
		n = 0 ;
		document.getElementById('timerLine').style.transform = "rotate(0deg)";
	}
}

function startRotate() {
	n = 0;
	timeElapsed = 0;
	fRotate();
	playSound();
}

function resetTimer(){
	n = 0;
	timeElapsed = 0;
	clearTimeout(timerObject);
	document.getElementById('timerLine').style.transform = "rotate(0deg)";
}

function playSound(){
	bgm.play();
	bgm.currentTime=0;
}