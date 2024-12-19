<!DOCTYPE html>
<html lang="ru">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>GKI Info</title>
    <script src="https://telegram.org/js/telegram-web-app.js"></script>
</head>

<body>
    <style>
        body {
            font-family: Arial;
            background-color: #ddd;
        }
    </style>
    <h1>Добро пожаловать на GKI Info!!!</h1>

    <?php
    if (isset($_GET["chat_id"])) {
        echo "Привет, " . htmlspecialchars($_GET["chat_id"]);
    }
    ?>
    <span class="test"></span>

    <form method="post" action="bank.php">
        <button type="submit">Списать 10 монет</button>
    </form>

    <script>
        // Инициализация WebApp
        var WebApp = window.Telegram.WebApp;

        // Проверка, что WebAppUser доступен
        if (WebApp.initDataUnsafe && WebApp.initDataUnsafe.user) {
            var user = WebApp.initDataUnsafe.user;
            document.querySelector(".test").innerHTML = "Us: " + (user.username || "неизвестный пользователь");
        } else {
            document.querySelector(".test").innerHTML = "Us: данные пользователя недоступны";
        }
    </script>
</body>

</html>