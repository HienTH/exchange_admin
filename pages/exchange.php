<?php

if ($type == 'coins') {

}
else if ($n) {
    $page_title = 'User info';
    include 'templates/header.php';

    $config->addJS(-1, 'https://cdnjs.cloudflare.com/ajax/libs/raphael/2.1.0/raphael-min.js');
    $config->addJS('plugins', 'morris/morris.min.js');

    $config->addJS('dist', $page.'/form.js');
    $config->addJS('dist', $page.'/view.js');

    include 'templates/'.$page.'/edit.php';
}
else if ($mode == 'matchexchange') {
    $page_title = 'Giao Dịch Đã Khớp';
    include 'templates/header.php';

    $config->addJS('plugins', 'DataTables/datatables.min.js');    
    $config->addJS('dist', $page.'/'.$mode.'.js');

    include 'templates/'.$page.'/'.$mode.'.php';
}
else if ($mode == 'waiting') {
    $page_title = 'Giao Dịch Đang Chờ';
    include 'templates/header.php';

    $config->addJS('plugins', 'DataTables/datatables.min.js');
    $config->addJS('dist', $page.'/'.$mode.'.js');

    include 'templates/'.$page.'/'.$mode.'.php';
}
else {
    $page_title = 'Danh Sách Giao Dịch';
    include 'templates/header.php';

    $config->addJS('plugins', 'DataTables/datatables.min.js');
    $config->addJS('dist', $page.'/list.js');

	include 'templates/'.$page.'/list.php';
}
