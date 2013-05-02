$(document).ready $ ->

	$(document).foundation();    
	
	console.log "index.js loaded"
	#Fittext usage
	$('.header span').fitText 1.0,
		maxFontSize:'300px', minFontSize:'50px'

	$('.tech-logo, .misc-skill').each ->
		imageName = $(this).attr 'image' 
		$(this).css background: 'url(img/'+imageName+')'

	$('.experience').each ->
		imageName = $(this).attr 'image' 
		experience = $(this).attr 'experience'
		$(this).css background: 'url(img/'+imageName+') no-repeat 18px 13px'
		$(this).html(experience)