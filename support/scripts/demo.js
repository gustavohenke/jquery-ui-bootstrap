(function( $ ) {
	
	var widgets = [ "accordion", "button", "tabs" ];
	
	$( document).ready(function() {
		$("#accordion").accordion();
		$("#tabs").tabs();
		$("#button").button();
		
		$("#dialog").dialog({
			autoOpen: false,
			modal: true,
			width: 300,
			height: 200,
			title: "Dialog example",
			buttons : {
				Close : function() { $("#dialog").dialog("close"); }
			}
		});
		$("#open-dialog").button({
			icons : {  primary : "ui-icon-newwin" }
		}).click(function() {
			$("#dialog").dialog("open");
		});
		
		$("#spinner").spinner();
		
		$("#autocomplete").autocomplete({
			source: [ "Haskell", "Java", "JavaScript", "C++", "C#", "PHP", "CoffeeScript" ]
		});
    
		$("#slider").slider({
			range: true,
			values: [5, 40],
			min: 0,
		    max: 50
		});
		
		$("#datepicker").datepicker();
		
		$("#progressbar").progressbar({
			value: 40
		});
		
		$("#icons li").hover(function() {
			$(this).toggleClass("ui-state-hover");
		});
		
		$(".tooltip-1").tooltip({
			track: true
		});
		$(".tooltip-2").tooltip();
		
		$("#menu").menu();
	});
	
})( jQuery );