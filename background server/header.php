<!--添加外部域名预解析-->
<link rel="dns-prefetch" href="https://static.littlesecret.cn">
<link rel="dns-prefetch" href="https://wp-cdn.littlesecret.cn">
<link rel="dns-prefetch" href="https://cdn.jsdelivr.net">

<!--在header部分添加了判断，当页面为首页时不显示自带顶部图像-->
<div id="header-image-main">
	<div id="header-image-main-inside">
		<?php if(is_home()){echo "<div id='header-page-title'><div id='header-page-title-inside'><h2 class='entry-title' itemprop='headline'>小流星的梦</h2><p class='byline'>遇见美好，藏于心间，奔向梦的彼岸</p></div></div>";}		
			else cryout_headerimage_hook(); ?>
	</div><!-- #header-image-main-inside -->
</div><!-- #header-image-main -->