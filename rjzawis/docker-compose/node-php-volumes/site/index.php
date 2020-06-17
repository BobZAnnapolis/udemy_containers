<html>

<body>
  <h1>Team Name:</h1>
  <ul>
  <?php
    foreach(json_decode(file_get_contents('http://players'))->players as $player) {
      echo "<li>$player</li>";
    }
  ?>
  </ul>

</body>

</html>
