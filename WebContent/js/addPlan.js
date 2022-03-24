$(()=> {
	$('#gmap').contents().find('#location-search-button').click(function() {
		$('gmap-div').empty();
		const searchInputEl = $('#gmap').contents().find('#location-search-input').val();
		$('.place').val(searchInputEl);
		console.log(searchInputEl);
	})
	$('#gmap').contents().find('#location-search-input').click(function() {
			$('gmap-div').empty();
			const searchInput = $('#gmap').contents().find('#location-search-input').val();
			$('.place').val(searchInput);
			console.log(searchInput);
	})
});
