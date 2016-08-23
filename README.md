Select Option Filter
====================

**javascript** filters for `select` html tag without Jquery dependencies.

*inspired from this [Stackoverflow question](http://stackoverflow.com/questions/27713621/how-search-into-options-of-select-tag-html-without-plugin)*

Usage
-----

### Simple search

Add simply an `input` tag before to lock all non-match value in the `section tag`

~~~html
<select id="combobox">
	<option value="C++">C++</option>
	<option value="JavaScript">JavaScript</option>
	<option value="PHP">PHP</option>
	<option value="Python">Python</option>
	<option value="Ruby">Ruby</option>
</select>

<script src="selectOptionFilter.js"></script>
<script type="text/javascript">
		add_filter("combobox");
</script>
~~~

### Two section search

Extract the first word of all `option` to group them into a primary section. The second section show all possibles choices.

~~~html
<select id="combobox">
	<option value="C++">C++</option>
	<option value="JavaScript">JavaScript</option>
	<option value="PHP">PHP</option>
	<option value="Python">Python</option>
	<option value="Ruby">Ruby</option>
</select>

<script src="selectOptionFilter.js"></script>
<script type="text/javascript">
	add_first_word_filter("fw_combobox", function(){
		console.log('value applied');
	});
</script>
~~~


Author
------

[Rousseau Alexandre][madeindjs]

License
-------

[MIT](https://opensource.org/licenses/MIT)
[madeindjs]: https://github.com/madeindjs/