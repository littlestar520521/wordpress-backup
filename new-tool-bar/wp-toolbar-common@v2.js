if (!location.href.split('/')[3].startsWith('wp-')) {
	(function() {
		var div = document.createElement('div');
		div.setAttribute('id', 'wp-toolbar-customize');
		div.innerHTML =
			'<div class="customize-toolbar-pic"><div class="customize-toolbar-topline"></div><div class="customize-toolbar-topdot"></div><div class="customize-toolbar-core"></div></div><div class="customize-toolbar-menu"><div class="customize-toolbar-icon-set customize-toolbar-hide"><div class="customize-toolbar-icon" data-func="bing-wallpaper"><div class="customize-toolbar-icon-func" aria-label="change background image to today’s bing image"><i class="fa fa-paint-brush" aria-hidden="false"></i></div><div class="customize-toolbar-icon-tip">更换壁纸为Bing美图</div></div><div class="customize-toolbar-icon" data-func="bgm-controller"><div class="customize-toolbar-icon-func" aria-label="play or pause the BGM"><i class="fa fa-play" aria-hidden="false"></i></div><div class="customize-toolbar-icon-tip">播放背景音乐</div></div><div class="customize-toolbar-icon" data-func="back-to-top"><div class="customize-toolbar-icon-func" aria-label="go back to the top"><i class="fa fa-arrow-up" aria-hidden="false"></i></div><div class="customize-toolbar-icon-tip">返回顶部</div></div><div class="customize-toolbar-icon" data-func="hide-menu"><div class="customize-toolbar-icon-func" aria-label="close the menu"><i class="fa fa-angle-right" aria-hidden="false"></i></div><div class="customize-toolbar-icon-tip">隐藏菜单</div></div></div><div class="customize-toolbar-blank"><div class="customize-toolbar-blank-bg"><i class="" aria-hidden="true"></i></div><div class="customize-toolbar-blank-tip"><div class="customize-toolbar-hide-tip"><div>单击收起/展开菜单</div></div></div></div></div>';
		document.body.appendChild(div);
		var link = document.createElement('link');
		link.rel = 'stylesheet';
		link.href = 'http://cdn.jsdelivr.net/gh/littlestar520521/wordpress-backup/new-tool-bar/wp-toolbar-common.css';
		document.body.appendChild(link);

		window.CustomizeToolBar = window.CustomizeToolBar || {};
		CustomizeToolBar.themeOption = CustomizeToolBar.themeOption || {};
		CustomizeToolBar.classTokenList = {
			visibility: {
				toolBarHide: 'customize-toolbar-hide-all',
				menuHide: 'customize-toolbar-hide',
				iconClick: 'customize-toolbar-icon-clicking'
			},
			rotation: {
				picMove: 'customize-toolbar-pic-move',
				bgMove: 'customize-toolbar-pic-bg-move'
			},
			toolBarIcon: {
				dayBg: 'fa fa-sun-o',
				nightBg: 'fa fa-star',
				bgmPlay: 'fa fa-play',
				bgmPause: 'fa fa-pause'
			}
		};
		CustomizeToolBar.domList = {
			toolBarDom: document.getElementById('wp-toolbar-customize'),
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
				)
			},
			corePicDom: document.querySelector('.customize-toolbar-core'),
			blankAreaDom: document.querySelector('.customize-toolbar-blank'),
			menuAreaDom: document.querySelector('.customize-toolbar-icon-set')
		};
		CustomizeToolBar.width = 200;
		CustomizeToolBar.height = 200;

		var hour = new Date().getHours();
		if (hour >= 6 && hour < 18) {
			CustomizeToolBar.domList.blankAreaDom
				.getElementsByTagName('i')[0]
				.setAttribute(
					'class',
					CustomizeToolBar.classTokenList.toolBarIcon.dayBg
				);
		} else {
			CustomizeToolBar.domList.blankAreaDom
				.getElementsByTagName('i')[0]
				.setAttribute(
					'class',
					CustomizeToolBar.classTokenList.toolBarIcon.nightBg
				);
		}

		var styleList = CustomizeToolBar.domList.toolBarDom.style;
		themeOption['font-color']
			? styleList.setProperty('--main-font-color', themeOption['font-color'])
			: {};
		themeOption['bg-color']
			? styleList.setProperty('--main-bg-color', themeOption['bg-color'])
			: {};
		themeOption['border-shadow-color']
			? styleList.setProperty(
					'--main-border-shadow-color',
					themeOption['border-shadow-color']
			  )
			: {};
		themeOption['bg-hover-color']
			? styleList.setProperty(
					'--main-bg-hover-color',
					themeOption['bg-hover-color']
			  )
			: {};
		themeOption['toolbar-bg']
			? styleList.setProperty(
					'--main-core-bg',
					'url(' + themeOption['toolbar-bg'] + ')'
			  )
			: {};
		if (themeOption['bgm']) {
			var au = document.createElement('audio');
			au.src = themeOption['bgm'];
			au.loop = true;
			document.body.appendChild(au);
		}

		CustomizeToolBar.toggleCssClass = function(dom, className) {
			var classList = dom.classList;
			classList.contains(className)
				? classList.remove(className)
				: classList.add(className);
		};
		//Add mousedown and mouseup effect to all buttons
		var buttons = CustomizeToolBar.domList.buttonDomList;
		Object.keys(buttons).forEach(function(button) {
			var _this = buttons[button];
			_this.addEventListener('mousedown', function() {
				CustomizeToolBar.toggleCssClass(
					_this,
					CustomizeToolBar.classTokenList.visibility.iconClick
				);
			});
			_this.addEventListener('mouseup', function() {
				CustomizeToolBar.toggleCssClass(
					_this,
					CustomizeToolBar.classTokenList.visibility.iconClick
				);
			});
		});
		//back to top
		CustomizeToolBar.domList.buttonDomList.backToTopButton.addEventListener(
			'click',
			function() {
				window.scrollTo({ top: 0, behavior: 'smooth' });
				//TODO: Make the scroll speed under my control
			}
		);
		//close the menu
		CustomizeToolBar.domList.buttonDomList.closeMenuButton.addEventListener(
			'click',
			function() {
				CustomizeToolBar.toggleCssClass(
					CustomizeToolBar.domList.menuAreaDom,
					CustomizeToolBar.classTokenList.visibility.menuHide
				);
			}
		);
		CustomizeToolBar.domList.blankAreaDom.addEventListener(
			'click',
			function(e) {
				e.stopPropagation();
				if (e.detail === 1) {
					CustomizeToolBar.toggleCssClass(
						CustomizeToolBar.domList.menuAreaDom,
						CustomizeToolBar.classTokenList.visibility.menuHide
					);
				}
				return;
			}
		);
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
			var localCache = localStorage.getItem('today-bing-image');
			if (localCache) {
				var localObj = JSON.parse(localCache);
				if (
					new Date(localObj.time).getDate() !== new Date().getDate()
				) {
					getBingWallpaper();
				} else {
					//add image loading effect
					switchPicAnimation();
					var temp_img = document.createElement('img');
					temp_img.setAttribute('src', localObj.url);
					temp_img.addEventListener('load', function() {
						var bodyRef = document.body;
						if (!bodyRef.style.transition) {
							bodyRef.style.transition =
								'background-position-x 2s linear';
						}
						bodyRef.classList.add('bingwallpaper-bg-start');
						setTimeout(function() {
							bodyRef.classList.add('bingwallpaper-bg-end');
							bodyRef.style.backgroundImage = `url(${localObj.url})`;
							bingTip.innerHTML = '换回原来壁纸';
							switchPicAnimation();
						}, 2000);
					});
				}
			} else {
				getBingWallpaper();
			}
		}
		async function getBingWallpaper() {
			return new Promise(function(resolve, reject) {
				switchPicAnimation();
				var xhr = new XMLHttpRequest();
				xhr.open(
					'GET',
					'https://api.littlesecret.cn/wordpress/bingwallpaper'
				);
				xhr.responseType = 'text';
				xhr.onload = function() {
					if (xhr.readyState === 4 && xhr.status === 200) {
						resolve(xhr.responseText);
					} else {
						reject('xhr request has no valid response');
					}
				};
				xhr.onerror = function() {
					reject('there was a network error');
				};
				xhr.send();
			})
				.then(function(result) {
					var temp_img = document.createElement('img');
					temp_img.setAttribute('src', result);
					temp_img.addEventListener('load', function() {
						var bodyRef = document.body;
						if (!bodyRef.style.transition) {
							bodyRef.style.transition =
								'background-position-x 2s linear';
						}
						bodyRef.classList.add('bingwallpaper-bg-start');
						setTimeout(function() {
							bodyRef.classList.add('bingwallpaper-bg-end');
							bodyRef.style.backgroundImage = `url(${result})`;
							bingTip.innerHTML = '换回原来壁纸';
							switchPicAnimation();
						}, 2000);
						var store = {
							url: result,
							time: new Date().getTime()
						};
						localStorage.setItem(
							'today-bing-image',
							JSON.stringify(store)
						);
					});
				})
				.catch(function(err) {
					console.log(`Get image failed for the error '${err}'`);
				});
		}
		function backToOriginBackground() {
			var bodyRef = document.body;
			bodyRef.classList.remove('bingwallpaper-bg-end');
			setTimeout(function() {
				bodyRef.style.removeProperty('background-image');
				bodyRef.classList.remove('bingwallpaper-bg-start');
				bingTip.innerHTML = '更换壁纸为Bing美图';
			}, 2000);
		}
		bingBtn.addEventListener('click', function() {
			document.body.style.backgroundImage
				? backToOriginBackground()
				: getLocalBingWallpaper();
		});
		//background music
		var audioBtn = CustomizeToolBar.domList.buttonDomList.bgmControlButton;
		var audioIcon = audioBtn.getElementsByTagName('i')[0];
		var audioTip = audioBtn.nextElementSibling;
		audioBtn.addEventListener('click', function() {
			var audioDom = document.querySelector('audio');
			if (audioDom.paused || audioDom.played.length === 0) {
				audioDom.play();
				audioIcon.setAttribute(
					'class',
					CustomizeToolBar.classTokenList.toolBarIcon.bgmPause
				);
				audioTip.innerHTML = '暂停背景音乐';
			} else {
				audioDom.pause();
				audioIcon.setAttribute(
					'class',
					CustomizeToolBar.classTokenList.toolBarIcon.bgmPlay
				);
				audioTip.innerHTML = '播放背景音乐';
			}
		});

		window.onload = function() {
			CustomizeToolBar.toggleCssClass(
				CustomizeToolBar.domList.menuAreaDom,
				CustomizeToolBar.classTokenList.visibility.menuHide
			);
			var tip = document.querySelector(
				'.customize-toolbar-blank-tip>div'
			);
			tip.classList.remove('customize-toolbar-hide-tip');
			setTimeout(function() {
				tip.classList.add('customize-toolbar-hide-tip');
			}, 5000);
		};
	})();
}
