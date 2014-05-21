ngRightClickBinder
==================

This creates a simple directive in angular js that binds the execution of a function to the context menu event (i.e Right Click) on an element.


This is just a basic style to make the div more visible
<pre>
.justbasicstyle{
	height: 200px;
	width: 130px;
	background: #efefef;
	border: 1px solid #999;
	text-align: center;

}
</pre>

To use the directive, just add the attribute on-right-click attribute to the element.

``` html
<div class'justbasicstyle' on-right-click="screamOut()">
	Right Click Me
</div>
```