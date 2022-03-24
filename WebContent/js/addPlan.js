$(function() {
	$('#gmap').contents().find('#location-search-button').click(function() {
		const searchInputEl = $('#gmap').contents().find('#location-search-input').val();
		$('.place').val(searchInputEl);
		console.log(searchInputEl);
	})
	$('#gmap').contents().find('#location-search-input').change(function() {
			const searchInput = $('#gmap').contents().find('#location-search-input').val();
			$('.place').val(searchInput);
			console.log(searchInput);
	})
});
