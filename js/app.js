$( document ).ready(function() { 

	// inicio parpadeo del título
	function verde (){
		$(".main-titulo").animate({color:"green"}, "slow", function(){ amarillo() } )
	}
	function amarillo (){
		$(".main-titulo").animate({color:"yellow"}, "slow", function(){ verde() })
	}

	verde();
	// fin parpadel del título











})
