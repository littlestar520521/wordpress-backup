var themeOption = {
	'font-color': 'coral',
	'bg-color': 'beige',
	'border-shadow-color': 'lightcoral',
	'bg-hover-color': 'lightpink'
};
window.CustomizeToolBar = window.CustomizeToolBar || {};
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
})(themeOption);
(function() {
	CustomizeToolBar.toggleCssClass = function(dom, className) {
		var classList = dom.classList;
		classList.contains(className)
			? classList.remove(className)
			: classList.add(className);
	};
	CustomizeToolBar.toggleCorePicRotateY = function() {
		this.toggleCssClass(
			this.domList.corePicDom,
			this.classTokenList.rotation.bgMove
		);
	};
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
})();
(function() {
	CustomizeToolBar.domList.buttonDomList.backToTopButton.addEventListener(
		'click',
		function() {
			window.scrollTo({ top: 0, behavior: 'smooth' });
		}
	);
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
})();
(function() {
	var tip = document.querySelector('.customize-toolbar-blank-tip>div');
	tip.classList.remove('customize-toolbar-hide-tip');
	setTimeout(function() {
		tip.classList.add('customize-toolbar-hide-tip');
	}, 5000);
})();
