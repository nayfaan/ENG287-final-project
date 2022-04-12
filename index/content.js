//stairs
function stairsContent (t) {
		if (945*x <= t){
		return '<a href="#/hall" id = "stairsEject0">.</a><img src onerror=\'document.getElementById("stairsEject0").click()\'>';
	}
	else {
		return '';
	}
}

//forest
function forestContent (t) {
		if (0*x <= t && t < 10*x){
			return 'You can see <input  type="text" ng-model="$root.Hecate"> doing a weird dance around a small monument on the woodland dirt floor. As she dances, a fire grows on top of the monument.';
		}
		else if (10*x <= t && t < 15*x){
			return '<input type="text" ng-model="$root.Hecate">: cometh f’rth, mine own unhallow’d s’rvants. Becometh blood and flesh, beest loyal to none but me, thy goddess.';
		}
		else if (15*x <= t && t < 20*x){
			return 'From the dirt, three figures <input type="text" ng-model="$root.Boy">, <input type="text" ng-model="$root.Bald">, and <input type="text" ng-model="$root.Sexy"> forms. As they rise higher above the ground, flesh and skin grows on their bones, until a breath blows into their lungs.';
		}
		else if (20*x <= t && t < 23*x){
			return '<input type="text" ng-model="$root.Boy">, <input type="text" ng-model="$root.Bald">, and <input type="text" ng-model="$root.Sexy"> collapses onto the floor.';
		}
		else if (23*x <= t && t < 27*x){
			return '<input type="text" ng-model="$root.Hecate">: Ariseth thee! doth mine own biddings and thee shall beest setteth free. Cometh f’rward, divineth the future and alloweth t beest mineth!';
		}
		else if (27*x <= t && t < 32*x){
			return '<input type="text" ng-model="$root.Hecate">, <input type="text" ng-model="$root.Boy">, <input type="text" ng-model="$root.Bald">, and <input type="text" ng-model="$root.Sexy"> begins to gather around the fire in the middle, and a great bizarre dance begins.';
		}
		else if (32*x <= t && t < 45*x){
			return '<input type="text" ng-model="$root.Hecate">, <input type="text" ng-model="$root.Boy">, <input type="text" ng-model="$root.Bald">, and <input type="text" ng-model="$root.Sexy"> is performing a bizarre dance around a burning fire.';
		}
		else if (45*x <= t && t < 50*x){
			return 'As the dance continues, <input type="text" ng-model="$root.Hecate"> begins to withdraw from the circle. Quietly, she slips off. <a href="#/lobby">Follow her before she gets out of sight!</a>';
		}
		else if (50*x <= t && t < 130*x){
			return 'The bizarre dance continues with <input type="text" ng-model="$root.Boy">, <input type="text" ng-model="$root.Bald">, and <input type="text" ng-model="$root.Sexy">.';
		}
		else if (130*x <= t && t < 135*x){
			return 'Finally, the dance concludes. <input type="text" ng-model="$root.Bald"> stomps out the fire, and she leaves the forest with <input type="text" ng-model="$root.Boy"> and <input type="text" ng-model="$root.Sexy">. You decided to follow them back into the town before getting loss in the woods';
		}
		else if (135*x <= t && t < 945*x){
			return '<a href="#/lobby" id = "forestEject1">.</a><img src onerror=\'document.getElementById("forestEject1").click()\'>';
		}
		else if (945*x <= t){
			return '<a href="#/hall" id = "forestEject0">.</a><img src onerror=\'document.getElementById("forestEject0").click()\'>';
		}
		else {
			return '';
		}
	}

//crypt
function cryptContent (t) {
	if (140*x <= t && t < 143*x){
		return 'As <input type="text" ng-model="$root.Banquo"> arrives, he unlocks the door and enters.';
	}
	
	else if (143*x <= t && t < 150*x){
		return '<input type="text" ng-model="$root.Banquo"> heads straight towards a stack of crates and begins to flip through its contents, trying to find something.';
	}
	
	else if (150*x <= t && t < 153*x){
		return '<input type="text" ng-model="$root.Bald"> enters the room silently.';
	}
    
    else if (153*x <= t && t < 160*x){
		return '<input type="text" ng-model="$root.Banquo"> is flipping through a crate, trying to find something';
	}
	
	else if (160*x <= t && t < 165*x){
		return '<input type="text" ng-model="$root.Banquo"> is suddenly alerted by the light footsteps of <input type="text" ng-model="$root.Bald"> and throws a sharp gaze towards the room entrance to see <input type="text" ng-model="$root.Bald"> standing at the doors.';
	}
	
	else if (165*x <= t && t < 168*x){
		return '<input type="text" ng-model="$root.Banquo"> is making a wild gesture, as if telling <input type="text" ng-model="$root.Bald"> to leave the room.';
	}
	
	else if (168*x <= t && t < 172*x){
		return '<input type="text" ng-model="$root.Bald"> ignores <input type="text" ng-model="$root.Banquo"> instructions telling him to leave the room, instead, he steps closer to <input type="text" ng-model="$root.Banquo">, one step at a time.';
	}
	
	else if (172*x <= t && t < 185*x){
		return '<input type="text" ng-model="$root.Bald">: Hail! Lesser than he who will be, and greater. Not so happy, yet much happier. Thou shalt get kings, though thou be none. So all hail, he who shalt be and thee!';
	}
	
	else if (185*x <= t && t < 190*x){
		return '<input type="text" ng-model="$root.Bald"> turns his back against <input type="text" ng-model="$root.Banquo"> and elegantly strides towards the doors. <a href="#/hall">Follow her before she goes out of sight!</a> ';
	}
	
	else if (190*x <= t && t < 200*x){
		return '<input type="text" ng-model="$root.Banquo"> quickly puts everything back into the crate and leaves the room after ensuring that no one else is in the room.';
	}
	
	else if (200*x <= t && t < 202*x){
		return '<a href="#/hall" id = "cryptEject1">.</a><img src onerror=\'document.getElementById("cryptEject1").click()\'>';
	}
	
	else if (371*x <= t && t < 374*x){
		return '<input type="text" ng-model="$root.Bald"> enters.';
	}
	
	else if (374*x <= t && t < 384*x){
		return '<input type="text" ng-model="$root.Bald"> rampantly hurricanes through the room as if trying to find something.';
	}
	
	else if (384*x <= t && t < 390*x){
		return 'As if suddenly remembering something, <input type="text" ng-model="$root.Bald"> removes the wig she was wearing this morning and reveals a bald head. She drops the wig behind one of the crates in the darkness.';
	}
	
	else if (390*x <= t && t < 395*x){
		return '<input type="text" ng-model="$root.Bald"> looks up and sees you finally. He grabs you and leaves the room.';
	}
	
	else if (395*x <= t && t < 397*x){
		return '<a href="#/lobby" id = "cryptEject2">.</a><img src onerror=\'document.getElementById("cryptEject2").click()\'>';
	}
	
	else {
		return '<a href="#/hall" id = "cryptEject0">.</a><img src onerror=\'document.getElementById("cryptEject0").click()\'>';
	}
}

//hall
function hallContent (t) {
	if (0*x <= t && t < 85*x){
		return 'As you enter, you see <input type="text" ng-model="$root.Duncan">, <input type="text" ng-model="$root.Banquo"> and <input type="text" ng-model="$root.Malcolm"> drinking wine around the banquet table. ';
	}
	
	else if (85*x <= t && t < 90*x){
		return '<input type="text" ng-model="$root.Banquo"> puts down the glass on his hand and stands up. He mutters a few words and head towards the exit. <a href="#/luggageRm">Follow him before he goes out of sight!</a>';
	}
	
	else if (90*x <= t && t < 150*x){
		return '<input type="text" ng-model="$root.Duncan"> and <input type="text" ng-model="$root.Malcolm"> proceed to putting away the glasswares they have been drinking from, undoing the mess they’ve made from their drinking just now.';
	}
	
	else if (150*x <= t && t < 153*x){
		return '<input type="text" ng-model="$root.Duncan"> and <input type="text" ng-model="$root.Malcolm"> are at the hall.<br><br><input type="text" ng-model="$root.Sexy"> arrives at the Banquet Hall.';
	}
	
	else if (153*x <= t && t < 155*x){
		return '<input type="text" ng-model="$root.Duncan">, <input type="text" ng-model="$root.Malcolm">, and <input type="text" ng-model="$root.Sexy"> are at the hall.<br><br><input type="text" ng-model="$root.Sexy"> arrives at the Banquet Hall.';
	}
    
    else if (155*x <= t && t < 165*x){
		return '<input type="text" ng-model="$root.Duncan">, <input type="text" ng-model="$root.Malcolm">, and <input type="text" ng-model="$root.Sexy"> are at the hall.';
	}
	
	else if (165*x <= t && t < 168*x){
		return '<input type="text" ng-model="$root.Duncan">, <input type="text" ng-model="$root.Malcolm">, and <input type="text" ng-model="$root.Sexy"> are at the hall.<br><br><input type="text" ng-model="$root.MD"> enters holding <input type="text" ng-model="$root.LMD">\'s hands.';
	}
	
	else if (168*x <= t && t < 170*x){
		return '<input type="text" ng-model="$root.Duncan">, <input type="text" ng-model="$root.Malcolm">, <input type="text" ng-model="$root.Sexy">, <input type="text" ng-model="$root.MD">, and <input type="text" ng-model="$root.LMD"> are at the hall.<br><br><input type="text" ng-model="$root.MD"> enters holding <input type="text" ng-model="$root.LMD">\'s hands.';
	}
	
	else if (170*x <= t && t < 190*x){
		return '<input type="text" ng-model="$root.Duncan">, <input type="text" ng-model="$root.Malcolm">, <input type="text" ng-model="$root.Sexy">, <input type="text" ng-model="$root.MD">, and <input type="text" ng-model="$root.LMD"> are at the hall.';
	}
	
	else if (190*x <= t && t < 193*x){
		return '<input type="text" ng-model="$root.Duncan">, <input type="text" ng-model="$root.Malcolm">, <input type="text" ng-model="$root.Sexy">, <input type="text" ng-model="$root.MD">, and <input type="text" ng-model="$root.LMD"> are at the hall.<br><br><input type="text" ng-model="$root.Bald"> enters.';
	}
	
	else if (193*x <= t && t < 195*x){
		return '<input type="text" ng-model="$root.Duncan">, <input type="text" ng-model="$root.Malcolm">, <input type="text" ng-model="$root.Sexy">, <input type="text" ng-model="$root.MD">, <input type="text" ng-model="$root.LMD">, and <input type="text" ng-model="$root.Bald"> are at the hall.<br><br><input type="text" ng-model="$root.Bald"> enters.';
	}
	
	else if (195*x <= t && t < 200*x){
		return '<input type="text" ng-model="$root.Duncan">, <input type="text" ng-model="$root.Malcolm">, <input type="text" ng-model="$root.Sexy">, <input type="text" ng-model="$root.MD">, <input type="text" ng-model="$root.LMD">, and <input type="text" ng-model="$root.Bald"> are at the hall.';
	}
	
	else if (200*x <= t && t < 203*x){
		return '<input type="text" ng-model="$root.Duncan">, <input type="text" ng-model="$root.Malcolm">, <input type="text" ng-model="$root.Sexy">, <input type="text" ng-model="$root.MD">, <input type="text" ng-model="$root.LMD">, and <input type="text" ng-model="$root.Bald"> are at the hall.<br><br><input type="text" ng-model="$root.Banquo"> arrives here.';
	}
	
	else if (203*x <= t && t < 205*x){
		return '<input type="text" ng-model="$root.Duncan">, <input type="text" ng-model="$root.Malcolm">, <input type="text" ng-model="$root.Sexy">, <input type="text" ng-model="$root.MD">, <input type="text" ng-model="$root.LMD">, <input type="text" ng-model="$root.Bald">, and <input type="text" ng-model="$root.Banquo"> are at the hall.<br><br><input type="text" ng-model="$root.Banquo"> arrives here.';
	}
	
	else if (205*x <= t && t < 210*x){
		return '<input type="text" ng-model="$root.Duncan">, <input type="text" ng-model="$root.Malcolm">, <input type="text" ng-model="$root.Sexy">, <input type="text" ng-model="$root.MD">, <input type="text" ng-model="$root.LMD">, <input type="text" ng-model="$root.Bald">, and <input type="text" ng-model="$root.Banquo"> are at the hall.';
	}
	
	else if (210*x <= t && t < 213*x){
		return '<input type="text" ng-model="$root.Duncan">, <input type="text" ng-model="$root.Malcolm">, <input type="text" ng-model="$root.Sexy">, <input type="text" ng-model="$root.MD">, <input type="text" ng-model="$root.LMD">, <input type="text" ng-model="$root.Bald">, and <input type="text" ng-model="$root.Banquo"> are at the hall.<br><br><input type="text" ng-model="$root.Agnes"> appears at the doors of the Banquet Hall.';
	}
	
	else if (213*x <= t && t < 215*x){
		return '<input type="text" ng-model="$root.Duncan">, <input type="text" ng-model="$root.Malcolm">, <input type="text" ng-model="$root.Sexy">, <input type="text" ng-model="$root.MD">, <input type="text" ng-model="$root.LMD">, <input type="text" ng-model="$root.Bald">, <input type="text" ng-model="$root.Banquo">, and <input type="text" ng-model="$root.Agnes"> are at the hall.<br><br><input type="text" ng-model="$root.Agnes"> appears at the doors of the Banquet Hall.';
	}
	
	else if (215*x <= t && t < 220*x){
		return '<input type="text" ng-model="$root.Duncan">, <input type="text" ng-model="$root.Malcolm">, <input type="text" ng-model="$root.Sexy">, <input type="text" ng-model="$root.MD">, <input type="text" ng-model="$root.LMD">, <input type="text" ng-model="$root.Bald">, <input type="text" ng-model="$root.Banquo">, and <input type="text" ng-model="$root.Agnes"> are at the hall.';
	}
	
	else if (220*x <= t && t < 223*x){
		return '<input type="text" ng-model="$root.Duncan">, <input type="text" ng-model="$root.Malcolm">, <input type="text" ng-model="$root.Sexy">, <input type="text" ng-model="$root.MD">, <input type="text" ng-model="$root.LMD">, <input type="text" ng-model="$root.Bald">, <input type="text" ng-model="$root.Banquo">, and <input type="text" ng-model="$root.Agnes"> are at the hall.<br><br><input type="text" ng-model="$root.Boy"> enters.';
	}
	
	else if (223*x <= t && t < 225*x){
		return '<input type="text" ng-model="$root.Duncan">, <input type="text" ng-model="$root.Malcolm">, <input type="text" ng-model="$root.Sexy">, <input type="text" ng-model="$root.MD">, <input type="text" ng-model="$root.LMD">, <input type="text" ng-model="$root.Bald">, <input type="text" ng-model="$root.Banquo">, <input type="text" ng-model="$root.Agnes">, and <input type="text" ng-model="$root.Boy"> are at the hall.<br><br><input type="text" ng-model="$root.Boy"> enters.';
	}
	
	else if (225*x <= t && t < 230*x){
		return '<input type="text" ng-model="$root.Duncan">, <input type="text" ng-model="$root.Malcolm">, <input type="text" ng-model="$root.Sexy">, <input type="text" ng-model="$root.MD">, <input type="text" ng-model="$root.LMD">, <input type="text" ng-model="$root.Bald">, <input type="text" ng-model="$root.Banquo">, <input type="text" ng-model="$root.Agnes">, and <input type="text" ng-model="$root.Boy"> are at the hall.';
	}
	
	else if (230*x <= t && t < 233*x){
		return '<input type="text" ng-model="$root.Duncan">, <input type="text" ng-model="$root.Malcolm">, <input type="text" ng-model="$root.Sexy">, <input type="text" ng-model="$root.MD">, <input type="text" ng-model="$root.LMD">, <input type="text" ng-model="$root.Bald">, <input type="text" ng-model="$root.Banquo">, <input type="text" ng-model="$root.Agnes">, and <input type="text" ng-model="$root.Boy"> are at the hall.<br><br>As <input type="text" ng-model="$root.LMB"> arrives at the hall, you hear the music begin to sound in the hall.';
	}
	
	else if (233*x <= t && t < 235*x){
		return '<input type="text" ng-model="$root.Duncan">, <input type="text" ng-model="$root.Malcolm">, <input type="text" ng-model="$root.Sexy">, <input type="text" ng-model="$root.MD">, <input type="text" ng-model="$root.LMD">, <input type="text" ng-model="$root.Bald">, <input type="text" ng-model="$root.Banquo">, <input type="text" ng-model="$root.Agnes">, <input type="text" ng-model="$root.Boy">, and <input type="text" ng-model="$root.LMB"> are at the hall.<br><br>As <input type="text" ng-model="$root.LMB"> arrives at the hall, you hear the music begin to sound in the hall.';
	}
	
	else if (235*x <= t && t < 275*x){
		return 'The ball has started! Everyone is having a good time dancing. <input type="text" ng-model="$root.Duncan">, <input type="text" ng-model="$root.Malcolm">, <input type="text" ng-model="$root.Banquo">, <input type="text" ng-model="$root.MD">, <input type="text" ng-model="$root.LMD">, <input type="text" ng-model="$root.LMB">, <input type="text" ng-model="$root.Bald">, <input type="text" ng-model="$root.Sexy">, <input type="text" ng-model="$root.Boy">, and <input type="text" ng-model="$root.Agnes"> are all here celebrating this morning.';
	}
	
	else if (275*x <= t && t < 290*x){
		return 'The ball has started! Everyone is having a good time dancing. <input type="text" ng-model="$root.Duncan">, <input type="text" ng-model="$root.Malcolm">, <input type="text" ng-model="$root.Banquo">, <input type="text" ng-model="$root.MD">, <input type="text" ng-model="$root.LMD">, <input type="text" ng-model="$root.LMB">, <input type="text" ng-model="$root.Bald">, <input type="text" ng-model="$root.Sexy">, <input type="text" ng-model="$root.Boy">, and <input type="text" ng-model="$root.Agnes"> are all here celebrating this morning.<br><br>You can faintly see a figure on the mezzanine looking down at the hall.';
	}
	
	else if (290*x <= t && t < 300*x){
		return 'Suddenly <input type="text" ng-model="$root.LMD"> fell to the ground. It looks like that she is not feeling too well. <input type="text" ng-model="$root.MD"> and <input type="text" ng-model="$root.Agnes"> quickly gathers around <input type="text" ng-model="$root.LMD"> to check her out.';
	}
	
	else if (300*x <= t && t < 305*x){
		return 'While <input type="text" ng-model="$root.MD"> returns to the ball, <input type="text" ng-model="$root.Agnes"> takes the sick <input type="text" ng-model="$root.LMD"> to the exit and leaves the hall. <a href="#/lobby">Follow them before they go out of sight!</a>';
	}
	
	else if (305*x <= t && t < 315*x){
		return '<input type="text" ng-model="$root.Duncan">, <input type="text" ng-model="$root.Malcolm">, <input type="text" ng-model="$root.Banquo">, <input type="text" ng-model="$root.MD">, <input type="text" ng-model="$root.LMB">, <input type="text" ng-model="$root.Bald">, <input type="text" ng-model="$root.Sexy">, and <input type="text" ng-model="$root.Boy"> are here celebrating the ball!<br><br>You can faintly see a figure on the mezzanine looking down at the hall.';
	}
	
	else if (315*x <= t && t < 320*x){
		return '<input type="text" ng-model="$root.Duncan">, <input type="text" ng-model="$root.Malcolm">, <input type="text" ng-model="$root.Banquo">, <input type="text" ng-model="$root.MD">, <input type="text" ng-model="$root.LMB">, <input type="text" ng-model="$root.Bald">, <input type="text" ng-model="$root.Sexy">, and <input type="text" ng-model="$root.Boy"> are here celebrating the ball!<br><br>You can faintly see a figure on the mezzanine looking down at the hall.<br><br><input type="text" ng-model="$root.Agnes"> Enters and join the ball.';
	}
	
	else if (320*x <= t && t < 347*x){
		return '<input type="text" ng-model="$root.Duncan">, <input type="text" ng-model="$root.Malcolm">, <input type="text" ng-model="$root.Banquo">, <input type="text" ng-model="$root.MD">, <input type="text" ng-model="$root.LMB">, <input type="text" ng-model="$root.Bald">, <input type="text" ng-model="$root.Sexy">, <input type="text" ng-model="$root.Boy">, and <input type="text" ng-model="$root.Agnes"> are here celebrating the ball!<br><br>You can faintly see a figure on the mezzanine looking down at the hall.';
	}
	
	else if (347*x <= t && t < 355*x){
		return 'As noon approaches, the ball finally comes to a conclusion. After a bit of chit-chat, most of them begins to scatter. <a href="#/duncan">Follow <input type="text" ng-model="$root.Duncan"> before he goes out of sight!</a> //<br><a href="#/alley">Follow <input type="text" ng-model="$root.Malcolm"> before he goes out of sight!</a> //<br><a href="#/speakeasy">Follow <input type="text" ng-model="$root.Banquo"> before he goes out of sight!</a> //<br><a href="#/alley">Follow <input type="text" ng-model="$root.LMB"> before she goes out of sight!</a> //<br><a href="#/alley">Follow <input type="text" ng-model="$root.Sexy"> before she goes out of sight!</a> //<br><a href="#/lobby">Follow <input type="text" ng-model="$root.Boy"> before he goes out of sight!</a> //<br><a href="#/alley">Follow <input type="text" ng-model="$root.Agnes"> before she goes out of sight!</a>';
	}
	
	else if (355*x <= t && t < 358*x){
		return 'While most people left the Banquet Hall, <input type="text" ng-model="$root.Bald"> begins to approach <input type="text" ng-model="$root.MD">, who is beginning to leave from the exit.';
	}
	
	else if (358*x <= t && t < 361*x){
		return '<input type="text" ng-model="$root.Bald"> quickly snaked between <input type="text" ng-model="$root.MD"> and the exit and begins approaching <input type="text" ng-model="$root.MD">. <input type="text" ng-model="$root.MD"> attempts to sidestep and ignore him, but <input type="text" ng-model="$root.Bald"> catches his shoulder firmly.';
	}
	
	else if (361*x <= t && t < 366*x){
		return 'Quickly, <input type="text" ng-model="$root.MD"> slides under <input type="text" ng-model="$root.Bald">\'s armpit to avoid further interaction and dashed out the doors. <a href="#/lobby">Follow him before he goes out of sight!</a>';
	}
	
	else if (366*x <= t && t < 371*x){
		return '<input type="text" ng-model="$root.Bald"> turns around trying to catch up, but his prey already left the room more quickly than he can follow. He runs out of the Banquet Hall trying to follow his target. <a href="#/crypt">Follow him before he goes out of sight!</a>';
	}
	
	else if (430*x <= t && t < 433*x){
		return '<input type="text" ng-model="$root.Banquo"> enters from the doors.';
	}
	
	else if (433*x <= t && t < 438*x){
		return '<input type="text" ng-model="$root.Banquo"> begins dancing in an entranced manner.';
	}
	
	else if (438*x <= t && t < 468*x){
		return '<input type="text" ng-model="$root.Banquo"> is performing a marvelous display of acrobatics solo. Lonely but dazzling.';
	}
	
	else if (468*x <= t && t < 473*x){
		return '<input type="text" ng-model="$root.Banquo"> looks as if he is alerted. He quickly glances up and scan around the room, then quickly decides to leave the room. <a href="#/alley">Follow him before he goes out of sight!</a>';
	}
	
	else if (925*x <= t && t < 928*x){
		return '<br><br><input type="text" ng-model="$root.Boy"> and <input type="text" ng-model="$root.Bald"> arrives.';
	}
	
	else if (928*x <= t && t < 930*x){
		return '<input type="text" ng-model="$root.Boy"> and <input type="text" ng-model="$root.Bald"> are at the hall.<br><br><input type="text" ng-model="$root.Boy"> and <input type="text" ng-model="$root.Bald"> arrives.';
	}
	
	else if (930*x <= t && t < 933*x){
		return '<input type="text" ng-model="$root.Boy"> and <input type="text" ng-model="$root.Bald"> are at the hall.<br><br><input type="text" ng-model="$root.MB"> and <input type="text" ng-model="$root.LMB"> enters the hall holding each other’s arms.';
	}
	
	else if (933*x <= t && t < 935*x){
		return '<input type="text" ng-model="$root.Boy">, <input type="text" ng-model="$root.Bald">, <input type="text" ng-model="$root.MB">, and <input type="text" ng-model="$root.LMB"> are at the hall.<br><br><input type="text" ng-model="$root.MB"> and <input type="text" ng-model="$root.LMB"> enters the hall holding each other’s arms.';
	}
	
	else if (935*x <= t && t < 938*x){
		return '<input type="text" ng-model="$root.Boy">, <input type="text" ng-model="$root.Bald">, <input type="text" ng-model="$root.MB">, and <input type="text" ng-model="$root.LMB"> are at the hall.<br><br><input type="text" ng-model="$root.Sexy"> comes into the hall.';
	}
	
	else if (938*x <= t && t < 940*x){
		return '<input type="text" ng-model="$root.Boy">, <input type="text" ng-model="$root.Bald">, <input type="text" ng-model="$root.MB">, <input type="text" ng-model="$root.LMB">, and <input type="text" ng-model="$root.Sexy"> are at the hall.<br><br><input type="text" ng-model="$root.Sexy"> comes into the hall.';
	}
	
	else if (940*x <= t && t < 943*x){
		return '<input type="text" ng-model="$root.Boy">, <input type="text" ng-model="$root.Bald">, <input type="text" ng-model="$root.MB">, <input type="text" ng-model="$root.LMB">, and <input type="text" ng-model="$root.Sexy"> are at the hall.<br><br><input type="text" ng-model="$root.taxidermist"> walks in the opened double doors.';
	}
	
	else if (943*x <= t && t < 945*x){
		return '<input type="text" ng-model="$root.Boy">, <input type="text" ng-model="$root.Bald">, <input type="text" ng-model="$root.MB">, <input type="text" ng-model="$root.LMB">, <input type="text" ng-model="$root.Sexy">, and <input type="text" ng-model="$root.taxidermist"> are at the hall.<br><br><input type="text" ng-model="$root.taxidermist"> walks in the opened double doors.';
	}
	
	else if (945*x <= t && t < 948*x){
		return '<input type="text" ng-model="$root.Boy">, <input type="text" ng-model="$root.Bald">, <input type="text" ng-model="$root.MB">, <input type="text" ng-model="$root.LMB">, <input type="text" ng-model="$root.Sexy">, and <input type="text" ng-model="$root.taxidermist"> are at the hall.<br><br><input type="text" ng-model="$root.MD"> and <input type="text" ng-model="$root.Malcolm"> enters.';
	}
	
	else if (948*x <= t && t < 950*x){
		return '<input type="text" ng-model="$root.Boy">, <input type="text" ng-model="$root.Bald">, <input type="text" ng-model="$root.MB">, <input type="text" ng-model="$root.LMB">, <input type="text" ng-model="$root.Sexy">, <input type="text" ng-model="$root.taxidermist">, <input type="text" ng-model="$root.MD">, and <input type="text" ng-model="$root.Malcolm"> are at the hall.<br><br><input type="text" ng-model="$root.MD"> and <input type="text" ng-model="$root.Malcolm"> enters.';
	}
	
	else if (950*x <= t && t < 952*x){
		return '<input type="text" ng-model="$root.Boy">, <input type="text" ng-model="$root.Bald">, <input type="text" ng-model="$root.MB">, <input type="text" ng-model="$root.LMB">, <input type="text" ng-model="$root.Sexy">, <input type="text" ng-model="$root.taxidermist">, <input type="text" ng-model="$root.MD">, and <input type="text" ng-model="$root.Malcolm"> are at the hall.';
	}
    
    else if (952*x <= t){
		return '<a href="#/ending" id = "hallEject0">.</a><img src onerror=\'document.getElementById("hallEject0").click()\'>';
	}
	
	else {
		return 'There’s no one here now… I’m assuming that you are not here for the gold?';
	}
}

//mezzanine
function mezzanineContent (t) {
	if (235*x <= t && t < 275*x){
		return 'The ball has started below at the Banquet Hall!';
	}
	
	else if (275*x <= t && t < 280*x){
		return '<input type="text" ng-model="$root.MB"> arrives at the mezzanine and silently watches the ball below.';
	}
	
	else if (280*x <= t && t < 347*x){
		return '<input type="text" ng-model="$root.MB"> is silently watching the ball below.';
	}
	
	else if (347*x <= t && t < 350*x){
		return 'The ball below has finally ended!';
	}
	
	else if (350*x <= t && t < 355*x){
		return '<input type="text" ng-model="$root.MB"> turns around and quickly leaves the mezzanine. <a href="#/MB">Follow him before he goes out of sight!</a>';
	}
    
    else if (355*x <= t && t < 358*x){
		return 'The ball below has finally ended!';
	}
	
	else if (358*x <= t && t < 362*x){
		return 'You hear a few loud steps and look down the balcony to see two figures seemingly fighting.';
	}
	
	else if (435*x <= t && t < 473*x){
		return 'You hear some noise coming from the Banquet Hall below and see a figure seemingly trotting around the hall.';
	}
	
	else if (473*x <= t && t < 478*x){
		return 'The figure below in the hall leaves.';
	}
	
	else if (925*x <= t && t < 945*x){
		return 'You notice that people begin to arrive at the hall downstairs. You wonder if there’s anything happening there.';
	}
	
	else if (945*x <= t && t < 950*x){
		return 'The music below in the Banquet Hall begins. You remember that there will be a feast tonight and decide to go and appreciate its marvelousness.';
	}
	
	else if (950*x <= t){
		return '<a href="#/hall" id = "mezzanineEject0">.</a><img src onerror=\'document.getElementById("mezzanineEject0").click()\'>';
	}
	
	else {
		return 'No. There’s no one here. Not because it’s too dim for you to see. There’s just no one.';
	}
}

//kitchen
function kitchenContent (t) {
		if (0*x <= t && t < 80*x){
			return '<input type="text" ng-model="$root.Maid"> is working in the kitchen early. Looks like she is busy preparing breakfast for those who live here.';
		}
		
		else if (80*x <= t && t < 85*x){
			return 'With her prepared breakfast, <input type="text" ng-model="$root.Maid"> leaves the kitchen. <a href="#/lobby">Follow her before she goes out of sight!</a>';
		}
		
        else if (265*x <= t && t < 272*x){
			return '<input type="text" ng-model="$root.Maid"> enters the kitchen. She quickly puts down some herbs and begins grinding them into powder';
		}
		
        else if (272*x <= t && t < 365*x){
			return '<input type="text" ng-model="$root.Maid"> begins mixing the powder into some liquid she obtained on the shelves. Looks like she is mixing a drink for someone.';
		}
		
        else if (365*x <= t && t < 370*x){
			return '<input type="text" ng-model="$root.Maid"> grabs the cup of drink she made and she leaves the kitchen. <a href="#/duncan">Follow her before she goes out of sight!</a>';
		}
		
        else if (442*x <= t && t < 448*x){
			return '<input type="text" ng-model="$root.Maid"> comes into the kitchen and quickly dropped off the empty cup on her hands. She roughly washes it, places it on the shelves. With all that taken care of, she quickly goes out the doors. <a href="#/alley">Follow her before she goes out of sight!</a>';
		}
		
        else if (945*x <= t && t < 950*x){
			return 'Looking at all the food on the table, you realize that you haven’t eaten a thing throughout the day. You remember <input type="text" ng-model="$root.name"> telling you that there would be a feast tonight at the Banquet Halls, and you decide that you should probably go there and fill your grumbling stomach.';
		}
		
        else if (950*x <= t){
			return '<a href="#/hall" id = "kitchenEject0">.</a><img src onerror=\'document.getElementById("kitchenEject0").click()\'>';
		}
        
		else {
			return 'There doesn’t seem to be anyone or anything happening here right now...';
		}
	
}

//lobby
function lobbyContent (t) {
		if (0*x <= t && t < 50*x){
			return '<input type="text" ng-model="$root.Porter"> is happily dancing around the place, dusting and tidying the lobby to receive a new day.';
		}
		
		else if (50*x <= t && t < 53*x){
			return '<input type="text" ng-model="$root.Hecate"> steps into the lobby.';
		}
		
        else if (53*x <= t && t < 60*x){
			return '<input type="text" ng-model="$root.Hecate"> approaches <input type="text" ng-model="$root.Porter"> and grabs him in the shoulder. She seems to be telling him something but you couldn’t make it out.';
		}
		
        else if (60*x <= t && t < 65*x){
			return '<input type="text" ng-model="$root.Hecate"> angrily shoves <input type="text" ng-model="$root.Porter"> away and left the hostel, leaving a shocked <input type="text" ng-model="$root.Porter"> in place. <a href="#/alley">Follow her before she goes out of sight!</a>';
		}
        
        else if (65*x <= t && t < 80*x){
			return '<input type="text" ng-model="$root.Porter"> is quietly dusting the area';
		}
		
        else if (80*x <= t && t < 85*x){
			return '<input type="text" ng-model="$root.LMD"> with a pregnant body arrives and rings a bell on the front desk.';
		}
		
        else if (85*x <= t && t < 100*x){
			return '<input type="text" ng-model="$root.Maid"> arrives with some breakfast in her hands. She lays down some toast and jam in front of <input type="text" ng-model="$root.LMD"> but refuses to put the glass of milk down.';
		}
		
        else if (100*x <= t && t < 110*x){
			return '<input type="text" ng-model="$root.LMD"> seems desperate to drink the milk and tries to fetch the glass. <input type="text" ng-model="$root.Maid"> constantly keeps the glass out of reach.';
		}
		
        else if (110*x <= t && t < 120*x){
			return 'After a few fail attempt for <input type="text" ng-model="$root.LMD"> to grab the glass in <input type="text" ng-model="$root.Maid">’s hand, <input type="text" ng-model="$root.Maid"> finally drips the milk down <input type="text" ng-model="$root.LMD">’s arm and <input type="text" ng-model="$root.LMD"> licks it off.';
		}
		
        else if (120*x <= t && t < 125*x){
			return '<input type="text" ng-model="$root.Maid"> pours the milk in a bowl and <input type="text" ng-model="$root.LMD"> drinks it like a cat, as <input type="text" ng-model="$root.Maid"> walks away. <a href="#/alley">Follow her before she goes out of sight!</a>';
		}
		
        else if (125*x <= t && t < 135*x){
			return '<input type="text" ng-model="$root.LMD"> is drinking milk from a bowl on the ground.';
		}
		
        else if (135*x <= t && t < 140*x){
			return '<input type="text" ng-model="$root.Bald">, <input type="text" ng-model="$root.Boy">, and <input type="text" ng-model="$root.Sexy"> arrives at the hostel.';
		}
		
        else if (140*x <= t && t < 145*x){
			return '<input type="text" ng-model="$root.MB"> and <input type="text" ng-model="$root.MD"> arrives at the hostel.';
		}
		
        else if (145*x <= t && t < 150*x){
			return '<input type="text" ng-model="$root.Boy">, <input type="text" ng-model="$root.Bald">, <input type="text" ng-model="$root.Sexy"> quickly gathers around <input type="text" ng-model="$root.MB"> and hands him an envelope. As quickly as they gathered, they scattered from <input type="text" ng-model="$root.MB">. <input type="text" ng-model="$root.Bald"> and <input type="text" ng-model="$root.Sexy"> quickly dashes out of the doors. <a href="#/crypt">Follow <input type="text" ng-model="$root.Bald"> before she goes out of sight!</a> //<br><a href="#/hall">Follow <input type="text" ng-model="$root.Sexy"> before she goes out of sight!</a>';
		}
		
        else if (150*x <= t && t < 155*x){
			return '<input type="text" ng-model="$root.MB"> quickly hides the envelop in his pocket, and he strode towards an exit from the lobby. <a href="#/MB">Follow him before he goes out of sight!</a>';
		}
		
        else if (155*x <= t && t < 160*x){
			return 'There is a moment of silence as everyone in the lobby go on with their business.';
		}
		
        else if (160*x <= t && t < 165*x){
			return '<input type="text" ng-model="$root.MD"> gently holds <input type="text" ng-model="$root.LMD">’s arm on his hands and they both left the hostel. <a href="#/hall">Follow them before they go out of sight!</a>';
		}
		
        else if (165*x <= t && t < 205*x){
			return '<input type="text" ng-model="$root.Boy"> is running around the lobby like a child, gently touching everything in his path.';
		}
		
        else if (205*x <= t && t < 215*x){
			return '<input type="text" ng-model="$root.Boy">: ALL THERE IS…';
		}
		
        else if (215*x <= t && t < 220*x){
			return '<input type="text" ng-model="$root.Boy">: ALL THERE IS…<br><input type="text" ng-model="$root.Boy"> leaves the hostel. <a href="#/hall">Follow him before he goes out of sight!</a>';
		}
		
        else if (220*x <= t && t < 230*x){
			return 'With everyone else gone, <input type="text" ng-model="$root.Porter"> returns to his office and locks the door behind him.';
		}
		
        else if (305*x <= t && t < 315*x){
			return '<input type="text" ng-model="$root.Agnes"> enters holding the pregnant <input type="text" ng-model="$root.LMD"> on her arms, <input type="text" ng-model="$root.LMD"> looks like she just passed out. <input type="text" ng-model="$root.Agnes"> gently places her down on an armchair and leaves the hostel again. <a href="#/hall">Follow her before she goes out of sight!</a>';
		}
		
        else if (315*x <= t && t < 330*x){
			return '<input type="text" ng-model="$root.LMD"> is lying on the armchair in the corner.';
		}
		
        else if (330*x <= t && t < 335*x){
			return '<input type="text" ng-model="$root.Porter"> enters the room. Seeing a weak <input type="text" ng-model="$root.LMD"> lying on the armchair, he approaches her. ';
		}
		
        else if (335*x <= t && t < 355*x){
			return '<input type="text" ng-model="$root.Porter"> begins to take advantage of <input type="text" ng-model="$root.LMD"> as the pregnant <input type="text" ng-model="$root.LMD"> tries to shrug him off.';
		}
		
        else if (355*x <= t && t < 360*x){
			return '<input type="text" ng-model="$root.Boy"> enters the hostel and sees <input type="text" ng-model="$root.Porter"> playing with <input type="text" ng-model="$root.LMD">. <input type="text" ng-model="$root.Boy"> quickly tags <input type="text" ng-model="$root.Porter"> before pulling him into another room. <a href="#/luggageRm">Follow them before they go out of sight!</a>';
		}
        
        else if (360*x <= t && t < 366*x){
			return '<input type="text" ng-model="$root.LMD"> is lying on the armchair in the corner.';
		}
		
        else if (366*x <= t && t < 380*x){
			return '<input type="text" ng-model="$root.MD"> arrives and sees <input type="text" ng-model="$root.LMD"> in the armchair. He rushes towards her and gently checks if all is well. He lightly places his palm on <input type="text" ng-model="$root.LMD">’s swollen belly and feels it.';
		}
		
        else if (380*x <= t && t < 385*x){
			return '<input type="text" ng-model="$root.MD"> takes <input type="text" ng-model="$root.LMD"> away with him. <a href="#/MD">Follow them before they get out of sight!</a>';
		}
		
        else if (395*x <= t && t < 408*x){
			return '<input type="text" ng-model="$root.Bald"> arrives.';
		}
		
        else if (408*x <= t && t < 411*x){
			return '<input type="text" ng-model="$root.Banquo"> arrives and <input type="text" ng-model="$root.Bald"> sees him.';
		}
		
        else if (411*x <= t && t < 425*x){
			return '<input type="text" ng-model="$root.Bald"> quickly approaches <input type="text" ng-model="$root.Banquo">, and starts slithering up <input type="text" ng-model="$root.Banquo">’s body. <input type="text" ng-model="$root.Banquo"> doesn’t resist <input type="text" ng-model="$root.Bald">, and seems to be amazed. ';
		}
		
        else if (425*x <= t && t < 430*x){
			return 'After a while <input type="text" ng-model="$root.Bald"> separates from <input type="text" ng-model="$root.Banquo">, and they both leave the hostel. <a href="#/alley">Follow <input type="text" ng-model="$root.Bald"> before she leaves your sight!</a> //<br><a href="#/hall">Follow <input type="text" ng-model="$root.Banquo"> before he leaves your sight!</a>';
		}
		
        else if (440*x <= t && t < 445*x){
			return '<input type="text" ng-model="$root.Porter"> comes out of his office and sees you in the lobby. Quickly, he grabs you and takes you into his office.';
		}
		
        else if (445*x <= t && t < 447*x){
			return '<a href="#/pOffice" id = "lobbyEject1">.</a><img src onerror=\'document.getElementById("lobbyEject1").click()\'>';
		}
		
        else if (472*x <= t && t < 475*x){
			return 'You see an obviously terrified <input type="text" ng-model="$root.LMD"> rushes in here.';
		}
		
        else if (475*x <= t && t < 480*x){
			return '<input type="text" ng-model="$root.MB"> rushes in holding a knife on his hand. He is covered with some blood on his shirt.';
		}
		
        else if (480*x <= t && t < 485*x){
			return '<input type="text" ng-model="$root.MB"> catches up with <input type="text" ng-model="$root.LMD"> and stabs her repeatedly with his knife.';
		}
		
        else if (485*x <= t && t < 490*x){
			return '<input type="text" ng-model="$root.MB"> lifts his head up and looks around. He seems to be alerted and quickly leaves the hostel lobby. <a href="#/MB">Follow him before he goes out of sight!</a>';
		}
		
        else if (490*x <= t && t < 505*x){
			return '<input type="text" ng-model="$root.LMD"> silently lies in a blood pool on the floor.';
		}
		
        else if (505*x <= t && t < 512*x){
			return '<input type="text" ng-model="$root.MD"> enters and sees <input type="text" ng-model="$root.LMD"> lying on the floor, covered with blood. <input type="text" ng-model="$root.MD"> looks shocked, then devastated.';
		}
		
        else if (512*x <= t && t < 517*x){
			return '<input type="text" ng-model="$root.MD"> gently picks up the dead body of <input type="text" ng-model="$root.LMD"> and stumbles across the room towards an exit. It is as if his soul is drained from him, and every step he takes can topple him over. <a href="#/MD">Follow him before he goes out of sight!</a>';
		}
		
        else if (560*x <= t && t < 565*x){
			return '<input type="text" ng-model="$root.taxidermist"> passes by and quickly leaves from another exit. <a href="#/duncan">Follow him before he goes out of sight!</a>';
		}
		
        else if (945*x <= t && t < 950*x){
			return 'You remember <input type="text" ng-model="$root.name"> telling you that there would be a feast tonight at the Banquet Halls. Having not eaten anything yet for the day, you decide that it is a good idea to join the banquet, and off you go.';
		}
		
        else if (950*x <= t){
			return '<a href="#/hall" id = "lobbyEject0">.</a><img src onerror=\'document.getElementById("lobbyEject0").click()\'>';
		}
        
		else {
			return 'This is probably not somewhere you want to spend your day… Go find someone or something else more interesting…';
		}
	}

//pOffice
function pOfficeContent (t) {
	if (445*x <= t && t < 452*x){
		return 'As <input type="text" ng-model="$root.Porter"> pulls you through into his office, he walks into a small compartment separated by some tall cabinets. Through a desk mirror placed on a shelf at the end of the room, you are able to see him in the compartment';
	}
	
	else if (452*x <= t && t < 470*x){
		return '<input type="text" ng-model="$root.Porter"> begins to put on a long black wig and some blood-red lipstick.';
	}
	
	else if (470*x <= t && t < 485*x){
		return 'Suddenly, <input type="text" ng-model="$root.Porter"> pushes away the mirror. He comes out of the compartment, and wipes off the make-up on his face. He buries his face into your shoulders and starts crying unstoppably. All you can do is to give him a gentle hug and try to soothe him.';
	}
	
	else if (485*x <= t && t < 490*x){
		return 'After a while <input type="text" ng-model="$root.Porter"> begins to reduce into small little sobs, not wanting you to continue witness his emotions, he invites you to leave his office while he stays inside to calm down.';
	}
	
    else {
		return '<a href="#/lobby" id = "pOfficeEject0">.</a><img src onerror=\'document.getElementById("pOfficeEject0").click()\'>';
	}
}

//tBooth
function tBoothContent (t) {

}

//luggageRm
function luggageRmContent (t) {
	if (90*x <= t && t < 95*x){
		return '<input type="text" ng-model="$root.MB"> and <input type="text" ng-model="$root.Banquo"> arrives from two different entrances of the room.';
	}
	
	else if (95*x <= t && t < 105*x){
		return 'Seeing each other, <input type="text" ng-model="$root.MB"> and <input type="text" ng-model="$root.Banquo"> merrily walk towards each other and you see them greet each other with a great hug, ones that old friends give each other upon greetings.';
	}
	
	else if (105*x <= t && t < 135*x){
		return '<input type="text" ng-model="$root.MB"> and <input type="text" ng-model="$root.Banquo"> chit-chats for a moment in the room.';
	}
	
	else if (135*x <= t && t < 140*x){
		return '<input type="text" ng-model="$root.MB"> and <input type="text" ng-model="$root.Banquo"> finally gives each other a big hug and part their way separately. <a href="#/lobby">Follow <input type="text" ng-model="$root.MB"> before he goes out of sight!</a> //<br><a href="#/crypt">Follow <input type="text" ng-model="$root.Banquo"> before he goes out of sight!</a>';
	}
	
	else if (360*x <= t && t < 365*x){
		return 'You see <input type="text" ng-model="$root.Boy"> enters holding the hands of <input type="text" ng-model="$root.Porter">. With a sidestep into the room, they begin a waltz-like dance. ';
	}
	
	else if (365*x <= t && t < 385*x){
		return 'It is rather obvious that <input type="text" ng-model="$root.Boy"> is dominating the dance field as if attempting to subdue <input type="text" ng-model="$root.Porter">. <input type="text" ng-model="$root.Porter"> tries to leave the room and quit the dance, but with every move he makes, <input type="text" ng-model="$root.Boy"> seems to be able to trap him into another dance move with him.';
	}
	
	else if (385*x <= t && t < 405*x){
		return 'As the moments pass, <input type="text" ng-model="$root.Porter"> begins to give up on trying to escape from the grasp of <input type="text" ng-model="$root.Boy">, but instead being increasingly entranced by him.';
	}
	
	else if (405*x <= t && t < 410*x){
		return 'In a split second, you feel as if <input type="text" ng-model="$root.Boy"> looked at you. Before you can react, he suddenly appears in front of you and dragged you behind a counter in the room.';
	}
	
	else if (410*x <= t && t < 415*x){
		return 'You see a drop of tear crystallising on the corner of his left eye. Instinctively you plucked a piece of tissue on the counter and wiped off the drop of sorrow.';
	}
	
	else if (415*x <= t && t < 426*x){
		return 'As you wipe off his tear, <input type="text" ng-model="$root.Boy"> begins to close the gap with you until his lips gently press against your right ear.';
	}
	
	else if (426*x <= t && t < 430*x){
		return 'As you wipe off his tear, <input type="text" ng-model="$root.Boy"> begins to close the gap with you until his lips gently press against your right ear.<br><input type="text" ng-model="$root.Boy">: Last night I dreamt about you, my dear.';
	}
	
	else if (430*x <= t && t < 435*x){
		return 'With that note, <input type="text" ng-model="$root.Boy"> dashes out of the room. <a href="#/speakeasy">Follow him before he goes out of sight!</a>';
	}
	
	else if (435*x <= t && t < 440*x){
		return 'Looking a little bit confused, <input type="text" ng-model="$root.Porter"> slowly walks towards the door and leaves the room. <a href="#/lobby">Follow him before he goes out of sight!</a>';
	}
	
	else if (860*x <= t && t < 863*x){
		return '<input type="text" ng-model="$root.Boy"> enters the room in a delirious state.';
	}
	
	else if (863*x <= t && t < 920*x){
		return '<input type="text" ng-model="$root.Boy"> is as if he just hit the jackpot of something huge and begins a wild dance around the room to celebrate it.';
	}
	
	else if (920*x <= t && t < 925*x){
		return 'Having trodden all around the room in an elevated mood, <input type="text" ng-model="$root.Boy"> decides that it is time he should leave the room. <a href="#/hall">Follow him before he goes out of sight!</a>';
	}
	
	else if (945*x <= t && t < 950*x){
		return 'You remember <input type="text" ng-model="$root.name"> mentioning a feast tonight at the Banquet Halls. Being starved, you decides that it is probably time you should go grab some food there.';
	}
	
	else if (950*x <= t){
		return '<a href="#/hall" id = "luggageRmEject0">.</a><img src onerror=\'document.getElementById("luggageRmEject0").click()\'>';
	}
	
	else {
		return 'There sure are a lot of stuff here. But people? Not quite.';
	}
}

//MB
function MBContent (t) {
	if (0*x <= t && t < 55*x){
		return 'As you enter, you see <input type="text" ng-model="$root.MB"> and <input type="text" ng-model="$root.LMB"> snoring peacefully in their beds. Better not disturb them!';
	}
	
	else if (55*x <= t && t < 85*x){
		return '<input type="text" ng-model="$root.MB"> wakes up from his sleep and quietly dresses up while <input type="text" ng-model="$root.LMB"> stays asleep.';
	}
	
	else if (85*x <= t && t < 90*x){
		return '<input type="text" ng-model="$root.MB"> leaves the room. <a href="#/luggageRm">Follow him before he goes out of sight!</a>';
	}
	
	else if (90*x <= t && t < 115*x){
		return '<input type="text" ng-model="$root.LMB"> continues to sleep tightly in the bed.';
	}
	
	else if (115*x <= t && t < 155*x){
		return '<input type="text" ng-model="$root.LMB"> wakes up and you see her choosing a dress and putting on some make-up.';
	}
	
	else if (155*x <= t && t < 160*x){
		return '<input type="text" ng-model="$root.MB"> enters, he looks as if he is slightly frightened. He produces a note from his pocket and hands it to <input type="text" ng-model="$root.LMB"> and she quietly reads it.';
	}
	
	else if (160*x <= t && t < 225*x){
		return 'You observes <input type="text" ng-model="$root.LMB"> and <input type="text" ng-model="$root.MB"> argue about something while <input type="text" ng-model="$root.LMB"> holds a note on her hand, but you aren’t able to make out the words.';
	}
	
	else if (225*x <= t && t < 230*x){
		return '<input type="text" ng-model="$root.LMB"> slams the note onto a desk full of books and grabs her coat and storms out of the room. <a href="#/hall">Follow her before she goes out of sight!</a>';
	}
	
	else if (230*x <= t && t < 235*x){
		return '<input type="text" ng-model="$root.MB"> picks up the note on the desk and slips it into his pocket and quickly leaves the room. <a href="#/cemetery">Follow him before he goes out of sight!</a>';
	}
	
	else if (355*x <= t && t < 360*x){
		return '<input type="text" ng-model="$root.MB"> enters the room.';
	}
    
    else if (360*x <= t && t < 395*x){
		return '<input type="text" ng-model="$root.MB"> is sitting on the bed, staring blankly out of the windows';
	}
	
	else if (395*x <= t && t < 398*x){
		return '<input type="text" ng-model="$root.LMB"> arrives at the room.';
	}
	
	else if (398*x <= t && t < 443*x){
		return 'As <input type="text" ng-model="$root.LMB"> enters the door, she begins the argue with <input type="text" ng-model="$root.MB">, who was sitting on the bed meditating with a note on his hands.';
	}
	
	else if (443*x <= t && t < 447*x){
		return '<input type="text" ng-model="$root.MB"> bursts out of the room. <a href="#/duncan">Follow him before he goes out of sight!</a>';
	}
	
	else if (447*x <= t && t < 451*x){
		return '<input type="text" ng-model="$root.LMB"> makes a deep sigh.';
	}
	
	else if (451*x <= t && t < 490*x){
		return '<input type="text" ng-model="$root.LMB"> begins doing some chores.';
	}
	
	else if (490*x <= t && t < 494*x){
		return '<input type="text" ng-model="$root.MB"> enters the room. His clothes are all covered with some fresh blood.';
	}
	
	else if (494*x <= t && t < 498*x){
		return '<input type="text" ng-model="$root.LMB"> looks at <input type="text" ng-model="$root.MB"> only slightly surprisingly.';
	}
	
	else if (498*x <= t && t < 505*x){
		return '<input type="text" ng-model="$root.LMB"> quickly undresses <input type="text" ng-model="$root.MB"> and takes him into the shower to clean him.';
	}
	
	else if (505*x <= t && t < 585*x){
		return '<input type="text" ng-model="$root.LMB"> is in the showers with <input type="text" ng-model="$root.MB">.';
	}
    
    else if (585*x <= t && t < 600*x){
		return '<input type="text" ng-model="$root.MB"> is putting on his clothes';
	}
	
	else if (600*x <= t && t < 605*x){
		return '<input type="text" ng-model="$root.MB"> leaves the room. <a href="#/alley">Follow him before he goes out of sight!</a>';
	}
	
	else if (605*x <= t && t < 610*x){
		return '<input type="text" ng-model="$root.LMB"> goes to sleep on the bed';
	}
    
    else if (610*x <= t && t < 710*x){
		return '<input type="text" ng-model="$root.LMB"> is sleeping on the bed';
	}
	
	else if (710*x <= t && t < 715*x){
		return '<input type="text" ng-model="$root.LMB"> suddenly rises from the bed. ';
	}
	
	else if (715*x <= t && t < 800*x){
		return 'You realise that <input type="text" ng-model="$root.LMB"> should be sleepwalking.';
	}
	
	else if (800*x <= t && t < 805*x){
		return '<input type="text" ng-model="$root.LMB"> sluggishly drags herself towards the sink';
	}
	
	else if (805*x <= t && t < 888*x){
		return '<input type="text" ng-model="$root.LMB"> places her hands under the closed tap as if trying to wash something off them.';
	}
	
	else if (888*x <= t && t < 895*x){
		return '<input type="text" ng-model="$root.LMB"> opens her eyes. It looks like she is confused, but she quickly shrugs the expression off.';
	}
	
	else if (895*x <= t && t < 910*x){
		return '<input type="text" ng-model="$root.LMB"> quickly dresses herself.';
	}
	
	else if (910*x <= t && t < 915*x){
		return '<input type="text" ng-model="$root.LMB"> leaves the room. <a href="#/alley">Follow her before she goes out of sight!</a>';
	}
	
	else if (945*x <= t && t < 950*x){
		return 'You suddenly remember that there will be a feast happening tonight. You look at the clock and realise that you are running late. You quickly leave the room and head right to the feast.';
	}
	
	else if (950*x <= t){
		return '<a href="#/hall" id = "MBEject0">.</a><img src onerror=\'document.getElementById("MBEject0").click()\'>';
	}
	
	else {
		return 'Looks like no one’s in the room and there are quite a few valuables lying around. Better not touch anything before anyone returns.';
	}
}

//MD
function MDContent (t) {
	if (0*x <= t && t < 30*x){
		return '<input type="text" ng-model="$root.LMD"> wakes up and quietly dresses her pregnant body while <input type="text" ng-model="$root.MD"> continues to snore in bed.';
	}
	
	else if (30*x <= t && t < 35*x){
		return '<input type="text" ng-model="$root.LMD"> leaves the room. <a href="#/alley">Follow her before she goes out of sight!</a>';
	}
	
	else if (35*x <= t && t < 120*x){
		return '<input type="text" ng-model="$root.MD"> snores in the bed.';
	}
	
	else if (120*x <= t && t < 135*x){
		return '<input type="text" ng-model="$root.MD"> wakes up. He looks around as if expecting something. Instead, he quickly becomes slightly alarmed.';
	}
	
	else if (135*x <= t && t < 140*x){
		return '<input type="text" ng-model="$root.MD"> quickly dresses himself and sprint out of the room as if he is late for something. <a href="#/lobby">Follow him before he goes out of sight!</a>';
	}
	
	else if (385*x <= t && t < 392*x){
		return '<input type="text" ng-model="$root.MD"> arrives holding <input type="text" ng-model="$root.LMD">\'s arm. They close the door behind them, and they give each other an excited look in the eyes.';
	}
	
	else if (392*x <= t && t < 450*x){
		return '<input type="text" ng-model="$root.MD"> and <input type="text" ng-model="$root.LMD"> do a merry small waltz dance in the room.';
	}
	
	else if (450*x <= t && t < 456*x){
		return 'After a while, <input type="text" ng-model="$root.LMD"> begins to show signs of tiredness. <input type="text" ng-model="$root.MD"> gently helped her onto the bed, making sure not to hurt the fragile soul in <input type="text" ng-model="$root.LMD">\'s body.';
	}
	
	else if (456*x <= t && t < 461*x){
		return '<input type="text" ng-model="$root.MD"> leaves the room. <a href="#/alley">Follow him before he goes out of sight!</a>';
	}
	
	else if (461*x <= t && t < 465*x){
		return '<input type="text" ng-model="$root.LMD"> rises from the bed. She poked her head around to make sure nobody is around and sneaks out of the room. <a href="#/duncan">Follow her before she goes out of sight!</a>';
	}
	
	else if (517*x <= t && t < 522*x){
		return '<input type="text" ng-model="$root.MD"> enters the room carrying a bloody <input type="text" ng-model="$root.LMD"> on his hands. His face is twisted with rage but also with a unmistakable scent of melancholy with a mix of fear. ';
	}
	
	else if (522*x <= t && t < 675*x){
		return '<input type="text" ng-model="$root.MD"> gently puts <input type="text" ng-model="$root.LMD">\'s body on the bed. He kneels before her and sobs uncontrollably on her body for a few moments.';
	}
	
	else if (675*x <= t && t < 680*x){
		return '<input type="text" ng-model="$root.MD"> turns towards you. He quickly grabs your hands and pulled you out of the room with him.';
	}
	
	else if (680*x <= t && t < 682*x){
		return '<a href="#/speakeasy" id = "MDEject1">.</a><img src onerror=\'document.getElementById("MDEject1").click()\'>';
	}
	
	else if (682*x <= t && t < 945*x){
		return '<a href="#/lobby" id = "MDEject2">.</a><img src onerror=\'document.getElementById("MDEject2").click()\'>';
	}
	
	else if (945*x <= t){
		return '<a href="#/hall" id = "MDEject0">.</a><img src onerror=\'document.getElementById("MDEject0").click()\'>';
	}
	
	else {
		return 'Looks like no one’s in the room and there are quite a few valuables lying around. Better not touch anything before anyone returns.';
	}
}

//duncan
function duncanContent (t) {
	if (0*x <= t && t < 355*x){
		return '<a href="#/lobby" id = "duncanEjectI">.</a><img src onerror=\'document.getElementById("duncanEjectI").click()\'>';
	}
	
	else if (355*x <= t && t < 370*x){
		return 'As you enter the room, you see <input type="text" ng-model="$root.Duncan"> taking off his imperial gowns.';
	}
	
	else if (370*x <= t && t < 375*x){
		return '<input type="text" ng-model="$root.Maid"> enters the room holding a cup in her hand. <input type="text" ng-model="$root.Duncan"> turns his head to see her enter, and the expressions on his face softens.';
	}
	
	else if (375*x <= t && t < 378*x){
		return '<input type="text" ng-model="$root.Duncan"> invites <input type="text" ng-model="$root.Maid"> to enter the room and gently push the doors close.';
	}
	
	else if (378*x <= t && t < 392*x){
		return '<input type="text" ng-model="$root.Maid"> begins her approach towards <input type="text" ng-model="$root.Duncan"> after leaving the cup she was holding on the dressing table.';
	}
	
	else if (392*x <= t && t < 398*x){
		return '<input type="text" ng-model="$root.Maid"> begins to tempt <input type="text" ng-model="$root.Duncan"> as she slips her hands into <input type="text" ng-model="$root.Duncan">\'s shirt. She slowly moves her hand around his body and undresses <input type="text" ng-model="$root.Duncan">.';
	}
	
	else if (398*x <= t && t < 409*x){
		return '<input type="text" ng-model="$root.Duncan"> surrenders totally to <input type="text" ng-model="$root.Maid">\'s fondling with him';
	}
	
	else if (409*x <= t && t < 413*x){
		return '<input type="text" ng-model="$root.Maid"> picks up the cup on the dressing table with one hand as the other continues touching <input type="text" ng-model="$root.Duncan">.';
	}
	
	else if (413*x <= t && t < 420*x){
		return '<input type="text" ng-model="$root.Maid"> gently pushes her palm against <input type="text" ng-model="$root.Duncan">\'s jaws and prys his lips open. As she does so, she pours the cup slowly into his mouth so carelessly that some dribbles out of <input type="text" ng-model="$root.Duncan">\'s mouth.';
	}
	
	else if (420*x <= t && t < 425*x){
		return 'Slowly, as if his soul is being drained from him, <input type="text" ng-model="$root.Duncan"> begins to collapse onto his bed.';
	}
	
	else if (425*x <= t && t < 430*x){
		return '<input type="text" ng-model="$root.Duncan"> lies still on his bed, while <input type="text" ng-model="$root.Maid"> continues caressing him';
	}
	
	else if (430*x <= t && t < 437*x){
		return 'As if satisfied, <input type="text" ng-model="$root.Maid"> finally leaves <input type="text" ng-model="$root.Duncan">\'s body. She roughly dresses <input type="text" ng-model="$root.Duncan">.';
	}
	
	else if (437*x <= t && t < 442*x){
		return '<input type="text" ng-model="$root.Maid"> picks up the empty cup and leaves the room, leaving a soundly unconscious <input type="text" ng-model="$root.Duncan"> on the bed. <a href="#/kitchen">Follow her before she goes out of sight!</a>';
	}
    
    else if (442*x <= t && t < 447*x){
		return '<input type="text" ng-model="$root.Duncan"> is lying still on the bed.';
	}
	
	else if (447*x <= t && t < 450*x){
		return '<input type="text" ng-model="$root.MB"> enters the room quietly.';
	}
	
	else if (450*x <= t && t < 455*x){
		return 'You can see <input type="text" ng-model="$root.MB"> as if he is looking around to ensure that he is the only conscious soul in the room.';
	}
	
	else if (455*x <= t && t < 458*x){
		return '<input type="text" ng-model="$root.MB"> slowly creeps towards the still <input type="text" ng-model="$root.Duncan">.';
	}
	
	else if (458*x <= t && t < 461*x){
		return 'In a split second, <input type="text" ng-model="$root.MB"> withdraws a dagger and plunges it into <input type="text" ng-model="$root.Duncan">\'s heart.';
	}
	
	else if (461*x <= t && t < 465*x){
		return 'As the dagger plunges into <input type="text" ng-model="$root.Duncan">\'s heart, blood spurted out of his chest.';
	}
	
	else if (465*x <= t && t < 468*x){
		return '<input type="text" ng-model="$root.LMD"> enters and is shocked by the scene.';
	}
	
	else if (468*x <= t && t < 472*x){
		return '<input type="text" ng-model="$root.MB"> turns and see the intruder. He immediately chased after her as <input type="text" ng-model="$root.LMD"> runs for the exit. <a href="#/lobby">Follow them before they go out of sight!</a>';
	}
    
    else if (472*x <= t && t < 473*x){
		return 'Blood is fountaining from <input type="text" ng-model="$root.Duncan">\'s chest.';
	}
	
	else if (473*x <= t && t < 478*x){
		return '<input type="text" ng-model="$root.Malcolm"> enters and is shocked to find <input type="text" ng-model="$root.Duncan"> all covered in blood, lying motionless on the bed. ';
	}
	
	else if (478*x <= t && t < 483*x){
		return '<input type="text" ng-model="$root.Banquo"> rushes into the room and sees <input type="text" ng-model="$root.Malcolm"> standing over a bloody <input type="text" ng-model="$root.Duncan">.';
	}
	
	else if (483*x <= t && t < 486*x){
		return '<input type="text" ng-model="$root.Banquo"> approaches <input type="text" ng-model="$root.Malcolm"> carefully.';
	}
	
	else if (486*x <= t && t < 490*x){
		return 'You see <input type="text" ng-model="$root.Malcolm"> gesticulate wildly towards <input type="text" ng-model="$root.Banquo">.';
	}
	
	else if (490*x <= t && t < 535*x){
		return '<input type="text" ng-model="$root.Malcolm"> is communicating with <input type="text" ng-model="$root.Banquo"> over the dead body of <input type="text" ng-model="$root.Duncan">.';
	}
	
	else if (535*x <= t && t < 545*x){
		return '<input type="text" ng-model="$root.Banquo"> sighs and walks towards the bed. <input type="text" ng-model="$root.Malcolm"> and him quickly picks <input type="text" ng-model="$root.Duncan"> who is covered in blood and throws him into a trunk.';
	}
	
	else if (545*x <= t && t < 552*x){
		return '<input type="text" ng-model="$root.Banquo"> and <input type="text" ng-model="$root.Malcolm"> lift the trunk on the floor and throws it over the window.';
	}
	
	else if (552*x <= t && t < 555*x){
		return '<input type="text" ng-model="$root.Malcolm"> produces a bell from his pocket and rings it.';
	}
	
	else if (555*x <= t && t < 560*x){
		return '<input type="text" ng-model="$root.Banquo"> and <input type="text" ng-model="$root.Malcolm"> quickly sneak out of the room. <a href="#/speakeasy">Follow them before they go out of sight!</a>';
	}
	
	else if (565*x <= t && t < 590*x){
		return '<input type="text" ng-model="$root.taxidermist"> enters the room, he flips through items in the room as if trying to look for something.';
	}
	
	else if (590*x <= t && t < 725*x){
		return '<input type="text" ng-model="$root.taxidermist"> grows increasingly annoyed as he flips through the room’s contents but apparently couldn’t find what he’s looking for.';
	}
	
	else if (725*x <= t && t < 730*x){
		return '<input type="text" ng-model="$root.taxidermist"> leaves the room. <a href="#/alley">Follow him before he goes out of sight!</a>';
	}
	
	else if (945*x <= t && t < 950*x){
		return 'In your gut you feel that there is something wrong with this room, but you’re not sure if you remember what’s wrong. You begin heading out of the room and suddenly remember that there will be a feast in the Banquet Hall. You decide it is probably better going there than staying here.';
	}
	
	else if (950*x <= t){
		return '<a href="#/hall" id = "duncanEject0">.</a><img src onerror=\'document.getElementById("duncanEject0").click()\'>';
	}
	
	else {
		return 'What a soft bed it is over there. You wished you could spend a lovely evening alone on it, but you know you should have better things to do than that.';
	}
}

//cemetery
function cemeteryContent (t) {
	if (115*x <= t && t < 120*x){
		return '<input type="text" ng-model="$root.taxidermist"> enters.';
	}
	
	else if (120*x <= t && t < 155*x){
		return '<input type="text" ng-model="$root.taxidermist"> is digging a small hole on the ground.';
	}
    
    else if (155*x <= t && t < 159*x){
		return 'Quickly, <input type="text" ng-model="$root.taxidermist"> withdraws a dead bird from his pocket and begins to bury it.';
	}
    
    else if (159*x <= t && t < 180*x){
		return '<input type="text" ng-model="$root.taxidermist">is burying something in the ground.';
	}
	
	else if (180*x <= t && t < 185*x){
		return '<input type="text" ng-model="$root.taxidermist"> leaves the cemetery. <a href="#/alley">Follow him before he goes out of sight!</a>';
	}
	
	else if (235*x <= t && t < 240*x){
		return '<input type="text" ng-model="$root.MB"> enters.';
	}
	
	else if (240*x <= t && t < 270*x){
		return '<input type="text" ng-model="$root.MB"> is pacing back and forth here, as if trying to make up his mind.';
	}
	
	else if (270*x <= t && t < 275*x){
		return '<input type="text" ng-model="$root.MB"> leaves. <a href="#/mezzanine">Follow him before he goes out of sight!</a>';
	}
	
	else if (855*x <= t && t < 859*x){
		return 'As <input type="text" ng-model="$root.tailor"> enters, he quickly locks all the windows and doors.';
	}
	
	else if (859*x <= t && t < 865*x){
		return '<input type="text" ng-model="$root.tailor"> produces a small jar of oil from his belt. He slightly moistens his finger tips and anoints your forehead with it.';
	}
	
	else if (865*x <= t && t < 871*x){
		return '<input type="text" ng-model="$root.tailor">: O angell dere, wher-euer this gent goo, he that is comytted to thyne awarde, save, defende, and govern also, that in hewyn with the be his reward.';
	}
	
	else if (871*x <= t && t < 875*x){
		return '<input type="text" ng-model="$root.tailor"> hands you a silver talisman made in a four-point start shape.';
	}
	
	else if (875*x <= t && t < 880*x){
		return '<input type="text" ng-model="$root.tailor">: Mine dere, guarde this thou shalt. it shalt keepe thee from harm';
	}
	
	else if (880*x <= t && t < 887*x){
		return 'Without saying another word, <input type="text" ng-model="$root.tailor"> turns and leaves. As he walks, a mist engulfs him and you lost sight of him.';
	}
	
	else if (945*x <= t && t < 950*x){
		return 'Looking at the worms\' dinner under your feet, you remember about a feast scheduled for the night suddenly. You realises that it isn’t something you want to miss. You turned around and headed to the Banquet Hall.';
	}
	
	else if (950*x <= t){
		return '<a href="#/hall" id = "cemeteryEject0">.</a><img src onerror=\'document.getElementById("cemeteryEject0").click()\'>';
	}
	
	else {
		return 'If you want to find anyone here right now, you will have to dig up some graves ...';
	}
}

//alley
function alleyContent (t) {
    if (35*x <= t && t < 40*x){
			return '<input type="text" ng-model="$root.LMD"> quickly passes by the street and enters a shop. <a href="#/taxidermy">Follow her before she goes out of sight!</a>';
		}
	
		else if (65*x <= t && t < 70*x){
			return '<input type="text" ng-model="$root.Hecate"> walks through the street and she disappears into a building at the end of the street. <a href="#/orgy">Follow her before she goes out of sight!</a>';
		}
        
        else if (75*x <= t && t < 80*x){
			return '<input type="text" ng-model="$root.LMD"> comes out of a shop and passes by the street before vanishing into anothe building. <a href="#/lobby">Follow her before she goes out of sight!</a>';
		}
        
        else if (110*x <= t && t < 115*x){
			return '<input type="text" ng-model="$root.taxidermist"> passes by and heads towards the far end of the town. <a href="#/cemetery">Follow him before he goes out of sight!</a>';
		}
        
        else if (125*x <= t && t < 130*x){
			return '<input type="text" ng-model="$root.Maid"> passes by and headed into a building at the end of the street. <a href="#/apothecary">Follow her before she goes out of sight!</a>';
		}
        
        else if (185*x <= t && t < 190*x){
			return 'You see <input type="text" ng-model="$root.taxidermist"> comes back from the far side of the town and goes inside his shop. <a href="#/taxidermy">Follow him before he goes out of sight!</a>';
		}
        
        else if (220*x <= t && t < 222*x){
			return 'You see <input type="text" ng-model="$root.taxidermist"> peeking out of the door into the streets. your eyes meet and he quickly runs towards you.';
		}
        
        else if (222*x <= t && t < 224*x){
			return 'He grabs your hands and pulls you into another building.';
		}
        
        else if (224*x <= t && t < 226*x){
			return '<a href="#/room" id = "alleyEject1">.</a><img src onerror=\'document.getElementById("alleyEject1").click()\'>';
		}
        
        else if (260*x <= t && t < 265*x){
			return '<input type="text" ng-model="$root.Maid"> passes by the main street. In her hands you see a small pouch wrapped with her handkerchief. She quickly walks into a building and vanishes behind the doors. <a href="#/kitchen">Follow her before she goes out of sight!</a>';
		}
        
        else if (355*x <= t && t < 362*x){
			return '<input type="text" ng-model="$root.Malcolm">, <input type="text" ng-model="$root.Agnes">, <input type="text" ng-model="$root.Sexy">, and <input type="text" ng-model="$root.LMB"> comes out of the palace doors and you see them going somewhere else. <a href="#/detective">Follow <input type="text" ng-model="$root.Malcolm"> before he goes out of sight!</a> //<br><a href="#/tailor">Follow <input type="text" ng-model="$root.Agnes"> before she goes out of sight!</a> //<br><a href="#/candy">Follow <input type="text" ng-model="$root.Sexy"> before she goes out of sight!</a> //<br><a href="#/taxidermy">Follow <input type="text" ng-model="$root.LMB"> before she goes out of sight!</a>';
		}
        
        else if (410*x <= t && t < 415*x){
			return '<input type="text" ng-model="$root.taxidermist"> leaves his store and passes by here. Looks like he is heading somewhere. <a href="#/orgy">Follow him before he goes out of sight!</a>';
		}
        
        else if (430*x <= t && t < 435*x){
			return '<input type="text" ng-model="$root.Bald"> walks through the main streets and headed into a building at the end of the street. <a href="#/orgy">Follow him before he goes out of sight!</a>';
		}
        
        else if (448*x <= t && t < 451*x){
			return 'You see <input type="text" ng-model="$root.Maid"> walking right towards you.';
		}
        
        else if (451*x <= t && t < 454*x){
			return '<input type="text" ng-model="$root.Maid">: Would you wait here my dear. <br>Having said that, she disappears into the door right next to you. ';
		}
        
        else if (456*x <= t && t < 459*x){
			return '<input type="text" ng-model="$root.Maid"> pokes her head out of the door next to you and quickly drags you inside. ';
		}
        
        else if (459*x <= t && t < 461*x){
			return '<a href="#/room" id = "alleyEject2">.</a><img src onerror=\'document.getElementById("alleyEject2").click()\'>';
		}
        
        else if (461*x <= t && t < 466*x){
			return '<input type="text" ng-model="$root.MD"> comes by and goes into a shop. <a href="#/candy">Follow him before he goes out of sight!</a>';
		}
        
        else if (468*x <= t && t < 473*x){
			return '<input type="text" ng-model="$root.Malcolm"> rushes by the Main Street. <a href="#/duncan">Follow him before he goes out of sight!</a>';
		}
        
        else if (473*x <= t && t < 478*x){
			return 'You see <input type="text" ng-model="$root.Banquo"> running through the Main Street. <a href="#/duncan">Follow him before he goes out of sight!</a>';
		}
        
        else if (495*x <= t && t < 500*x){
			return '<input type="text" ng-model="$root.Sexy"> passes by and sneaks into a building at the end of the street. <a href="#/orgy">Follow her before she goes out of sight!</a>';
		}
        
        else if (500*x <= t && t < 505*x){
			return '<input type="text" ng-model="$root.MD"> comes out of a shop and you see him stumbling across the street. With every step, you see him throwing up a few candies from his mouth onto the floor. With a sick look, he quickly dashes away. <a href="#/lobby">Follow him before he goes out of sight!</a>';
		}
        
        else if (555*x <= t && t < 560*x){
			return '<input type="text" ng-model="$root.taxidermist"> comes out of a room at the end of the street and quickly headed towards another building. <a href="#/lobby">Follow him before he goes out of sight!</a>';
		}
        
        else if (605*x <= t && t < 610*x){
			return '<input type="text" ng-model="$root.MB"> passes by the main street. Wandering, he goes into a building at the end of the street. <a href="#/orgy">Follow him before he goes out of sight!</a>';
		}
        
        else if (716*x <= t && t < 723*x){
			return 'As if in a hurry, <input type="text" ng-model="$root.MD">, <input type="text" ng-model="$root.Malcolm">, and <input type="text" ng-model="$root.bartender"> rushes out of a building behind you. While <input type="text" ng-model="$root.bartender"> looks like he’s looking around for someone, <input type="text" ng-model="$root.MD"> and <input type="text" ng-model="$root.Malcolm"> goes into one of the buildings on your right. <a href="#/detective">Follow them before they go out of sight!</a>';
		}
        
        else if (723*x <= t && t < 727*x){
			return 'Suddenly, <input type="text" ng-model="$root.bartender"> looks right into your eyes. With that, he grabs your hand and pulls you through a door.';
		}
        
        else if (727*x <= t && t < 729*x){
			return '<a href="#/room" id = "alleyEject3">.</a><img src onerror=\'document.getElementById("alleyEject3").click()\'>';
		}
        
        else if (730*x <= t && t < 735*x){
			return '<input type="text" ng-model="$root.taxidermy"> passes by the Main Street. <a href="#/orgy">Follow him before he goes out of sight!</a>';
		}
        
        else if (860*x <= t && t < 865*x){
			return '<input type="text" ng-model="$root.Sexy"> suddenly grabs your hands from nowhere and took you with her into one of the shops.';
		}
        
        else if (865*x <= t && t < 867*x){
			return '<a href="#/tailor" id = "alleyEject4">.</a><img src onerror=\'document.getElementById("alleyEject4").click()\'>';
		}
        
        else if (915*x <= t && t < 925*x){
			return '<input type="text" ng-model="$root.MB"> and <input type="text" ng-model="$root.LMB"> appears from the two opposite ends of the street. <input type="text" ng-model="$root.MB"> quickly ran towards <input type="text" ng-model="$root.LMB"> and <input type="text" ng-model="$root.LMB"> gave him a hug. You observed that <input type="text" ng-model="$root.MB"> is quietly sobbing in <input type="text" ng-model="$root.LMB">’s embrace.';
		}
        
        else if (925*x <= t && t < 930*x){
			return '<input type="text" ng-model="$root.MB">, <input type="text" ng-model="$root.LMB"> parted from their hug. <input type="text" ng-model="$root.MB"> gently held <input type="text" ng-model="$root.LMB">’s hands and they walked off towards another building. <a href="#/hall">Follow them before they go out of sight!</a>';
		}
        
        else if (935*x <= t && t < 940*x){
			return '<input type="text" ng-model="$root.taxidermist"> passes by and walks into a building in front of you. <a href="#/hall">Follow him before he goes out of sight!</a>';
		}
        
        else if (940*x <= t && t < 945*x){
			return '<input type="text" ng-model="$root.MD"> and <input type="text" ng-model="$root.Malcolm"> comes out of a building with a drawing of <input type="text" ng-model="$root.MB"> on their hands. Swiftly, they went into a building in front of you. <a href="#/hall">Follow him before he goes out of sight!</a>';
		}
        
        else if (945*x <= t && t < 952*x){
			return 'You remember <input type="text" ng-model="$root.name"> telling you that there would be a feast tonight at the Banquet Halls. Having not eaten anything yet for the day, you decided that it is a good idea to join the banquet. And off you go.';
		}
        

		else if (952*x <= t){
			return '<a href="#/hall" id = "alleyEject5">.</a><img src onerror=\'document.getElementById("alleyEject5").click()\'>';
		}
		else {
			return 'There isn’t anyone whom you find interesting roaming the Main Street of Gallow Green at the moment. Better get going and explore some other places!';
		}
}

//room
var roomCandyEjectTime = 340*x;
var roomCandyColor = "";
function roomContent (t) {
	if (224*x <= t && t < 230*x){
		return '<input type="text" ng-model="$root.taxidermist">  pulls you into the room and locks the door behind you. With the door close, you find yourself in a pitch black space.';
	}
	
    else if(roomCandyEjectTime <= t && t < (roomCandyEjectTime + 10*x) && roomCandyColor == "red"){
		return '<input type="text" ng-model="$root.taxidermist">: So weary with disasters, tugged with fortune, That I would set my life on any chance, To mend it or be rid on ’t.';
	}
    
    else if(roomCandyEjectTime <= t && t < (roomCandyEjectTime + 10*x) && roomCandyColor == "blue"){
		return '<input type="text" ng-model="$root.taxidermist">: I am one, Whom the vile blows and buffets of the world Have so incensed that I am reckless what I do to spite the world.';
	}
    
    else if(roomCandyEjectTime + 10*x <= t && t < (roomCandyEjectTime + 15*x)){
		return 'With that being said, <input type="text" ng-model="$root.taxidermist"> drags you out of the room again. Still holding your hands, he drags you across the main street and brings you into another building.';
	}
	
    else if ((roomCandyEjectTime + 15*x) <= t && t < (roomCandyEjectTime + 20*x)){
		return '<a href="#/orgy" id = "roomEject1">.</a><img src onerror=\'document.getElementById("roomEject1").click()\'>';
	}
    
	else if (230*x <= t && t < 234*x){
		return 'BOOM! <input type="text" ng-model="$root.taxidermist"> appears right in front of your face. He drew back a little, and help his two hands in front of your face, gesturing as if wanting you to choose one of them. In his left hand, is a red candy; and in his right hand, is a blue one.';
	}
	
    else if (234*x <= t && t < 340*x){
		return 'BOOM! <input type="text" ng-model="$root.taxidermist"> appears right in front of your face. He drew back a little, and help his two hands in front of your face, gesturing as if wanting you to choose one of them. In his left hand, is a red candy; and in his right hand, is a blue one.<br><input type="text" ng-model="$root.taxidermist">: Choose.<br><input type="button" style="background-color: #ff0000;" value="RED CANDY" id="redCandy" onclick="redCandyButton()">&nbsp&nbsp&nbsp&nbsp<input type="button" style="background-color: #0000ff;" value="BLUE CANDY" id="blueCandy" onclick="blueCandyButton()">';
	}
	
    else if (340*x <= t && t < 345*x){
		return '<input type="text" ng-model="$root.taxidermist"> drags you out of the room again. Still holding your hands, he drags you across the main street and brings you into another building.';
	}
	
    else if (345*x <= t && t < 348*x){
		return '<a href="#/orgy" id = "roomEject1">.</a><img src onerror=\'document.getElementById("roomEject1").click()\'>';
	}
	
    else if (460*x <= t && t < 475*x){
		return '<input type="text" ng-model="$root.Maid"> drags you into this room and sits you down. She lies on a bed next to you, telling you to listen to the ocean and turns out the lights.';
	}
	
    else if (475*x <= t && t < 485*x){
		return '<input type="text" ng-model="$root.Maid">: Sometimes, when I walk along the corridor here, I fancy I hear her just behind me. That quick, light footstep. I could not mistake it anywhere … It’s almost as though I catch the sound of her dress sweeping the stairs as she comes down to dinner. Do you think she can see us, talking to one another now? Do you think the dead come back and watch the living?';
	}
	
    else if (485*x <= t && t < 488*x){
		return 'She sighs. <input type="text" ng-model="$root.Maid"> gets up and puts a dress over your head, then gives you a glass of milk.';
	}
	
    else if (488*x <= t && t < 500*x){
		return 'She sighs. <input type="text" ng-model="$root.Maid"> gets up and puts a dress over your head, then gives you a glass of milk.<br>Slowly, you drink the cup of milk';
	}
	
    else if (500*x <= t && t < 503*x){
		return '<input type="text" ng-model="$root.Maid">: My dear, come closer.';
	}
	
    else if (503*x <= t && t < 506*x){
		return '<input type="text" ng-model="$root.Maid">: My dear, come closer.<br>You take a step closer.';
	}
	
    else if (506*x <= t && t < 510*x){
		return '<input type="text" ng-model="$root.Maid">: Do you ever see her? Are you alive or are you dead? Come to me.';
	}
	
    else if (510*x <= t && t < 515*x){
		return '<input type="text" ng-model="$root.Maid"> plants a light kiss on your cheek.';
	}
	
    else if (515*x <= t && t < 518*x){
		return '<input type="text" ng-model="$root.Maid">: Tell her I hear, and I await. Here, take my hand and go to her like a rushing wind.';
	}
	
    else if (518*x <= t && t < 523*x){
		return 'You took <input type="text" ng-model="$root.Maid">’s hand and she guides you into the closet at the back of the room. You find a secret door in the closet. You pushes through the door and finds yourself on the other side of the closet.';
	}
	
    else if (523*x <= t && t < 525*x){
		return '<a href="#/cemetery" id = "roomEject2">.</a><img src onerror=\'document.getElementById("roomEject2").click()\'>';
	}
	
    else if (525*x <= t && t < 535*x){
		return '<input type="text" ng-model="$root.Agnes"> pulls you into the room, and she slams the door shut behind her. You can figure out a hint of shivering in her. she gasps for a few moments, as if trying to calm herself down, and you begin to hear her speaking soullessly';
	}
	
    else if (535*x <= t && t < 537*x){
		return '<input type="text" ng-model="$root.Agnes">: Last night, I dreamt I went to Manderley again. ';
	}
	
    else if (537*x <= t && t < 539*x){
		return '<input type="text" ng-model="$root.Agnes">: It seemed to me I stood by the iron gate leading to the drive,';
	}
	
    else if (539*x <= t && t < 541*x){
		return '<input type="text" ng-model="$root.Agnes">: and for a while I could not enter for the way was barred to me.';
	}
	
    else if (541*x <= t && t < 543*x){
		return '<input type="text" ng-model="$root.Agnes">: Then, like all dreamers, I was possessed of a sudden,';
	}
	
    else if (543*x <= t && t < 545*x){
		return '<input type="text" ng-model="$root.Agnes">: the supernatural powers and passed like a spirit through the barrier before me.';
	}
	
    else if (545*x <= t && t < 547*x){
		return '<input type="text" ng-model="$root.Agnes">: The drive wound away in front of me, twisting and turning as it had always done.';
	}
	
    else if (547*x <= t && t < 549*x){
		return '<input type="text" ng-model="$root.Agnes">: But as I advanced, I was aware that a change had come upon it.';
	}
	
    else if (549*x <= t && t < 551*x){
		return '<input type="text" ng-model="$root.Agnes">: Nature had come into her own again,';
	}
	
    else if (551*x <= t && t < 553*x){
		return '<input type="text" ng-model="$root.Agnes">: and little by little had encroached upon the drive with long tenacious fingers,';
	}
	
    else if (553*x <= t && t < 555*x){
		return '<input type="text" ng-model="$root.Agnes">: on and on while the poor thread that had once been our drive.';
	}
	
    else if (555*x <= t && t < 557*x){
		return '<input type="text" ng-model="$root.Agnes">: And finally, there was Manderley.';
	}
	
    else if (557*x <= t && t < 559*x){
		return '<input type="text" ng-model="$root.Agnes">: Manderley, secretive and silent.';
	}
	
    else if (559*x <= t && t < 561*x){
		return '<input type="text" ng-model="$root.Agnes">: Time could not mar the perfect symmetry of those walls.';
	}
	
    else if (561*x <= t && t < 563*x){
		return '<input type="text" ng-model="$root.Agnes">: Moonlight can play odd tricks upon the fancy,';
	}
	
    else if (563*x <= t && t < 565*x){
		return '<input type="text" ng-model="$root.Agnes">: and suddenly it seemed to me that light came from the windows.';
	}
	
    else if (565*x <= t && t < 567*x){
		return '<input type="text" ng-model="$root.Agnes">: And then a cloud came upon the moon and hovered an instant like a dark hand before a face.';
	}
	
    else if (567*x <= t && t < 569*x){
		return '<input type="text" ng-model="$root.Agnes">: The illusion went with it. I looked upon a desolate shell,';
	}
	
    else if (569*x <= t && t < 571*x){
		return '<input type="text" ng-model="$root.Agnes">: with no whisper of a past about its staring walls. We can never go back to Manderley again.';
	}
	
    else if (571*x <= t && t < 573*x){
		return '<input type="text" ng-model="$root.Agnes">: That much is certain. But sometimes, in my dreams,';
	}
	
    else if (573*x <= t && t < 575*x){
		return '<input type="text" ng-model="$root.Agnes">: I do go back to the strange days of my life which began for me';
	}
	
    else if (575*x <= t && t < 577*x){
		return '<input type="text" ng-model="$root.Agnes">: in the south of France…';
	}
	
    else if (577*x <= t && t < 585*x){
		return 'You try to make sense of what she have said, but it simply went by too fast for you to entirely digest her monologue. Whilst you are still pondering on her dreamy words, <input type="text" ng-model="$root.Agnes"> suddenly grabs your hands again. She shoves you into the wardrobe in the back of the room, and she slams it shut from the outside. You slightly push the back of the wardrobe and you find a secret door. You decide to go through the secret doors.';
	}
	
    else if (585*x <= t && t < 588*x){
		return '<a href="#/cemetery" id = "roomEject3">.</a><img src onerror=\'document.getElementById("roomEject3").click()\'>';
	}
	
    else if (727*x <= t && t < 735*x){
		return 'You enter through the door and you find yourself in this room. Somehow, <input type="text" ng-model="$root.bartender"> is still looking at your face as if there’s something strange about it.';
	}
	
    else if (735*x <= t && t < 760*x){
		return '<input type="text" ng-model="$root.bartender">: He should have died hereafter. There would have been a time for such a word. Tomorrow, and tomorrow, and tomorrow, creeps in this petty pace from day to day to the last syllable of recorded time, and all our yesterdays have lighted fools the way to dusty death. Out, out, brief candle! Life’s but a walking shadow, a poor player that struts and frets his hour upon the stage and then is heard no more. It is a tale told by an idiot, full of sound and fury, Signifying nothing.';
	}
	
    else if (760*x <= t && t < 765*x){
		return 'You are unsure what has caught <input type="text" ng-model="$root.bartender">’s mind, but before you have time to react, he shoves you into the closet at the back of the room and slams the closet doors shut. You find a secret exit in the closet, and you decide to go through it.';
	}
	
    else if (765*x <= t && t < 768*x){
		return '<a href="#/cemetery" id = "roomEject4">.</a><img src onerror=\'document.getElementById("roomEject4").click()\'>';
	}

	else {
		return '<a href="#/cemetery" id = "roomEject0">.</a><img src onerror=\'document.getElementById("roomEject0").click()\'>';
	}
}

function blueCandyButton () {
    roomCandyColor = "blue";
    roomCandyEjectTime = timeElapsed;
}

function redCandyButton () {
    roomCandyColor = "red";
    roomCandyEjectTime = timeElapsed;    
}

//orgy
function orgyContent (t) {
	if (70*x <= t && t < 75*x){
		return '<input type="text" ng-model="$root.Hecate"> enters the bar';
	}
    
    else if (75*x <= t && t < 95*x){
		return 'You see <input type="text" ng-model="$root.Hecate"> going around the place from shelf to shelf, looking for something';
	}
    
    else if (95*x <= t && t < 105*x){
		return '<input type="text" ng-model="$root.Hecate"> produces a dish of meat. With a closer inspection, you realise that the meat is actually some sort of raw intestine';
	}
    
    else if (105*x <= t && t < 112*x){
		return '<input type="text" ng-model="$root.Hecate"> sits down at one of the tables in the empty bar and starts eating from the dish of raw intestines.';
	}
    
    else if (112*x <= t && t < 200*x){
		return '<input type="text" ng-model="$root.Hecate"> is eating a dish of raw intestine';
	}
    
    else if (200*x <= t && t < 203*x){
		return '<input type="text" ng-model="$root.Hecate"> finally finishes her meal. She stands up and stares at you.';
	}
    
    else if (203*x <= t && t < 208*x){
		return '<input type="text" ng-model="$root.Hecate">: Is that all there is???';
	}
    
    else if (208*x <= t && t < 212*x){
		return 'Immediately, <input type="text" ng-model="$root.Hecate"> darts towards you and locks eyes. She places a firm hand on your shoulder and marches you backwards up against the wall. Gently she places her mouth up against your ears.';
	}
    
    else if (212*x <= t && t < 217*x){
		return '<input type="text" ng-model="$root.Hecate">: I has’t been waiting all night f’r thee, waiteth h’re, I shall return.';
	}
    
    else if (217*x <= t && t < 220*x){
		return '<input type="text" ng-model="$root.Hecate"> disappears into a locked room. The door swung open, she snatches your hand in hers and pulled you silently into her room.';
	}
    
    else if (220*x <= t && t < 222*x){
		return '<a href="#/orgyRm" id = "orgyEject1">.</a><img src onerror=\'document.getElementById("orgyEject1").click()\'>';
	}
    
    else if (283*x <= t && t < 286*x){
		return '<input type="text" ng-model="$root.Hecate"> returns to the Bar.';
	}
    
    else if (286*x <= t && t < 324*x){
		return '<input type="text" ng-model="$root.Hecate"> is busy organizing stuff in the bar. Looks like she is preparing it for some sort of event.';
	}
    
    else if (324*x <= t && t < 330*x){
		return 'Suddenly, <input type="text" ng-model="$root.Hecate"> glances up and caught your sight. You see her shoot towards you, but weirdly you do not hear a step of a foot. In a split second, she appears right in front of your face. She grabs your wrist, and you feel yourself flying towards another room in the bar. You resists, but it was futile.';
	}
    
    else if (330*x <= t && t < 332*x){
		return '<a href="#/orgyRm" id = "orgyEject2">.</a><img src onerror=\'document.getElementById("orgyEject2").click()\'>';
	}
    
    else if (380*x <= t && t < 385*x){
		return '<input type="text" ng-model="$root.Hecate"> reenters the bar, yet still no one else is here.';
	}
    
    else if (385*x <= t && t < 415*x){
		return '<input type="text" ng-model="$root.Hecate"> continues tidying the bar.';
	}
    
    else if (415*x <= t && t < 420*x){
		return '<input type="text" ng-model="$root.taxidermist"> enters the room and immediately confronts <input type="text" ng-model="$root.Hecate">. They quickly head towards a room in the back and lock the door behind them before you have a chance to follow through.';
	}
    
    else if (435*x <= t && t < 500*x){
		return '<input type="text" ng-model="$root.Bald"> arrives at the bar. He headed straight towards a table in the centre and starts performing weird dances around it.';
	}
    
    else if (500*x <= t && t < 510*x){
		return '<input type="text" ng-model="$root.Sexy"> arrives at the bar, and she immediately joins <input type="text" ng-model="$root.Bald"> in a weird dance around a table in the center.';
	}
    
    else if (510*x <= t && t < 520*x){
		return '<input type="text" ng-model="$root.Hecate"> enters the room from behind the bar.';
	}
    
    else if (520*x <= t && t < 523*x){
		return '<input type="text" ng-model="$root.Boy"> arrives at the bar.';
	}
    
    else if (523*x <= t && t < 530*x){
		return '<input type="text" ng-model="$root.Hecate">: Alloweth the sacrifice beest madeth, alloweth the bodement beest hath said!';
	}
    
    else if (530*x <= t && t < 545*x){
		return '<input type="text" ng-model="$root.Hecate">, <input type="text" ng-model="$root.Bald">, <input type="text" ng-model="$root.Boy">, and <input type="text" ng-model="$root.Sexy"> begins a ritualistic dance around the table in the centre.';
	}
    
    else if (545*x <= t && t < 570*x){
		return 'As the dance progresses, <input type="text" ng-model="$root.Hecate">, <input type="text" ng-model="$root.Bald">, <input type="text" ng-model="$root.Boy">, and <input type="text" ng-model="$root.Sexy"> becomes increasingly wild in their moves.';
	}
    
    else if (570*x <= t && t < 580*x){
		return 'One by one, <input type="text" ng-model="$root.Bald">, <input type="text" ng-model="$root.Boy">, and <input type="text" ng-model="$root.Sexy"> tears off their clothes, and waves them in the air.';
	}
    
    else if (580*x <= t && t < 610*x){
		return 'A fire begins to grow on top of the table in the center.';
	}
    
    else if (610*x <= t && t < 630*x){
		return '<input type="text" ng-model="$root.MB"> enters the room. His face looks obviously disturbed by the bizarre dance in the room with nude <input type="text" ng-model="$root.Bald">, <input type="text" ng-model="$root.Boy">, and <input type="text" ng-model="$root.Sexy">. However, he stands in the corner and watches their movements with awe.';
	}
    
    else if (630*x <= t && t < 637*x){
		return '<input type="text" ng-model="$root.Hecate"> approaches the table in the centre and she withdraws a human baby from beneath. The baby stays still as a stone, unaware of whatever that is happening around him. <input type="text" ng-model="$root.Hecate"> holds the body upside down above the fire.';
	}
    
    else if (637*x <= t && t < 641*x){
		return '<input type="text" ng-model="$root.Hecate"> produces a knife from her belt. Swiftly, she slits the throat of the baby. Blood as dark as crows shoots out of the neck, until it reaches the fire below.';
	}
    
    else if (641*x <= t && t < 645*x){
		return '<input type="text" ng-model="$root.Bald"> quickly grabs a bowl from another table, placing it below the blood fountain and collects the dripping blood.';
	}
    
    else if (645*x <= t && t < 655*x){
		return '<input type="text" ng-model="$root.Hecate">, <input type="text" ng-model="$root.Bald">, <input type="text" ng-model="$root.Boy">, and <input type="text" ng-model="$root.Sexy"> continue their rave around the bleeding baby.';
	}
    
    else if (655*x <= t && t < 670*x){
		return 'One by one, <input type="text" ng-model="$root.Bald">, <input type="text" ng-model="$root.Boy">, and <input type="text" ng-model="$root.Sexy"> make their way towards the blood-filled bowl. They each dips their head into the bowl and madly gulps down a mouthful of the black blood. It is as if their faces are smeared with blood.';
	}
    
    else if (670*x <= t && t < 677*x){
		return '<input type="text" ng-model="$root.Sexy"> begins to approach <input type="text" ng-model="$root.MB"> in the corner of the bar, and invites him to the centre of the room.';
	}
    
    else if (677*x <= t && t < 681*x){
		return 'Slowly, <input type="text" ng-model="$root.MB"> walks towards the center of the bar.';
	}
    
    else if (681*x <= t && t < 685*x){
		return '<input type="text" ng-model="$root.Bald">, <input type="text" ng-model="$root.Boy">, and <input type="text" ng-model="$root.Sexy"> begin circling <input type="text" ng-model="$root.MB">. They each dip their hand in the bowl of blood in the middle of the room, and begins drawing on <input type="text" ng-model="$root.MB">’s skin';
	}
    
    else if (685*x <= t && t < 700*x){

		return '<input type="text" ng-model="$root.MB"> stays still as <input type="text" ng-model="$root.Bald">, <input type="text" ng-model="$root.Boy">, and <input type="text" ng-model="$root.Sexy"> doodle over his body.';
	}
    
    else if (700*x <= t && t < 703*x){
		return '<input type="text" ng-model="$root.Bald">, <input type="text" ng-model="$root.Boy">, and <input type="text" ng-model="$root.Sexy"> stops their crazy dance abruptly.';
	}
    
    else if (703*x <= t && t < 708*x){
		return 'As if they knew something is going to happen, <input type="text" ng-model="$root.Boy">, <input type="text" ng-model="$root.Bald">, and <input type="text" ng-model="$root.MB"> scatters and leaves the room towards all different directions. <a href="#/apothecary">Follow <input type="text" ng-model="$root.Bald"> before he goes out of sight!</a> //<br><a href="#/showers">Follow <input type="text" ng-model="$root.Boy"> before he goes out of sight!</a> //<br><a href="#/speakeasy">Follow <input type="text" ng-model="$root.MB"> before he goes out of sight!</a>';
	}
    
    else if (708*x <= t && t < 735*x){
		return 'As they all left, <input type="text" ng-model="$root.Sexy">, alone, dances in a weird fashion around the bar.';
	}
    
    else if (735*x <= t && t < 740*x){
		return '<input type="text" ng-model="$root.taxidermist"> enters the bar and begins talking to <input type="text" ng-model="$root.Hecate"> as <input type="text" ng-model="$root.Sexy"> continues her dance in the background.';
	}
    
    else if (740*x <= t && t < 820*x){
		return '<input type="text" ng-model="$root.Sexy"> is performing a wild dance around the place without a piece on cloth on her body.';
	}
    
    else if (820*x <= t && t < 824*x){
		return '<input type="text" ng-model="$root.Agnes"> arrives at the bar. <input type="text" ng-model="$root.taxidermist"> glances up at her, and quickly pulls her into a room in the back of the bar against her will. The door is locked tight before you were able to follow through.';
	}
    
    else if (824*x <= t && t < 840*x){
		return '<input type="text" ng-model="$root.Hecate"> continues watching <input type="text" ng-model="$root.Sexy"> dance around the bar from a corner.';
	}
    
    else if (840*x <= t && t < 855*x){
		return 'As <input type="text" ng-model="$root.Sexy"> concludes her dance, she finally collapses right behind the bar. <input type="text" ng-model="$root.Hecate"> slowly approaches her. Gently, <input type="text" ng-model="$root.Hecate"> dresses up the naked <input type="text" ng-model="$root.Sexy">.';
	}
    
    else if (855*x <= t && t < 860*x){
		return 'After being dressed with a gown, <input type="text" ng-model="$root.Sexy"> leaves the bar from the main door. <a href="#/alley">Follow her before she goes out of sight!</a>';
	}
    
    else if (860*x <= t && t < 865*x){
		return '<input type="text" ng-model="$root.taxidermist"> enters the bar from a room in the back of the bar. Behind him, he drags a half naked <input type="text" ng-model="$root.Agnes">.';
	}
    
    else if (865*x <= t && t < 870*x){
		return 'While being dragged on the floor, <input type="text" ng-model="$root.Agnes"> is only slightly resisting, as if she is too weak to do anything about it.';
	}
    
    else if (870*x <= t && t < 877*x){
		return 'You can clearly observe that there are blood stains and new wounds on <input type="text" ng-model="$root.Agnes">’s body on the floor.';
	}
    
    else if (877*x <= t && t < 900*x){
		return '<input type="text" ng-model="$root.Hecate"> produces a jar from the shelves, and you see her placing it beneath the fainting <input type="text" ng-model="$root.Agnes">’s eyes. As <input type="text" ng-model="$root.Hecate"> murmurs some words, tears drop from <input type="text" ng-model="$root.Agnes">’s eyes unstoppably and fills the jar.';
	}
    
    else if (900*x <= t && t < 910*x){
		return '<input type="text" ng-model="$root.Hecate"> gently caps the jar and leaves it on top of a table. She then drags the half naked <input type="text" ng-model="$root.Agnes"> into a room in the back of the bar. She locks the door behind before you have a chance to slip in.';
	}
    
    else if (910*x <= t && t < 917*x){
		return '<input type="text" ng-model="$root.taxidermist"> picks up the jar of clear liquid on the table. He uses the jar to scoop up some dark blood in a bowl on the table at the centre of the room.';
	}
    
    else if (917*x <= t && t < 930*x){
		return '<input type="text" ng-model="$root.taxidermist"> gently mixes the two liquids in the jar in his hand, and he swiftly gulped the content of the jar into his stomach.';
	}
    
    else if (930*x <= t && t < 935*x){
		return '<input type="text" ng-model="$root.taxidermist"> leaves the bar from the front doors. <a href="#/alley">Follow him before he goes out of sight!</a>';
	}
    
    else if (935*x <= t && t < 945*x){
		return 'The only essence of life in the bar, is a bowl of dark blood in the centre of the room. Other than that, it isn’t really quite lively with you as the only soul here.';
	}
    
	else if (945*x <= t && t < 950*x){
		return 'The foul smell of blood only helps to make you feel more and more disgusted. You remember that there will be a feast in the Banquet Halls tonight, and you suppose it would be a great idea to go there to get rid of the smell of blood here.';
	}
    
	else if (950*x <= t){
		return '<a href="#/hall" id = "orgyEject3">.</a><img src onerror=\'document.getElementById("orgyEject3").click()\'>';
	}
	
    else {
		return 'There aren’t anyone in the bar. Looks like the party is somewhere else.';
	}
}

//orgyRm
function orgyRmContent (t) {
    
            if (220*x <= t && t < 225*x){
            return '<input type="text" ng-model="$root.Hecate"> looks at you, sighs, and hands you a tissue. She gently smooths your hair, and her pity smiled.';
        }
        
        else if (225*x <= t && t < 232*x){
            return '<input type="text" ng-model="$root.Hecate"> looks at you, sighs, and hands you a tissue. She gently smooths your hair, and her pity smiled.<br><input type="text" ng-model="$root.Hecate">: Mine own lief, drinketh up. This sacr’d drops of sorrow shalt giveth thee the strength thee shall need.';
        }
        
        else if (232*x <= t && t < 237*x){
            return '<input type="text" ng-model="$root.Hecate"> holds a jar in front of your face, tips your head back, and pours the jar of tears into your mouth. You can feel the salt as it laces your tongue.';
        }
        
        else if (237*x <= t && t < 242*x){
            return 'As you finishes the jar of tears, <input type="text" ng-model="$root.Hecate"> begins to walk you backwards through a pair of heavy curtains into a pitch black chamber in the room.';
        }
        
        else if (242*x <= t && t < 265*x){
            return '<input type="text" ng-model="$root.Hecate">: Yore ‘twas a knave, that gent setteth out from this v’ry town to collecteth timb’r from the f’rest. As he returneth , the ring hath found that gent and that gent wast bewild’r’d to picketh t up. As the ring enchant’d the knave, that gent wand’r’d aimlessly deep into the f’rest, f’rev’r hath lost in the darkness of the woods.';
        }
        
        else if (265*x <= t && t < 268*x){
            return '<input type="text" ng-model="$root.Hecate"> suddenly grabs your hand, and pins it against a prickly wall. The wall is covered all over with branches and leaves, all intertwined. All you can feel was her chest raising with her breath, and the warmth of her body against yours. She looks at you dead in the eye, and whispers forefully...';
        }
        
        else if (268*x <= t && t < 278*x){
            return '<input type="text" ng-model="$root.Hecate"> suddenly grabs your hand, and pins it against a prickly wall. The wall is covered all over with branches and leaves, all intertwined. All you can feel was her chest raising with her breath, and the warmth of her body against yours. She looks at you dead in the eye, and whispers forefully...<br><input type="text" ng-model="$root.Hecate">: findeth mine own ring. I knoweth thou wot whence ’t is!';
        }
        
        else if (278*x <= t && t < 282*x){
            return '<input type="text" ng-model="$root.Hecate"> grabs your hand and whips your whole body away from the branches, and forcefully pushes you through a door into another room and slam the door shut behind you.';
        }
        
        else if (282*x <= t && t < 284*x){
            return '<a href="#/apothecary" id = "orgyRmEject1">.</a><img src onerror=\'document.getElementById("orgyRmEject1").click()\'>';
        }
        
        else if (330*x <= t && t < 335*x){
            return '<input type="text" ng-model="$root.Hecate"> gives you a cup of tea and sits you down on a stool.';
        }
        
        else if (335*x <= t && t < 365*x){
            return '<input type="text" ng-model="$root.Hecate">: A saileth’r’s jointress hadst chestnuts in h’r lap, and munch’d, and munch’d, and munch’d: ’give me,’ quoth I: "aroint thee, beldams!" the rump-f’d ronyon cries. H’r husband’s to Aleppo gone, mast’r o’ the tig’r: but in a sieve i’ll thith’r saileth, and, liketh a rat without a tail, I’ll doth, I’ll doth, and I’ll doth. I myself has’t all the winds, and the v’ry p’rts they bloweth, all the quart’rs yond they knoweth I’ the shipman’s card. I shall draineth that gent dry as hay: sleep shalt neith’r night n’r day hangeth upon his pent-house lid; that gent shalt liveth a sir f’rbid: weary se’n nights nine times nine shalt that gent dwindle, peak and pineth: though his bark cannot beest hath lost, yet t shalt beest tempest-tost. behold what i has’t';
        }
        
        else if (365*x <= t && t < 375*x){
            return 'As <input type="text" ng-model="$root.Hecate"> tells you the story, she brings out a paper boat and place it on your tea. As the boat floats on your tea, the tea become to change into blood red in color. Somehow, raindrops start to fallon your head.';
        }
        
        else if (375*x <= t && t < 380*x){
            return 'As the rain falls on your head, <input type="text" ng-model="$root.Hecate"> guides you out of the room again.';
        }
        
        else if (380*x <= t && t < 382*x){
            return '<a href="#/orgy" id = "orgyRmEject2">.</a><img src onerror=\'document.getElementById("orgyRmEject2").click()\'>';
        }
        
        else {
            return '<a href="#/orgy" id = "orgyRmEject0">.</a><img src onerror=\'document.getElementById("orgyRmEject0").click()\'>';
        }
    }

//showers
function showersContent (t) {
	
			if (708*x <= t && t < 711*x){
			return '<input type="text" ng-model="$root.Boy"> arrives.';
		}
		
		else if (711*x <= t && t < 716*x){
			return 'With blood all over his naked body, he steps into the bathtub and start cleaning off the stains.';
		}
		
        else if (716*x <= t && t < 815*x){
			return '<input type="text" ng-model="$root.Boy"> is cleaning off blood stains from his body in the bathtub.';
		}
		
        else if (815*x <= t && t < 855*x){
			return '<input type="text" ng-model="$root.Boy"> slowly steps out of the bathtub, and dresses his now pristine body.';
		}
        
         else if (855*x <= t && t < 860*x){
			return '<input type="text" ng-model="$root.Boy"> turns towards the door and leaves the room. You decides to follow him out to see where he goes.';
		}
		
        else if (860*x <= t && t < 862*x){
			return '<a href="#/luggageRm" id = "showersEject1">.</a><img src onerror=\'document.getElementById("showersEject1").click()\'>';
		}
		
        else {
			return '<a href="#/orgy" id = "showersEject0">.</a><img src onerror=\'document.getElementById("showersEject0").click()\'>';
		}
	
}

//apothecary
function apothecaryContent (t) {
	
		if (130*x <= t && t < 135*x){
			return '<input type="text" ng-model="$root.Maid"> enters the room.';
		}
		
		else if (135*x <= t && t < 253*x){
			return 'You can see <input type="text" ng-model="$root.Maid"> flipping through the content of the room in a manner that suggests her familiarity with the place. She is looking for some herbs for her use.';
		}
		
        else if (253*x <= t && t < 260*x){
			return 'After a while, <input type="text" ng-model="$root.Maid"> gathered a few slices of dried leaves and wraps them in her handkerchief. She quickly grabs the doorknob and jogs out of the door. <a href="#/alley">Follow her before she goes out of sight!</a>';
		}
		
        else if (708*x <= t && t < 711*x){
			return '<input type="text" ng-model="$root.Bald"> arrives.';
		}
		
        else if (711*x <= t && t < 740*x){
			return 'With blood all over his naked body, he picks a few pieces of dried herbs and begin to rub them on his body.';
		}
		
        else if (740*x <= t && t < 870*x){
			return 'As <input type="text" ng-model="$root.Bald"> rubs the herbs onto his naked body, blood stains begin to peel off his body.';
		}
		
        else if (870*x <= t && t < 900*x){
			return '<input type="text" ng-model="$root.Bald"> approaches you and hands you the herbs. She turns her back to you and you help her rub the blood off her back. You scrub her back until all the blood is gone. <input type="text" ng-model="$root.Bald"> turns around and kisses you on the neck before going back to remove the blood from the rest of her body.';
		}
		
        else if (900*x <= t && t < 920*x){
			return '<input type="text" ng-model="$root.Bald"> slowly dresses his now pristine body.';
		}
		
        else if (920*x <= t && t < 925*x){
			return '<input type="text" ng-model="$root.Bald"> turns towards the door and leaves the room. You decides to follow him out to see where he goes.';
		}
		
        else if (925*x <= t){
			return '<a href="#/hall" id = "apothecaryEject1">.</a><img src onerror=\'document.getElementById("apothecaryEject1").click()\'>';
		}
		else {
			return 'There seems to be only herbs and in this room for now.';
		}
	
}

//taxidermy
function taxidermyContent (t) {
	if (0*x <= t && t < 40*x){
		return '<input type="text" ng-model="$root.taxidermist">: What can I help you with, sir?';
	}
	
	else if (40*x <= t && t < 45*x){
		return '<input type="text" ng-model="$root.LMD"> enters the shop.';
	}
	
	else if (45*x <= t && t < 60*x){
		return 'You see <input type="text" ng-model="$root.LMD"> talking to <input type="text" ng-model="$root.taxidermist"> about something.';
	}
	
	else if (60*x <= t && t < 70*x){
		return '<input type="text" ng-model="$root.taxidermist"> hands <input type="text" ng-model="$root.LMD"> a note.';
	}
	
	else if (70*x <= t && t < 75*x){
		return '<input type="text" ng-model="$root.LMD"> leaves the shop. <a href="#/alley">Follow her before she goes out of sight!</a>';
	}
	
	else if (75*x <= t && t < 80*x){
		return '<input type="text" ng-model="$root.taxidermist"> takes out a dead bird from a dirt-filled drawer.';
	}
	
	else if (80*x <= t && t < 105*x){
		return 'You see <input type="text" ng-model="$root.taxidermist"> studying the dead bird in details with a magnifying glass on his hand.';
	}
	
	else if (105*x <= t && t < 110*x){
		return 'You see <input type="text" ng-model="$root.taxidermist"> as if he is disappointed with the specimen on his hand. He grabs it with him and takes a leave for the doors. <a href="#/alley">Follow him before he goes out of sight!</a>';
	}
	
	else if (190*x <= t && t < 195*x){
		return '<input type="text" ng-model="$root.taxidermist"> enters the shop.';
	}
	
	else if (195*x <= t && t < 220*x){
		return '<input type="text" ng-model="$root.taxidermist">: What can I help you with, sir?';
	}
	
	else if (220*x <= t && t < 224*x){
		return '<input type="text" ng-model="$root.taxidermist"> catches your sight and quickly grabs you and pulled you with him.';
	}
	
	else if (224*x <= t && t < 225*x){
		return '<a href="#/room" id = "taxidermyEject1">.</a><img src onerror=\'document.getElementById("taxidermyEject1").click()\'>';
	}
	
	else if (345*x <= t && t < 348*x){
		return '<input type="text" ng-model="$root.taxidermist"> enters the shop.';
	}
	
	else if (348*x <= t && t < 362*x){
		return '<input type="text" ng-model="$root.taxidermist">: What can I help you with, sir?';
	}
	
	else if (362*x <= t && t < 366*x){
		return '<input type="text" ng-model="$root.LMB"> comes into the shop.';
	}
	
	else if (366*x <= t && t < 380*x){
		return 'Looks like <input type="text" ng-model="$root.LMB"> is talking to <input type="text" ng-model="$root.taxidermist"> about something.';
	}
	
	else if (380*x <= t && t < 390*x){
		return '<input type="text" ng-model="$root.taxidermist"> hands <input type="text" ng-model="$root.LMB"> a note.';
	}
	
	else if (390*x <= t && t < 395*x){
		return '<input type="text" ng-model="$root.LMB"> slips  the note into her pocket and quietly leaves the shop. <a href="#/MB">Follow her before she goes out of sight!</a>';
	}
	
	else if (395*x <= t && t < 400*x){
		return '<input type="text" ng-model="$root.taxidermist"> leaves the shop. <a href="#/alley">Follow him before he goes out of sight!</a>';
	}
	
	else if (440*x <= t && t < 446*x){
		return 'As <input type="text" ng-model="$root.Malcolm"> enters the room, he heads towards the counter and begins inspecting a dead bird on it.';
	}
	
	else if (446*x <= t && t < 450*x){
		return '<input type="text" ng-model="$root.Malcolm"> picks up an egg behind the counter and hands it to you. You gently rest the egg on your hand.';
	}
	
	else if (450*x <= t && t < 455*x){
		return 'Out of your expectation, <input type="text" ng-model="$root.Malcolm"> promptly smashes the egg on your hands. The egg is filled with dust and a single black feather in it.';
	}
	
	else if (455*x <= t && t < 463*x){
		return '<input type="text" ng-model="$root.Malcolm">: T’is not good … T’is not good … sire, I assure you i’ve seen the sign of the falcon of mah death. T’is not good … T’is not good!';
	}
	
	else if (463*x <= t && t < 468*x){
		return 'As he finishes that, <input type="text" ng-model="$root.Malcolm"> escapes from the room as if he was afraid of something inside. <a href="#/alley">Follow him before he goes out of sight!</a>';
	}
	
	else if (745*x <= t && t < 748*x){
		return '<input type="text" ng-model="$root.Agnes"> enters the shop.';
	}
	
	else if (748*x <= t && t < 815*x){
		return '<input type="text" ng-model="$root.Agnes"> is looking around the shop trying to find something.';
	}
	
	else if (815*x <= t && t < 820*x){
		return '<input type="text" ng-model="$root.Agnes"> leaves the shop. <a href="#/orgy">Follow her before she goes out of sight!</a>';
	}
    
    else if (945*x <= t && t < 950*x){
		return 'You realise you are rather hungry, but the dead animals here doesn’t exactly look attractive. You decide to head out and look for some food in the Banquet Hall.';
	}
	
	else if (950*x <= t){
		return '<a href="#/hall" id = "taxidermyEject0">.</a><img src onerror=\'document.getElementById("taxidermyEject0").click()\'>';
	}
	
	else {
		return 'There isn’t much life in this place right now ...';
	}
}

//candy
function candyContent (t) {
	if (362*x <= t && t < 365*x){
		return '<input type="text" ng-model="$root.Sexy"> enters the shop';
	}
	
	else if (365*x <= t && t < 466*x){
		return 'You see <input type="text" ng-model="$root.Sexy"> flipping through the merchandise in the store, occasionally stuffing a chunk or two into her mouth.';
	}
	
	else if (466*x <= t && t < 469*x){
		return '<input type="text" ng-model="$root.MD"> comes into the shop.';
	}
	
	else if (469*x <= t && t < 472*x){
		return '<input type="text" ng-model="$root.Sexy"> glances at <input type="text" ng-model="$root.MD">. She quickly darted towards him.';
	}
	
	else if (472*x <= t && t < 476*x){
		return '<input type="text" ng-model="$root.Sexy"> grazes her lips tightly with <input type="text" ng-model="$root.MD">. <input type="text" ng-model="$root.MD"> slightly struggles but gives in.';
	}
	
	else if (476*x <= t && t < 490*x){
		return '<input type="text" ng-model="$root.Sexy"> is kissing <input type="text" ng-model="$root.MD"> passionately.';
	}
	
	else if (490*x <= t && t < 495*x){
		return '<input type="text" ng-model="$root.Sexy"> removes her lips from <input type="text" ng-model="$root.MD"> and skipped out of the shop. <a href="#/alley">Follow her before she goes out of sight!</a>';
	}
	
	else if (495*x <= t && t < 500*x){
		return '<input type="text" ng-model="$root.MD"> stays dazed for a second, but he quickly recovers and takes leave immediately. <a href="#/alley">Follow him before he goes out of sight!</a>';
	}
	
	else if (665*x <= t && t < 670*x){
		return '<input type="text" ng-model="$root.Agnes"> enters the shop.';
	}
	
	else if (670*x <= t && t < 740*x){
		return '<input type="text" ng-model="$root.Agnes"> is looking around the shop trying to find something.';
	}
	
	else if (740*x <= t && t < 745*x){
		return '<input type="text" ng-model="$root.Agnes"> leaves the shop. <a href="#/taxidermy">Follow her before she goes out of sight!</a>';
	}
	
	else if (945*x <= t && t < 950*x){
		return 'Looking at all those candies, you realize that you haven’t eaten a thing throughout the day. You remember <input type="text" ng-model="$root.name"> telling you that there would be a feast tonight at the Banquet Halls, and you decide that you should probably go there and fill your grumbling stomach.';
	}
	
	else if (950*x <= t){
		return '<a href="#/hall" id = "candyEject0">.</a><img src onerror=\'document.getElementById("candyEject0").click()\'>';
	}
	
	else {
		return '<input type="text" ng-model="$root.candy">: Hey sweetie, there isn’t anyone around now. Do you want a little sweet?';
	}
}

//detective
function detectiveContent (t) {
	if (362*x <= t && t < 365*x){
		return '<input type="text" ng-model="$root.Malcolm"> enters the place.';
	}
    
    else if (365*x <= t && t < 435*x){
		return '<input type="text" ng-model="$root.Malcolm">is sitting in front of a desk, burying himself in piles of documents.';
	}
	
	else if (435*x <= t && t < 440*x){
		return 'Suddenly, <input type="text" ng-model="$root.Malcolm"> looks right at you into your eyes, and he grabs your hand while he runs outside.';
	}
	
	else if (440*x <= t && t < 441*x){
		return '<a href="#/taxidermy" id = "detectiveEject1">.</a><img src onerror=\'document.getElementById("detectiveEject1").click()\'>';
	}
	
	else if (445*x <= t && t < 448*x){
		return '<input type="text" ng-model="$root.Agnes"> enters the shop.';
	}
	
	else if (448*x <= t && t < 521*x){
		return '<input type="text" ng-model="$root.Agnes"> is looking around the shop trying to find something.';
	}
	
	else if (521*x <= t && t < 525*x){
		return '<input type="text" ng-model="$root.Agnes"> looks up at you and grabs your wrist. Out the door she and you go. ';
	}
	
	else if (525*x <= t && t < 526*x){
		return '<a href="#/room" id = "detectiveEject2">.</a><img src onerror=\'document.getElementById("detectiveEject2").click()\'>';
	}
	
	else if (723*x <= t && t < 727*x){
		return '<input type="text" ng-model="$root.MD"> and <input type="text" ng-model="$root.Malcolm"> rushes into the room, it looks like they have been sweating a bit.';
	}
	
	else if (727*x <= t && t < 875*x){
		return 'You see <input type="text" ng-model="$root.MD"> and <input type="text" ng-model="$root.Malcolm"> arguing about something while both pace around the room as if they are lost.';
	}
	
	else if (875*x <= t && t < 935*x){
		return '<input type="text" ng-model="$root.MD"> and <input type="text" ng-model="$root.Malcolm"> starts flipping through some files until they settle on an image of a face.';
	}
	
	else if (935*x <= t && t < 940*x){
		return '<input type="text" ng-model="$root.MD"> and <input type="text" ng-model="$root.Malcolm"> leaves the room. <a href="#/alley">Follow them before they go out of sight!</a>';
	}
	
	else if (945*x <= t && t < 950*x){
		return 'Perhaps being in the Detective Agency gave you some deductive skills. You deduce that you must have been starving having not eaten a thing today. You remember there being a ball tonight at the Banquet Hall so you leave for it. ';
	}
	
	else if (950*x <= t){
		return '<a href="#/hall" id = "detectiveEject0">.</a><img src onerror=\'document.getElementById("detectiveEject0").click()\'>';
	}
	
	else {
		return 'The detective is out … Looks like you will have to take your case to someone else …';
	}
}

//tailor
function tailorContent (t) {
	if (362*x <= t && t < 365*x){
		return '<input type="text" ng-model="$root.Agnes"> enters the shop.';
	}
	
	else if (365*x <= t && t < 440*x){
		return '<input type="text" ng-model="$root.Agnes"> is talking to <input type="text" ng-model="$root.tailor">.';
	}
	
	else if (440*x <= t && t < 445*x){
		return '<input type="text" ng-model="$root.Agnes"> leaves the shop. <a href="#/detective">Follow her before she goes out of sight!</a>';
	}
	
	else if (850*x <= t && t < 855*x){
		return 'Suddenly, you feel a hand on your shoulder. It is <input type="text" ng-model="$root.tailor">. He grabbed you and pulled you out of the shop with him. ';
	}
	
	else if (855*x <= t && t < 856*x){
		return '<a href="#/cemetery" id = "tailorEject1">.</a><img src onerror=\'document.getElementById("tailorEject1").click()\'>';
	}
	
	else if (865*x <= t && t < 869*x){
		return '<input type="text" ng-model="$root.Sexy"> sneaks up on you and pulls you aside, giving you a sudden embrace. All you feel now is her warmth… ';
	}
	
	else if (869*x <= t && t < 872*x){
		return 'RING RING';
	}
	
	else if (872*x <= t && t < 875*x){
		return 'RING RING<br>The phone rings.';
	}
	
	else if (875*x <= t && t < 878*x){
		return '<input type="text" ng-model="$root.Sexy">: Pick it up my dear.';
	}
	
	else if (878*x <= t && t < 882*x){
		return '<input type="text" ng-model="$root.Sexy">: Pick it up my dear.<br>You pick up the phone.';
	}
	
	else if (882*x <= t && t < 886*x){
		return '<input type="text" ng-model="$root.voice">: get your hands off her.';
	}
	
	else if (886*x <= t && t < 890*x){
		return '<input type="text" ng-model="$root.voice">: get your hands off her.<br>You attempts to pull away from <input type="text" ng-model="$root.Sexy">, but she clutches you tightly.';
	}
	
	else if (890*x <= t && t < 896*x){
		return '<input type="text" ng-model="$root.voice">: get your hands off her.';
	}
	
	else if (896*x <= t && t < 900*x){
		return '<input type="text" ng-model="$root.voice">: get your hands off her.<br><input type="text" ng-model="$root.Sexy"> hugs you even tighter';
	}
	
	else if (900*x <= t && t < 906*x){
		return '<input type="text" ng-model="$root.voice">: get your hands off her!';
	}
	
	else if (906*x <= t && t < 910*x){
		return '<input type="text" ng-model="$root.voice">: GET YOUR HANDS OFF HER!';
	}
	
	else if (910*x <= t && t < 914*x){
		return '<input type="text" ng-model="$root.voice">: GET YOUR HANDS OFF HER!<br><input type="text" ng-model="$root.Sexy"> continues to hold on to you.';
	}
	
	else if (914*x <= t && t < 917*x){
		return '<input type="text" ng-model="$root.voice">: OFF!';
	}
	
	else if (917*x <= t && t < 922*x){
		return 'The voice from the other side on the phone went dead  and you put it down on the receiver.';
	}
	
	else if (922*x <= t && t < 926*x){
		return 'Slowly, <input type="text" ng-model="$root.Sexy"> unwraps her arm around you.';
	}
	
	else if (926*x <= t && t < 930*x){
		return 'Slowly, <input type="text" ng-model="$root.Sexy"> unwraps her arm around you.<br><input type="text" ng-model="$root.Sexy">: I will miss you my dear.';
	}
	
	else if (930*x <= t && t < 935*x){
		return '<input type="text" ng-model="$root.Sexy"> turned and she slowly leaves the shop. <a href="#/hall">Follow her before she goes out of sight!</a>';
	}
	
	else if (945*x <= t && t < 950*x){
		return 'You remember <input type="text" ng-model="$root.name"> telling you that there would be a feast tonight at the Banquet Halls. Having not eaten anything yet for the day, you decide that it is a good idea to join the banquet, and off you go.';
	}
	
	else if (950*x <= t){
		return '<a href="#/hall" id = "tailorEject0">.</a><img src onerror=\'document.getElementById("tailorEject0").click()\'>';
	}
	
	else {
		return '<input type="text" ng-model="$root.tailor">: Best suits in town!';
	}
}

//speakeasy
function speakeasyContent (t) {
	if (355*x <= t && t < 358*x){
		return '<input type="text" ng-model="$root.Banquo"> enters the speakeasy.';
	}
	
	else if (358*x <= t && t < 361*x){
		return '<input type="text" ng-model="$root.Banquo"> turns his head and spots you.';
	}
	
	else if (361*x <= t && t < 381*x){
		return '<input type="text" ng-model="$root.Banquo">: Fleance … Pray you must! For evil dawns, lest it enshroud you soul, lest it engulf your mind. I must insist that you pray.<br><textarea autofocus style = "width: 75%; height: 35%; background-color: #000000;	color: #ffffff;	font-family: Courier;"></textarea>';
	}
	
	else if (381*x <= t && t < 386*x){
		return '<input type="text" ng-model="$root.Banquo"> pauses for a while and withdraws a sword under his cloak before handing it to you. You take the sword from his hand hold it tightly on your hands.';
	}
	
	else if (386*x <= t && t < 391*x){
		return '<input type="text" ng-model="$root.Banquo"> removes a small jar of oil from a shelf and moistens the tips of his finger with it. He proceeds to rub oil on your hands and forehead. He then takes the sword back and makes you open a drawer in the wall.';
	}
	
	else if (391*x <= t && t < 396*x){
		return '<input type="text" ng-model="$root.Banquo"> removes a small jar of oil from a shelf and moistens the tips of his finger with it. He proceeds to rub oil on your hands and forehead. He then takes the sword back and makes you open a drawer in the wall.<br>You open the drawer. It is filled with dirt except for a ripped up ♡K playing card buried halfway through.';
	}
	
	else if (396*x <= t && t < 400*x){
		return '<input type="text" ng-model="$root.Banquo">: Don’t forget me …';
	}
	
	else if (400*x <= t && t < 403*x){
		return '<input type="text" ng-model="$root.Banquo">: Don’t forget me …<br><input type="text" ng-model="$root.Banquo"> gives you a kiss on your forehead.';
	}
	
	else if (403*x <= t && t < 408*x){
		return 'With that, <input type="text" ng-model="$root.Banquo"> turns and leaves the place. <a href="#/lobby">Follow him before he goes out of sight!</a>';
	}
	
	else if (435*x <= t && t < 438*x){
		return '<input type="text" ng-model="$root.Boy"> enters.';
	}
	
	else if (438*x <= t && t < 515*x){
		return '<input type="text" ng-model="$root.Boy"> is chatting with <input type="text" ng-model="$root.bartender"> as he sips from a cocktail glass.';
	}
	
	else if (515*x <= t && t < 520*x){
		return '<input type="text" ng-model="$root.Boy"> drops his glass and leaves the speakeasy. <a href="#/orgy">Follow him before he goes out of sight!</a>';
	}
	
	else if (560*x <= t && t < 564*x){
		return '<input type="text" ng-model="$root.Malcolm"> and <input type="text" ng-model="$root.Banquo"> enters the speakeasy.';
	}
	
	else if (564*x <= t && t < 570*x){
		return 'As the duo enters, <input type="text" ng-model="$root.bartender"> drops down 2 glasses of beer on the table.';
	}
	
	else if (570*x <= t && t < 580*x){
		return 'You see <input type="text" ng-model="$root.Banquo"> talking to <input type="text" ng-model="$root.bartender"> and <input type="text" ng-model="$root.bartender"> puts a deck of playing cards on the table.';
	}
	
	else if (580*x <= t && t < 590*x){
		return '<input type="text" ng-model="$root.Banquo"> begins to shuffle the deck of cards and distributes them into 4 stacks.';
	}
	
	else if (590*x <= t && t < 593*x){
		return '<input type="text" ng-model="$root.Agnes"> enters.';
	}
	
	else if (593*x <= t && t < 600*x){
		return '<input type="text" ng-model="$root.Agnes"> joins <input type="text" ng-model="$root.Malcolm"> and <input type="text" ng-model="$root.MD"> around a table.';
	}
	
	else if (600*x <= t && t < 660*x){
		return '<input type="text" ng-model="$root.Agnes">, <input type="text" ng-model="$root.Malcolm">, and <input type="text" ng-model="$root.MD"> are playing cards on a table.';
	}
	
	else if (660*x <= t && t < 665*x){
		return '<input type="text" ng-model="$root.Agnes"> stands up and leaves from the door. <a href="#/candy">Follow her before she goes out of sight!</a>';
	}
	
	else if (665*x <= t && t < 680*x){
		return '<input type="text" ng-model="$root.Malcolm"> and <input type="text" ng-model="$root.MD"> are playing cards on a table.';
	}
	
	else if (680*x <= t && t < 685*x){
		return '<input type="text" ng-model="$root.MD"> arrives and sits down. You can feel the anger radiating from his expressions.';
	}
	
	else if (685*x <= t && t < 694*x){
		return '<input type="text" ng-model="$root.MD"> joins <input type="text" ng-model="$root.Banquo"> and <input type="text" ng-model="$root.Malcolm"> in playing cards.';
	}
	
	else if (694*x <= t && t < 701*x){
		return 'As the three play cards, suddenly, <input type="text" ng-model="$root.Banquo"> stands up with a ♡K card in his hands.';
	}
	
	else if (701*x <= t && t < 708*x){
		return '<input type="text" ng-model="$root.Banquo"> ripped the card in his hand up violently and stuck it to the wall with a knife on the table.';
	}
	
	else if (708*x <= t && t < 711*x){
		return '<input type="text" ng-model="$root.MB"> blasts open the door and enters the speakeasy.';
	}
	
	else if (711*x <= t && t < 716*x){
		return 'As <input type="text" ng-model="$root.MB"> appears, <input type="text" ng-model="$root.MD">, <input type="text" ng-model="$root.Malcolm">, and <input type="text" ng-model="$root.bartender"> immediately scatters and leave the room. <a href="#/alley">Follow them before they go out of sight!</a>';
	}
	
	else if (716*x <= t && t < 860*x){
		return '<input type="text" ng-model="$root.MB"> and <input type="text" ng-model="$root.Banquo"> is having a fight here.';
	}
	
	else if (860*x <= t && t < 890*x){
		return '<input type="text" ng-model="$root.MB"> overpowers <input type="text" ng-model="$root.Banquo">.';
	}
	
	else if (890*x <= t && t < 897*x){
		return '<input type="text" ng-model="$root.MB"> picks up a brick on the floor.';
	}
	
	else if (897*x <= t && t < 899*x){
		return '<input type="text" ng-model="$root.MB"> slams a brick into <input type="text" ng-model="$root.Banquo">\'s head… ';
	}
	
	else if (899*x <= t && t < 901*x){
		return '<input type="text" ng-model="$root.MB"> slams a brick into <input type="text" ng-model="$root.Banquo">\'s head. Once…';
	}
	
	else if (901*x <= t && t < 903*x){
		return '<input type="text" ng-model="$root.MB"> slams a brick into <input type="text" ng-model="$root.Banquo">\'s head. Once, twice…';
	}
	
	else if (903*x <= t && t < 905*x){
		return '<input type="text" ng-model="$root.MB"> slams a brick into <input type="text" ng-model="$root.Banquo">\'s head. Once, twice, thrice…';
	}
	
	else if (905*x <= t && t < 912*x){
		return '<input type="text" ng-model="$root.Banquo"> lies motionless on the floor with blood all over his temple and face.';
	}
	
	else if (912*x <= t && t < 915*x){
		return '<input type="text" ng-model="$root.MB"> shoos you out of the speakeasy as he leaves.';
	}
	
	else if (915*x <= t && t < 950*x){
		return '<a href="#/alley" id = "speakeasyEject1">.</a><img src onerror=\'document.getElementById("speakeasyEject1").click()\'>';
	}
	
	else if (950*x <= t){
		return '<a href="#/hall" id = "speakeasyEject0">.</a><img src onerror=\'document.getElementById("speakeasyEject0").click()\'>';
	}
	
	else {
		return '<input type="text" ng-model="$root.bartender">: Howdy! What\'s yo-wr drank?';
	}
}
