searchBox = document.querySelector("#searchbox");
countries = document.querySelector("#combobox");
var when = "keyup"; //You can change this to keydown, keypress or change
searchBox.addEventListener("keyup", function (e) {
	var text = e.target.value; 
	var options = countries.options; 
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