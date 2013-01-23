(function( $ ) {
	
	$( document ).ready(function() {
		$("#accordion").accordion();
		$("#tabs").tabs();
		$("#button, #button2").button();
		$("#menu").menu();
		$("#spinner").spinner();
		$("#datepicker").datepicker();
		
		$("#dialog").dialog({
			autoOpen: false,
			modal: true,
			width: 300,
			height: 200,
			title: "Dialog example",
			buttons : {
				Close : function() {
					$("#dialog").dialog("close");
				}
			}
		});
		$("#open-dialog").button({
			icons : {
				primary : "ui-icon-newwin"
			}
		}).click(function() {
			$("#dialog").dialog("open");
		});
		
		$("#autocomplete").autocomplete({
			source: [
				"C", "C++", "C#", "CoffeeScript", "Eiffel", "FORTRAN", "Go", 
				"Haskell", "Java", "JavaScript", "Kotlin", "Lua", "Matlab", "Perl",
				"PHP", "Prolog", "Python", "Objective-C", "Ruby", "Scala", 
				"Smalltalk", "Visual Basic"
			]
		});
    
		$("#slider").slider({
			range: true,
			values: [ 5, 40 ],
			min: 0,
		    max: 50
		});
		
		$("#progressbar, #progressbar2, #progressbar3").progressbar({
			value: 40
		});
		
		$("#icons li").hover(function() {
			$( this ).toggleClass("ui-state-hover");
		});
		
		$(".tooltip-1").tooltip({
			track: true
		});
		$(".tooltip-2, .page-header .ui-icon").tooltip({
			position: {
				my: "left bottom",
				at: "left top"
			}
		});

		$(".fontawesome-toggle").click( toggleFontAwesome );
	});

	function toggleFontAwesome() {
		var i = 0;
		for ( ; i < document.styleSheets.length; i++ ) {
			if ( /\.font-awesome\.css$/i.test( document.styleSheets[ i ].href ) ) {
				document.styleSheets[ i ].disabled = !document.styleSheets[ i ].disabled;
				break;
			}
		}
	}
	
})( jQuery );