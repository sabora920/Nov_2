function handleSubmit() {
	//let fbArr = [];
	$('#number-chooser').submit(event => {
		event.preventDefault();
		let fbNumber = parseInt($(this).find('input[name="number-choice"]').val());
		$(this).find('input[name="number-choice"]').val('');
		$('.js-results').empty();
		let fbArr = [];
		for(let i=1; i<=fbNumber; i++) {
			if(i % 15 === 0) {
				fbArr.push($(`<div class="fizz-buzz-item fizzbuzz"><span>FizzBuzz</span></div>`));
			} else if(i % 5 === 0) {
				fbArr.push($(`<div class="fizz-buzz-item buzz"><span>Buzz</span></div>`));
			} else if(i % 3 === 0) {
				fbArr.push($(`<div class="fizz-buzz-item fizz"><span>Fizz</span></div>`));
			} else {
				fbArr.push($(`<div class="fizz-buzz-item"><span>${i}</span></div>`));
			}
		}
		console.log(fbArr);
		$('.js-results').append(fbArr);
	});
}

$(handleSubmit);