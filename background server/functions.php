<?php

/*jQuery加速，移除WordPress内联jQuery*/
wp_deregister_script('jquery'); 
wp_register_script('jquery', '', true, '1.12.4'); 