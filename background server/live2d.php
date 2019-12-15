<?php
/*修改过后的live2d插件index.php文件，jQuery以及live2d库加载位于文档末，但是不用defer，后面有被依赖项*/

/*95行*/

wp_enqueue_script('jquery2','https://cdn.jsdelivr.net/gh/jquery/jquery@1.12.4/dist/jquery.min.js');wp_enqueue_script('live2d','https://cdn.jsdelivr.net/gh/xb2016/kratos-pjax@0.3.6/static/js/live2d.js');

