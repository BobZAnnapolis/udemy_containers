<html>
<head>
  <title>Prices</title>
</head>
<body>
  <h1>Apparel Prices:</h1>
  <ul>
    <?php
      foreach(json_decode(file_get_contents('http://prices')) as $price_item) {
        echo "<li>$price_item->name: $$price_item->price</li>";
      }
    ?>
  </ul>

<p>
  <h2>Core Apparel:</h1>
  <ul>
    <?php
      foreach(json_decode(file_get_contents('http://apparel')) as $apparel_item) {
        echo "<li>Name: $apparel_item->name</li>";
      }
    ?>
  </ul>

</p>
</body>
</html>
