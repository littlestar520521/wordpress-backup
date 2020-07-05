/**
 * 固定url前缀
 */
const prefix = "https://cdn.jsdelivr.net";
var linkContainer = document.getElementById("link-container");
function logoLoad(imgDom) {
	var p = imgDom.parentElement;
	p.style.backgroundImage = `url(${imgDom.src})`;
	p.nextElementSibling.style.display = "none";
}
function logoLoadError(imgDom) {
	imgDom.parentElement.nextElementSibling.innerHTML =
		"Logo图片加载失败，连接时间过长或目标站点不存在该图片";
}
friendInfo.friends.forEach(function (item) {
	var linkBlock = document.createElement("div");
	linkBlock.setAttribute("class", "fl-link");
	linkBlock.innerHTML = `<div class="fl-link-img"><img src="${prefix}/gh/littlestar520521/wordpress-backup@master/assets/0f7d343835c3074b0f2b22dabb731304.png"/></div><div class="fl-link-content"><div class="fl-link-content-l"><a href="${item.site}" target="_blank" rel="noreferrer noopener"><img src="${item.logo}" onload="logoLoad(this)" onerror="logoLoadError(this)"/></a><div>正在加载Logo图片</div></div><div class="fl-link-content-r"><a href="${item.site}" target="_blank" rel="noreferrer noopener">${item.name}</a><p>${item.description}</p></div></div>`;
	linkContainer.appendChild(linkBlock);
});
(function (t, h, u) {
	if (
		t ==
		"Access denied | www.littlemeteor.me used Cloudflare to restrict access"
	)
		return;
	if (h.startsWith("https://www.littlemeteor.me/wp-")) return;
	if (/iPad|iPhone|Android/.test(u)) {
		var tip = document.createElement("div");
		tip.setAttribute(
			"style",
			"text-align:center;position:fixed;z-index:100;top:0;left:0;opacity:1;transition:opacity 0.5s linear;width:100%"
		);
		tip.innerHTML =
			'<div style="display:inline-block;box-shadow:0 0 3px gray;padding:3px 5px;border-radius:5px;font-size:12px;font-family:sans-serif;line-height:20px;background:#fff;width:80%;margin-top:5px;"><span style="margin-right:5px;color:orange;"><i class="fa fa-exclamation-circle"></i></span><span>检测到移动设备，为节省资源，未启用个性化外观</span></div>';
		document.body.appendChild(tip);
		window.onload = function () {
			setTimeout(function () {
				tip.style.opacity = 0;
			}, 3e3);
		};
	} else {
		var c1 = document.createElement("link");
		c1.rel = "stylesheet";
		c1.href = prefix + "/npm/font-awesome@4.7.0/css/font-awesome.min.css";
		document.body.appendChild(c1);
		var s0 = document.createElement("script");
		s0.src = prefix + "/gh/jquery/jquery@1.12.4/dist/jquery.min.js";
		document.body.appendChild(s0);
		var cusHeader = new Headers();
		cusHeader.append("x-token", "fBWgoTbk6dpqg0zuSwZiuKMYx6Sqi9QW");
		var cusInit = { headers: cusHeader };
		fetch("https://www.littlemeteor.me/api/customization", cusInit)
			.then(function (data) {
				return data.json();
			})
			.then(function (json) {
				window.customizeThemeOpt = json;
				var s1 = document.createElement("script");
				s1.src =
					prefix + "/gh/xb2016/kratos-pjax@0.3.6/static/js/live2d.js";
				s1.onload = function () {
					var s2 = document.createElement("script");
					s2.src =
						prefix +
						"/gh/littlestar520521/wordpress-backup@1.1.1/optimization/dist/extra.min.js";
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
