$(function(){
	
	$('#gmap').contents().find('#location-search-button').click(function() {
			
		let searchInput = $('#gmap').contents().find('#location-search-input').val();
		$('.place').val(searchInput);
		console.log(searchInput);
})

	$('#gmap').contents().find('#location-search-input').click(function() {
			
			let searchInput = $('#gmap').contents().find('#location-search-input').val();
			$('.place').val(searchInput);
			console.log(searchInput);
	})

	
});
