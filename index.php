<!DOCTYPE html>

<html>
	<head>
		<title>Trevor Croxson</title>
		<meta charset="utf-8">
		<meta name="viewport" content="width=device-width, initial-scale=1.0">
	</head>

	<body>
		<div class="container" id="main-content">
			<div class="col-md-12" id="center">
				<img id="header-img-main" src="img/bear_sliver_long.png" class="header-img visible" />
				<div id="left-gutter">
					<ul id="main-menu">
						<li id="menu-home" class="menu-item active">Home</li>
						<li id="menu-projects" class="menu-item inactive">Projects</li>
						<!-- <li id="menu-resume" class="menu-item inactive">Resume</li> -->
						<li id="menu-contact" class="menu-item inactive">Contact</li>
						<li class="menu-item"><a href="https://github.com/goldpbear" target="_blank"><span class="octicon-mark-github icon-link"></span></a></li>
						<li class="menu-item"><a href="https://www.linkedin.com/in/trevorcroxson" target="_blank"><img src="img/linkedin_icon.svg" class="icon-link" /></a></li>
					</ul>
				</div>
				<!--<img id="header-img-developer" width="760px" src="img/developerBear.png" class="header-img hidden" />
				<img id="header-img-seattle" width="760px" src="img/seattleBear.png" class="header-img hidden" />
				<img id="header-img-graduate" width="760px" src="img/graduateBear.png" class="header-img hidden" />
				<img id="header-img-bears" width="760px" src="img/bearsAreTheBest.png" class="header-img hidden" />
				<img id="header-img-farmer" width="760px" src="img/farmerBear.png" class="header-img hidden" />
				<img id="header-img-youth" width="760px" src="img/youthBear.png" class="header-img hidden" />
				<img id="header-img-urban" width="760px" src="img/urbanBear.png" class="header-img hidden" />
				<img id="header-img-coro" width="760px" src="img/coroBear.png" class="header-img hidden" />-->
				<div id="content"></div>
				<!-- <img src="img/footer_long.png" id="footer-img" /> -->
				<div id="footer">	
					&copy 2017 Trevor Croxson  •  Header image courtesy Jim Croxson
				</div>
			</div>
			
		</div>

		<!-- stylesheets -->
		<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css" integrity="sha384-1q8mTJOASx8j1Au+a5WDVnPi2lkFfwwEAa8hDDdjZlpLegxhjVME1fgjWPGmkzs7" crossorigin="anonymous">
		<link rel="stylesheet" href="css/stylesheet.css" />
		<link rel="stylesheet" href="css/map_styles.css" />

		<!-- scripts -->
		<script src="js/content.js" type="text/javascript"></script>
		<script src="js/portfolio.js" type="text/javascript"></script>
		<script src="js/d3.v3.js" type="text/javascript"></script>

		<!-- load templates -->
		<?php 
			$baseDir = "views/";
			$templates = scandir($baseDir);
			foreach ($templates as $template) {
				if (preg_match("/\.html$/", $template)) {
					include($baseDir . $template);
				}
			}
		?>
	</body>

</html>