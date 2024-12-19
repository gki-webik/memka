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

    $ch = curl_init();
    curl_setopt($ch, CURLOPT_HTTPHEADER, array(
        "Content-Type:application/json"
    ));
    curl_setopt($ch, CURLOPT_URL, $url);
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
    curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode($post_fields));
    $output = curl_exec($ch);
    curl_close($ch);
    return $output;
}

echo sendInvoice($chat_id, $token, $provider_token);
?>