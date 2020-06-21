function updateOutput(){
	$("iframe").contents().find("html").html(
		"<html><head><style type = 'text/css'>" +
		$("#cssarea").val() + 
		"</style></head><body>" + 
		$("#htmlarea").val() + 
		"</body></html>"
	);
	document.getElementById("outputarea").contentWindow.eval(
			$("#javascriptarea").val()
		)
}
updateOutput();
$(".button").hover(function(){
		$(this).addClass("highlighted");
	}, function(){
		$(this).removeClass("highlighted");
	}
);
$(".button").click(function(){
	$(this).removeClass("highlighted");
	$(this).toggleClass("active");
	var area = $(this).attr('id') + 'area';
	$("#" + area).toggleClass("hidden");
	var activepanels = 4 - $(".hidden").length
	$(".panel").width($(window).width()/activepanels - 4)

});
$(".panel").height($(window).height() - 12 - $("#topbar").height());
$(".panel").width($(window).width()/2 - 4)
$(".panel").click(function(){
	$(this).addClass("activepanel");
});

$("textarea").on("change keyup paste", function(){
	// $("iframe").contents().find("html").html(
	// 	$("#htmlarea").val()
	// );
	updateOutput();
});