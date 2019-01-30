var infoH = document.getElementById("info")

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

var infoH2 = document.getElementById("soc")

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
	window.location.href = "third.html";
}


