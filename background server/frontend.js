/**
 * 文件路径 wp-content/themes/anima/resources/js/frontend.js
 * 
 * 移除部分出错脚本内容
 */

/**
 * 12行
 */
cryoutLpBoxesRatios();

 /**
  * 23行
  */
if ( ( (cryout_theme_settings.fitvids == 2) && (cryout_theme_settings.is_mobile == 1) ) || ( cryout_theme_settings.fitvids == 1 ) ) {
    jQuery( ".entry-content" ).fitVids();
}

/**
 * 50行
 */
function cryoutLpBoxesRatios() {
	for (index = 1; index <= cryout_theme_settings.lpboxratios.length; ++index) {
		jQuery( '.lp-boxes-'+index+' .lp-box-image' ).keepRatio( cryout_theme_settings.lpboxratios[index-1] );
	}
}