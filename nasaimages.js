var array = [];
for (var i = 0; i <= 8640000000; i += 86400000) {
	var d = Date.now() - i;
	var today = new Date(d).toISOString().split('T')[0];
	var newDates = array.push(today);
}
console.log(array);

function callPage(day) {
	$.getJSON("https://api.nasa.gov/planetary/apod?date=" + day + "&api_key=LvSPwKSifQxt0cyYQVdVAJbqUUbo3uy1s66jvb4i", function(data) {
		$('#outerwrap').css({
			'position': 'fixed',
			'top': '-20px',
			'left': '-20px',
			'width': '110vw',
			'height': '110vh',
			'background-image': 'linear-gradient(rgba(17,17,17,0.9), rgba(17,17,17,0.9)), url("' + data.url + '")',
			'background-size': 'cover',
			'filter': 'blur(3px)'
		});
		$("#wrapper").append("<img class='picture' src='" + data.url + "'>").append("<h2>" + data.title + " - " + day + "</h2>").append("<p class='exp'>" + data.explanation + "</p>").delay(500).fadeIn(400);
		});
}

callPage(array[0]);

function navigation(){
	var arrclick = 0;
		$('#leftnav').each(function() {
			$(this).on('click', function() {
				arrclick += 1;
				console.log(array[arrclick]);
				callPage(array[arrclick]);
				$("#wrapper").hide().empty();
			})
		})

		$('#rightnav').each(function() {
			$(this).on('click', function(){
				arrclick -= 1;
				console.log(array[arrclick]);
				callPage(array[arrclick]);
				$("#wrapper").hide().empty();
			})
		})

}

navigation();