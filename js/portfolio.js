
(function(exports) {
	// Simple JavaScript Templating
	// John Resig - http://ejohn.org/ - MIT Licensed
	var results = document.getElementById("content");
	var cache = {},
  	tmpl = function tmpl(str, data){

    	// Figure out if we're getting a template, or if we need to
    	// load the template - and be sure to cache the result.
    	console.log(str);
	    var fn = !/\W/.test(str) ? cache[str] = cache[str] || tmpl(document.getElementById(str).innerHTML) :
	     
	      // Generate a reusable function that will serve as a template
	      // generator (and which will be cached).
	      new Function("obj",
	        "var p=[],print=function(){p.push.apply(p,arguments);};" +
	       
	        // Introduce the data as local variables using with(){}
	        "with(obj){p.push('" +
	       
	        // Convert the template into pure JavaScript
	        str
	          .replace(/[\r\t\n]/g, " ")
	          .split("<%").join("\t")
	          .replace(/((^|%>)[^\t]*)'/g, "$1\r")
	          .replace(/\t=(.*?)%>/g, "',$1,'")
	          .split("\t").join("');")
	          .split("%>").join("p.push('")
	          .split("\r").join("\\'")
	      + "');}return p.join('');");

	    // Provide some basic currying to the user
	    return data ? fn( data ) : fn;
	}

	var nav_history = ["home"];
	var current_page = "";
	var back_pressed = false;
	var routeEval = function() {
		var route = window.location.hash
			.replace(/\/$/g, "")
			.replace(/^#/g, "")
			.split("/");

		if (route.length == 1 && route[0] == "") {
			route = ["home"];
		}

		// traverse the content object using the specified path
		var fetchedContent = content.root;
		for (var j = 0; j < route.length; j++) {
			if (fetchedContent && fetchedContent.children) {
				fetchedContent = fetchedContent.children[route[j]];
			} else {
				fetchedContent = undefined;
			}
		}

		if (fetchedContent) {
			// optionally override the default template
			results.innerHTML = tmpl((fetchedContent.data.template || fetchedContent.template), fetchedContent.data);
			//attachHomepageListeners();
			highlightMenu(route[0]);
		} else {
			results.innerHTML = tmpl("404_tmpl", {});
			highlightMenu();
		}

		var back_button = document.getElementsByClassName("back_button")[0];
		if (back_button) {
			back_button.onclick = function() {
				back_pressed = true;
				window.location.hash = nav_history.pop();
			}
		}

		window.scrollTo(0,0);
	}	

	arrayIn = function(el, array) {
		for (var i = 0; i < array.length; i++) {
			if (array[i].id == el) return true;
		}
		return false;
	}

	resetMenu = function(pageId, menuItems) {
		for (var i = 0; i < menuItems.length; i++) {
			if (menuItems[i].id != pageId) {
				menuItems[i].className = "menu-item inactive";
			}
		}
	}

	highlightMenu = function(page) {
		var page = "menu-" + page;
		var menuItems = document.getElementsByClassName("menu-item");
		for (var i = 0; i < menuItems.length; i++) {
			if (menuItems[i].id == page) {
				menuItems[i].className = "menu-item active";
			} else {
				menuItems[i].className = "menu-item inactive";
			}
		}
	}

	attachHomepageListeners = function() {
		var surprises = document.getElementsByClassName("hoverable-surprise");
		for (var i = 0; i < surprises.length; i++) {
			surprises[i].onmouseover = function() {
				var id = "header-img-" + this.id;
				document.getElementById("header-img-main").className = "header-img hidden";
				document.getElementById(id).className = "header-img visible";
			}
			surprises[i].onmouseout = function() {
				var id = "header-img-" + this.id;
				document.getElementById("header-img-main").className = "header-img visible";
				document.getElementById(id).className = "header-img hidden";
			}
		}
	}

	createNavStructure = function() {
		var fleshOut = function(node) {
			// if there are no children, return immediately
			if (!node.children) return node;
			for (var child in node.children) {
				if (child == "_inhereted") {
					for (var i = 0; i < node.data.length; i++) {
						node.children[i] = {
							"data": node.data[i],
							"template": node.children[child].template,
							"children": node.children[child].children
						}
					}
				}
			}
			return node;
		}

		for (var node in content.root.children) {
			content.root.children[node] = fleshOut(content.root.children[node]);
		}
	}

	exports.loadScript = function(url, callback) {
	    // Adding the script tag to the head as suggested before
	    var head = document.getElementsByTagName('head')[0];
	    var script = document.createElement('script');
	    script.type = 'text/javascript';
	    script.src = url;

	    // Then bind the event to the callback function.
	    // There are several events for cross browser compatibility.
	    script.onreadystatechange = callback;
	    script.onload = callback;

	    // Fire the loading
	    head.appendChild(script);
	}

	exports.init = function() {
		current_page = window.location.hash;
		createNavStructure();
		routeEval();
		window.onhashchange = function() {
			if (!back_pressed) {
				nav_history.push(current_page);
			}
			back_pressed = false;
			current_page = window.location.hash;
			routeEval();
		}

		var menuLinks = document.getElementsByClassName("menu-item");
		for (var i = 0; i < menuLinks.length; i++) {
			menuLinks[i].onclick = function() {
				window.location.hash = "#" + this.id.split("-")[1];
			}
		}
	}

	exports.submitComments = function() {
		var request = new XMLHttpRequest();
		request.onload = function() {
			var messageHtml = document.getElementById("contact_message");
			if (request.status >= 200 && request.status < 400) {
				document.getElementById("comments_text").value = "";
				document.getElementById("comments_email").value = "";
				messageHtml.innerHTML = content.root.children.contact.data.message_success;
				messageHtml.className = "message_success";
			} else {
				messageHtml.innerHTML = content.root.children.contact.data.message_failure;
				messageHtml.className = "message_failure";
			}
		};
		var data = "comments=" + document.getElementById("comments_text").value + "&email=" + document.getElementById("comments_email").value;
		request.open("POST", "send_email.php", true);
		request.setRequestHeader("Content-Type", "application/x-www-form-urlencoded; charset=UTF-8");
		request.send(data);
	}
})(this.portfolio = {});

window.onload = portfolio.init;