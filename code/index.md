---
layout: my-default
title: code
--- 


<!--<!DOCTYPE html>-->
<html>
<body>
<style>

a#title {
    font-size: 1.6em;
}

</style>


<br />

<h2>Featured!</h2>

<div class="container">

<div class="fixed" id="featured" style="border: solid 1px #d5d5d5; width: 30%">
    <a href="http://liambeckman.com/codeliber8/"><img class="center" src="/images/circleCabin.png" style="width: 60%; padding-bottom: 10px;"></a>
    <p style="text-align: center; padding-top: 10px;">
    <a href="https://github.com/lbeckman314/liber8/"><img src="/assets/octicons-5.0.1/lib/svg/mark-github.svg"> source</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    <a href="https://github.com/lbeckman314/liber8/zipball/master"><img src="/assets/octicons-5.0.1/lib/svg/file-zip.svg"> zip</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    <a href="https://github.com/lbeckman314/liber8/tarball/master"><img src="/assets/octicons-5.0.1/lib/svg/file-zip.svg"> tar.gz</a></p>
    <div class="border"></div>
    <p style="text-align: center; padding-bottom: 10px;">
    <a id="title" href="https://lbeckman314.github.io/liber8">liber8</a></p>
    <p style="text-align: center; padding-bottom: 10px;">This program helps organize your code and prose!</p>

  </div>

<div class="fixed" id="featured" style="border: solid 1px #d5d5d5; width: 30%;">
    <a href="http://liambeckman.com/codeitsAlive/"><img class="center" src="/images/circleCabin.png" style="width: 60%; padding-bottom: 10px;"></a>
    <p style="text-align: center; padding-top: 10px;">
    <a href="https://github.com/lbeckman314/itsAlive/"><img src="/assets/octicons-5.0.1/lib/svg/mark-github.svg"> source</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    <a href="https://github.com/lbeckman314/itsAlive/zipball/master"><img src="/assets/octicons-5.0.1/lib/svg/file-zip.svg"> zip</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    <a href="https://github.com/lbeckman314/itsAlive/tarball/master"><img src="/assets/octicons-5.0.1/lib/svg/file-zip.svg"> tar.gz</a></p>
    <div class="border"></div>
    <p style="text-align: center; padding-bottom: 10px;"><a id="title" href="https://lbeckman314.github.io/itsAlive">⚡ IT’S ALIVE!!! ⚡</a></p>
    <p style="text-align: center; padding-bottom: 10px;">This program installs my favorite applications and packages on a fresh ubuntu or ubuntu-based install!</p>

  </div>

  <div class="fixed" id="featured" style="border: solid 1px #d5d5d5; width: 30%">
   <a href="http://liambeckman.com/coderedOctober/"> <img class="center" src="/images/circleCabin.png" style="width: 60%; padding-bottom: 10px;"></a>
    <p style="text-align: center; padding-top: 10px;">
    <a href="https://github.com/lbeckman314/redOctober/"><img src="/assets/octicons-5.0.1/lib/svg/mark-github.svg"> source</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
   <a href="https://github.com/lbeckman314/redOctober/zipball/master"><img src="/assets/octicons-5.0.1/lib/svg/file-zip.svg"> zip</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
   <a href="https://github.com/lbeckman314/redOctober/tarball/master"><img src="/assets/octicons-5.0.1/lib/svg/file-zip.svg"> tar.gz</a></p>
    <div class="border"></div>
    <p style="text-align: center; padding-bottom: 10px;"><a id="title" href="https://lbeckman314.github.io/redOctober">redOctober</a></p>
    <p style="text-align: center; padding-bottom: 10px;">This program parses a subtitle file (.svg) and adjusts timestamps. <strike>so i can finally watch my torrent of <em>Smultronstället</em></strike></p>

  </div>

   <div class="fixed" id="featured" style="border: solid 1px #d5d5d5; width: 30%">
   <a href="http://liambeckman.com/codeiLoveHateHumanRobot/"> <img class="center" src="/images/circleCabin.png" style="width: 60%; padding-bottom: 10px;"></a>
    <p style="text-align: center; padding-top: 10px;">
    <a href="https://github.com/lbeckman314/iLoveHateHumanRobot/"><img src="/assets/octicons-5.0.1/lib/svg/mark-github.svg"> github</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    <a href="https://github.com/lbeckman314/iLoveHateHumanRobot/zipball/master"><img src="/assets/octicons-5.0.1/lib/svg/file-zip.svg"> zip</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    <a href="https://github.com/lbeckman314/iLoveHateHumanRobot/tarball/master"><img src="/assets/octicons-5.0.1/lib/svg/file-zip.svg"> tar.gz</a></p>
    <div class="border"></div>
    <p style="text-align: center; padding-bottom: 10px;"><a id="title" href="https://lbeckman314.github.io/iLoveHateHumanRobot">I LOVE?HATE HUMAN?ROBOT</a></p>
    <p style="text-align: center; padding-bottom: 10px;">This program helps you be on the <strike>right</strike> winning side of the eventual robopocalypse!</p>

  </div>


</div>

<br /><br /><br />

</body>
</html>


# practice safe file downloads

adapted from the "Verifying file integrity and its digital signature" section of <a href="https://www.voidlinux.eu/download/#verifying-file-integrity-and-its-digital-signature">the Void Linux download page</a>  
Copyright 2008-2017 Juan RP and contributors

<br />

signer = `liam beckman ("I only want to live in peace, plant potatoes, and dream!" -Tove Jansson) <lbeckman314@gmail.com>`  
key id = `AC1CC079`  
key fingerprint = `2C81 8D24 2991 72E8 57D1  B235 144F 39B7 AC1C C079`  

<br />

```shell
gpg --keyserver pgp.mit.edu --recv-keys AC1CC079  
wget http://www.liambeckman.com/code/sha256sums.txt{,.asc}
gpg --verify sha256sums.txt.asc

# gpg: Signature made Sun Feb  8 12:33:05 2015 CET using RSA key ID 482F9368
# gpg: Good signature from "liam beckman ("I only want to live in peace, plant potatoes, and dream!" -Tove Jansson) <lbeckman314@gmail.com>" [unknown]

sha256sum -c sha256sums.txt 2>/dev/null | grep example_file.tar.gz

# example_file.tar.gz: OK
```