
$(document).ready(function() {
	$(".modal_show_jeju").click(function() {
		var tmp = $('.jeju').attr('src');
		console.log(tmp);
		$('#cmp_img').attr('src', tmp);
		$('#cmpModal').modal("show");
	});
	$(".modal_show_newyork").click(function() {
		var tmp = $('.newyork').attr('src');
		$('#cmp_img').attr("src", tmp);
		$("#cmpModal").modal("show");
	});
	$(".modal_show_yangyang").click(function() {
		var tmp = $('.yangyang').attr('src');
		$('#cmp_img').attr("src", tmp);
		$("#cmpModal").modal("show");
	});
});
