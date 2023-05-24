<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Home Page</title>
</head>

<body>

    <h1>Welcome to PHP Website</h1>
    <h2>Created by JohnBryce</h2>

    <?php
        $a = 10;
        $b = 20;
        $sum = $a + $b;
        echo "<p>$a + $b = $sum</p>";
    ?>

    <hr>

    <p>
        <?php
            $a = 10;
            $b = 20;
            $sum = $a + $b;
            echo "$a + $b = $sum";
        ?>
    </p>

    <hr>
    
    <p>Server Date and Time (Israel time): </p>
    <?php 
        $time = new DateTimeZone("Israel");
        $currentTime = new DateTime("now", $time);
        echo "<p>" . $currentTime->format("d/m/Y H:i:s") . "</p>"
    ?>
    
    <hr>
    
    <h4>End of page...</h4>

</body>

</html>