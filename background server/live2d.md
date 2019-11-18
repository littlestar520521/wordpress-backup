# 对live2d自定义换装API的修改

返回图片链接改用自有CDN链接，不再从源服务器加载资源图片，提升速度

原始图片链接代码`'.$person.'/textures/texture_00.png`,
改为：
`https://static.littlesecret.cn/wp-content/bilibili2233/model/'.$person.'/textures/texture_00.png`
