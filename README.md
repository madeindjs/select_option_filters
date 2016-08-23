Select Option Filter
====================

A **javascript** filter for `option` in `select` html tag without Jquery dependencies.

> inspired from this [Stackoverflow question](http://stackoverflow.com/questions/27713621/how-search-into-options-of-select-tag-html-without-plugin)

Usage
-----

~~~javascript
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


Author
------

[Rousseau Alexandre][madeindjs]

License
-------

[MIT](https://opensource.org/licenses/MIT)
[madeindjs]: https://github.com/madeindjs/