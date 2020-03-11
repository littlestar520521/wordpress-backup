/*
 * 昼夜交替外观
 * 由Cloudflare app额外添加
 */
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
	var body = document.body;
	if (hour >= 6 && hour < 18) {
		body.classList.add('body-bg-day');
		body.style.setProperty('--widget-bg-color', 'rgb(247,247,220)');
		if (theme_image) {
			theme_image.setAttribute(
				'src',
				'https://static.littlesecret.cn/images/inserts/2c9883c0c3d7b75e0a3feee8354ddd9b_optimized.png'
			);
		}
	} else {
		body.classList.add('body-bg-night');
		body.style.setProperty('--widget-bg-color', 'rgb(81,99,123)');
		body.style.setProperty('--widget-font-color', '#ffb5a1');
		body.style.setProperty('--widget-title-color', 'lightcoral');
		body.style.setProperty('--widget-list-item-color', 'bisque');
		if (theme_image) {
			theme_image.setAttribute(
				'src',
				'https://static.littlesecret.cn/images/inserts/56f8dc7323d843977ec483846d01be74.png'
			);
		}
	}
}
