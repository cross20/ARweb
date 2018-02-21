<html>
<body>

  <?php
  $myfile = fopen("feedback.txt", "w") or die("Unable to open file");
  $name = echo $_POST["name"];
  $email = echo $_POST["email"];
  $feedback = echo $_POST["feedback"];

  $info = $name + $email + $feedback;

  fwrite($myfile, $info);

</body>
</html>
