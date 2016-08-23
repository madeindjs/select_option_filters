// simple filter with regex system
function add_filter(select_id, placeholder ) {

	// set default values
	placeholder = typeof placeholder !== 'undefined' ? placeholder : "Search into theses options";

	// get the select tag
	select_tag = document.getElementById(select_id);

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
function add_first_word_filter(select_id){

	// get the select tag
	select_tag = document.getElementById(select_id);

	// create a simple input and insert just before the select tag
	var searchInput = document.createElement('select');
	select_tag.parentElement.insertBefore(searchInput, select_tag);

}