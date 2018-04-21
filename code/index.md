---
layout: my-default
title: code
---



<div class="container">


    <div class="fixed" id="featured">
   <a href="/code/matrix"><img class="center" src="/assets/png/matrix.png" ></a>
    <div class="border"></div>
    <p class = "code"><a id="title" href="/code/paren">matrix</a></p>
    <p class = "code">Multiply, add, transpose, and average matrices like it's going out of style!</p>

  </div>

<div class="fixed" id="featured">
    <a href="/code/prime"><img class="center" src="/assets/png/prime.png"></a>
    <div class="border"></div>
    <p class="code"><a id="title" href="/code/prime">prime</a></p>
    <p class="code">Output the first million primes!</p>

  </div>

<div class="fixed" id="featured">
    <a href="/code/pi"><img class="center" src="/assets/png/pi.png" ></a>
    <div class="border"></div>
    <p class="code"><a id="title" href="/code/pi">pi</a></p>
    <p class="code">Serve up delicious homemade pi!</p>

  </div>

    <div class="fixed" id="featured">
   <a href="/code/palindrome/"><img class="center" src="/assets/png/palindrome.png"></a>
    <div class="border"></div>
    <p class="code"><a id="title" href="/code/palindrome">palindrome</a></p>
    <p class="code">Determine whether your string is a palindrome!</p>

  </div>


    <div class="fixed" id="featured">
   <a href="/code/debi"><img class="center" src="/assets/png/debi.png" ></a>
    <div class="border"></div>
    <p class = "code"><a id="title" href="/code/debi">debi</a></p>
    <p class = "code">Convert your <b>DE</b>cimal to <b>BI</b>nary and vice versa! Helpful for Assembly courses.</p>

  </div>

    <div class="fixed" id="featured">
   <a href="/code/paren"><img class="center" src="/assets/png/paren.png"></a>
    <div class="border"></div>
    <p class = "code"><a id="title" href="/code/paren">paren</a></p>
    <p class = "code">Check whether your string of parens are balanced or not! Write LISP without fear!</p>

  </div>


</div>


<hr />

# make checksums, not war

adapted from the "Verifying file integrity and its digital signature" section of <a href="https://www.voidlinux.eu/download/#verifying-file-integrity-and-its-digital-signature">the Void Linux download page.</a>

Copyright 2008-2017 Juan RP and contributors

<br />

My GPG Keys:

signer = `liam beckman ("I only want to live in peace, plant potatoes, and dream!" -Tove Jansson) <lbeckman314@gmail.com>`

key id = `AC1CC079`

key fingerprint = `2C81 8D24 2991 72E8 57D1  B235 144F 39B7 AC1C C079`


```shell
#-------------------------------#
# RECIEVE GPG KEYS
#-------------------------------#

gpg --keyserver pgp.mit.edu --recv-keys AC1CC079

#-------------------------------#
# RECIEVE SHA256SUMS
#-------------------------------#

wget http://www.liambeckman.com/code/sha256sums.txt{,.sig}
# or if you prefer curl:
# curl http://www.liambeckman.com/code/sha256sums.txt{,.sig} -o sha256sums.txt -o sha256sums.txt.sig

#-------------------------------#
# VERIFY SHA256SUMS
#-------------------------------#

gpg --verify sha256sums.txt.sig

# gpg: Signature made Tue Oct 31 11:11:11 2017 PDT using RSA key ID AC1CC079
# gpg: Good signature from "liam beckman ("I only want to live in peace, plant potatoes, and dream!" -Tove Jansson) <lbeckman314@gmail.com>" [unknown]

#-------------------------------#
# VERIFY FILE INTEGRITY
#-------------------------------#

sha256sum -c sha256sums.txt 2>/dev/null | grep EXAMPLE.tar.gz

# EXAMPLE.tar.gz: OK

#-------------------------------#
# OPTIONALLY REMOVE PUBLIC KEY
#-------------------------------#

# to remove my public key from your public key ring, simply
gpg --delete-key AC1CC079
```

