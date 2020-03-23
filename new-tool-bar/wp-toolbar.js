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
(function() {
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
	CustomizeToolBar.domList.blankAreaDom.addEventListener('click', function(
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
		var localCache = localStorage.getItem('today-bing-image');
		if (localCache) {
			var localObj = JSON.parse(localCache);
			if (new Date(localObj.time).getDate() !== new Date().getDate()) {
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
})();
(function() {
	if (!location.href.startsWith('https://www.littlemeteor.me/wp-')) {
		var hour = new Date().getHours();
		var dom = document.getElementById('time-period-greeting');
		if (dom) {
			var text;
			switch (true) {
				case hour >= 0 && hour < 6:
					text = '凌晨好';
					break;
				case hour >= 6 && hour <= 7:
					text = '早安';
					break;
				case hour > 7 && hour < 11:
					text = '上午好';
					break;
				case hour >= 11 && hour < 13:
					text = '中午好';
					break;
				case hour >= 13 && hour < 18:
					text = '下午好';
					break;
				case hour >= 18 && hour <= 21:
					text = '晚上好';
					break;
				case hour >= 22 && hour <= 23:
					text = '晚安';
					break;
			}
			document.getElementById('time-period-greeting').innerHTML =
				text + '，亲爱的访客';
		}
		var theme_image = document.getElementById('day-night-theme-image');
		var bodyRef = document.body;
		//day theme
		if (hour >= 6 && hour < 18) {
			bodyRef.classList.add('body-bg-day');
			bodyRef.style.setProperty('--widget-bg-color', 'rgb(250,246,220)');
			if (theme_image) {
				theme_image.setAttribute(
					'src',
					'https://static.littlesecret.cn/images/inserts/2c9883c0c3d7b75e0a3feee8354ddd9b_optimized.png'
				);
			}
			CustomizeToolBar.domList.blankAreaDom
				.getElementsByTagName('i')[0]
				.setAttribute(
					'class',
					CustomizeToolBar.classTokenList.toolBarIcon.dayBg
				);
			CustomizeToolBar.themeOption = {
				'font-color': 'coral',
				'bg-color': 'beige',
				'border-shadow-color': 'lightcoral',
				'bg-hover-color': 'lightpink'
			};
		}
		//night theme
		else {
			bodyRef.classList.add('body-bg-night');
			bodyRef.style.setProperty('--widget-bg-color', 'rgb(81,99,123)');
			bodyRef.style.setProperty('--widget-font-color', '#ffb5a1');
			bodyRef.style.setProperty('--widget-title-color', 'lightcoral');
			bodyRef.style.setProperty('--widget-list-item-color', 'bisque');
			if (theme_image) {
				theme_image.setAttribute(
					'src',
					'https://static.littlesecret.cn/images/inserts/56f8dc7323d843977ec483846d01be74.png'
				);
			}
			CustomizeToolBar.domList.blankAreaDom
				.getElementsByTagName('i')[0]
				.setAttribute(
					'class',
					CustomizeToolBar.classTokenList.toolBarIcon.nightBg
				);
			CustomizeToolBar.themeOption = {
				'font-color': 'coral',
				'bg-color': 'beige',
				'border-shadow-color': 'lightcoral',
				'bg-hover-color': 'lightpink'
			};
		}
		//initialize bgm
		var au = document.createElement('audio');
		au.src = 'https://static.littlesecret.cn/sounds/f489ef6891c845118289514633c565fe.mp3';
		au.loop = true;
		document.body.appendChild(au);
	}
})();
(function(opt) {
	CustomizeToolBar.setCustomizeColor = function() {
		var styleList = this.domList.toolBarDom.style;
		opt['font-color']
			? styleList.setProperty('--main-font-color', opt['font-color'])
			: {};
		opt['bg-color']
			? styleList.setProperty('--main-bg-color', opt['bg-color'])
			: {};
		opt['border-shadow-color']
			? styleList.setProperty(
					'--main-border-shadow-color',
					opt['border-shadow-color']
			  )
			: {};
		opt['bg-hover-color']
			? styleList.setProperty(
					'--main-bg-hover-color',
					opt['bg-hover-color']
			  )
			: {};
	};
	CustomizeToolBar.setCustomizeColor();
})(CustomizeToolBar.themeOption);
window.onload = function() {
	CustomizeToolBar.toggleCssClass(
		CustomizeToolBar.domList.menuAreaDom,
		CustomizeToolBar.classTokenList.visibility.menuHide
	);
	var tip = document.querySelector('.customize-toolbar-blank-tip>div');
	tip.classList.remove('customize-toolbar-hide-tip');
	setTimeout(function() {
		tip.classList.add('customize-toolbar-hide-tip');
	}, 5000);
};
