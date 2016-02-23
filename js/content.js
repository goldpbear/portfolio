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
						"name": "Augury",
						"thumbnail": "img/auguryIcon.png",
						"mainImgs": ["img/augury1.png", "img/augury2.png", "img/augury3.png"],
						"blurb": "Built on several years of research, Augury is a web application that helps designers understand the aesthetic appeal of their work.",
						"fullDescription": "Augury is a single-page AngularJS web application based on research into web users' aesthetic preferences.<br /><br /><a href='https://homes.cs.washington.edu/~reinecke/Publications_files/Reinecke_CHI2013.pdf'>Research suggests</a> that visual complexity and colorfulness strongly affect aesthetic appeal. Augury determines the complexity and colorfulness of user-submitted images, then provides appeal ratings by country.<br><br>I developed all aspects of the application, except the low-level Java code that analyzes image features.",
						"role": ["Front-end development", "Back-end development", "Graphic design", "Design research"],
						"collaborators": [["Katharina Reinecke", "https://homes.cs.washington.edu/~reinecke/"]],
						"tags": ["Web development", "Web design", "JavaScript", "AngularJS", "Java", "D3.js", "Illustrator"],
						"link": ["Try the demo!", "http://ec2-52-88-229-218.us-west-2.compute.amazonaws.com:8080/webapp/web/app.html"]
					},
					{
						"name": "LabintheWild",
						"thumbnail": "img/LITWIcon.png",
						"mainImgs": ["img/LITW1.png", "img/LITW2.png", "img/LITW3.png"],
						"blurb": "LabintheWild is a platform for conducting large-scale experiments in the fields of psychology and human-computer interaction.",
						"fullDescription": "LabintheWild is a collection of interactive experiments that leverage social comparisons among participants to generate interest. LabintheWild draws thousands of participants from all over the world, helping to make science <a href='http://lessweird.org' target='_blank'>less WEIRD!</a><br /><br />During my time with LabinthWild, I maintained the site itself, developed and launched several experiments, oversaw localization of the site's content into four languages, analyzed data from past experiments, and worked with team members to develop their own experiments.",
						"role": ["Front-end development", "Back-end development", "Graphic design", "Data analysis"],
						"collaborators": [["Katharina Reinecke", "https://homes.cs.washington.edu/~reinecke/"], ["Carol Moser", "https://www.linkedin.com/in/carol-moser-50b0b4a"], ["Yan Chen", "https://www.si.umich.edu/people/yan-chen-0"], ["Nick Strayer", "http://nickstrayer.me/"]],
						"tags": ["Web development", "Web design", "JavaScript", "jQuery", "D3.js", "PHP", "SQL", "API design", "R"],
						"link": ["Visit LabintheWild", "http://www.labinthewild.org"]
					},
					{
						"name": "Hey Duwamish!",
						"thumbnail": "img/duwamishIcon.png",
						"mainImgs": ["img/duwamish1.png"],
						"blurb": "I recently started contributing to this open source effort to track and visualize data about Seattle's Lower Duwamish Waterway.",
						"fullDescription": "Hey Duwamish! is an interactive map that tracks environmental information about the Lower Duwamish Waterway.<br><br>I began collaborating on this open source project in November, 2015, working primarily on front-end features.",
						"role": ["Front-end development"],
						"collaborators": [["Luke Swart", "https://www.github.com/lukeswart"], ["Jacob Caggiano", "https://twitter.com/futuresoup"]],
						"tags": ["Web development", "JavaScript", "MapBox"],
						"link": ["Visit Hey Duwamish!", "http://www.heyduwamish.org"]
					},
					{
						"name": "NEXCAP",
						"thumbnail": "img/NEXCAPIcon.png",
						"mainImgs": ["img/NEXCAP1.png", "img/NEXCAP2.png", "img/NEXCAP3.png", "img/NEXCAP4.png"],
						"blurb": "NEXCAP is a catalog of vacant industrial properties located throughout the country.",
						"fullDescription": "The National Excess Manufacturing Capacity Catalog (NEXCAP) is a searchable collection of vacant industrial properties throughout the country.<br><br>NEXCAP provides industrial site selection specialists with detailed information about available properties in both print and digital form.<br><br>On this project, I designed print and web content, researched user needs by interviewing site selection specialists, and summarized research findings in a report used by the rest of the team.<br><br>I presented an overview of the projcet to SEMCOG, the Southeast Michigan Council of Governments (bottom picture).",
						"role": ["Design research", "Print design and layout", "Graphic design", "Interaction design"],
						"collaborators": [["Greg Lawrence", "https://www.linkedin.com/in/greg-lawrence-1611b965"]],
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
						"collaborators": [["Andrew Ku", "https://www.linkedin.com/in/andrewisku"], ["Fan Zhang", "https://www.linkedin.com/in/fanzhangux"]],
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
						"collaborators": [["Steven Hoelscher", "https://www.linkedin.com/in/stevenhoelscher"], ["Greg Lawrence", "https://www.linkedin.com/in/greg-lawrence-1611b965"]],
						"tags": ["Python", "Whoosh", "Data wrangling"],
						"link": ["Congressional bills search engine", "http://billsearchengine.herokuapp.com/"]
					},
					{
						"name": "Society 2030",
						"thumbnail": "img/societyIcon.png",
						"mainImgs": ["img/society1.png"],
						"blurb": "The Society 2030 project synthesized academic research about the changing demographic face of the country.",
						"fullDescription": "What will society look like in 2030? I designed a set of graphics synthesizing research from across the University of Michigan to answer this question. The graphics were used in presentations to corporate partners of the Society 2030 project.",
						"role": ["Graphic design"],
						"collaborators": [["Justin Dicenso", "https://www.linkedin.com/in/justin-dicenso-28376a46"]],
						"tags": ["Graphic design", "Illustrator"],
						"link": null
					},
					{
						"name": "Obesity map",
						"template": "map_tmpl",
						"thumbnail": "img/mapIcon.png",
						"blurb": "An interactive visualization of county-by-county obesity data, designed to enable easy comparisons over time.",
						"tags": ["D3.js", "JavaScript"],
					},	
					{
						"name": "Delayed",
						"thumbnail": "img/delayedIcon.png",
						"mainImgs": ["img/delayed1.png", "img/delayed2.png"],
						"blurb": "An exploratory data analysis class project examined airport delays.",
						"fullDescription": "For a class on exploratory data analysis techniques, I dug into raw airport delay data from the Bureau of Transportation Statistics.<br><br>I acquired the raw data, cleaned it, explored trends using R, and graphed results using the ggplot2 package.<br><br>I learned to avoid Newark airport in July.",
						"role": ["Data munging", "Data analysis", "Data visualization"],
						"collaborators": null,
						"tags": ["Python", "R", "ggplot2"],
						"link": null
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