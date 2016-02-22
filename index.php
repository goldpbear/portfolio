<!DOCTYPE html>

<html>
	<head>
		<title>Trevor Croxson | Web developer</title>
		<meta charset="utf-8">
	</head>

	<body>
		<div class="container" id="main-content">
			<div class="col-md-2" id="left-gutter">
				<div id="main-menu">
					<div id="menu-home" class="menu-item active">Home</div>
					<div id="menu-projects" class="menu-item inactive">Projects</div>
					<div id="menu-resume" class="menu-item inactive">Resume</div>
					<div id="menu-contact" class="menu-item inactive">Contact</div>
					<a href="https://github.com/goldpbear"><span class="octicon-mark-github icon-link"></span></a>
					<a href="https://www.linkedin.com/in/trevorcroxson" target="_blank"><img src="img/linkedin_icon.svg" class="icon-link" /></a>
				</div>
			</div>
			<div class="col-md-10" id="center">
				<img id="header-img-main" width="950px" src="img/bear_sliver_long.png" class="header-img visible" />
				<!--<img id="header-img-developer" width="760px" src="img/developerBear.png" class="header-img hidden" />
				<img id="header-img-seattle" width="760px" src="img/seattleBear.png" class="header-img hidden" />
				<img id="header-img-graduate" width="760px" src="img/graduateBear.png" class="header-img hidden" />
				<img id="header-img-bears" width="760px" src="img/bearsAreTheBest.png" class="header-img hidden" />
				<img id="header-img-farmer" width="760px" src="img/farmerBear.png" class="header-img hidden" />
				<img id="header-img-youth" width="760px" src="img/youthBear.png" class="header-img hidden" />
				<img id="header-img-urban" width="760px" src="img/urbanBear.png" class="header-img hidden" />
				<img id="header-img-coro" width="760px" src="img/coroBear.png" class="header-img hidden" />-->
				<div id="content"></div>
				<div id="footer">
					<img src="img/footer_long.png" width="950px" height="45px"/>
					<div id="copyright">
						<p>&copy 2016 Trevor Croxson  •  Header image courtesy Jim Croxson</p>
					</div>
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