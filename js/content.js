var content = 
{	
	"root": {
		"template": null,
		"children": {
			"home": {
				"template": "homepage_tmpl",
				"data": {},
				"children": null
					},
			"projects": {
				"template": "projects_menu_tmpl",
				// assume that if "data" is an array, children of this node will be numbered to correspond to array indices.
				"data": [
					{
						"name": "Mapseed",
						"thumbnail": "img/duwamishIcon.png",
						"mainImgs": ["img/duwamish2.png", "img/pboakland1.png"],
						"blurb": "Mapseed is a Seattle-area startup focused on building solutions for community map-based data gathering.",
						"fullDescription": "Mapseed's goal is to make it simple to deploy custom maps suitable for gathering data and telling stories. Use cases include environmental groups looking to gather data about cleanup efforts, and classroom teachers looking to engage students in community issues.<br><br>Based on an open source project called Shareabouts, we run a stack cosisting of PostgreSQL, Django, and Backbone.js.<br><br>I have worked on several pieces of front-end functionality, including a map story mode and a content editor.",
						"role": ["Front-end development", "Back-end development", "UI design"],
						"collaborators": null,
						"tags": ["Web development", "JavaScript", "Python", "SASS", "Django", "Leaflet", "backbone.js"],
						"link": ["Mapseed", "http://mapseed.org", "Oakland Participatory Budgeting", "http://pboakland.org", "Hey Duwamish!", "http://www.heyduwamish.org"]
					},
					{
						"name": "LabintheWild API development",
						"thumbnail": "img/LITWIcon.png",
						"mainImgs": ["img/LITW1.png"],
						"blurb": "LabintheWild is a platform for conducting large-scale experiments in the fields of psychology and human-computer interaction.",
						"fullDescription": "LabintheWild hosts interactive behavioral studies that leverage social comparisons among participants to generate interest. LabintheWild draws thousands of participants from all over the world, helping to make science <a href='http://lessweird.org' target='_blank'>less WEIRD!</a><br /><br />In addition to designing and implementing several studies for LabintheWild, I recently completed a comprehensive restructuring of the site's code repository and server infrastructure, resulting in better control over the code put into production.<br><br>I also completed the design and development of a JavaScript-based library that simplifies basic study tasks, like creating forms and tracking participants, and the design and implementation of a PHP-based RESTful API intended to simplify data collection. These tools have led to less code duplication and faster development times.",
						"role": ["Front-end development", "Back-end development", "Graphic design", "Data analysis"],
						"collaborators": null,
						"tags": ["Web development", "Web design", "JavaScript", "jQuery", "D3.js", "PHP", "SQL"],
						"link": ["LabintheWild", "http://www.labinthewild.org", "Sample study built with new library", "http://www.labinthewild.org/studies/computer-behaviors"]
					},
					{
						"name": "Augury",
						"thumbnail": "img/auguryIcon.png",
						"mainImgs": ["img/augury1.png", "img/augury2.png", "img/augury3.png"],
						"blurb": "Built on several years of research, Augury is a web application that helps designers understand the aesthetic appeal of their work.",
						"fullDescription": "Augury is a single-page AngularJS web application based on research into web users' aesthetic preferences.<br /><br /><a href='https://homes.cs.washington.edu/~reinecke/Publications_files/Reinecke_CHI2013.pdf'>Research suggests</a> that visual complexity and colorfulness strongly affect aesthetic appeal. Augury determines the complexity and colorfulness of user-submitted images, then provides appeal ratings by country.<br><br>For this project, I created an appealing visual design, built an AngularJS single-page web application, and integrated existing Java-based image processing code.",
						"role": ["Front-end development", "Back-end development", "Graphic design", "Design research"],
						"collaborators": null,
						"tags": ["Web development", "Web design", "JavaScript", "AngularJS", "Java", "D3.js", "Illustrator"],
						"link": ["Try the demo!", "augury.labinthewild.org"]
					},
					{
						"name": "Fasterbids Data Dashboard",
						"thumbnail": "img/fb_DataGraph1.png",
						"mainImgs": ["img/fb_DataGraph.png", "img/fb_DataGraph1.png", "img/fb_DataGraph2.png"],
						"blurb": "The Fasterbids data dashboard makes it easy for Fasterbids customers to compare and summarize sales data.",
						"fullDescription": "Fasterbids.com is a Seattle-area startup that streamlines the process of bidding for construction materials.<br><br>On this project, I worked with a team to design and build an internal data dashboard that Fasterbids customers can use to easily summarize and compare sales figures.<br><br>I worked extensively with the D3 data visualization library, including implementation of an algorithm to correctly distribute labels on pie charts with dense data.",
						"role": ["Front-end development"],
						"collaborators": null,
						"tags": ["Web development", "Web design", "JavaScript", "D3.js", "AngularJS"],
						"link": null
					},
					{
						"name": "NEXCAP",
						"thumbnail": "img/NEXCAPIcon.png",
						"mainImgs": ["img/NEXCAP1.png", "img/NEXCAP2.png", "img/NEXCAP4.png"],
						"blurb": "NEXCAP is a catalog of vacant industrial properties located throughout the country.",
						"fullDescription": "The National Excess Manufacturing Capacity Catalog (NEXCAP) is a searchable collection of vacant industrial properties throughout the country.<br><br>NEXCAP provides industrial site selection specialists with detailed information about available properties in both print and digital form.<br><br>On this project, I designed print and web content, researched user needs by interviewing site selection specialists, and summarized research findings in a report used by the rest of the team.<br><br>I presented an overview of the projcet to SEMCOG, the Southeast Michigan Council of Governments (bottom picture).",
						"role": ["Design research", "Print design and layout", "Graphic design", "Interaction design"],
						"collaborators": null,
						"tags": ["Graphic design", "Interaction design", "Design research", "Illustrator", "InDesign"],
						"link": ["The NEXCAP catalog", "http://www.edastayusa.org"]
					},
					{
						"name": "Jackson Property Report",
						"thumbnail": "img/jacksonIcon.png",
						"mainImgs": ["img/jackson1.png", "img/jackson2.png"],
						"blurb": "The Jackson Property Report maps derelict properties in the city of Jackson, MI.<br><br>",
						"fullDescription": "For a class in citizen interaction design, I worked with a design team and stakeholders at the city of Jackson, MI to research and design an interactive map of condemned properties. The map and accompanying graphics were deisgned to help citizens of the city understand the property demolition process.",
						"role": ["Design research", "Graphic design", "Interaction design"],
						"collaborators": null,
						"tags": ["Graphic design", "Interaction design", "Design research", "Illustrator"],
						"link": null
					},
					{
						"name": "Bills Search Engine",
						"thumbnail": "img/billIcon.png",
						"mainImgs": ["img/bill_search_engine2.png", "img/bill_search_engine1.png"],
						"blurb": "The bills search engine indexes twenty years' worth of bills proposed in Congress, allowing users to search over several fields.",
						"fullDescription": "Built for a class project, this vertical search engine indexes the full text of bills proposed in Congress between 1993 and 2013&#8212;over 30,000 documents.<br /><br />Our team acquired the raw bill text (thanks to <a href='https://www.govtrack.us'>GovTrack</a>), created and refined a search index, and developed a front-end interface for performing searches.",
						"role": ["Data exploration and preparation", "Back-end development"],
						"collaborators": null,
						"tags": ["Python", "Whoosh", "Data wrangling"],
						"link": ["Congressional bills search engine", "http://billsearchengine.herokuapp.com/"]
					},
					{
						"name": "Obesity map",
						"template": "map_tmpl",
						"thumbnail": "img/mapIcon.png",
						"blurb": "An interactive visualization of county-by-county obesity data, designed to enable easy comparisons over time.",
						"tags": ["D3.js", "JavaScript"],
					}
				],
				"children": {
					"_inhereted": {
						"template": "focus_project_tmpl",
						"children": null
					}	
				}
			}, 
			"resume": {
				"template": "resume_tmpl",
				"children": null,
				"data": {
					"title": "Trevor H. Croxson",
					"contact": "tcroxson@gmail.com",
					"sections": {
						"professional_experience": [
							{
								"position": "Web Developer, Researcher",
								"organization": "The University of Washington, LabintheWild",
								"location": "Ann Arbor, MI and Seattle, WA",
								"dates": "March 2014&#8212;December 2015",
								"roles": [
										"Designed and developed browser-based experiments to study cultural differences in online behavior",
										"Maintained labinthewild.org, our lab’s online experimental platform",
										"Assisted collaborating researchers with experiment implementation",
										"Analyzed and summarized research data",
										"Co-supervised undergraduate research interns"
									]
							},
							{
								"position": "Designer",
								"organization": "Institute for Social Research",
								"location": "Ann Arbor, MI",
								"dates": "August 2013&#8212;December 2013",
								"roles": [
										"Designed visualizations synthesizing social research from multiple departments at the University of Michigan",
										"Met regularly with client to improve design and achieve project goals"
									]
							},
							{
								"position": "Designer, Research Assistant",
								"organization": "Institute for Research on Labor, Employment, and the Economy",
								"location": "Ann Arbor, MI",
								"dates": "January 2013&#8212;December 2013",
								"roles": [
										"Designed print and digital interfaces for a project connecting foreign investment to underused manufacturing space",
										"Researched user needs by conducting usability testing, competitive and heuristic analyses, and expert interviews",
										"Documented research findings in reports used by the entire project team and by researchers on related projects"
									]
							},
							{
								"position": "Production Assistant",
								"organization": "Andy Garcia Productions",
								"location": "Madison, WI",
								"dates": "January 2012&#8212;August 2012",
								"roles": [
										"Wrote scripts, proposals, and other content for corporate clients",
										"Assisted creative team on video shoots and with graphic production"
									]
							},
							{
								"position": "Fellow",
								"organization": "The Coro Center for Civic Leadership Pittsburgh",
								"location": "Pittsburgh, PA",
								"dates": "August 2010&#8212;May 2011",
								"roles": [
										"The Coro Fellows Program in Public Affairs is a nine-month experiential leadership training program. During my Coro fellowship, I consulted with the Housing Authority of the City of Pittsburgh, Travelers Aid Society of Pittsburgh, Judith Kelly + Associates, and the Brew House Association. I worked with the other Fellows to design a nine-month civic engagement project that encouraged Allegheny County citizens to pursue grassroots local government reform."
									]
							},
							{
								"position": "Assistant Project Manager, Youth Instructor",
								"organization": "Braddock Redux",
								"location": "Braddock, PA",
								"dates": "October 2008&#8212;May 2010",
								"roles": [
										"Co-managed community development projects, including a youth media engagement initiative and community newspaper project",
										"Wrote grants and project proposals for community development projects, raising a total of $112,000",
										"Mentored thirty at-risk youth in an after school work skills program. Working with other Youth Project staff, I launched a monthly newsletter and video journalism series, featuring stories written and produced by youth, to address the lack of a local news source in the community. I engaged youth in story development, reporting, writing, and design of the newsletter, encouraging engagement with local issues and leaders, including the Mayor, borough council members, business owners, and nonprofit directors. I expanded the Youth Project's presence in the community by reaching out to local organizations and leaders."
									]
							}
						],
						"education": [
							{
								"institution": "The University of Michigan",
								"degree": "MS, Information Science",
								"dates": "2012&#8212;2014",
								"description": "Specialized in human-computer interaction and information analysis and retrieval",
								"other": "Ida Fine merit scholarship recipient"
							},
							{
								"institution": "The University of Chicago",
								"degree": "BA, English Language and Literature",
								"dates": "2002&#8212;2006",
								"description": null,
								"other": "Graduated with general and departmental honors"
							}
						],
						"skills": {
							"tags": ["JavaScript", "PHP", "SQL", "AngularJS", "Java", "Python", "Data analysis", "Data munging", "Professional writing"]
						},
						"interests": ["Distance running", "Tabletop games", "Violin"]
					}
				}
			},
			"contact": {
				"children": null,
				"template": "contact_tmpl",
				"data": {
					"header": "Send me a message! Include your email if you want me to get back to you.",
					"message_success": "Message received! Thanks for your interest.",
					"message_failure": "Message failed. Try sending again."
				}
			}
		}
	}
}