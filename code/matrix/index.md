---
layout: my-default
title: code
---

<div class="container">


<div class="fixed" id="featured" style="border: solid 1px #d5d5d5; width: 100%; margin: 0%">
    <a href="https://www.github.com/lbeckman314/matrix"><img class="center" src="/assets/png/matrix.png"></a>
    <div class="border-code"></div>
    <p class="center">
    <a id="title" href="https://www.github.com/lbeckman314/matrix">matrix</a></p>
    <p class = "code">Multiply, add, transpose, and average matrices like it's going out of style!</p>

    <ul class="code">
        <li class="code"><a href="matrix.zip"><img src="/assets/svg/octicons-5.0.1/lib/svg/file-zip.svg"> zip</a></li>
        <li class="code"><a href="matrix.tar.gz"><img src="/assets/svg/octicons-5.0.1/lib/svg/file-zip.svg"> tar.gz</a></li>
        <li class="code"><a href="https://github.com/lbeckman314/matrix/"><img src="/assets/svg/octicons-5.0.1/lib/svg/code.svg"> github</a> / <a href="https://git.liambeckman.com/cgit/matrix.git">cgit</a></li>
        <li class="code"><a href="sha256sums.txt"><img src="/assets/svg/octicons-5.0.1/lib/svg/file-text.svg"> sha256sums</a></li>
    </ul>

  </div>


</div>


<br />
<br />

This program uses the [Sieve of Eratosthenes](https://en.wikipedia.org/wiki/Sieve_of_Eratosthenes) to compute the first million primes. On my laptop it takes about 30 seconds, but it may be faster or slower on yours. [See it in action!](https://asciinema.org/a/CUqAnP8NgipoPTlQo2apmAErB)

<br />

```
n:             nth Prime:
5              11
10             29
100            541
1000           7919
10000          104729
100000         1299709
1000000        15485863

found in 31.0171 seconds
```

<br />
<br />

# Installation



<br />

<h2 class="code">1. Download</h2>

```shell
wget http://www.liambeckman.com/code/matrix/matrix.tar.gz
# or if you prefer curl:
# curl http://www.liambeckman.com/code/matrix/matrix.tar.gz -o matrix.tar.gz
```

<br />



<h2 class="code">Optional (but recommended): verify file integrity</h2>

```shell
#-------------------------------#
# RECIEVE GPG KEYS
#-------------------------------#

gpg --keyserver pgp.mit.edu --recv-keys AC1CC079

#-------------------------------#
# RECIEVE SHA256SUMS
#-------------------------------#

wget http://www.liambeckman.com/code/matrix/sha256sums.txt{,.sig}
# or if you prefer curl:
# curl http://www.liambeckman.com/code/matrix/sha256sums.txt{,.sig} -o sha256sums.txt -o sha256sums.txt.sig

#-------------------------------#
# VERIFY SHA256SUMS
#-------------------------------#

gpg --verify sha256sums.txt.sig

# gpg: Signature made Tue Oct 31 11:11:11 2017 PDT using RSA key ID AC1CC079
# gpg: Good signature from "liam beckman ("I only want to live in peace, plant potatoes, and dream!" -Tove Jansson) <lbeckman314@gmail.com>" [unknown]

#-------------------------------#
# VERIFY FILE INTEGRITY
#-------------------------------#

sha256sum -c sha256sums.txt

# matrix.tar.gz: OK
# matrix.zip: OK

#-------------------------------#
# OPTIONALLY REMOVE PUBLIC KEY
#-------------------------------#

# to remove my public key from your public key ring, simply
gpg --delete-key AC1CC079
```

<br />

<h2 class="code">2. Extract</h2>


```shell
tar -zxvf matrix.tar.gz
# or if you downloaded the zip file
# unzip matrix.zip
```

<br />

<h2 class="code">3. Compile and run</h2>


```shell
chmod u+x matrix/src/matrix
./matrix/src/matrix add m1 m1

chmod u+x matrix/src/p1gradingscript
./matrix/src/p1gradingscript
```

<br />
<br />

# Uninstallation

<br />

<h2 class="code">1. Delete the directory/folder.</h2>

```shell
rm -rfI matrix
```


<script>
var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function() {
        this.classList.toggle("active");
        var panel = this.nextElementSibling;
        if (panel.style.display === "block") {
            panel.style.display = "none";
        } else {
            panel.style.display = "block";
        }
    });
}
</script>
