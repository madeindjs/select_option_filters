function add_filter(select_id) {

	// get the select tag
	select_tag = document.getElementById(select_id);

	// create a simple input and insert just before the select tag
	var searchInput = document.createElement('input');
	searchInput.placeholder='Search into theses options';
	select_tag.parentElement.insertBefore(searchInput, select_tag);

	searchInput.addEventListener("keyup", function (e) {
		var text = e.target.value; 
		var options = select_tag.options; 
		for (var i = 0; i < options.length; i++) {
			var option = options[i]; 
			var optionText = option.text; 
			var lowerOptionText = optionText.toLowerCase();
			var lowerText = text.toLowerCase(); 
			var regex = new RegExp("^" + text, "i");
			var match = optionText.match(regex); 
			var contains = lowerOptionText.indexOf(lowerText) != -1;
			if (match || contains) {
				option.selected = true;
				return;
			}
			searchInput.selectedIndex = 0;
		}
	});
}

