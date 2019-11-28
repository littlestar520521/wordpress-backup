<?php

/*jQuery加速，移除WordPress内联jQuery，这个没法用defer属性*/
wp_deregister_script('jquery'); 
wp_register_script('jquery', '', true, '1.12.4'); 
wp_enqueue_script('jquery'); 