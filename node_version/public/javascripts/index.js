// Generated by CoffeeScript 1.6.1
(function(){var e,t,n,r;$(document).ready($(function(){var r,i,s,o,u,a,f;u=!1;r=BrowserDetect.browser;o=$(".page-overlay").height();a=document.title;f=window.location.pathname;i=f;console.log(a+"    "+f);console.log("HEIght: "+$(window).height());if(f==="/"){$(".page-overlay").css({top:$(window).height()});s=$(".container").html()}else s=$(".page-overlay").html();if(r!=="Safari"){History.replaceState({title:a,url:f,data:$(".container").html()},a,f);History.Adapter.bind(window,"statechange",function(){var e,n;e=History.getState();console.log(i);n=function(){i=window.location.pathname;return t(i+"_fetch")};if(e.data.url==="/"){console.log("going in");if(u){$(".page-overlay").css("position","fixed");return TweenLite.to($(".page-overlay"),.6,{top:$(window).height(),ease:"Power2.easeOut"})}return n()}if(i==="/"){console.log("executing");$(".page-overlay").css("position","absolute");return TweenLite.to($(".page-overlay"),.6,{top:0,ease:"Power2.easeOut"})}return n()})}$(document).foundation();$(".header span").fitText(1,{maxFontSize:"300px",minFontSize:"50px"});e();$("body").on("mouseenter",".menu-item",function(){return TweenLite.to($(this).children(".menu-logo"),.3,{scaleX:1.08,scaleY:1.08,ease:"Power4.easeOut"})});$("body").on("mouseleave",".menu-item",function(){return TweenLite.to($(this).children(".menu-logo"),.2,{scaleX:1,scaleY:1})});$("body").on("mouseenter",".nonCurr",function(){return TweenLite.to($(this).children(".menu-item"),.3,{scaleX:1.08,scaleY:1.08,ease:"Power4.easeOut"})});$("body").on("mouseleave",".nonCurr",function(){return TweenLite.to($(this).children(".menu-item"),.2,{scaleX:1,scaleY:1})});$("body").on("click",".menu_cta",function(){var e;e=$(this).attr("href");if(r!=="Safari"){u=!0;t(e+"_fetch");return!1}});$("body").on("click",".info-button",function(){return window.location.href="/404"});return $(window).scroll(function(){console.log("scroll");return n()})}));n=function(){var e;e=$(window).scrollTop();$(".landing .body").css("backgroundPosition","0px "+e*-0.25+"px");return $(".landing .recent-section").css("backgroundPosition","0px "+e*-0.25+"px")};e=function(){$(".experience").each(function(){var e,t;t=$(this).attr("image");e=$(this).attr("experience");$(this).css({background:"url(img/"+t+") no-repeat 18px 13px"});return $(this).html(e)});return $(".tech-logo, .misc-skill").each(function(){var e;e=$(this).attr("image");return $(this).css({background:"url(img/"+e+")"})})};t=function(e){var t;console.log("URL"+e);t=$.get(e);return t.success(function(t){var n;if(e!=="/_fetch"){$(".scroll-wrapper").css("overflow","hidden");$(".page-overlay").css("position","absolute");$(window).scrollTop(0);TweenLite.to($(".page-overlay"),.6,{top:0,ease:"Power2.easeOut"});return r(t.data,e.charAt(1).toUpperCase()+e.slice(0,"_fetch".length*-1).slice(2),e.slice(0,"_fetch".length*-1))}n=function(){return r(t.data,"Pratham Agrawal","/")};return TweenLite.to($(".page-overlay"),.6,{top:$(window).height(),ease:"Power2.easeOut",onComplete:n})})};r=function(t,n,r){if(t===null)return;r==="/"?$(".container").html(t):$(".page-overlay").html(t);History.pushState({title:n,url:r,data:t},n,r);return e()}}).call(this);