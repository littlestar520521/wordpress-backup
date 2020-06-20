(function (t, h, u) {
	if (
		t ==
		"Access denied | www.littlemeteor.me used Cloudflare to restrict access"
	)
		return;
	if (h.startsWith("https://www.littlemeteor.me/wp-")) return;
	if (/iPad|iPhone|Android/.test(u)) {
		var tip = document.createElement("div");
		tip.setAttribute("class", "no-load-resource-for-mobile");
		tip.setAttribute(
			"style",
			"text-align:center;position:fixed;z-index:100;top:0;left:0;opacity:1;transition:opacity 0.5s linear"
		);
		tip.innerHTML =
			'<div style="display:inline-block;box-shadow:0 0 3px gray;padding:3px 5px;border-radius:5px;font-size:12px;font-family:sans-serif;line-height:20px;background:#fff;width:80%;margin-top:5px;"><span style="margin-right:5px;color:orange;"><i class="fa fa-exclamation-circle"></i></span><span>检测到移动设备，为节省资源，未启用个性化外观</span></div>';
		document.body.appendChild(tip);
		window.onload = function () {
			setTimeout(function () {
				tip.style.opacity = 0;
			}, 3000);
		};
		document
			.getElementById("day-night-theme-image")
			.setAttribute(
				"src",
				"https://wp-cdn.littlesecret.cn/wp-content/uploads/2020/03/cropped-c5ce356fe6911ec8d799a22faa36eebb_optimized@v3-1.png"
			);
		document.body.style.backgroundColor = "lightyellow";
	} else {
		fetch("https://www.littlemeteor.me/api/customization")
			.then(function (data) {
				return data.json();
			})
			.then(function (json) {
				window.customizeThemeOpt = json;
				var s1 = document.createElement("script");
				s1.src =
					"https://cdn.jsdelivr.net/gh/xb2016/kratos-pjax@0.3.6/static/js/live2d.js";
				s1.onload = function () {
					var s2 = document.createElement("script");
					s2.src =
						"https://cdn.jsdelivr.net/gh/littlestar520521/wordpress-backup/optimization/dist/extra.min.js";
					s2.async = true;
					document.body.appendChild(s2);
				};
				document.body.appendChild(s1);
			})
			.catch(function (error) {
				console.log(error.message);
			});
	}
})(document.title, location.href, navigator.userAgent);
