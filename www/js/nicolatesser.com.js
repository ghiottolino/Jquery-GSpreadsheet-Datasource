$(document).ready(function(){

	var url = location.href;
	
		
	var level =  "./";
	
	if ((url.endsWith("/projects/jquery.gspreadsheetdatasource"))
			||(url.endsWith("/projects/jquery.gspreadsheetdatasource/"))
			||(url.endsWith("/projects/jquery.gspreadsheetdatasource/index.html")))
	{
		var level =  "./../../";		
	}
	
	if ((url.endsWith("/bookmarklets"))
			||(url.endsWith("/bookmarklets/"))
			||(url.endsWith("/bookmarklets/index.html")))
	{
		var level =  "./../";		
	}
	
	
	
	print_bio(level);
	print_header();
	print_navigation(level);
	print_footer();


	// functions


	function print_navigation(level)
	{
		$("#wrapper").prepend("<nav><!-- top nav --><div class=\"menu\"><ul>"+
				"<li><a href=\""+level+"blog.html\">Blog</a></li>"+
				"<li><a href=\""+level+"tweets.html\">Tweets</a></li>"+
				"<li><a href=\""+level+"projects.html\">Projects</a></li>"+
				"<li><a href=\""+level+"cv.html\">CV</a></li>"+
				"<li><a href=\""+level+"contacts.html\">Contacts</a></li>"+
				"</ul></div></nav><!-- end of top nav -->");
	}

	function print_header()
	{
		$("#wrapper").prepend("<header><!-- header --><h1><a href=\"./\">Nicola Tesser</a></h1></header>");
	}

	function print_footer()
	{
		$("#wrapper").append("<footer><section id=\"footer-area\"><section id=\"footer-outer-block\"><!--<aside class=\"footer-segment\"><h4>section</h4><ul><li><a href=\"#\">one linkylink</a></li></ul></aside>--><!-- end of #first footer segment --></section><!-- end of footer-outer-block --></section><!-- end of footer-area --></footer>");
		 print_analytics();
	}
	
	function print_analytics()
	{
		  var _gaq = _gaq || [];
		  _gaq.push(['_setAccount', 'UA-21577651-1']);
		  _gaq.push(['_trackPageview']);

		  (function() {
		    var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
		    ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
		    var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
		  })();
	}

	function print_bio(level)
	{
		
		$.ajax({
			type: "GET",
			url: level+"bio.html",
			success: function(biohtmlpage) {
				var biopage = $(biohtmlpage);
				var bio = biopage.find("#bio");			
				$("#bio").html(bio);
			}
		});
	}

});

String.prototype.endsWith = function(str)
{return (this.match(str+"$")==str)}