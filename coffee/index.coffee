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

	$('.landing').stellar
		horizontalScrolling: false, verticalOffset: 40, responsive: true

	$('.body').stellar
		horizontalScrolling: false, verticalOffset: 40, responsive: true

	$('.menu-item').hover(
		-> TweenLite.to $(this).children(".menu-logo"), 0.3, 
		 		scaleX:1.08,scaleY:1.08, ease:"Power4.easeOut"
		-> TweenLite.to $(this).children(".menu-logo"), 0.2, 
		 		scaleX:1,scaleY:1
	)

	$('.nonCurr').hover(
		->	TweenLite.to $(this).children(".menu-item"), 0.3, 
		 		scaleX:1.08,scaleY:1.08, ease:"Power4.easeOut"
		-> 	TweenLite.to $(this).children(".menu-item"), 0.2, 
	 			scaleX:1,scaleY:1
	)
