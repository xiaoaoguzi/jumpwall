$(function()
{
	$('ul#nav li a').click(function(){
		$('.nav_on').toggleClass('nav_on');
		$(this).addClass('nav_on');
	});
	
	$('#nav').lavaLamp({speed:400});
	
	$('.s02').mouseover(function(){
		$('.f01').hide();
		$('.f03').hide();
		$(this).addClass('s_on');
		$('.s03').removeClass('s_on');
		$('.f02').fadeIn("fast");
	});
	
		$('.s03').mouseover(function(){
		$('.f01').hide();
		$('.f02').hide();
		$(this).addClass('s_on');
		$('.s02').removeClass('s_on');
		$('.f03').fadeIn("fast");
	});
	
	$('.s01').mouseover(function(){
		$('.f02').hide();
		$('.f03').hide();
		$('.s02').removeClass('s_on');
		$('.s03').removeClass('s_on');
		$('.f01').fadeIn("fast");
	});
	
$('.s002').mouseover(function(){
		$('.f001').hide();
		$('.f003').hide();
		$(this).addClass('s_on');
		$('.s003').removeClass('s_on');
		$('.f002').fadeIn("fast");
	});
	
		$('.s003').mouseover(function(){
		$('.f001').hide();
		$('.f002').hide();
		$(this).addClass('s_on');
		$('.s002').removeClass('s_on');
		$('.f003').fadeIn("fast");
	});
	
	$('.s001').mouseover(function(){
		$('.f002').hide();
		$('.f003').hide();
		$('.s002').removeClass('s_on');
		$('.s003').removeClass('s_on');
		$('.f001').fadeIn("fast");
	});
	
	$('.s20').mouseover(function(){
		$('.f10').hide();
		$('.f30').hide();
		$(this).addClass('s_on');
		$('.s30').removeClass('s_on');
		$('.f20').fadeIn("fast");
	});
	
		$('.s30').mouseover(function(){
		$('.f10').hide();
		$('.f20').hide();
		$(this).addClass('s_on');
		$('.s20').removeClass('s_on');
		$('.f30').fadeIn("fast");
	});
	
	$('.s10').mouseover(function(){
		$('.f20').hide();
		$('.f30').hide();
		$('.s20').removeClass('s_on');
		$('.s30').removeClass('s_on');
		$('.f10').fadeIn("fast");
	});
	
		$('.s200').mouseover(function(){
		$('.f100').hide();
		$('.f300').hide();
		$(this).addClass('s_on');
		$('.s300').removeClass('s_on');
		$('.f200').fadeIn("fast");
	});
	
		$('.s300').mouseover(function(){
		$('.f100').hide();
		$('.f200').hide();
		$(this).addClass('s_on');
		$('.s200').removeClass('s_on');
		$('.f300').fadeIn("fast");
	});
	
	$('.s100').mouseover(function(){
		$('.f200').hide();
		$('.f300').hide();
		$('.s200').removeClass('s_on');
		$('.s300').removeClass('s_on');
		$('.f100').fadeIn("fast");
	});
	
		
		$('.s2').mouseover(function(){
		$('.f1').hide();
		$('.f3').hide();
		$(this).addClass('s_on');
		$('.s3').removeClass('s_on');
		$('.f2').fadeIn("fast");
	});
	
		$('.s3').mouseover(function(){
		$('.f1').hide();
		$('.f2').hide();
		$(this).addClass('s_on');
		$('.s2').removeClass('s_on');
		$('.f3').fadeIn("fast");
	});
	
	$('.s1').mouseover(function(){
		$('.f2').hide();
		$('.f3').hide();
		$('.s2').removeClass('s_on');
		$('.s3').removeClass('s_on');
		$('.f1').fadeIn("fast");
	});
	
	
});

