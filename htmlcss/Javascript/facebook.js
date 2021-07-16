var database = [
	{
		username:"Tejas",
		password:"secret"
	},

	{
		username :"andrei",
		password:"noPassword"
	},

	{
		username :"sally",
		password:"123"
	},
	{
		username :"ingrid",
		password:"777"
	}
];

var newFeed = [
	{
		username: "Bobby",
		timeline: "So tired from all that learning!"
	},
	{
		username: "Sally",
		timeline: "Javascript is sooooo cool!"
	},
	{
		username: "Mitch",
		timeline: "Javascript is preeetyy cool!"
	}
];

var userNamePrompt = prompt("What's your username");
var passwordPrompt = prompt("What's your password");


function isUserValid(username, password) {
	for(var i =0; i < database.length; i++) {
		if(database[i].username === username &&
			database[i].password === password) {
			return true;
		}
	}
	return false;
}

function signIn(user, pass) {	
	if(isUserValid(user, pass)) {
			newFeed.forEach(function(uId) {
				console.log(uId.username + " posted\n " + uId.timeline);	
			});	
		} else {
    		alert("Sorry, wrong username or password");
    	}	
};

signIn(userNamePrompt, passwordPrompt);