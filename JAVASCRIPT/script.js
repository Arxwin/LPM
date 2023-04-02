function ENT() {
		document.querySelector('.boutton').style.color = "violet"
			if (confirm("Voulez vous vraiment sortir du site ? (l'ent est mieux c'est ça !?)")) {
				open("https://vicat.mon-ent-occitanie.fr/");
			}
			else {
				;
			}
		
}


window.onscroll = function() {

    if (document.documentElement.scrollTop > 20) {
        document.getElementById("navbar").style.background = "#9e9e9e";
        document.getElementById("navbar").style.padding = "0px 0px";
        document.getElementById("logo").style.color = "white";
        document.getElementById("onglet").style.color = "white";
    }
    else {
        document.getElementById("navbar").style.background = "#9e9e9e7a";
        document.getElementById("navbar").style.padding = "30px 10px";
        document.getElementById("logo").style.color = "black";
        document.getElementById("onglet").style.color = "black";
    }


}


	