/*    _           _    _                     _ 
     | |         | |  | |                   | |
  ___| | ___  ___| | _| |     ___   __ _  __| |
 / __| |/ _ \/ _ \ |/ / |    / _ \ / _` |/ _` |
 \__ \ |  __/  __/   <| |___| (_) | (_| | (_| |
 |___/_|\___|\___|_|\_\______\___/ \__,_|\__,_|
    version 2.08
*/

/*URL for the server logo
Leave it blank to use text instead
(Put the files in the images folder)*/
var l_serverImage = "TzKYZRH (1).jpg";

/*Custom server name configuration
Leave it blank for automatic server name*/
var l_serverName = "Osperey Gaming";

/*Use a video for the background?
Otherwise it will just use images*/
var l_bgVideo = false;

/*Video background
Avaiable options:
"aurora.webm"
"bluefall.webm"
"bluetilefloor.webm"
"bluewhitecircles.webm"
"bokehlens.webm"
"cleanbokeh.webm"
"coldnight.webm"
"colorfulburst.webm"
"dancingstars.webm"
"dropsflares.webm"
"focusorangebokeh.webm"
"glimmering.webm"
"glowingrings.webm"
"greencircles.webm"
"hues.webm"
"inthedeep.webm"
"modernflourish.webm"
"orangeaura.webm"
"warminside.webm"
"yellowgreen.webm"

You can add custom backgrounds
Just make sure it is at webm VP8 format 
(Put the files in the backgrounds/videos folder)*/
var l_background = "glimmering.webm";

/*(Image-background only)
Place one or more images
Multiple images will automatically shuffle between them
(Put the files in the backgrounds/images folder)*/
var l_bgImages = [
	"2pdlDLG.jpg",
	"Darth-Vader-1920x1080.jpg",
	"stormtrooper-1920x1080-stormtrooper-5634.jpg",
	"stormtrooper-going-to-war-wallpaper-5354.jpg",
	"ws_Darth_Vader_1920x1080.jpg",
];

/*Random background images order?*/
var l_bgImagesRandom = true;

/*(Image-background only)
Delay between background images changes
in milliseconds*/
var l_bgImageDuration = 5000;

/*(Image-background only)
Image background fade velocity
in milliseconds*/
var l_bgImageFadeVelocity = 2000;

/*Enable background overlay?*/
var l_bgOverlay = true;

/*Background darkening amount
0 for none (0%), 100 for pitch black (100%)*/
var l_bgDarkening = 50;

/*Music player
'true' or 'false' to enable music in the background*/
var l_music = true;

/*Display actual song's name?*/
var l_musicDisplay = true;

/*Music playlist
Place how much .ogg songs you want
(Put the files in the songs folder)*/
var l_musicPlaylist = [
	{youtube: "WZD-UZxHdLs", name: "Battlefront 2 Trailer Theme"},
	{youtube: "o--bLEobBFY", name: "Battle Of Heroes"},
	{youtube: "IVageTGZa88", name: "Sith Theme"},
	{youtube: "9P-HkrZWyn0", name: "Medley"},
	{youtube: "DJKkYTwYWYo", name: "Boba Fett Theme"},
	{youtube: "myS5hNJiri8", name: "Darth Vader Theme"},
	{youtube: "t3tFkcW7ySk", name: "Alderaan Ambience"},
];

/*Random music order?*/
var l_musicRandom = true;

/*Music volume
Choose a value between 0 and 100*/
var l_musicVolume = 25;

/*Enable custom messages?*/
var l_messagesEnabled = true;

/*Enter your custom messages below*/
var l_messages = [
	"Enjoy the server",
	"Thanks for joining us!",
	"Darth Vader: The circle is now complete. When I left you, I was but the learner. Now I am the master.",
	"Darth Sidious: Now, witness the power of this fully operational battle station.",
	"Commander Versio: Hope can not save them!",
	"Inferno Squad: Let’s celebrate the birth of Inferno Squad with a bottle of rebel tears!",
	"Boba Fett:  Your arrogance is the cause of your destruction, not me.",
	"Boba Fett: When you need me again, Vader, and you will, my price will be triple.",
];

/*Random message order?*/
var l_messagesRandom = true;

/*Delay between message changes
in milliseconds*/
var l_messagesDelay = 5000;

/*Messages fade time
in milliseconds*/
var l_messagesFade = 1000;
