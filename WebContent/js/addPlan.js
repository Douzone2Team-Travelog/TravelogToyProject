$(() => {
	$('.rightBut').click(function() {
		var tag = '<div class="form-group section1"><h4 style="width:250px; margin-top: 5px;">시간등록</h4><input type="text" name="timepicker" class="time_element form-control" style="text-align: center;"/><h4 style="position: absolute; left: 30%; margin-top: 0.3%;">일정</h4><input type="text" class="form-control  writePlan"></input></div>';
		$('.grid').append(tag);
	});
	
});
