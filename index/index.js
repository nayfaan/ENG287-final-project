var x = 1000;
var t = 0;
var myString = "";
//auto width


// create the module and name it myApp
	var app = angular.module('myApp', ['ngRoute', 'ngSanitize']);

	// configure our routes

	app.config(function($routeProvider) {
		$routeProvider

			// route for the intro
			.when('/', {
				templateUrl : 'intro.html',
				controller  : 'introController'
			})

			//ROOMS
			.when('/stairs', {
				templateUrl : 'stairs.html',
				controller  : 'mainController'
			})
			
             .when('/crypt', {
				templateUrl : 'rooms/crypt.html',
				controller  : 'cryptController'
			})
            
            .when('/hall', {
				templateUrl : 'rooms/hall.html',
				controller  : 'hallController'
			})
            
            .when('/mezzanine', {
				templateUrl : 'rooms/mezzanine.html',
				controller  : 'mezzanineController'
			})
            
            .when('/kitchen', {
				templateUrl : 'rooms/kitchen.html',
				controller  : 'kitchenController'
			})
            
            .when('/lobby', {
				templateUrl : 'rooms/lobby.html',
				controller  : 'lobbyController'
			})
            
            .when('/pOffice', {
				templateUrl : 'rooms/pOffice.html',
				controller  : 'pOfficeController'
			})
            
            .when('/tBooth', {
				templateUrl : 'rooms/tBooth.html',
				controller  : 'tBoothController'
			})
            
            .when('/luggageRm', {
				templateUrl : 'rooms/luggageRm.html',
				controller  : 'luggageRmController'
			})
            
            .when('/MB', {
				templateUrl : 'rooms/MB.html',
				controller  : 'MBController'
			})
            
            .when('/MD', {
				templateUrl : 'rooms/MD.html',
				controller  : 'MDController'
			})
            
            .when('/duncan', {
				templateUrl : 'rooms/duncan.html',
				controller  : 'duncanController'
			})
            
            .when('/cemetery', {
				templateUrl : 'rooms/cemetery.html',
				controller  : 'cemeteryController'
			})
            
            .when('/alley', {
				templateUrl : 'rooms/alley.html',
				controller  : 'alleyController'
			})
            
            .when('/room', {
				templateUrl : 'rooms/room.html',
				controller  : 'roomController'
			})
            
            .when('/orgy', {
				templateUrl : 'rooms/orgy.html',
				controller  : 'orgyController'
			})
            
            .when('/orgyRm', {
				templateUrl : 'rooms/orgyRm.html',
				controller  : 'orgyRmController'
			})
            
            .when('/showers', {
				templateUrl : 'rooms/showers.html',
				controller  : 'showersController'
			})
            
            .when('/apothecary', {
				templateUrl : 'rooms/apothecary.html',
				controller  : 'apothecaryController'
			})
            
            .when('/taxidermy', {
				templateUrl : 'rooms/taxidermy.html',
				controller  : 'taxidermyController'
			})
            
            .when('/candy', {
				templateUrl : 'rooms/candy.html',
				controller  : 'candyController'
			})
            
            .when('/detective', {
				templateUrl : 'rooms/detective.html',
				controller  : 'detectiveController'
			})
            
            .when('/tailor', {
				templateUrl : 'rooms/tailor.html',
				controller  : 'tailorController'
			})
            
            .when('/speakeasy', {
				templateUrl : 'rooms/speakeasy.html',
				controller  : 'speakeasyController'
			})
            
            .when('/forest', {
				templateUrl : 'rooms/forest.html',
				controller  : 'forestController'
			})
		
			.when('/ending', {
				templateUrl : 'ending.html',
				controller  : 'endingController'
			})
            
            .when('/reset', {
				templateUrl : 'reset.html',
				controller  : 'resetController'
			})
		
            .otherwise({redirectTo: '/'});
	});

//dynamiclly update angularjs to read ng-bind-html elements
	app.directive('dynamic', function($compile) {
		return {
			restrict: 'A',
			replace: true,
			link: function (scope, element, attrs) {
				scope.$watch(attrs.dynamic, function(html) {
					element[0].innerHTML = html;
					$compile(element.contents())(scope);
				});
			}
		};
	});
	
// create the controller and inject Angular's $scope
	app.controller('mainController', function($scope, $sce, $route, $interval) {
		// create a message to display in our view
		$scope.message = 'this is a placeholder';
		$scope.stairs = $sce.trustAsHtml(stairsContent(timeElapsed));
		
        
        var stairsInterval = $interval(function(){
            if ($scope.stairs != $sce.trustAsHtml(stairsContent(timeElapsed))){
			$scope.stairs = $sce.trustAsHtml(stairsContent(timeElapsed));
            }},1000);
		$scope.$on('$destroy', function (){
			$interval.cancel(stairsInterval);
		});
	});

//intro
	app.controller('introController', function($scope, $sce, $route, $interval) {
		$scope.introLoad = function() {
			document.getElementById("startButton").style.display = "none";
			
			$interval(function(){
				$scope.intro = "Hey!";
			},1.5*x,1);
			
			$interval(function(){
				$scope.intro = "HEY";
			},3*x,1);
			
			$interval(function(){
				$scope.intro = 'WAKE UP';
				$scope.wakeUpButton = "inline-block";
			},4.5*x,1);
		};
		$scope.introWakeUp = function(){
			$scope.wakeUpButton = "none";
			$scope.intro = "Great, I see you are awake. We are almost at Gallow Green. The King’s Ball will be happening this morning and a feast will commence at nightfall. I assume you will be attending them?";
			$scope.attendButton = "inline-block";
		};
		$scope.introYes = function(){
			$scope.attendButton = "none";
			$scope.intro = "Great! So I will be seeing you there!";
			$scope.introLoad_2();
		};
		$scope.introNo = function(){
			$scope.attendButton = "none";
			$scope.intro = "Oh my! This is definitely something you wouldn’t want to miss! Come and stop by if you have time.";
			$scope.introLoad_2();
		};
		//second part of intro sequence after attendance is presented
		$scope.introLoad_2 = function(){

			$interval(function(){
				$scope.intro = $sce.trustAsHtml('By the way, my name is <input type="text" ng-model="$root.name" required>');
				$scope.confirmNameButton = "inline-block";
			},2.5*x,1);
		};
		$scope.introConfirmName = function(){
			$scope.confirmNameButton = "none";
			$scope.intro = '<input type="text" ng-model="$root.name">: When you see someone new there, you should give them a name so you don’t forget who you’ve met. That would’ve been quite embarrassing if you do.';
			$scope.intro = $sce.trustAsHtml($scope.intro);
			
			$interval(function(){
				$scope.intro = $sce.trustAsHtml('<input type="text" ng-model="$root.name">: Hey look! That is Gallow Green right there! Looks like we have arrived! I will see you then!');
			},2.5*x,1);
			
			$interval(function(){
				$scope.intro = $sce.trustAsHtml('<input type="text" ng-model="$root.name">: Hey look! That is Gallow Green right there! Looks like we have arrived! I will see you then!<br><input type="text" ng-model="$root.name"> rode off on his horse and disappeared into the town.<br><br><a href="#/stairs" onclick="startRotate()"> Get off the horse </a>');
			},4*x,1);
		};
	});
    
//reset
	app.controller('resetController', function($scope, $sce, $route, $interval) {
		$scope.resetCycle = function() {
			resetTimer();
            $scope.reset = $sce.trustAsHtml('<a href="#/" id = "resetEject0">.</a><img src onerror=\'document.getElementById("resetEject0").click()\'>');
		};
	});

//ending
    app.controller('endingController', function($scope, $sce, $route, $interval) {
		$scope.header = 'Banquet Hall';
        $scope.desc = 'What a wonderful place! Sparkly decorations displaying the riches of the King. This is also where most of the balls and banquets take place. Perhaps you should come and be our guest sometimes?';
        
        $scope.ending = "The crowd has gathered in the Banquet Hall.";
        $interval(function(){
			$scope.ending = "The crowd has gathered in the Banquet Hall.<br>Yet you realise that something is missing.";
		},0.75*x,1);
        $interval(function(){
			$scope.ending = "The crowd has gathered in the Banquet Hall.<br>Yet you realise that something is missing.<br>or to say it better,";
		},1.5*x,1);
        $interval(function(){
			$scope.ending = "The crowd has gathered in the Banquet Hall.<br>Yet you realise that someone is missing.";
		},2.5*x,1);
        $interval(function(){
			$scope.ending = "The crowd has gathered in the Banquet Hall.<br>Yet you realise that someone is missing.<br>The throne at the head of the table is unfilled...";
		},3.5*x,1);
        $interval(function(){
			$scope.ending = "The crowd has gathered in the Banquet Hall.<br>Yet you realise that someone is missing.";
		},4.25*x,1);
        $interval(function(){
			$scope.ending = "The crowd has gathered in the Banquet Hall.";
		},4.5*x,1);
        $interval(function(){
			$scope.ending = "The crowd is growing uneasy.";
		},4.75*x,1);
        $interval(function(){
			$scope.ending = "The crowd begins to murmur.";
		},6.25*x,1);
        $interval(function(){
			$scope.ending = "Suddenly";
		},8.5*x,1);
        $interval(function(){
			$scope.ending = "{{MD}} slams his fist onto the table.";
		},9*x,1);
        $interval(function(){
			$scope.ending = "{{MD}} ejects himself from his seat.";
		},9.75*x,1);
        $interval(function(){
			$scope.ending = "{{MD}} raises his hand and points.";
		},10.5*x,1);
        $interval(function(){
			$scope.ending = "{{MD}} raises his hand and points.<br><br>You hear {{MD}} shouting, but no one is paying attention to him.";
		},11.25*x,1);
        $interval(function(){
			$scope.ending = "{{MD}} raises his hand and points.<br><br>You hear {{MD}} shouting, but no one is paying attention to him.<br>Everyone is staring towards your direction.";
		},12*x,1);
        $interval(function(){
			$scope.ending = "{{MD}} raises his hand and points.<br><br>You hear {{MD}} shouting, but no one is paying attention to him.<br>Everyone is staring towards your direction.<br>All looking shocked.";
		},12.75*x,1);
        $interval(function(){
			$scope.ending = "{{MD}} raises his hand and points.<br><br>You hear {{MD}} shouting, but no one is paying attention to him.<br>Everyone is staring towards your direction.<br>All looking shocked.<br>You";
		},14.5*x,1);
        $interval(function(){
			$scope.ending = "{{MD}} raises his hand and points.<br><br>You hear {{MD}} shouting, but no one is paying attention to him.<br>Everyone is staring towards your direction.<br>All looking shocked.<br>You turn.";
		},15.75*x,1);
        $interval(function(){
			$scope.ending = "<br><br>You hear {{MD}} shouting, but no one is paying attention to him.<br>Everyone is staring towards your direction.<br>All looking shocked.<br>You turn.";
		},16*x,1);
        $interval(function(){
			$scope.ending = "<br><br><br>Everyone is staring towards your direction.<br>All looking shocked.<br>You turn.";
		},16.25*x,1);
        $interval(function(){
			$scope.ending = "<br><br><br><br>All looking shocked.<br>You turn.";
		},16.5*x,1);
        $interval(function(){
			$scope.ending = "<br><br><br><br><br>You turn.";
		},16.75*x,1);
        $interval(function(){
			$scope.ending = "<br><br><br><br>You turn.";
		},17*x,1);
        $interval(function(){
			$scope.ending = "<br><br><br>You turn.";
		},17.25*x,1);
        $interval(function(){
			$scope.ending = "<br><br>You turn.";
		},17.5*x,1);
        $interval(function(){
			$scope.ending = "<br>You turn.";
		},17.75*x,1);
        $interval(function(){
			$scope.ending = "You turn.";
		},18*x,1);
        $interval(function(){
			$scope.ending = "";
		},18.75*x,1);
        $interval(function(){
			$scope.ending = "A pale white figure floats.";
		},20*x,1);
        $interval(function(){
			$scope.ending = "A pale white figure floats.<br>It is a ghost.";
		},20.75*x,1);
        $interval(function(){
			$scope.ending = "A pale white figure floats.<br>It is a ghost!";
		},21.25*x,1);
        $interval(function(){
			$scope.ending = "A pale white figure floats.<br>It is {{Banquo}}\'s ghost!";
		},22*x,1);
        $interval(function(){
			$scope.ending = "A pale white figure floats.<br>It is {{Banquo}}\'s ghost!<br><br>You are dazed for a split second.";
		},22.5*x,1);
        $interval(function(){
			$scope.ending = "A pale white figure floats.<br>It is {{Banquo}}\'s ghost!<br><br>You are dazed for a split second.<br>not really.";
		},23.25*x,1);
        $interval(function(){
			$scope.ending = "A pale white figure floats.<br>It is {{Banquo}}\'s ghost!<br><br>are dazed for a split second.<br>not really.";
		},23.5*x,1);
        $interval(function(){
			$scope.ending = "A pale white figure floats.<br>It is {{Banquo}}\'s ghost!<br><br>dazed for a split second.<br>not really.";
		},23.75*x,1);
        $interval(function(){
			$scope.ending = "A pale white figure floats.<br>It is {{Banquo}}\'s ghost!<br><br>for a split second.<br>not really.";
		},24*x,1);
        $interval(function(){
			$scope.ending = "A pale white figure floats.<br>It is {{Banquo}}\'s ghost!<br><br>a split second.<br>not really.";
		},24.25*x,1);
        $interval(function(){
			$scope.ending = "A pale white figure floats.<br>It is {{Banquo}}\'s ghost!<br><br>a split second.";
		},24.5*x,1);
        $interval(function(){
			$scope.ending = "A pale white figure floats.<br>It is {{Banquo}}\'s ghost!<br><br>a split second.<br> That is all it takes,";
		},25*x,1);
        $interval(function(){
			$scope.ending = "A pale white figure floats.<br>It is {{Banquo}}\'s ghost!<br><br>a split second.<br> That is all it takes, for the ghost";
		},25.75*x,1);
        $interval(function(){
			$scope.ending = "A pale white figure floats.<br>It is {{Banquo}}\'s ghost!<br><br>a split second.<br> That is all it takes, for the ghost to";
		},26.5*x,1);
        $interval(function(){
			$scope.ending = "A pale white figure floats.<br>It is {{Banquo}}\'s ghost!<br><br>a split second.<br> That is all it takes, for the ghost to devour you.";
		},27.75*x,1);
        $interval(function(){
			$scope.ending = "";
            $scope.header = "";
            $scope.desc = "";
		},29.75*x,1);
        $interval(function(){
			$scope.ending = '<a href="#/reset" id = "endingEject0" style = "color: #000000;">.</a><img src onerror=\'document.getElementById("endingEject0").click()\'>';
		},30.75*x,1);
	});
    
//The Woodlands
	app.controller('forestController', function($scope, $sce, $route, $interval) {
		$scope.header = 'The Woodland';
        $scope.desc = 'An uninhabited land with a dense growth of fir trees above. It is so dense that you have to struggle to find a hint of the sky through the intertwining branches.';
		
        $scope.forest = $sce.trustAsHtml(forestContent(timeElapsed));
		var forestInterval = $interval(function(){
            if($scope.forest != $sce.trustAsHtml(forestContent(timeElapsed))){
           $scope.forest = $sce.trustAsHtml(forestContent(timeElapsed));
            }},1000);
		$scope.$on('$destroy', function (){
			 $interval.cancel(forestInterval);
		});
	});

	//crypt
    app.controller('cryptController', function($scope, $sce, $route, $interval) {
		$scope.header = 'Castle Crypt';
        $scope.desc = 'This is said to be the place where the King stores his most important items. No one knows whether this is a myth or not…';
        
        $scope.crypt = $sce.trustAsHtml(cryptContent(timeElapsed));
		var cryptInterval = $interval(function(){
            if($scope.crypt != $sce.trustAsHtml(cryptContent(timeElapsed))){
			$scope.crypt = $sce.trustAsHtml(cryptContent(timeElapsed));
            }},1000);
		$scope.$on('$destroy', function (){
			$interval.cancel(cryptInterval);
		});
	});
    
    //hall
    app.controller('hallController', function($scope, $sce, $route, $interval) {
		$scope.header = 'Banquet Hall';
        $scope.desc = 'What a wonderful place! Sparkly decorations displaying the riches of the King. This is also where most of the balls and banquets take place. Perhaps you should come and be our guest sometimes?';
        
        $scope.hall = $sce.trustAsHtml(hallContent(timeElapsed));
		var hallInterval = $interval(function(){
            if($scope.hall != $sce.trustAsHtml(hallContent(timeElapsed))){
			$scope.hall = $sce.trustAsHtml(hallContent(timeElapsed));
            }},1000);
		$scope.$on('$destroy', function (){
			$interval.cancel(hallInterval);
		});
	});
    
    //mezzanine
    app.controller('mezzanineController', function($scope, $sce, $route, $interval) {
		$scope.header = 'Hall Mezzanine';
        $scope.desc = 'Not the most well lit places of all, but the chandelier from the banquet hall below should be good enough to show you the path and keep you from falling over into the banquets below.';
        
        $scope.mezzanine = $sce.trustAsHtml(mezzanineContent(timeElapsed));
		var mezzanineInterval = $interval(function(){
            if($scope.mezzanine != $sce.trustAsHtml(mezzanineContent(timeElapsed))){
			$scope.mezzanine = $sce.trustAsHtml(mezzanineContent(timeElapsed));
            }},1000);
		$scope.$on('$destroy', function (){
			$interval.cancel(mezzanineInterval);
		});
	});
    
    //kitchen
    app.controller('kitchenController', function($scope, $sce, $route, $interval) {
		$scope.header = 'Kitchen';
        $scope.desc = 'A cramped space where the meals are prepared for the guests in hostel. Jars and jugs of all colors are placed on decaying shelves across the spotted walls orderly enough just to seem not random.';
        
        $scope.kitchen = $sce.trustAsHtml(kitchenContent(timeElapsed));
		var kitchenInterval = $interval(function(){
            if($scope.kitchen != $sce.trustAsHtml(kitchenContent(timeElapsed))){
			$scope.kitchen = $sce.trustAsHtml(kitchenContent(timeElapsed));
            }},1000);
		$scope.$on('$destroy', function (){
			$interval.cancel(kitchenInterval);
		});
	});
    
    //lobby
    app.controller('lobbyController', function($scope, $sce, $route, $interval) {
		$scope.header = 'Hostel Lobby';
        $scope.desc = 'Welcome to the Gallow Green’s hostel! Check in with the reception and get to your room. Alternatively you can check the arrays of bookshelves we have here. We dust them every day to make them look bright - just in case no one checks them out for … ever?';
        
        $scope.lobby = $sce.trustAsHtml(lobbyContent(timeElapsed));
		var lobbyInterval = $interval(function(){
            if($scope.lobby != $sce.trustAsHtml(lobbyContent(timeElapsed))){
			$scope.lobby = $sce.trustAsHtml(lobbyContent(timeElapsed));
            }},1000);
		$scope.$on('$destroy', function (){
			$interval.cancel(lobbyInterval);
		});
	});
    
    //pOffice
    app.controller('pOfficeController', function($scope, $sce, $route, $interval) {
		$scope.header = 'Hostel Office';
        $scope.desc = 'whose office is this? If you don’t see him at the reception, you’d probably find him here doing … better not mention it ...';
        
        $scope.pOffice = $sce.trustAsHtml(pOfficeContent(timeElapsed));
		var pOfficeInterval = $interval(function(){
            if($scope.pOffice != $sce.trustAsHtml(pOfficeContent(timeElapsed))){
			$scope.pOffice = $sce.trustAsHtml(pOfficeContent(timeElapsed));
            }},1000);
		$scope.$on('$destroy', function (){
			$interval.cancel(pOfficeInterval);
		});
	});
    
    //tBooth
    app.controller('tBoothController', function($scope, $sce, $route, $interval) {
		$scope.header = 'Telephone Booth';
        $scope.desc = 'Oh, they have a telephone booth with curtains here! Better call your mom and tell her you are not coming back for dinner tonight ...';
        
        $scope.tBooth = $sce.trustAsHtml(tBoothContent(timeElapsed));
		var tBoothInterval = $interval(function(){
			$scope.tBooth = $sce.trustAsHtml(tBoothContent(timeElapsed));
		},1000);
		$scope.$on('$destroy', function (){
			$interval.cancel(tBoothInterval);
		});
	});
    
    //luggageRm
    app.controller('luggageRmController', function($scope, $sce, $route, $interval) {
		$scope.header = 'Luggage Room';
        $scope.desc = 'I guess this is where you drop off your luggages for them to take care of when you live in the hostel. How do they take care of the luggages? I’m afraid you will need to ask someone else ...';
        
        $scope.luggageRm = $sce.trustAsHtml(luggageRmContent(timeElapsed));
		var luggageRmInterval = $interval(function(){
            if($scope.luggageRm != $sce.trustAsHtml(luggageRmContent(timeElapsed))){
			$scope.luggageRm = $sce.trustAsHtml(luggageRmContent(timeElapsed));
            }},1000);
		$scope.$on('$destroy', function (){
			$interval.cancel(luggageRmInterval);
		});
	});
    
    //MB
    app.controller('MBController', function($scope, $sce, $route, $interval) {
		$scope.header = 'Room 213';
        $scope.desc = 'Who’s room is this? Better not touch their stuff.';
        
        $scope.MB = $sce.trustAsHtml(MBContent(timeElapsed));
		var MBInterval = $interval(function(){
            if($scope.MB != $sce.trustAsHtml(MBContent(timeElapsed))){
			$scope.MB = $sce.trustAsHtml(MBContent(timeElapsed));
		}},1000);
		$scope.$on('$destroy', function (){
			$interval.cancel(MBInterval);
		});
	});

    //MD
    app.controller('MDController', function($scope, $sce, $route, $interval) {
		$scope.header = 'Room 204';
        $scope.desc = 'Who’s room is this? Better not touch their stuff.';
        
        $scope.MD = $sce.trustAsHtml(MDContent(timeElapsed));
		var MDInterval = $interval(function(){
            if($scope.MD != $sce.trustAsHtml(MDContent(timeElapsed))){
			$scope.MD = $sce.trustAsHtml(MDContent(timeElapsed));
            }},1000);
		$scope.$on('$destroy', function (){
			$interval.cancel(MDInterval);
		});
	});

    //duncan
    app.controller('duncanController', function($scope, $sce, $route, $interval) {
		$scope.header = 'Room 201';
        $scope.desc = 'A lavishly decorated room that looks obviously huge. Who’s room is this? Better not touch their stuff.';
        
        $scope.duncan = $sce.trustAsHtml(duncanContent(timeElapsed));
		var duncanInterval = $interval(function(){
            if($scope.duncan != $sce.trustAsHtml(duncanContent(timeElapsed))){
			$scope.duncan = $sce.trustAsHtml(duncanContent(timeElapsed));
            }},1000);
		$scope.$on('$destroy', function (){
			$interval.cancel(duncanInterval);
		});
	});

    //cemetery
    app.controller('cemeteryController', function($scope, $sce, $route, $interval) {
		$scope.header = 'Cemetery';
        $scope.desc = 'Tombstones. Dirt. Grass. More tombstones. Crows. Bones … bones?';
        
        $scope.cemetery = $sce.trustAsHtml(cemeteryContent(timeElapsed));
		var cemeteryInterval = $interval(function(){
            if($scope.cemetery != $sce.trustAsHtml(cemeteryContent(timeElapsed))){
			$scope.cemetery = $sce.trustAsHtml(cemeteryContent(timeElapsed));
            }},1000);
		$scope.$on('$destroy', function (){
			$interval.cancel(cemeteryInterval);
		});
	});
    
    //alley
    app.controller('alleyController', function($scope, $sce, $route, $interval) {
		$scope.header = 'Main Street';
        $scope.desc = 'The main street of the town Gallow Green. Where would you go from here?';
        
        $scope.alley = $sce.trustAsHtml(alleyContent(timeElapsed));
		var alleyInterval = $interval(function(){
            if($scope.alley != $sce.trustAsHtml(alleyContent(timeElapsed))){
			$scope.alley = $sce.trustAsHtml(alleyContent(timeElapsed));
            }},1000);
		$scope.$on('$destroy', function (){
			$interval.cancel(alleyInterval);
		});
	});
    
    //room
    app.controller('roomController', function($scope, $sce, $route, $interval) {
		$scope.header = 'The Room';
        $scope.desc = 'There is the room and there is The Room … Where is this room? It surely looks secretive here. I wonder what’s inside that large closet at the back of The Room?';
        
        $scope.room = $sce.trustAsHtml(roomContent(timeElapsed));
		var roomInterval = $interval(function(){
            if($scope.room != $sce.trustAsHtml(roomContent(timeElapsed))){
			$scope.room = $sce.trustAsHtml(roomContent(timeElapsed));
            }},1000);
		$scope.$on('$destroy', function (){
			$interval.cancel(roomInterval);
		});
	});
    
    //orgy
    app.controller('orgyController', function($scope, $sce, $route, $interval) {
		$scope.header = 'Bar';
        $scope.desc = 'Yet another bar in the town. I wonder where are all the customers? And where did the bartender go?';
        
        $scope.orgy = $sce.trustAsHtml(orgyContent(timeElapsed));
		var orgyInterval = $interval(function(){
            if($scope.orgy != $sce.trustAsHtml(orgyContent(timeElapsed))){
			$scope.orgy = $sce.trustAsHtml(orgyContent(timeElapsed));
            }},1000);
		$scope.$on('$destroy', function (){
			$interval.cancel(orgyInterval);
		});
	});
    
    //orgyRm
    app.controller('orgyRmController', function($scope, $sce, $route, $interval) {
		$scope.header = 'Back of the Bar';
        $scope.desc = 'I suppose this is the office of a bar? Probably this is where they mix the vials and beakers for inspiration for new drinks. Vials? Don’t you see vials with colorful liquid all over the table? Green, blue, glowing white, dark red...';
        
        $scope.orgyRm = $sce.trustAsHtml(orgyRmContent(timeElapsed));
		var orgyRmInterval = $interval(function(){
            if($scope.orgyRm != $sce.trustAsHtml(orgyRmContent(timeElapsed))){
			$scope.orgyRm = $sce.trustAsHtml(orgyRmContent(timeElapsed));
            }},1000);
		$scope.$on('$destroy', function (){
			$interval.cancel(orgyRmInterval);
		});
	});
    
    //showers
    app.controller('showersController', function($scope, $sce, $route, $interval) {
		$scope.header = 'Showers';
        $scope.desc = 'Just some showers where you clean off some blood stains, nothing to worry. And do please stop peeking at others showering, thank you.';
        
        $scope.showers = $sce.trustAsHtml(showersContent(timeElapsed));
		var showersInterval = $interval(function(){
            if($scope.showers != $sce.trustAsHtml(showersContent(timeElapsed))){
			$scope.showers = $sce.trustAsHtml(showersContent(timeElapsed));
            }},1000);
		$scope.$on('$destroy', function (){
			$interval.cancel(showersInterval);
		});
	});
    
    //apothecary
    app.controller('apothecaryController', function($scope, $sce, $route, $interval) {
		$scope.header = 'Apothecary';
        $scope.desc = 'Where you are most likely to find herbs you need. But to actually find them in this jungly room? Better ask whoever manages the place, but too bad she’s nowhere to be seen ...';
        
        $scope.apothecary = $sce.trustAsHtml(apothecaryContent(timeElapsed));
		var apothecaryInterval = $interval(function(){
            if($scope.apothecary != $sce.trustAsHtml(apothecaryContent(timeElapsed))){
			$scope.apothecary = $sce.trustAsHtml(apothecaryContent(timeElapsed));
            }},1000);
		$scope.$on('$destroy', function (){
			$interval.cancel(apothecaryInterval);
		});
	});
    
    //taxidermy
    app.controller('taxidermyController', function($scope, $sce, $route, $interval) {
		$scope.header = 'Taxidermy';
        $scope.desc = 'If you should be buried in a cemetery, this would be the animal’s equivalence of your cemetery … just a little bit more lively with your humanly presence, but the same darkness lurks ...';
        
        $scope.taxidermy = $sce.trustAsHtml(taxidermyContent(timeElapsed));
		var taxidermyInterval = $interval(function(){
            if($scope.taxidermy != $sce.trustAsHtml(taxidermyContent(timeElapsed))){
			$scope.taxidermy = $sce.trustAsHtml(taxidermyContent(timeElapsed));
            }},1000);
		$scope.$on('$destroy', function (){
			$interval.cancel(taxidermyInterval);
		});
	});
    
    //candy
    app.controller('candyController', function($scope, $sce, $route, $interval) {
		$scope.header = 'Candy Store';
        $scope.desc = 'Grab a trick, grab a treat, even if it’s not Halloween.';
        
        $scope.candy = $sce.trustAsHtml(candyContent(timeElapsed));
		var candyInterval = $interval(function(){
            if($scope.candy != $sce.trustAsHtml(candyContent(timeElapsed))){
			$scope.candy = $sce.trustAsHtml(candyContent(timeElapsed));
            }},1000);
		$scope.$on('$destroy', function (){
			$interval.cancel(candyInterval);
		});
	});
    
    //detective
    app.controller('detectiveController', function($scope, $sce, $route, $interval) {
		$scope.header = 'Detective Agency';
        $scope.desc = 'Want a case solved? This is your place to be. Take a detailed look around the place and you might unearth secrets so dark you’d wish you had never known. But who is the detective in town?';
        
        $scope.detective = $sce.trustAsHtml(detectiveContent(timeElapsed));
		var detectiveInterval = $interval(function(){
            if($scope.detective != $sce.trustAsHtml(detectiveContent(timeElapsed))){
			$scope.detective = $sce.trustAsHtml(detectiveContent(timeElapsed));
            }},1000);
		$scope.$on('$destroy', function (){
			$interval.cancel(detectiveInterval);
		});
	});
    
    //tailor
    app.controller('tailorController', function($scope, $sce, $route, $interval) {
		$scope.header = 'Tailor Shop';
        $scope.desc = 'Someone rumored that the King bought his new shirt here, but no one has ever seen it so far. Maybe you will be smart enough to see where his new shirt is.';
        
        $scope.tailor = $sce.trustAsHtml(tailorContent(timeElapsed));
		var tailorInterval = $interval(function(){
            if($scope.tailor != $sce.trustAsHtml(tailorContent(timeElapsed))){
			$scope.tailor = $sce.trustAsHtml(tailorContent(timeElapsed));
            }},1000);
		$scope.$on('$destroy', function (){
			$interval.cancel(tailorInterval);
		});
	});
    
    //speakeasy
    app.controller('speakeasyController', function($scope, $sce, $route, $interval) {
		$scope.header = 'Speakeasy';
        $scope.desc = 'Shhh!!! You shouldn’t have known of this place … it’s officially off the maps and all records under the order of the Duke … might as well get a sip of a good ol’ brandey while you’re here.';
        
        $scope.speakeasy = $sce.trustAsHtml(speakeasyContent(timeElapsed));
		var speakeasyInterval = $interval(function(){
            if($scope.speakeasy != $sce.trustAsHtml(speakeasyContent(timeElapsed))){
			$scope.speakeasy = $sce.trustAsHtml(speakeasyContent(timeElapsed));
            }},1000);
		$scope.$on('$destroy', function (){
			$interval.cancel(speakeasyInterval);
		});
	}); 