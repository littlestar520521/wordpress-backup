/**
 * 额外功能加载脚本
 */

const toolbar_html = `<div class="customize-toolbar-pic"><div class="customize-toolbar-topline"></div><div class="customize-toolbar-topdot"></div><div class="customize-toolbar-core"></div></div><div class="customize-toolbar-menu"><div class="customize-toolbar-icon-set"><div class="customize-toolbar-icon" data-func="bing-wallpaper"><div class="customize-toolbar-icon-func" aria-label="change background image to today’s bing image"><i class="fa fa-paint-brush" aria-hidden="false"></i></div><div class="customize-toolbar-icon-tip">更换壁纸为Bing美图</div></div><div class="customize-toolbar-icon" data-func="bgm-controller"><div class="customize-toolbar-icon-func" aria-label="play or pause the BGM"><i class="fa fa-play" aria-hidden="false"></i></div><div class="customize-toolbar-icon-tip">播放背景音乐</div></div><div class="customize-toolbar-icon" data-func="back-to-top"><div class="customize-toolbar-icon-func" aria-label="go back to the top"><i class="fa fa-arrow-up" aria-hidden="false"></i></div><div class="customize-toolbar-icon-tip">返回顶部</div></div><div class="customize-toolbar-icon" data-func="hide-menu"><div class="customize-toolbar-icon-func" aria-label="close the menu"><i class="fa fa-angle-right" aria-hidden="false"></i></div><div class="customize-toolbar-icon-tip">隐藏菜单</div></div></div><div class="customize-toolbar-blank"><div class="customize-toolbar-blank-bg"><i class="" aria-hidden="true"></i></div><div class="customize-toolbar-blank-tip"><div class="customize-toolbar-hide-tip"><div>单击收起/展开菜单</div></div></div></div></div>`;
const toolbar_css = `#wp-toolbar-customize{transition:all .5s linear;position:fixed;width:200px;height:200px;bottom:2px;right:-2px;opacity:1;--tb-bottom:162px}.customize-toolbar-icon-func.customize-toolbar-icon-clicking i{text-shadow:0 0 2px #666}.customize-toolbar-pic-move{animation:rotate-y 4s linear infinite normal;transform-origin:50% 50%}.customize-toolbar-hide{opacity:0;transform:translateX(10px)}.customize-toolbar-hide-all{right:-160px}.customize-toolbar-hide-tip{transform:translateY(205px);opacity:0}.customize-toolbar-pic-bg-move{animation:rotate-own 4s linear infinite normal;transform-origin:50% 50%}@keyframes rotate-y{0%{transform:rotateY(0)}25%{transform:rotateY(90deg)}50%{transform:rotateY(180deg)}75%{transform:rotateY(270deg)}100%{transform:rotateY(360deg)}}@keyframes rotate-own{0%{transform:rotate(0)}25%{transform:rotate(90deg)}50%{transform:rotate(180deg)}75%{transform:rotate(270deg)}100%{transform:rotate(360deg)}}.customize-toolbar-core{background:url(https://static.littlesecret.cn/images/backgrounds/love/bad27a027fff5ca54756c7da2e6cc756_optimized.png) no-repeat center;background-size:cover;width:160px;height:160px;margin:20px}.customize-toolbar-topline{width:2px;height:calc(100vh - var(--tb-bottom));background:#000;position:absolute;bottom:var(--tb-bottom);left:100px}.customize-toolbar-topdot{position:absolute;left:96.5px;bottom:var(--tb-bottom);width:8px;height:8px;background-color:var(--main-font-color);border:1px solid #000;border-radius:50%;z-index:2}.customize-toolbar-menu{position:absolute;width:300px;height:300px;top:-50px;left:-50px;display:flex;justify-content:center;align-items:center;border-radius:50%}.customize-toolbar-icon-set{position:inherit;left:0;width:100px;height:200px;display:flex;flex-direction:column;justify-content:space-between;align-items:center;transition:all .5s linear;z-index:2}.customize-toolbar-icon{position:relative;border-radius:50%}.customize-toolbar-icon i{text-shadow:1px 1px 1px #666;cursor:pointer!important}.customize-toolbar-icon:nth-child(2),.customize-toolbar-icon:nth-child(3){right:30px}.customize-toolbar-icon:nth-child(4) i{font-weight:700}.customize-toolbar-icon-func,.customize-toolbar-icon-tip{color:var(--main-font-color);border-color:var(--main-border-shadow-color);background:var(--main-bg-color);box-sizing:border-box;border-style:solid;transition:all .5s linear}.customize-toolbar-icon-func{width:30px;height:30px;border-width:2px;border-radius:50%;line-height:26px;text-align:center;box-shadow:0 0 5px var(--main-border-shadow-color);cursor:pointer!important}.customize-toolbar-icon-func.customize-toolbar-icon-clicking,.customize-toolbar-icon-func:hover{background:var(--main-bg-hover-color);color:var(--main-bg-color)}.customize-toolbar-icon-func:hover+.customize-toolbar-icon-tip{opacity:1;right:40px}.customize-toolbar-icon-tip{right:100px;bottom:0;position:absolute;white-space:nowrap;font-size:.85rem;line-height:28px;padding:0 8px;font-family:Calibri,sans-serif;letter-spacing:.5px;border-radius:5px;border-width:1px;transform:none;box-shadow:0 0 6px #333;opacity:0}.customize-toolbar-icon:nth-child(1) .customize-toolbar-icon-tip{border-top-left-radius:15px}.customize-toolbar-icon:nth-child(4) .customize-toolbar-icon-tip{border-bottom-left-radius:15px}.customize-toolbar-blank{width:200px;height:200px;background:rgba(255,255,255,.2);border-radius:50%;box-shadow:0 0 10px #fff;position:relative}.customize-toolbar-blank>div{width:inherit;height:inherit;position:inherit}.customize-toolbar-blank-bg{font-size:170px;text-align:center;line-height:200px;color:#ffffe0;opacity:.5;z-index:-1}.customize-toolbar-blank-tip{top:-200px;text-align:center}.customize-toolbar-blank-tip>div{display:inline-block;padding:10px;background:#333;color:#eee;border-radius:10px;font-size:.85rem;box-shadow:0 0 5px gray;transition:all 1s linear;position:relative;z-index:2}.customize-toolbar-blank:hover i{animation:rotate-own 4s linear infinite normal}@media(max-width:800px){#wp-toolbar-customize{display:none}}`;
const live2d_html = `<div class="waifu"><div class="waifu-tips"></div><canvas id="live2d" width="220" height="250" class="live2d"></canvas><div class="waifu-tool"><span class="fa fa-home"></span><span class="fa fa-comments"></span><span class="fa fa-drivers-license-o"></span><span class="fa fa-street-view"></span><span class="fa fa-camera"></span><span class="fa fa-info-circle"></span><span class="fa fa-close"></span></div></div>`;
const live2d_css = `.waifu{position:fixed;left:0;top:0;width:230px;height:270px;z-index:2000;user-select:none;-webkit-user-select:none;-ms-user-select:none;-moz-user-select:none}.waifu-tips{opacity:0;width:220px;height:70px;margin:-20px 5px;padding:5px 7px;border-radius:12px;background-color:#fff;font-size:10px;line-height:20px;color:#555;text-overflow:ellipsis;overflow:hidden;position:absolute;font-family:Raleway;text-shadow:0 0 3px #ccc;border:1px solid #ffb5a1;box-sizing:inherit}.waifu-tool{display:none;color:#aaa;top:50px;right:0;font-size:16px;position:absolute}.waifu:hover .waifu-tool{display:block}.waifu-tool span{display:block;cursor:pointer;color:#5b6c7d;line-height:22px;transition:.2s;-webkit-transition:.2s}.waifu-tool .fa-comments{font-size:19px}.waifu-tool .fa-home,.waifu-tool .fa-info-circle{font-size:20px}.waifu-tool .fa-close,.waifu-tool .fa-street-view{font-size:22px}.waifu-tool span:hover{color:#34495e}.waifu #live2d{position:absolute;cursor:move;left:3%;bottom:0}@media(max-width:800px){.l2d_xb.mh{display:none}.waifu-tips,.waifu-tool{display:none!important}.waifu #live2d{left:0}}`;

function addDom(a, b, c) {
	var dom = document.createElement("div");
	dom.setAttribute(a, b);
	dom.innerHTML = c;
	document.body.appendChild(dom);
}
function addStyle(a) {
	var css = document.createElement("style");
	css.innerHTML = a;
	document.head.appendChild(css);
}
addDom("id", "wp-toolbar-customize", toolbar_html);
addDom("class", "l2d_xb mh", live2d_html);
addStyle(toolbar_css);
addStyle(live2d_css);

window.CustomizeToolBar = window.CustomizeToolBar || {};
CustomizeToolBar.classTokenList = {
	visibility: {
		toolBarHide: "customize-toolbar-hide-all",
		menuHide: "customize-toolbar-hide",
		iconClick: "customize-toolbar-icon-clicking",
	},
	rotation: {
		picMove: "customize-toolbar-pic-move",
		bgMove: "customize-toolbar-pic-bg-move",
	},
	toolBarIcon: {
		dayBg: "fa fa-sun-o",
		nightBg: "fa fa-star",
		bgmPlay: "fa fa-play",
		bgmPause: "fa fa-pause",
	},
};
CustomizeToolBar.domList = {
	toolBarDom: document.getElementById("wp-toolbar-customize"),
	buttonDomList: {
		bingImageButton: document.querySelector(
			'[data-func="bing-wallpaper"]>div:first-child'
		),
		bgmControlButton: document.querySelector(
			'[data-func="bgm-controller"]>div:first-child'
		),
		backToTopButton: document.querySelector(
			'[data-func="back-to-top"]>div:first-child'
		),
		closeMenuButton: document.querySelector(
			'[data-func="hide-menu"]>div:first-child'
		),
	},
	corePicDom: document.querySelector(".customize-toolbar-core"),
	blankAreaDom: document.querySelector(".customize-toolbar-blank"),
	menuAreaDom: document.querySelector(".customize-toolbar-icon-set"),
};
CustomizeToolBar.width = 200;
CustomizeToolBar.height = 200;
(function () {
	CustomizeToolBar.toggleCssClass = function (dom, className) {
		dom.classList.toggle(className);
	};
	//Add mousedown and mouseup effect to all buttons
	var buttons = CustomizeToolBar.domList.buttonDomList;
	Object.keys(buttons).forEach(function (button) {
		var _this = buttons[button];
		_this.addEventListener("mousedown", function () {
			CustomizeToolBar.toggleCssClass(
				_this,
				CustomizeToolBar.classTokenList.visibility.iconClick
			);
		});
		_this.addEventListener("mouseup", function () {
			CustomizeToolBar.toggleCssClass(
				_this,
				CustomizeToolBar.classTokenList.visibility.iconClick
			);
		});
	});
	//back to top
	CustomizeToolBar.domList.buttonDomList.backToTopButton.addEventListener(
		"click",
		function () {
			window.scrollTo({ top: 0, behavior: "smooth" });
			//TODO: Make the scroll speed under my control
		}
	);
	//close the menu
	CustomizeToolBar.domList.buttonDomList.closeMenuButton.addEventListener(
		"click",
		function () {
			CustomizeToolBar.toggleCssClass(
				CustomizeToolBar.domList.menuAreaDom,
				CustomizeToolBar.classTokenList.visibility.menuHide
			);
		}
	);
	CustomizeToolBar.domList.blankAreaDom.addEventListener("click", function (
		e
	) {
		e.stopPropagation();
		if (e.detail === 1) {
			CustomizeToolBar.toggleCssClass(
				CustomizeToolBar.domList.menuAreaDom,
				CustomizeToolBar.classTokenList.visibility.menuHide
			);
		}
		return;
	});
	//switch background wallpaper to bing image
	var bingBtn = CustomizeToolBar.domList.buttonDomList.bingImageButton;
	var bingTip = bingBtn.nextElementSibling;
	function switchPicAnimation() {
		CustomizeToolBar.toggleCssClass(
			CustomizeToolBar.domList.corePicDom,
			CustomizeToolBar.classTokenList.rotation.picMove
		);
	}
	function getLocalBingWallpaper() {
		var localCache = localStorage.getItem("today-bing-image");
		if (localCache) {
			var localObj = JSON.parse(localCache);
			if (new Date(localObj.time).getDate() !== new Date().getDate()) {
				getBingWallpaper();
			} else {
				//add image loading effect
				switchPicAnimation();
				var temp_img = document.createElement("img");
				temp_img.setAttribute("src", localObj.url);
				temp_img.addEventListener("load", function () {
					var bodyRef = document.body;
					if (!bodyRef.style.transition) {
						bodyRef.style.transition =
							"background-position-x 2s linear";
					}
					bodyRef.classList.add("bingwallpaper-bg-start");
					setTimeout(function () {
						bodyRef.classList.add("bingwallpaper-bg-end");
						bodyRef.style.backgroundImage = `url(${localObj.url})`;
						bingTip.innerHTML = "换回原来壁纸";
						switchPicAnimation();
					}, 2000);
				});
			}
		} else {
			getBingWallpaper();
		}
	}
	function getBingWallpaper() {
		switchPicAnimation();
		var cusHeader = new Headers();
		cusHeader.append("x-token", "123456");
		var cusInit = { headers: cusHeader };
		fetch(customizeThemeOpt.bingImageApi, cusInit)
			.then(function (data) {
				return data.text();
			})
			.then(function (result) {
				var temp_img = document.createElement("img");
				temp_img.setAttribute("src", result);
				temp_img.addEventListener("load", function () {
					var bodyRef = document.body;
					if (!bodyRef.style.transition) {
						bodyRef.style.transition =
							"background-position-x 2s linear";
					}
					bodyRef.classList.add("bingwallpaper-bg-start");
					setTimeout(function () {
						bodyRef.classList.add("bingwallpaper-bg-end");
						bodyRef.style.backgroundImage = `url(${result})`;
						bingTip.innerHTML = "换回原来壁纸";
						switchPicAnimation();
					}, 2000);
					var store = {
						url: result,
						time: new Date().getTime(),
					};
					localStorage.setItem(
						"today-bing-image",
						JSON.stringify(store)
					);
				});
			})
			.catch(function (err) {
				console.log(`Get image failed for the error '${err}'`);
			});
	}
	function backToOriginBackground() {
		var bodyRef = document.body;
		bodyRef.classList.remove("bingwallpaper-bg-end");
		setTimeout(function () {
			bodyRef.style.removeProperty("background-image");
			bodyRef.classList.remove("bingwallpaper-bg-start");
			bingTip.innerHTML = "更换壁纸为Bing美图";
		}, 2000);
	}
	bingBtn.addEventListener("click", function () {
		document.body.style.backgroundImage
			? backToOriginBackground()
			: getLocalBingWallpaper();
	});
	//background music
	var audioBtn = CustomizeToolBar.domList.buttonDomList.bgmControlButton;
	var audioIcon = audioBtn.getElementsByTagName("i")[0];
	var audioTip = audioBtn.nextElementSibling;
	audioBtn.addEventListener("click", function () {
		var audioDom = document.querySelector("audio");
		audioDom.src = audioDom.getAttribute("data-url");
		if (audioDom.paused || audioDom.played.length === 0) {
			audioDom.play();
			audioIcon.setAttribute(
				"class",
				CustomizeToolBar.classTokenList.toolBarIcon.bgmPause
			);
			audioTip.innerHTML = "暂停背景音乐";
		} else {
			audioDom.pause();
			audioIcon.setAttribute(
				"class",
				CustomizeToolBar.classTokenList.toolBarIcon.bgmPlay
			);
			audioTip.innerHTML = "播放背景音乐";
		}
	});
})();
(function (opt) {
	var hour = new Date().getHours();
	var dom = document.getElementById("time-period-greeting");
	if (dom) {
		var text;
		switch (true) {
			case hour >= 0 && hour < 6:
				text = "凌晨好";
				break;
			case hour >= 6 && hour <= 7:
				text = "早安";
				break;
			case hour > 7 && hour < 11:
				text = "上午好";
				break;
			case hour >= 11 && hour < 13:
				text = "中午好";
				break;
			case hour >= 13 && hour < 18:
				text = "下午好";
				break;
			case hour >= 18 && hour <= 21:
				text = "晚上好";
				break;
			case hour >= 22 && hour <= 23:
				text = "晚安";
				break;
		}
		document.getElementById("time-period-greeting").innerHTML =
			text + "，亲爱的访客";
	}
	var theme_image = document.getElementById("day-night-theme-image");
	var bodyRef = document.body;
	//day theme
	if (hour >= 6 && hour < 18) {
		bodyRef.classList.add("body-bg-day");
		var dayCss = opt.siteTheme.dayTheme.css;
		Object.keys(dayCss).forEach(function (cssKey) {
			bodyRef.style.setProperty(cssKey, dayCss[cssKey]);
		});
		if (theme_image) {
			theme_image.setAttribute("src", opt.siteTheme.dayTheme.image);
		}
		CustomizeToolBar.domList.blankAreaDom
			.getElementsByTagName("i")[0]
			.setAttribute(
				"class",
				CustomizeToolBar.classTokenList.toolBarIcon.dayBg
			);
	}
	//night theme
	else {
		bodyRef.classList.add("body-bg-night");
		var nightCss = opt.siteTheme.nightTheme.css;
		Object.keys(nightCss).forEach(function (cssKey) {
			bodyRef.style.setProperty(cssKey, nightCss[cssKey]);
		});
		if (theme_image) {
			theme_image.setAttribute("src", opt.siteTheme.nightTheme.image);
		}
		CustomizeToolBar.domList.blankAreaDom
			.getElementsByTagName("i")[0]
			.setAttribute(
				"class",
				CustomizeToolBar.classTokenList.toolBarIcon.nightBg
			);
	}
	//initialize bgm
	var au = document.createElement("audio");
	au.setAttribute("data-length", opt.bgm.length);
	au.setAttribute("data-url", opt.bgm.url);
	au.loop = true;
	document.body.appendChild(au);
	//toolbar theme
	var tbCss = opt.toolbarTheme;
	var tbDom = CustomizeToolBar.domList.toolBarDom;
	Object.keys(tbCss).forEach(function (cssKey) {
		tbDom.style.setProperty("--main-" + cssKey, tbCss[cssKey]);
	});
})(customizeThemeOpt);
window.onload = function () {
	CustomizeToolBar.toggleCssClass(
		CustomizeToolBar.domList.menuAreaDom,
		CustomizeToolBar.classTokenList.visibility.menuHide
	);
	var tip = document.querySelector(".customize-toolbar-blank-tip>div");
	tip.classList.remove("customize-toolbar-hide-tip");
	setTimeout(function () {
		tip.classList.add("customize-toolbar-hide-tip");
	}, 5000);
};

/*live2d动画自定义提示语*/

var l2d = {
	xb: "https://www.littlemeteor.me/wp-content/plugins/poster-girl-l2d-2233",
	move: "",
	mobile: "1",
	r18: "",
};

jQuery(document).on("copy", function () {
	showMessage("你都复制了些什么呀，转载要记得加上出处哦", 8000);
});
jQuery(".waifu-tool .fa-home").click(function () {
	window.location =
		window.location.protocol + "//" + window.location.hostname + "/";
});
var model_p = 22;
jQuery(".waifu-tool .fa-drivers-license-o").click(function () {
	loadlive2d(
		"live2d",
		l2d.xb + "/model/api.php?p=" + model_p + "&model=rand&r18=" + l2d.r18
	);
	if (model_p === 22) {
		model_p = 33;
		showMessage("33援交有点累了，现在该我上场了", 4000);
	} else {
		model_p = 22;
		showMessage("我又回来了！", 4000);
	}
});
jQuery(".waifu-tool .fa-comments").click(function () {
	showHitokoto();
});
jQuery(".waifu-tool .fa-street-view").click(function () {
	if (model_p === 22)
		loadlive2d(
			"live2d",
			l2d.xb + "/model/api.php?p=33&model=rand&r18=" + l2d.r18
		);
	else
		loadlive2d(
			"live2d",
			l2d.xb + "/model/api.php?p=22&model=rand&r18=" + l2d.r18
		);
	showMessage("我的新衣服好看嘛", 4000);
});
jQuery(".waifu-tool .fa-info-circle").click(function () {
	window.open("https://moedog.org/");
});
jQuery(".waifu-tool .fa-close").click(function () {
	sessionStorage.setItem("waifu-dsiplay", "none");
	showMessage("愿你有一天能与重要的人重逢", 2000);
	window.setTimeout(function () {
		jQuery(".waifu").hide();
	}, 1000);
});
jQuery(".waifu-tool .fa-camera").click(function () {
	showMessage("照好了嘛，是不是很可爱呢？", 8000);
	window.Live2D.captureName = "pic.png";
	window.Live2D.captureFrame = true;
});
loadlive2d("live2d", l2d.xb + "/model/api.php?p=33&model=rand&r18=" + l2d.r18);

function showHitokoto() {
	jQuery.post("https://api.fczbl.vip/hitokoto/", function (result) {
		showMessage(result);
	});
}

function showMessage(a, b) {
	if (b == null) b = 10000;
	jQuery(".waifu-tips").hide().stop();
	jQuery(".waifu-tips").html(a);
	jQuery(".waifu-tips").fadeTo("10", 1);
	jQuery(".waifu-tips").fadeOut(b);
}
(function () {
	var text;
	var SiteIndexUrl =
		window.location.protocol + "//" + window.location.hostname + "/";
	if (window.location.href == SiteIndexUrl) {
		var now = new Date().getHours();
		if (now > 23 || now <= 5) {
			text = "你是夜猫子呀？这么晚还不睡觉，明天起的来嘛";
		} else if (now > 5 && now <= 7) {
			text = "早上好！一日之计在于晨，今天又是元气满满的一天";
		} else if (now > 7 && now <= 11) {
			text = "上午好！工作顺利嘛，不要久坐，多起来走动走动哦！";
		} else if (now > 11 && now <= 14) {
			text = "中午了，工作了一个上午，现在是午餐时间！";
		} else if (now > 14 && now <= 17) {
			text = "午后很容易犯困呢，今天的运动目标完成了吗？";
		} else if (now > 17 && now <= 19) {
			text = "傍晚了！窗外夕阳的景色很美丽呢，最美不过夕阳红~";
		} else if (now > 19 && now <= 21) {
			text = "晚上好，今天过得怎么样？";
		} else if (now > 21 && now <= 23) {
			text = "已经这么晚了呀，早点休息吧，晚安~";
		} else {
			text = "嗨~ 快来逗我玩吧！";
		}
	} else {
		if (document.referrer !== "") {
			var referrer = document.createElement("a");
			referrer.href = document.referrer;
			var domain = referrer.hostname.split(".")[1];
			if (window.location.hostname == referrer.hostname) {
				text =
					'欢迎阅读<span style="color:#0099cc;">『' +
					document.title.split(" | ")[0] +
					"』</span>";
			} else if (domain == "baidu") {
				text =
					'Hello! 来自 百度搜索 的朋友<br>欢迎阅读<span style="color:#0099cc;">『' +
					document.title.split(" | ")[0] +
					"』</span>";
			} else if (domain == "bing") {
				text =
					'Hello! 来自 必应搜索 的朋友<br>欢迎阅读<span style="color:#0099cc;">『' +
					document.title.split(" | ")[0] +
					"』</span>";
			} else if (domain == "google") {
				text =
					'Hello! 来自 谷歌搜索 的朋友<br>欢迎阅读<span style="color:#0099cc;">『' +
					document.title.split(" | ")[0] +
					"』</span>";
			} else {
				text =
					'Hello! 来自 <span style="color:#0099cc;">' +
					referrer.hostname +
					"</span> 的朋友";
			}
		} else {
			text =
				'欢迎阅读<span style="color:#0099cc;">『' +
				document.title.split(" | ")[0] +
				"』</span>";
		}
	}
	if (l2d.mobile == 1) {
		jQuery(".waifu").animate(
			{
				top: jQuery(window).height() - 250,
			},
			800
		);
	} else {
		jQuery(".waifu").animate(
			{
				top: jQuery(window).height() - 150,
			},
			800
		);
	}
	showMessage(text, 8000);
})();
if (l2d.mobile == 1) {
	jQuery(window).resize(function () {
		jQuery(".waifu").css("top", window.innerHeight - 250);
	});
	jQuery("#live2d").mouseover(function () {
		msgs = [
			"你要干嘛呀？",
			"鼠…鼠标放错地方了！",
			"喵喵喵？",
			"萝莉控是什么呀？",
			"怕怕",
			"你看到我的小熊了吗",
		];
		var i = Math.floor(Math.random() * msgs.length);
		showMessage(msgs[i]);
	});
	jQuery(document).ready(function (jQuery) {
		jQuery(".menu-main-search.menu-search-animated").mouseover(function () {
			showMessage("找不到想要的？试试搜索吧！");
		});
		jQuery(
			'#access .menu-search-animated .searchform input[type="search"]'
		).focus(function () {
			showMessage("输入你想搜索的关键词再按Enter键就可以搜索啦!");
		});
		jQuery("#branding,.icon-bread-home").mouseover(function () {
			showMessage("点它就可以回到首页啦！");
		});
		jQuery(".waifu-tool .fa-comments").mouseover(function () {
			showMessage("猜猜我要说些什么？");
		});
		jQuery(".waifu-tool .fa-drivers-license-o").mouseover(function () {
			if (model_p === 22) showMessage("要见见我的姐姐嘛");
			else showMessage("什么？我的服务不好，要33回来？");
		});
		jQuery(".waifu-tool .fa-street-view").mouseover(function () {
			showMessage("喜欢换装play吗？");
		});
		jQuery(".waifu-tool .fa-camera").mouseover(function () {
			showMessage("你要给我拍照呀？一二三～茄子～");
		});
		jQuery(".waifu-tool .fa-info-circle").mouseover(function () {
			showMessage("想知道更多关于我的事么？");
		});
		jQuery(".waifu-tool .fa-close").mouseover(function () {
			showMessage("到了要说再见的时候了吗");
		});
		jQuery(document).on("click", "h2 a", function () {
			showMessage(
				'加载<span style="color:#0099cc;">' +
					jQuery(this).text() +
					"</span>中...请稍候",
				600
			);
		});
		jQuery(document).on("mouseover", "h2 a", function () {
			showMessage(
				'要看看<span style="color:#0099cc;">' +
					jQuery(this).text() +
					"</span>么？"
			);
		});
		jQuery(document).on("mouseover", ".prev", function () {
			showMessage("要翻到上一页吗?");
		});
		jQuery(document).on("mouseover", ".next", function () {
			showMessage("要翻到下一页吗?");
		});
		jQuery(document).on("mouseover", ".kratos-post-content a", function () {
			showMessage(
				'去 <span style="color:#0099cc;">' +
					jQuery(this).text() +
					"</span> 逛逛吧"
			);
		});
		jQuery(document).on("mouseover", "#submit", function () {
			showMessage("呐 首次评论需要审核，请耐心等待哦~");
		});
		jQuery(document).on("mouseover", ".OwO-logo", function () {
			showMessage("要来一发表情吗？");
		});
		jQuery(document).on("mouseover", ".nav-previous", function () {
			showMessage("点它可以后退哦！");
		});
		jQuery(document).on("mouseover", ".nav-next", function () {
			showMessage("点它可以前进哦！");
		});
		jQuery(document).on("mouseover", ".comment-reply-link", function () {
			showMessage("要说点什么吗");
		});
		jQuery(document).on("mouseover", ".wpl-likebox", function () {
			showMessage("我是不是棒棒哒~快给我点赞吧！");
		});
		jQuery(document).on("mouseover", ".must-log-in", function () {
			showMessage("登录才可以继续哦~");
		});
		jQuery(document).on("mouseover", ".Share", function () {
			showMessage("好东西要让更多人知道才行哦");
		});
		jQuery(document).on("click", "#author", function () {
			showMessage("留下你的尊姓大名！");
			jQuery(".waifu").animate(
				{
					top:
						jQuery("#author").offset().top -
						jQuery(window).scrollTop() -
						130,
					left: jQuery("#author").offset().left - 200,
				},
				{
					queue: false,
					duration: 800,
				}
			);
		});
		jQuery(document).on("click", "#email", function () {
			showMessage("留下你的邮箱，不然就是无头像人士了！");
			jQuery(".waifu").animate(
				{
					top:
						jQuery("#email").offset().top -
						jQuery(window).scrollTop() -
						130,
					left: jQuery("#email").offset().left - 200,
				},
				{
					queue: false,
					duration: 800,
				}
			);
		});
		jQuery(document).on("click", "#url", function () {
			showMessage("快快告诉我你的家在哪里，好让我去参观参观！");
			jQuery(".waifu").animate(
				{
					top:
						jQuery("#url").offset().top -
						jQuery(window).scrollTop() -
						130,
					left: jQuery("#url").offset().left - 200,
				},
				{
					queue: false,
					duration: 800,
				}
			);
		});
		jQuery(document).on("click", "#comment", function () {
			showMessage("一定要认真填写喵~");
			jQuery(".waifu").animate(
				{
					top:
						jQuery("#comment").offset().top -
						jQuery(window).scrollTop() -
						90,
					left: jQuery("#comment").offset().left - 170,
				},
				{
					queue: false,
					duration: 800,
				}
			);
		});
	});
	jQuery(document).ready(function (jQuery) {
		if (l2d.move == 1) {
			window.setInterval(function () {
				var temp = Math.random();
				if (temp > 0.35) {
					showMessage(showHitokoto());
				} else {
					msgs = [
						"乾坤大挪移！",
						"我飘过来了！~",
						"我飘过去了",
						"我得意地飘！~飘！~",
					];
					var i = Math.floor(Math.random() * msgs.length);
					s = [
						0.1,
						0.2,
						0.3,
						0.4,
						0.5,
						0.6,
						0.7,
						0.75,
						-0.1,
						-0.2,
						-0.3,
						-0.4,
						-0.5,
						-0.6,
						-0.7,
						-0.75,
					];
					var i1 = Math.floor(Math.random() * s.length);
					var i2 = Math.floor(Math.random() * s.length);
					jQuery(".waifu").animate(
						{
							left:
								((document.body.offsetWidth - 210) / 2) *
								(1 + s[i1]),
							top:
								window.innerHeight -
								240 -
								((window.innerHeight - 240) / 2) * (1 + s[i2]),
						},
						{
							duration: 2000,
							complete: showMessage(msgs[i]),
						}
					);
				}
			}, 40000);
		} else {
			window.setInterval(function () {
				showMessage(showHitokoto());
			}, 45000);
		}
		var stat_click = 0;
		jQuery("#live2d").click(function () {
			if (!ismove) {
				stat_click++;
				if (stat_click > 6) {
					msgs = [
						"你有完没完呀？",
						"你已经摸我" + stat_click + "次了",
						"非礼呀！救命！",
						"OH，My ladygaga",
						"110吗，这里有个变态一直在摸我(ó﹏ò｡)",
					];
					var i = Math.floor(Math.random() * msgs.length);
				} else {
					msgs = [
						"是…是不小心碰到了吧",
						"我跑呀跑呀跑！~~",
						"再摸的话我可要报警了！⌇●﹏●⌇",
						"别摸我，有什么好摸的！",
						"惹不起你，我还躲不起你么？",
						"不要摸我了，我会告诉老婆来打你的！",
						"干嘛动我呀！小心我咬你！",
					];
					var i = Math.floor(Math.random() * msgs.length);
				}
				s = [
					0.1,
					0.2,
					0.3,
					0.4,
					0.5,
					0.6,
					0.7,
					0.75,
					-0.1,
					-0.2,
					-0.3,
					-0.4,
					-0.5,
					-0.6,
					-0.7,
					-0.75,
				];
				var i1 = Math.floor(Math.random() * s.length);
				var i2 = Math.floor(Math.random() * s.length);
				jQuery(".waifu").animate(
					{
						left:
							((document.body.offsetWidth - 210) / 2) *
							(1 + s[i1]),
						top:
							window.innerHeight -
							240 -
							((window.innerHeight - 240) / 2) * (1 - s[i2]),
					},
					{
						duration: 500,
						complete: showMessage(msgs[i]),
					}
				);
			} else {
				ismove = false;
			}
		});
	});
	var ismove = false;
	jQuery(document).ready(function (jQuery) {
		var box = jQuery(".waifu")[0];
		var topCount = 20;
		box.onmousedown = function (e) {
			var Ox = e.offsetX;
			var Oy = e.offsetY;
			var Ch = document.documentElement.clientHeight;
			var Cw = document.documentElement.clientWidth;
			document.onmousemove = function (e) {
				var Cx = e.clientX;
				var Cy = e.clientY;
				box.style.left = Cx - Ox + "px";
				box.style.top = Cy - Oy + "px";
				if (box.offsetLeft < 0) {
					box.style.left = 0;
				} else if (box.offsetLeft + box.offsetWidth > Cw) {
					box.style.left = Cw - box.offsetWidth + "px";
				}
				if (box.offsetTop - topCount < 0) {
					box.style.top = topCount + "px";
				} else if (box.offsetTop + box.offsetHeight - topCount > Ch) {
					box.style.top = Ch - (box.offsetHeight - topCount) + "px";
				}
				ismove = true;
			};
			document.onmouseup = function (e) {
				document.onmousemove = null;
				document.onmouseup = null;
			};
		};
	});
}
