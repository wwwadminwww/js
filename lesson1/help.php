<?php

$statusArray = Array(
    'good'=> Array(
        'status' => Array('1'),
        'error' => Array('0','6','251')
    ),
    'bad' => Array(
        'status' => Array('20','22'),
        'error' => Array('1','11','13','21','249','250','252')
    ),
    'unknown' => Array(
        'status' => Array('-3','-1','0','3','24','25'),
        'error' => Array('245','246','248','253')
    ),
    'error' => Array(
        'status' => Array('23'),
        'error' => Array('247','254','255')
    )
);

$statusCode = 20;
$errorCode = 6;

foreach ($statusArray as $status=>$codeArray){
    foreach ($codeArray['status'] as $code){
        if ($statusCode == $code) {
            $statusRes = $status;
        }
    }

    foreach ($codeArray['error'] as $code){
        if ($errorCode == $code){
            $errorRes = $status;
        }
    }
}

if ($statusCode == 20 && $errorCode == 6){
    $statusRes = 'good';
    $errorRes = 'good';
}

echo $statusRes . ' ' . $errorRes;


?>