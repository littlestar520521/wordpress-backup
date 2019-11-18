<?php
/**
 * EnlighterJs插件资源加载设置
 */

/**
 * 263行，加载css库文件改为自有CDN提供，GitHub仓库没有这个2.13版本的，所以不能用jsdeliver
 * 这个版本里我移除了不用的样式，只保留了我在使用的Enlighter样式
 */
$this->enqueueStyle('enlighter-local', 'https://static.littlesecret.cn/wp-content/enlighterjs/EnlighterJS.min.css');

/**
 * 328行，加载js库文件改为自有CDN提供，GitHub仓库没有这个2.13版本的，所以不能用jsdeliver
 */
$this->enqueueScript('enlighter-local', 'https://static.littlesecret.cn/wp-content/enlighterjs/EnlighterJS.min.js');