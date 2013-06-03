$(document).ready $ ->

	browser = BrowserDetect.browser
	height = $('.page-overlay').height()
	# console.log height
	origTitle = document.title
	origURL = window.location.pathname
	currURL = origURL
	console.log origTitle + "    " + origURL
	# INITIAL HISTORY PUSH
	console.log "HEIght: " + $(window).height()
	$('.page-overlay').css({'height': $(window).height()})
	$('.container').css({'height': $(window).height()})
	if origURL == '/'
		$('.page-overlay').css({'top':$(window).height()})
		# $('.container').css({'overflow':'hidden'})
		data = $('.container').html()
	else
		data = $('.page-overlay').html()
	if browser!="Safari"
		History.pushState {
				title	: origTitle,
				url		: origURL,
				data	: $('.container').html()
			}, origTitle, origURL

		# HISTORY BINDER TO REGISTER BACK BUTTONS
		History.Adapter.bind window,'statechange', ->
			State = History.getState()
			console.log currURL
			exec = ->
				currURL = window.location.pathname
				updateContent State.data.data, State.data.title, State.data.url
			if (State.data.url == '/')
				console.log "going in"
				TweenLite.to $('.page-overlay'), 0.6,
					top: $(window).height() , ease:"Power2.easeOut"
			else if currURL == '/'
				console.log("executing")
				TweenLite.to $('.page-overlay'), 0.6,
					top: 0 , ease:"Power2.easeOut"
			else
				exec()

	$(document).foundation();

	#Fittext usage
	$('.header span').fitText 1.0,
		maxFontSize:'300px', minFontSize:'50px'

	Refresh();

	$('body').on 'mouseenter', '.menu-item', ->
		TweenLite.to $(this).children(".menu-logo"), 0.3,
			scaleX:1.08,scaleY:1.08, ease:"Power4.easeOut"
	$('body').on 'mouseleave', '.menu-item', ->
		TweenLite.to $(this).children(".menu-logo"), 0.2,
			scaleX:1,scaleY:1

	$('body').on 'mouseenter', '.nonCurr', ->
		TweenLite.to $(this).children(".menu-item"), 0.3,
			scaleX:1.08,scaleY:1.08, ease:"Power4.easeOut"
	$('body').on 'mouseleave', '.nonCurr', ->
		TweenLite.to $(this).children(".menu-item"), 0.2,
			scaleX:1,scaleY:1

	$('body').on 'click', '.menu_cta', ->
		pageurl = $(this).attr('href')
		# $('body').css background: '#000'
		if browser!='Safari'
			getPage(pageurl+'_fetch')
			return false

Refresh = ->
	$('.experience').each ->
		imageName = $(this).attr 'image'
		experience = $(this).attr 'experience'
		$(this).css background: 'url(img/'+imageName+') no-repeat 18px 13px'
		$(this).html(experience)
	$('.tech-logo, .misc-skill').each ->
		imageName = $(this).attr 'image'
		$(this).css background: 'url(img/'+imageName+')'

getPage = (url) ->
	console.log url
	request = $.get url
	request.success (data) ->
		# $('.page-overlay').css({'top':0})
		# callback = ->
		#	TweenLite.to $('.page-overlay'), 0.3,
		#		top: 0, ease:"Power4.easeOut"
		TweenLite.to $('.page-overlay'), 0.6,
			top: 0, ease:"Power2.easeOut"#, onComplete:callback
		updateContent(data.data, url.charAt(1).toUpperCase() + url.slice(0,"_fetch".length*-1).slice(2), url.slice(0,"_fetch".length*-1))

updateContent = (data, title, url) ->
	if (data==null)
		return
	if url == '/'
		$('.container').html(data)
	else
		$('.page-overlay').html(data)
	History.pushState {
		title	: title,
		url		: url,
		data	: data
	}, title, url
	Refresh()