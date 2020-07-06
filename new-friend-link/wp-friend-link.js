const friendInfo = {
	friends: [
		{
			name: "可乐",
			site: "https://bozaiq.cn/",
			logo: "../assets/rabbit-logo.png",
			description: "爱折腾的兔子大佬，总有层出不穷的新点子，每天元气满满",
		},
		{
			name: "猪头少年",
			site: "https://scung.cn/",
			logo:
				"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASwAAAEsAgMAAAAEE2bmAAAACVBMVEUAAAAAAAD///+D3c/SAAAAAXRSTlMAQObYZgAAAAFiS0dEAmYLfGQAAAB1SURBVHja7dQxDQAwDANBh1lJlD+VUshUKcr9bN3o3EYn1ZmFxWKxWCwWi8VisVgsFovFYrFYLBaLxWKxWCwWi8VisVgsFovF+mlJG/MTLBaLxWKxWCwWi8VisVgsFovFYrFYLBaLxWKxWCwWi8VisVisodYD0sFgCIKD+RkAAAAASUVORK5CYII=",
			description:
				"C#巨佬，他的博客是自行开发，没有采用WordPress、Typecho等开源软件",
		},
		{
			name: "DannyLiu的博客",
			site: "http://www.lhlh326.xyz/",
			logo: "../assets/lhlh326-logo.jpg",
			description:
				"跟兔子大佬一样的喜欢折腾，他是学C语言的，C语言把我整的够呛，我太菜了",
		},
		{
			name: "谈笑学习笔记",
			site: "https://www.tanxiao.xyz/",
			logo: "../assets/tanxiao-logo.jpg",
			description: "他这里全是Java(￣_,￣ )",
		},
		{
			name: "栗子先生的博客",
			site: "https://blog.lizixs.top/",
			logo: "../assets/lizixs-logo.jpg",
			description:
				"咳咳，有点可爱的男孩子，和一个未知的小姐姐合作打理一个WordPress站点",
		},
	],
};
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
/**
 * logo图片加载
 * @param {HTMLImageElement} imgDom
 */
function logoLoad(imgDom) {
	var p = imgDom.parentElement;
	p.style.backgroundImage = `url(${imgDom.src})`;
	p.nextElementSibling.style.display = "none";
	logoCompleted += 1;
	if (logoCompleted == friendInfo.friends.length) {
		loadingStatus.innerHTML = loadingTip[1];
	}
}
/**
 * logo图片加载失败
 * @param {HTMLImageElement} imgDom
 */
function logoLoadError(imgDom) {
	imgDom.parentElement.nextElementSibling.innerHTML = "Logo图片加载失败";
	resFailed += 1;
	console.log("logo加载失败");
}

friendInfo.friends.forEach(function (item) {
	var linkBlock = document.createElement("div");
	linkBlock.setAttribute("class", "fl-link");
	linkBlock.innerHTML = `<div class="fl-link-img"><img src="../assets/0f7d343835c3074b0f2b22dabb731304.png"/></div><div class="fl-link-content"><div class="fl-link-content-l"><a href="${item.site}" target="_blank" rel="noreferrer noopener"><img src="${item.logo}" onload="logoLoad(this)" onerror="logoLoadError(this)"/></a><div>正在加载Logo图片</div></div><div class="fl-link-content-r"><a href="${item.site}" target="_blank" rel="noreferrer noopener">${item.name}</a><p>${item.description}</p></div></div>`;
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