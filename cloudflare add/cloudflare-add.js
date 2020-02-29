/*
 * 昼夜交替外观
 * 由Cloudflare app额外添加
 */

var hour = new Date().getHours(), text;
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
document.getElementById('time-period-greeting').innerHTML = text + '，亲爱的访客';
if (hour >= 6 && hour < 18) {
	document.body.classList.add('body-bg-day');
    document.body.style.setProperty('--widget-bg-color', 'rgba(247,247,210,0.9)');
} else {
	document.body.classList.add('body-bg-night');
    document.body.style.setProperty('--widget-bg-color', 'rgba(87,111,160,0.4)');
    document.body.style.setProperty('--widget-font-color', '#ffb5a1')
}
