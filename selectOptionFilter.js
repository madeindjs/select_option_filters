// simple filter with regex system
function add_filter(select_id, placeholder ) {

	// set default values
	placeholder = typeof placeholder !== 'undefined' ? placeholder : "Search into theses options";

	// get the select tag
	var select_tag = document.getElementById(select_id);

	// create a simple input and insert just before the select tag
	var searchInput = document.createElement('input');
	searchInput.placeholder=placeholder;
	select_tag.parentElement.insertBefore(searchInput, select_tag);

	// add an event listener to any key pressed
	searchInput.addEventListener("keyup", function (e) {
		var text = e.target.value;
		var options = select_tag.options;
		for (var i = 0; i < options.length; i++) {
			var option = options[i]; 
			var optionText = option.text; 
			// lowercase comparison for case-insensitivity
			var lowerOptionText = optionText.toLowerCase();
			var lowerText = text.toLowerCase(); 
			var regex = new RegExp("^" + text, "i");
			var match = optionText.match(regex); 
			var contains = lowerOptionText.indexOf(lowerText) != -1;

			// enabled / disbaled option matched to text
			option.disabled = match || contains ? false: true ;
		}
	});
}


// create a select tag with only first word group 
function add_first_word_filter(select_id, callback){

	// get the select tag & hide it
	var select_tag = document.getElementById(select_id);
	select_tag.style.display = 'none';

	// create a selects tags
	var firstSearch = document.createElement('select');
	var secondSearch = document.createElement('select');
	select_tag.parentElement.insertBefore(firstSearch, select_tag);
	select_tag.parentElement.insertBefore(secondSearch, select_tag);

	// get values of this select tag, group them and push them into `words`
	var options = select_tag.options;
	var words = [];
	for (var i = 0; i < options.length; i++) {
		// get the first word of the option text
		var option = options[i];
		var optionTextWords = option.text.split(" ");
		var optionTextFirstWord = optionTextWords[0];
		// push it in the array if not exists
		if( words.indexOf(optionTextFirstWord) == -1 ){
			words.push(optionTextFirstWord);
		}
	}

	// insert words as option in firstSearch select
	for (var i = 0; i < words.length; i++) {
		var option = document.createElement('option');
		option.textContent = words[i];
		option.value = words[i];
		firstSearch.appendChild(option);
	}

	// add an event listener to any key pressed
	firstSearch.addEventListener("change", function (e) {
		// erase old input
		secondSearch.innerHTML = "" ;
		// get the selected text
		var text = e.target.value;
		// loop on option, if option have the same text, we insert in in the second search
		for (var i = 0; i < options.length; i++){
			var option = options[i];
			var optionText = option.text;
			if( optionText.indexOf(text) != -1 ){
				// delete first word of the option text
				var secondText = optionText.substr(optionText.indexOf(" ") + 1);
				// create it & insert in on secondSearch
				var secondOption = document.createElement('option');
				secondOption.textContent = secondText;
				secondOption.value = secondText;
				secondSearch.appendChild(secondOption);
			}
		}
	});

	// listen second search to update main select value
	secondSearch.addEventListener("change", function (e) {
		// build the complete value
		var firstWord = firstSearch.options[firstSearch.selectedIndex].value;
		var secondPart = e.target.value;
		var result = firstWord + " " + secondPart ;

		select_tag.value = result ;

		// if a true value is selected
		

		if( select_tag.options[select_tag.selectedIndex].value ){

			console.log(select_tag.options[select_tag.selectedIndex].value);
			// if callback is set, call him
			if(typeof callback != 'undefined'  ){
				callback()
			}	
		}


		
		console.log(result);

	});

}