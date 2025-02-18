<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>404 Not Found</title>
    <style>
        body {
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
            background-color: #282c34;
            color: white;
            font-family: Arial, sans-serif;
            text-align: center;
        }
        .container {
            position: relative;
        }
        .error {
            font-size: 80px;
            font-weight: bold;
            animation: bounce 1s infinite alternate;
        }
        @keyframes bounce {
            0% { transform: translateY(0); }
            100% { transform: translateY(-20px); }
        }
        .message {
            font-size: 20px;
            margin-top: 10px;
        }
        .btn {
            margin-top: 20px;
            padding: 10px 20px;
            background-color: #61dafb;
            border: none;
            color: black;
            font-size: 18px;
            cursor: pointer;
            border-radius: 5px;
        }
        .btn:hover {
            background-color: #21a1f1;
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="error">404</div>
        <div class="message">Oops! The page you're looking for doesn't exist.</div>
        <button class="btn" onclick="goHome()">Go Home</button>
    </div>
    <script>
        function goHome() {
            window.location.href = "/";
        }
    </script>
</body>
</html>

