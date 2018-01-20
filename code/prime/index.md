---
layout: my-default
title: code
---



<div class="container">

<div class="fixed" id="featured" style="border: solid 1px #d5d5d5; width: 90%">
    <a href="http://liambeckman.com/codeliber8/"><img class="center" src="/images/circleCabin.png" style="width: 20%; padding-bottom: 10px;"></a>
    <div class="border"></div>
    <p style="text-align: center; padding-bottom: 10px;">
    <a id="title" href="https://lbeckman314.github.io/liber8">liber8</a></p>
    <p style="text-align: center; padding-bottom: 10px;">This program helps organize your code and prose!</p>

  </div>


</div>

<br /><br /><br />


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

# gpg: Signature made Tue Oct 31 11:11:11 2017 PDT using RSA key ID AC1CC079
# gpg: Good signature from "liam beckman ("I only want to live in peace, plant potatoes, and dream!" -Tove Jansson) <lbeckman314@gmail.com>" [unknown]

sha256sum -c sha256sums.txt 2>/dev/null | grep example_file.tar.gz

# example_file.tar.gz: OK
```

