/**
 * toolbar以及Live2D功能按需启用，移动设备不启用
 */

var pattern = /iPad|iPhone|Android/;
if (pattern.test(navigator.userAgent)) {
	//加载提示DOM
	var tip_dom = document.createElement("div");
	tip_dom.setAttribute("class", "no-load-resource-for-mobile");
	tip_dom.setAttribute(
		"style",
		"text-align:center;position:fixed;z-index:100;top:0;left:0;opacity:1;transition:opacity 0.5s linear"
	);
	tip_dom.innerHTML = '<div style="display:inline-block;box-shadow:0 0 3px gray;padding:3px 5px;border-radius:5px;font-size:12px;font-family:sans-serif;line-height:20px;background:#fff;width:80%;margin-top:5px;"><span style="margin-right:5px;color:orange;"><i class="fa fa-exclamation-circle"></i></span><span>检测到移动设备，为节省资源，未启用个性化外观</span></div>';
	document.body.appendChild(tip_dom);
	window.onload = function () {
		this.setTimeout(function(){this.tip_dom.style.opacity = 0}, 3000);
	};
	document.getElementById("day-night-theme-image").setAttribute("src", 'https://wp-cdn.littlesecret.cn/wp-content/uploads/2020/03/cropped-c5ce356fe6911ec8d799a22faa36eebb_optimized@v3-1.png');
	document.body.style.backgroundColor='lightyellow';
} else {
	if (!location.href.startsWith("https://www.littlemeteor.me/wp-")) {
		(function () {
			window.customizeThemeOpt = {
				toolbarTheme: {
					"font-color": "coral",
					"bg-color": "beige",
					"border-shadow-color": "lightcoral",
					"bg-hover-color": "lightpink",
				},
				siteTheme: {
					dayTheme: {
						image:
							"https://static.littlesecret.cn/images/inserts/2c9883c0c3d7b75e0a3feee8354ddd9b_optimized.png",
						css: { "--widget-bg-color": "rgb(250,250,235)" },
					},
					nightTheme: {
						image:
							"https://static.littlesecret.cn/images/inserts/56f8dc7323d843977ec483846d01be74.png",
						css: {
							"--widget-bg-color": "rgb(81,99,123)",
							"--widget-font-color": "#ffb5a1",
							"--widget-title-color": "lightcoral",
							"--widget-list-item-color": "bisque",
						},
					},
				},
				bgm: {
					url:
						"https://storage.live.com/items/E6EC76AE9A11FB6!32251:/?authkey=AK5Cp-dp92P3img",
					length: 293,
				},
				bingImageApi:
					"https://api.littlesecret.cn/wordpress/bingwallpaper",
			};
			function addJs(a, b) {
				var s = document.createElement("script");
				s.src = a;
				s.async = b;
				document.body.appendChild(s);
			}
			addJs(
				"https://cdn.jsdelivr.net/gh/xb2016/kratos-pjax@0.3.6/static/js/live2d.js",
				false
			);
			addJs(
				"https://cdn.jsdelivr.net/gh/littlestar520521/wordpress-backup/optimization/dist/extra.min.js",
				true
			);
		})();
	}
}
