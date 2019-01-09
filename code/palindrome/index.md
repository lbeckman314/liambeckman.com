---
layout: my-default
title: code
---


<div class="safety">
    <h2>Safety First</h2>
    <p>
        Be careful — this code might be very evil! Only compile and run this program if you trust me and the code herein.
    </p>
    <p>
        signed checksums and gpg signatures are included in every package for security. <a href="/code#security">Here</a> is an example of using the <a href="https://www.gnupg.org/">GNU Privacy Guard</a> to verify the integrity of a program.
    </p>
</div>

<div class="container">


<div class="code-main">
    <a href="https://www.github.com/lbeckman314/palindrome"><img class="center" src="/assets/png/palindrome.png"></a>
    <div class="border-code"></div>
    <p class="center">
    <a id="title" href="https://www.github.com/lbeckman314/palindrome">palindrome</a></p>
    <p class = "code">Check phrases for palindrominess!</p>

    <ul class="code">
        <li class="code"><a href="https://liambeckman.com/pkgs/palindrome/palindrome.zip"><img src="/assets/svg/octicons-5.0.1/lib/svg/file-zip.svg"> zip</a></li>
        <li class="code"><a href="https://liambeckman.com/pkgs/palindrome/palindrome.tar.gz"><img src="/assets/svg/octicons-5.0.1/lib/svg/file-zip.svg"> tar.gz</a></li>
        <li class="code"><a href="https://github.com/lbeckman314/palindrome/"><img src="/assets/svg/octicons-5.0.1/lib/svg/code.svg"> github</a> / <a href="https://git.liambeckman.com/cgit/palindrome">cgit</a></li>
        <li class="code"><a href="https://liambeckman.com/pkgs/palindrome/sha256sums.txt"><img src="/assets/svg/octicons-5.0.1/lib/svg/file-text.svg"> checksums</a> / <a href="https://liambeckman.com/pkgs/palindrome/sha256sums.txt.asc">gpg</a></li>
    </ul>

  </div>


</div>


# Give it a Spin

<script src="/assets/js/demo.js"></script>
<textarea class="terminal"></textarea>
<script type="text/javascript">MYLIBRARY.init(["palindrome"]);</script>


<br />
<hr />
<br />

# Quick Start

<br />

<h2 class="code">Clone, compile, run</h2>

```shell
# clone
git clone https://github.com/lbeckman314/palindrome
cd palindrome

# compile
g++ src/palindrome.cpp -o palindrome

# run
./palindrome
```

<br />
<hr />
<br />


# Installation

For an example of installation, see [here](https://asciinema.org/a/4R4KJhtmdGImK1UHn9x6hIULx).

<h2 class="code">0. Prerequisites</h2>

[`g++`](https://gcc.gnu.org/) :: for compiling the program.

[`git`](https://git-scm.com/) :: for a quick git clone.

If you have a propensity against git, check out [the alternative installation](./#alternative-installation). In which case [`wget`](https://www.gnu.org/software/wget/) or [`curl`](https://curl.haxx.se/) can be helpful for downloading the necessary files. [`gpg`](https://gnupg.org/) and [`sha256sum`](https://linux.die.net/man/1/sha256sum) can be used to verify the integrity of the files.

If you are running Windows, the above utilities will be packaged in any of the following: [babun](https://babun.github.io/), [cmder](http://cmder.net/), or [Linux Subsystem for Windows](https://docs.microsoft.com/en-us/windows/wsl/install-win10). Take your pick! : )

The above utilities should be installed (or readily available) if you are running a Unix derivative (such as Linux, macOS, or any of the BSD's).

<h2 class="code">1. Quickstart</h2>

```shell
# clone the git repo
git clone https://github.com/lbeckman314/palindrome

# enter directory
cd palindrome

# compile
g++ palindrome.cpp -o palindrome.out

# run
./palindrome.out
```

<br />

# Uninstallation


<h2 class="code">0. Delete the directory/folder.</h2>

```shell
rm -rfI palindrome
```

<br />
<hr />

# Example

```shell
please enter your sentence
user input: abccba
abccba
bccb
cc
Your string is a palindrome! Palindrome = true
```

<br />
<hr />
<br />

# Alternative Installation

<br />

<h2 class="code">1. Download</h2>

```shell
wget http://www.liambeckman.com/pkgs/palindrome/palindrome.tar.gz
# or if you prefer curl:
# curl http://www.liambeckman.com/pkgs/palindrome/palindrome.tar.gz -o palindrome.tar.gz
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

wget http://www.liambeckman.com/pkgs/palindrome/sha256sums.txt{,.asc}
# or if you prefer curl:
# curl http://www.liambeckman.com/pkgs/palindrome/sha256sums.txt{,.asc} -o sha256sums.txt -o sha256sums.txt.asc

#-------------------------------#
# VERIFY SHA256SUMS
#-------------------------------#

gpg --verify sha256sums.txt.asc

# gpg: signature made Tue Oct 31 11:11:11 2017 PDT using RSA key ID AC1CC079
# gpg: Good signature from "liam beckman ("I only want to live in peace, plant potatoes, and dream!" -Tove Jansson) <lbeckman314@gmail.com>" [unknown]

#-------------------------------#
# VERIFY FILE INTEGRITY
#-------------------------------#

sha256sum -c sha256sums.txt 2>/dev/null | grep palindrome.tar.gz

# palindrome.tar.gz: OK

#-------------------------------#
# OPTIONALLY REMOVE PUBLIC KEY
#-------------------------------#

# to remove my public key from your public key ring, simply
gpg --delete-key AC1CC079
```

<br />

<h2 class="code">2. Extract</h2>


```shell
tar -zxvf palindrome.tar.gz
# or if you downloaded the zip file
# unzip palindrome.zip
```

<br />

<h2 class="code">3. Compile and run</h2>


```shell
g++ src/palindrome.cpp -o palindrome
./palindrome
```

<br />
<br />

# Uninstallation

<br />

<h2 class="code">1. Delete the directory/folder.</h2>

```shell
rm -rfI palindrome
```

