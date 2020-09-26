function getTime(){
	var timePrint;
	var date = new Date(Date.now());

	if (date.getHours()>= 6 && date.getHours() < 12) {
		timePrint = "☕ Good morning";
	} else if (date.getHours() >= 12 && date.getHours() < 18) {
		timePrint = "😊 Good afternoon";
	} else if (date.getHours() >= 18 && date.getHours() < 22) {
		timePrint = "🍸 Good evening";
	} else if (date.getHours() >= 22 && date.getHours() < 6) {
		timePrint = "🌚 Good night";
	} else {
		timePrint = "Hello ! 😊"
	}

	document.getElementById("getTime").innerHTML = timePrint;
}

			
var allElements = document.getElementById("all")
var caseStudies = document.getElementById("case-studies");
var caseStudiesItems = document.getElementById("case-studies-items");
var digitalExperiences = document.getElementById("digital-experience");
var digitalExperiencesItems = document.getElementById("digital-experience-items");
var webIntegration = document.getElementById("web-integration");
var webIntegrationItems = document.getElementById("web-integration-items");
var activeCategory = "all";

function onClick() {
	allElements.onclick = categoryDisplay('all');
	caseStudies.onclick = categoryDisplay('caseStudies');
	digitalExperiences.onclick = categoryDisplay('digitalExperiences');
	webIntegration.onclick = categoryDisplay('webIntegration');
}

function categoryDisplay(activeCategory){
	if (activeCategory = 'all') {
		caseStudiesItems.style.display="inline-block";
		digitalExperiencesItems.style.display="inline-block";
		webIntegrationItems.style.display="inline-block";
		console.log('all');

	} else if (activeCategory = 'caseStudies') {
		caseStudiesItems.style.display="inline-block";
		digitalExperiencesItems.style.display="none";
		webIntegrationItems.style.display="none";
		console.log('caseStudies');

	} else if (activeCategory = 'digitalExperiences') {
		caseStudiesItems.style.display="none";
		digitalExperiencesItems.style.display="inline-block";
		webIntegrationItems.style.display="none";
		console.log('digitalExperiences')


	} else if (activeCategory = 'webIntegration') {
		caseStudiesItems.style.display="none";
		digitalExperiencesItems.style.display="none";
		webIntegrationItems.style.display="inline-block";
		console.log('webIntegration')

	} else {
		activeCategory = 'all';
		console.log('else');
	}
}
