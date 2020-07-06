const prefix = "https://cdn.jsdelivr.net";
const loadingTip = [
	"正在加载伙伴信息",
	"正在加载装饰元素",
	"正在完成",
	"出现网络错误，已记录到控制台",
];
var loadingStatus = document.querySelector(".loading-status"),
	loadingText = document.querySelector(".loading-text"),
	linkContainer = document.getElementById("link-container"),
	logoCompleted = 0,
	resFailed = 0;
function logoLoad(imgDom) {
	var p = imgDom.parentElement;
	p.style.backgroundImage = `url(${imgDom.src})`;
	p.nextElementSibling.style.display = "none";
	logoCompleted += 1;
	if (logoCompleted == friendInfo.friends.length) {
		loadingStatus.innerHTML = loadingTip[1];
	}
}
function logoLoadError(imgDom) {
	imgDom.parentElement.nextElementSibling.innerHTML = "Logo图片加载失败";
	resFailed += 1;
	console.log("logo加载失败");
}
friendInfo.friends.forEach(function (item) {
	var linkBlock = document.createElement("div");
	linkBlock.setAttribute("class", "fl-link");
	linkBlock.innerHTML = `<div class="fl-link-img"><img src="${prefix}/gh/littlestar520521/wordpress-backup@1.2.0/assets/0f7d343835c3074b0f2b22dabb731304.png"/></div><div class="fl-link-content"><div class="fl-link-content-l"><a href="${item.site}" target="_blank" rel="noreferrer noopener"><img src="${item.logo}" onload="logoLoad(this)" onerror="logoLoadError(this)"/></a><div>正在加载Logo图片</div></div><div class="fl-link-content-r"><a href="${item.site}" target="_blank" rel="noreferrer noopener">${item.name}</a><p>${item.description}</p></div></div>`;
	linkContainer.appendChild(linkBlock);
});
window.addEventListener("load", function () {
	if (resFailed == 0) {
		loadingStatus.innerHTML = loadingTip[2];
		loadingText.innerHTML = "大功告成";
	} else {
		loadingStatus.innerHTML = loadingTip[3];
		loadingText.innerHTML = "有些小错";
	}
	setTimeout(function () {
		var ms = document.querySelector(".loading-masks");
		ms.style.removeProperty("animation");
		ms.classList.add("hide");
	}, 2000);
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
			"text-align:center;position:fixed;z-index:2000;top:0;left:0;opacity:1;transition:opacity 0.5s linear;width:100%"
		);
		tip.innerHTML =
			'<div style="display:inline-block;box-shadow:0 0 3px gray;padding:3px 5px;border-radius:5px;font-size:12px;font-family:sans-serif;line-height:20px;background:#fff;width:80%;margin-top:5px;"><span>检测到移动设备，为节省资源，未启用个性化外观</span></div>';
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
					prefix + "/gh/xb2016/kratos-pjax@0.3.6/static/js/live2d.js";
				s1.onload = function () {
					var s2 = document.createElement("script");
					s2.src =
						prefix +
						"/gh/littlestar520521/wordpress-backup@1.2.0/optimization/dist/extra.min.js";
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
