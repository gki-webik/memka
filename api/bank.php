<?php
$token = '7600941340:AAF6MjBwenwZCiFUHkWIVZf7hAcYnHZu18Y';
$chat_id = '6317166538';
$provider_token = '';

function sendInvoice($chat_id, $token, $provider_token)
{
    $url = "https://api.telegram.org/bot$token/sendInvoice";
    $post_fields = array(
        'chat_id' => $chat_id,
        'title' => 'Coin Booster Pack',
        'description' => 'Получите 10 монет за 15 звезд',
        'payload' => 'unique_payload',
        'provider_token' => $provider_token,
        'currency' => 'XTR',
        'prices' => json_encode(array(array('label' => 'Монеты', 'amount' => 3))),
        'start_parameter' => 'get_access'
    );

    $options = array(
        'http' => array(
            'header' => "Content-type: application/json\r\n",
            'method' => 'POST',
            'content' => json_encode($post_fields),
        ),
    );
    $context = stream_context_create($options);
    $result = file_get_contents($url, false, $context);
    return $result;
}

echo sendInvoice($chat_id, $token, $provider_token);

echo sendInvoice($chat_id, $token, $provider_token);
?>