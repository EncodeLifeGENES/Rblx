var infoH = document.getElementById("home")

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
	window.location.href = "main.html";
}

var soc = document.getElementById("soc")

soc.addEventListener("mouseover", fane2);
soc.addEventListener("mouseout", outfane2);
soc.addEventListener("click", cleke2);

function fane2() {
	soc.style.boxShadow  = "0 4px 4px -2px #d10707"
}

function outfane2() {
	soc.style.boxShadow  = "0px 0px 0px 0px"
}

function cleke2() {
	window.location.href = "third.html";
}


