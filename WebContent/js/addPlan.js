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


const addbtn = document.getElementById("add");
const copyDiv = document.getElementById("copyDiv");

addbtn.addEventListener("click", e => {
	e.preventDefault();
	const retVal = confirm("추가 하시겠습니까?");
	if(retVal){
		const card = document.querySelector('#gridContainer').cloneNode(true);
		copyDiv.appendChild(card);
	}
})

