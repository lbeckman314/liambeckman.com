---
layout: my-default
title: code
---



<div class="container">


<div class="fixed" id="featured" style="border: solid 1px #d5d5d5; width: 100%; margin: 0%">
    <a href="https://www.github.com/lbeckman314/prime"><img class="center" src="/assets/images/circleCabin.png" style="width: 20%; padding-bottom: 10px;"></a>
    <ul class="code">
    <li class="code"><a href="https://github.com/lbeckman314/prime/"><img src="/assets/svg/octicons-5.0.1/lib/svg/code.svg"> github</a> / <a href="https://git.liambeckman.com/cgit/prime.git">cgit</a></li>
    <li class="code"><a href="prime.zip"><img src="/assets/svg/octicons-5.0.1/lib/svg/file-zip.svg"> zip</a></li>
    <li class="code"><a href="prime.tar.gz"><img src="/assets/svg/octicons-5.0.1/lib/svg/file-zip.svg"> tar.gz</a></li>
    <li class="code"><a href="../sha256sums.txt"><img src="/assets/svg/octicons-5.0.1/lib/svg/file-text.svg"> sha256sums</a></li>
    </ul>
    <div class="border-code"></div>
    <p style="text-align: center; padding-bottom: 10px;">
    <a id="title" href="https://www.github.com/lbeckman314/prime">prime</a></p>
    <p style="text-align: center; padding-bottom: 10px;">This program outputs the first million primes!</p>

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
wget http://www.liambeckman.com/code/prime/prime.tar.gz
# or if you prefer curl:
# curl http://www.liambeckman.com/code/prime/prime.tar.gz -o prime.tar.gz
```

<br />



<h2 class="code">Optional (but recommended): verify file integrity</h2>

```shell
#---------------------------------------------------#
# RECIEVE GPG KEYS
#---------------------------------------------------#

gpg --keyserver pgp.mit.edu --recv-keys AC1CC079

#---------------------------------------------------#
# RECIEVE SHA256SUMS
#---------------------------------------------------#

wget http://www.liambeckman.com/code/sha256sums.txt{,.sig}
# or if you prefer curl:
# curl http://www.liambeckman.com/code/sha256sums.txt{,.sig} -o sha256sums.txt -o sha256sums.txt.sig

#---------------------------------------------------#
# VERIFY SHA256SUMS
#---------------------------------------------------#

gpg --verify sha256sums.txt.sig

# gpg: Signature made Tue Oct 31 11:11:11 2017 PDT using RSA key ID AC1CC079
# gpg: Good signature from "liam beckman ("I only want to live in peace, plant potatoes, and dream!" -Tove Jansson) <lbeckman314@gmail.com>" [unknown]

#---------------------------------------------------#
# VERIFY FILE INTEGRITY
#---------------------------------------------------#

sha256sum -c sha256sums.txt 2>/dev/null | grep prime.tar.gz

# prime.tar.gz: OK

#---------------------------------------------------#
# OPTIONALLY REMOVE PUBLIC KEY
#---------------------------------------------------#

# to remove my public key from your public key ring, simply
gpg --delete-key AC1CC079
```

<br />

<h2 class="code">2. Extract</h2>


```shell
tar -zxvf prime.tar.gz
# or if you downloaded the zip file
# unzip prime.zip
```

<br />

<h2 class="code">3. Compile and run</h2>


```shell
g++ prime/src/prime.cpp -o prime/src/prime
./prime/src/prime
```

<br />
<br />

# Uninstallation

<br />

<h2 class="code">1. Delete the directory/folder.</h2>

```shell
rm -rfI prime
```

