<?php
$token = '7600941340:AAF6MjBwenwZCiFUHkWIVZf7hAcYnHZu18Y';

$update = json_decode(file_get_contents('php://input'), true);

if (isset($update['pre_checkout_query'])) {
    $preCheckoutQuery = $update['pre_checkout_query'];
    $query_id = $preCheckoutQuery['id'];
    $chat_id = $preCheckoutQuery['from']['id'];
    $amount = $preCheckoutQuery['total_amount'];
    $currency = $preCheckoutQuery['currency'];
    $invoice_payload = $preCheckoutQuery['invoice_payload'];

    $url = "https://api.telegram.org/bot$token/answerPreCheckoutQuery";
    $post_fields = array(
        'pre_checkout_query_id' => $query_id,
        'ok' => true
    );

    $ch = curl_init();
    curl_setopt($ch, CURLOPT_HTTPHEADER, array(
        "Content-Type:application/json"
    ));
    curl_setopt($ch, CURLOPT_URL, $url);
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
    curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode($post_fields));
    curl_exec($ch);
    curl_close($ch);
}

if (isset($update['message']['successful_payment'])) {
    $successfulPayment = $update['message']['successful_payment'];
    $chat_id = $update['message']['chat']['id'];
    $amount = $successfulPayment['total_amount'];
    $currency = $successfulPayment['currency'];
    $invoice_payload = $successfulPayment['invoice_payload'];

    $url = "https://api.telegram.org/bot$token/sendMessage";
    $post_fields = array(
        'chat_id' => $chat_id,
        'text' => "Спасибо за оплату! Ваш платеж на сумму $amount $currency успешно получен."
    );

    $ch = curl_init();
    curl_setopt($ch, CURLOPT_HTTPHEADER, array(
        "Content-Type:application/json"
    ));
    curl_setopt($ch, CURLOPT_URL, $url);
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
    curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode($post_fields));
    curl_exec($ch);
    curl_close($ch);
}
?>