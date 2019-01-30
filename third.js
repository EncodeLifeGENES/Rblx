var infoH = document.getElementById("info")
var img = document.getElementById("pers3")
var img2 = document.getElementById("pers4")

infoH.addEventListener("mouseover", fane);
infoH.addEventListener("mouseout", outfane);
infoH.addEventListener("click", cleke);

function fane() {
	infoH.style.boxShadow  = "0 4px 4px -2px #d10707"
}

function outfane() {
	infoH.style.boxShadow  = "0px 0px 0px 0px"
}

function cleke() {
	window.location.href = "second.html";
}

var infoH2 = document.getElementById("home")

infoH2.addEventListener("mouseover", fane2);
infoH2.addEventListener("mouseout", outfane2);
infoH2.addEventListener("click", cleke2);

function fane2() {
	infoH2.style.boxShadow  = "0 4px 4px -2px #d10707"
}

function outfane2() {
	infoH2.style.boxShadow  = "0px 0px 0px 0px"
}

function cleke2() {
	window.location.href = "main.html";
}

img.addEventListener("mouseover", faner);
img.addEventListener("mouseout", outfaner);
img.addEventListener("click", cleker);

function faner() {
	img.style.height = "270px";
}

function outfaner() {
	img.style.height = "260px";
}

function cleker() {
	window.location.href = "https://discordapp.com/channels/485005225904701451/532232039362068490";
}

img2.addEventListener("mouseover", faner2);
img2.addEventListener("mouseout", outfaner2);
img2.addEventListener("click", cleker2);

function faner2() {
	img2.style.height = "270px";
}

function outfaner2() {
	img2.style.height = "260px";
}

function cleker2() {
	window.location.href = "https://www.roblox.com/users/1213498/profile";
}


