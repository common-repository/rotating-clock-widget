jQuery(document).ready(function()
{
	jQuery('#bg_im img').css({'height':jQuery('#bg_im img').width()+"px"});
	var top = (4/200)*jQuery('#bg_im img').width();
	var left = (51/200)*jQuery('#bg_im img').width();
	var height = (13/200)*jQuery('#bg_im img').width();
	var width = (95/200)*jQuery('#bg_im img').width();
	jQuery('#bg_time_box').css({'top':top+"px",'left':left+"px",'height':height+"px",'width':width+"px"});
	function turn_strt()
	{
		var max_t = 24*60*60;
		var d = new Date();
		var h = d.getHours();
		var m = d.getMinutes();
		var s = d.getSeconds();
		var to = s+(m*60)+(h*3600);
		var deg = Math.round(36000*(to/max_t))/100;
		jQuery('.bg_imag').rotate({animateTo:deg});
		var sdeg = String(deg);
		var ap = "am";
		if(h>12)
		{
			h = h-12;
			ap = "pm";
		}
		if(h==0)
		{
			h = 12;
		}
		if(m<10)
		{
			m = "0"+m;
		}
		if(s<10)
		{
			s = "0"+s;
		}
		jQuery('#bg_time').text(h+":"+m+":"+s+ap);
		var qwer = window.setTimeout(function(){turnit();},500);
	}
	function turnit()
	{
		var max_t = 24*60*60;
		var d = new Date();
		var h = d.getHours();
		var m = d.getMinutes();
		var s = d.getSeconds();
		var to = s+(m*60)+(h*3600);
		var deg = Math.round(36000*(to/max_t))/100;
		jQuery('.bg_imag').rotate(deg);
		var sdeg = String(deg);
		var ap = "am";
		if(h>12)
		{
			h = h-12;
			ap = "pm";
		}
		if(h==0)
		{
			h = 12;
		}
		if(m<10)
		{
			m = "0"+m;
		}
		if(s<10)
		{
			s = "0"+s;
		}
		jQuery('#bg_time').text(h+":"+m+":"+s+ap);
		var qwer = window.setTimeout(function(){turnit();},500);
	}
	turn_strt();
});