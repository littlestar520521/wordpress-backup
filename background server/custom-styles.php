<?php
 /**
  * anima主题自定义css样式生成
  * 位于主题目录includes文件夹下
  */ 


  //201行
  //更改1：更改导航栏背景为自定义图像
  //更改2：移除不需要的元素选择器，导航栏过渡特效更平滑

?>
#site-header-main, #access ul ul,
.menu-search-animated .searchform input[type="search"], #access .menu-search-animated .searchform, #access::after,
.anima-over-menu .header-fixed#site-header-main, .anima-over-menu .header-fixed#site-header-main #access:after
{ 
  background-image:url(xxxxx)
}
                      
#site-header-main, .menu-search-animated .searchform input[type="search"], #access .menu-search-animated .searchform, .anima-over-menu .header-fixed#site-header-main
{
  background-image:var(--nav-bg-image)
}


<?php

  //247行
  //article区域背景，改为自定义

?>
body:not(.anima-landing-page) article.hentry, body:not(.anima-landing-page) .main
{ 
  background-color: <?php echo esc_html( $anima_contentbackground ) ?>; 
}

body:not(.anima-landing-page) article.hentry, body:not(.anima-landing-page) .main
{ 
  background-color: var(--article-bg-color); 
}

<?php 

  //314行
  //a标签颜色，改为自定义

?>
a{ color: <?php echo esc_html( $anima_accent1 ) ?>; }

a{ color: var(--global-link-color); }