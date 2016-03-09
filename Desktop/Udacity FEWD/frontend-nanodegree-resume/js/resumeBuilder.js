/*$("#main").append(["Ann"]);

var thoughts = "I am ann and I am amazing :)";
var funThoughts = thoughts.replace("amazing", "fun");

$("#main").append(funThoughts);
*/

var bio = {
	"name" : "ava khan",
	"role" : "stuff doer",
	"contact" : {
		"email" : "immm.ava@gmail.com",
		"mobile" : "123-456-7890",
		"github" : "immmava",
		"location" : "NYC"
	},
	"pic" : "images/robot29.png",
	"welMsg" : "Welcome to my resume page!",
	"skills" : ["getting stuff done", " getting more stuff done", " doing lots of stuff!"]
}

var formattedName = HTMLheaderName.replace("%data%", bio.name);
var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
var formattedEmail = HTMLemail.replace("%data%", bio.contact.email);
var formattedLocation = HTMLlocation.replace("%data%", bio.contact.location);
var formattedgithub = HTMLgithub.replace("%data%", bio.contact.github);
var formattedPic = HTMLbioPic.replace("%data%", bio.pic);
var formattedMsg = HTMLwelcomeMsg.replace("%data%", bio.welMsg);
var formattedSkills = HTMLskills.replace("%data%", bio.skills);


/*
var work = {};
work.position = "PM";
work.employer = "SWL";
work.years = 1;
work.city = "NYC";

var education = {};
education["name"] = "Brown";
education["years"] = "'04 - '08";
education["city"] = "Providence";
*/

var education = {
	"schools": [
		{
			"name": "Taft",
			"location": "Watertown",
			"majors": ["NA"],
			"gradYear": 2004,
			"url": "www.brown.edu"
		},
		{
			"name": "Brown",
			"location": "Providence",
			"majors": ["IR", "VA"],
			"gradYear": 2008,
			"url": "www.taftschool.org"
		}
	],
	"onlineCourses": [
		{
			"title": "Intro to Programming",
			"school": "Udacity",
			"dates": 2012,
			"url": "http://www.udacity.com"
		}
	]
}


var work = {
	"jobs": [
		{
			"employer": "SWL",
			"title": "PM",
			"dates": "April 2015 - present",
			"location": "NYC",
			"description": "Urban innovation company."
		},
		{
			"employer": "Google",
			"title": "PM",
			"dates": "June 2010 - March 2016",
			"location": "NYC",
			"description": "Lots of stuff."
		}
	]
}

var projects = {
	"start": "Feb 2016",
	"title": "Udacity resume",
	"dates": "2016",
	"description": "Learning how to code HTML, CSS, and Javascript",
	"projectImg": "https://endor-dev.s3-us-west-2.amazonaws.com/sites/566671d2495b2d0018000000/theme/images/rebrand/logo-wordmark.svg?1456958557"
}
 
$("#header").append(formattedName);
$("#header").append(formattedRole);
$("#header").append(formattedEmail);
$("#header").append(formattedLocation);
$("#header").append(formattedgithub);
$("#header").append(formattedPic);
$("#header").append(formattedMsg);
$("#header").append(formattedSkills);
$("#main").append(work["position"]);
$("#main").append(education.name);
