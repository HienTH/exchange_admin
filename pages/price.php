<?php
$id = (isset($__pageAr[2]) ? $__pageAr[2] : null);

if (!$n) header('Location: '.$config->nLink);

if ($n) {
    if ($id) {
        $page_title = $id;
    } else {
        $page_title = 'Giá Chênh Lệch';
    }

    include 'templates/header.php';

    if ($id) {

        if ($mode == 'stat') {
            $config->addJS('plugins', 'chartjs/Chart.min.js');
            $page_title = $id.' - Stat';
        } else if ($mode == 'edit') {
            $config->addJS('dist', 'jquery.filedrop.js');
            $config->addJS('dist', $page.'/form.js');
            $config->addJS('dist', $page.'/'.$n.'.edit.js');

            include 'templates/'.$page.'/'.$n.'.edit.php';
        }

        if ($mode) {

        } else {
            $config->addJS('plugins', 'chartjs/Chart.min.js');

            $config->addJS('dist', 'jquery.filedrop.js');
            $config->addJS('dist', $page.'/form.js');
            $config->addJS('dist', $page.'/'.$n.'.edit.js');
    
            $config->addJS('plugins', 'DataTables/datatables.min.js');
    
            //if ($n != 'servicenode') $config->addJS('dist', $page.'/'.$n.'.view.js');
    
            include 'templates/'.$page.'/'.$n.'.view.php';
        }

    } else {
        $config->addJS('plugins', 'DataTables/datatables.min.js');
        $config->addJS('dist', $page.'/'.$n.'.list.js');

        include 'templates/'.$page.'/'.$n.'.list.php';
    }
}
