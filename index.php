<?php
// config file
include_once 'include/config.php';
$config = new Config();


if (check($__page, '?') > 0) $__page = $__page.'&';
else $__page = $__page;

$__pageAr = array_values(array_filter(explode('/', explode('?', rtrim($__page))[0])));


$n = null;

if ($__pageAr) {
	$page = $__pageAr[0];
	$n = (array_key_exists(1, $__pageAr) && $__pageAr[1]) ? $__pageAr[1] : null;
	$requestAr = explode('?', $__page);

	$config->request = isset($requestAr[1]) ? $requestAr[1] : null;
} else if (check($__page, '?')) $config->request = explode('?', $__page)[1];

//$do = isset($_GET['do']) ? $_GET['do'] : null;

$v = $config->get('v');
$temp = $config->get('temp');
$type = $config->get('type');
$do = $config->get('do');
$mode = $config->get('mode');
$_id = $config->get('id');

if ($do) header('Content-Type: text/plain; charset=utf-8');
else header('Content-Type: text/html; charset=utf-8');

if (!isset($page) || !$page) $page = 'exchange';


if (!file_exists('pages/'.$page.'.php')) $page = 'error';

$page_title = 'ADMIN';

if ($page) {
	include 'pages/'.$page.'.php';
	if (!$do && !$v && !$temp) include 'pages/templates/footer.php';
}
