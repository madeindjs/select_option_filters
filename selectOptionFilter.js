function add_filter(select_id) {
	searchBox = document.querySelector("#searchbox");
	select_tag = document.getElementById(select_id);
	
	searchBox.addEventListener("keyup", function (e) {
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
			searchBox.selectedIndex = 0;
		}
	});
}

