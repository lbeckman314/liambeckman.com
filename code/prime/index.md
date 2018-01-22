---
layout: my-default
title: code
---



<div class="container">


<div class="fixed" id="featured" style="border: solid 1px #d5d5d5; width: 90%">
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




<br /><br /><br />

# Install on Windows

<br />

<h2 class="code">Optional: verify file integrity</h2>


<br />


<h2 class="code">1. Download source files</h2>


<br />

<h2 class="code">2. Extract source files</h2>



<br />

<h2 class="code">3. Compile and run source files</h2>



<br /><br /><br />

# Install on *nix (Mac, Linux, Cygwin, BSD's)

<br />

<h2 class="code">Optional: verify file integrity</h2>

```shell
# recieve gpg keys
gpg --keyserver pgp.mit.edu --recv-keys AC1CC079

# recieve sha256sums
wget http://www.liambeckman.com/code/sha256sums.txt{,.sig}
# or if you prefer curl:
# curl http://www.liambeckman.com/code/sha256sums.txt{,.sig} -o sha256sums.txt -o sha256sums.txt.sig

# verify sha256sums
gpg --verify sha256sums.txt.sig

# gpg: Signature made Tue Oct 31 11:11:11 2017 PDT using RSA key ID AC1CC079
# gpg: Good signature from "liam beckman ("I only want to live in peace, plant potatoes, and dream!" -Tove Jansson) <lbeckman314@gmail.com>" [unknown]

sha256sum -c sha256sums.txt 2>/dev/null | grep prime.tar.gz

# prime.tar.gz: OK
```


<br />


<h2 class="code">1. Download source files</h2>

```shell
wget http://www.liambeckman.com/code/prime/prime.tar.gz
# or if you prefer curl:
# curl http://www.liambeckman.com/code/prime/prime.tar.gz -o prime.tar.gz
```

<br />

<h2 class="code">2. Extract source files</h2>


```shell
if file --mime-type prime.* | grep -q -w x-gzip$; then
    tar -zxvf prime.tar.gz
else if file --mime-type prime.* | grep -q -w zip$; then
    unzip prime.zip
    fi
fi
```

<br />

<h2 class="code">3. Compile and run source files</h2>


```shell
cd prime
g++ src/prime.cpp -o src/prime
./src/prime
```

# Uninstall

Delete the `prime` directory/folder.

```shell
rm -rf prime
```

