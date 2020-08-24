(function (t, h, u) {
	if (
		t ==
		"Access denied | www.littlemeteor.me used Cloudflare to restrict access"
	)
		return;
	if (h.startsWith("https://www.littlemeteor.me/wp-")) return;
	var con = "",
		sty =
			"text-align:center;position:fixed;z-index:100;top:0;left:0;opacity:1;transition:opacity 0.5s linear;width:100%;",
		inn = [
			'<div style="display:inline-block;box-shadow:0 0 3px gray;padding:3px 5px;border-radius:5px;font-size:12px;font-family:sans-serif;line-height:20px;background:#fff;max-width:80%;margin-top:5px;"><span style="margin-right:5px;color:orange;"><i class="fa fa-exclamation-circle"></i></span><span>',
			"</span></div>",
		],
		tip = document.createElement("div");
	tip.setAttribute("style", sty);
	if (/iPad|iPhone|Android/.test(u)) {
		con = "检测到移动设备，为节省资源，未启用个性化外观";
		tip.innerHTML = inn.join(con);
		document.body.appendChild(tip);
		window.addEventListener("load", function () {
			setTimeout(function () {
				tip.style.opacity = 0;
			}, 3000);
		});
		document
			.getElementById("day-night-theme-image")
			.setAttribute(
				"src",
				`${
					document
						.getElementById("logo")
						.querySelector("img")
						.getAttribute("srcset")
						.split(",")[0]
						.split(" ")[0]
				}`
			);
		document.body.style.backgroundColor = "lightyellow";
		document.body.style.setProperty("--article-bg-color", "#fff");
	} else {
		con = "个性化外观正在后台加载";
		tip.innerHTML = inn.join(con);
		document.body.appendChild(tip);
		window.addEventListener("load", function () {
			var cusHeader = new Headers();
			cusHeader.append("x-token", "123456");
			var cusInit = { headers: cusHeader };
			fetch("https://www.littlemeteor.me/api/customization", cusInit)
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
							"https://cdn.jsdelivr.net/gh/littlestar520521/wordpress-backup@1.2.0/optimization/dist/extra.min.js";
						s2.onload = function () {
							setTimeout(function () {
								tip.style.opacity = 0;
							}, 3000);
						};
						s2.async = true;
						document.body.appendChild(s2);
					};
					document.body.appendChild(s1);
				})
				.catch(function (error) {
					console.log(error.message);
				});
		});
	}
})(document.title, location.href, navigator.userAgent);
