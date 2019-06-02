<?php
$img = imagecreate($_GET["length_img"], $_GET["height_img"]);
$white = imagecolorallocate($img, 255, 255, 255);
$color = array($blue =  imagecolorallocate($img, 0, 0, 255),
               $red = imagecolorallocate($img, 255, 0, 0),
               $green = imagecolorallocate($img, 0, 255, 0),
               $black = imagecolorallocate($img, 0, 0, 0),
               $yellow = imagecolorallocate($img, 255, 255, 0));
for ($cnt = 0; $cnt < $_GET["amt_circle"]; $cnt++) {
  imageellipse($img, rand($_GET["rad_circle"] +1, $_GET["length_img"] - $_GET["rad_circle"] -1),
              rand($_GET["rad_circle"] +1, $_GET["height_img"] - $_GET["rad_circle"] -1),
              $_GET["rad_circle"]*2, $_GET["rad_circle"]*2, $color[array_rand($color)]);
}
header("Content-type: image/png");
imagepng($img);
imagepng($img, 'circules.png');
imagedestroy($img);
 ?>
