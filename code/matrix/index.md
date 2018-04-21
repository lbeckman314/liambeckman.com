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
    <p class = "code">Add, average, multiply, and transpose matrices like it's going out of style!</p>

    <ul class="code">
        <li class="code"><a href="https://liambeckman.com/pkgs/matrix/matrix.zip"><img src="/assets/svg/octicons-5.0.1/lib/svg/file-zip.svg"> zip</a></li>
        <li class="code"><a href="https://liambeckman.com/pkgs/matrix/matrix.tar.gz"><img src="/assets/svg/octicons-5.0.1/lib/svg/file-zip.svg"> tar.gz</a></li>
        <li class="code"><a href="https://github.com/lbeckman314/matrix/"><img src="/assets/svg/octicons-5.0.1/lib/svg/code.svg"> github</a> / <a href="https://git.liambeckman.com/cgit/matrix">cgit</a></li>
        <li class="code"><a href="https://liambeckman.com/pkgs/matrix/sha256sums.txt"><img src="/assets/svg/octicons-5.0.1/lib/svg/file-text.svg"> checksums</a> / <a href="https://liambeckman.com/pkgs/matrix/sha256sums.txt.asc">gpg</a></li>
    </ul>

  </div>


</div>

This program adds, multiplies, transposes, and averages matrices!  in action [here](https://asciinema.org/a/zjRyykwFxzX8SYoXAMemrWPk8).

<br />
<hr />

# Installation

For an example of installation, see [here](https://asciinema.org/a/4R4KJhtmdGImK1UHn9x6hIULx).

<h2 class="code">0. Prerequisites</h2>

[`bash`](https://www.gnu.org/software/bash/) :: for running the script.

[`git`](https://git-scm.com/) :: for a quick git clone.

If you have a propensity against git, check out [the alternative installation](./#alternative-installation). In which case [`wget`](https://www.gnu.org/software/wget/) or [`curl`](https://curl.haxx.se/) can be helpful for downloading the necessary files. [`gpg`](https://gnupg.org/) and [`sha256sum`](https://linux.die.net/man/1/sha256sum) can be used to verify the integrity of the files.

If you are running Windows, the above utilities will be packaged in any of the following: [babun](https://babun.github.io/), [cmder](http://cmder.net/), or [Linux Subsystem for Windows](https://docs.microsoft.com/en-us/windows/wsl/install-win10). Take your pick! : )

The above utilities should be installed (or readily available) if you are running a Unix derivative (such as Linux, macOS, or any of the BSD's).

<h2 class="code">1. Quickstart</h2>

```shell
# clone the git repo
git clone https://git.liambeckman.com/cgit/matrix

# enter directory
cd matrix

# allow the script to execute
chmod u+x matrix

# run the script
./matrix add m1 m1
```

<br />
<hr />

# Uninstallation


<h2 class="code">0. Delete the directory/folder.</h2>

```shell
rm -rfI matrix
```

<br />
<hr />

# Documentation

(Run `man -l matrix.man` while in the directory for a basic man page for `matrix`.)

`matrix` takes four arguments: **add**, **average**, **multiply**, and **transpose**. Matrix input (either with files or standard input) must be integers, either positive or negative, separated by white space. Non-numeric characters (including blank elements) will throw an error.


**add**
    takes two matrices of dimensions (Y by Z) and (Y by Z) and produces a sum matrix of dimesions (Y by Z). To add two matrices, run `./matrix add m1 m2` where `m1` and `m2` are matrix files.

**average**
    takes one matrix of dimension (Y by X) and averages each of it's columns. Produces an average matrix of dimensions (1 by X). To add two matrices, run `./matrix transpose m1 ` where `m1` is a matrix file.

**multiply**
    takes two matrices of dimensions (Y1 by X1) and (Y2 by X2) and produces a sum matrix of dimesions (X1 by Y2). X1 must be eqaul to Y2. To add two matrices, run `./matrix multiply m1 m2` where `m1` and `m2` are matrix files.

**transpose**
    takes one matrix and moves element at position (Y by X) to position (X by Y). To add two matrices, run `./matrix transpose m1` where `m1` is a matrix file.

<hr />
<br />

Examples of **valid** matrix input include:

```
1   2   3
4   5   6
7   8   9
10  11  12
```
<br />

```
1   2   3   4
5   6   7   8
```
<br />

```
1   2   3
```
<br />

Examples of **invalid** matrix input include:

Non-numeric character at position (1, 3).
```
1   2   a
4   5   6
7   8   9
10  11  12
```
<br />

Blank character at position (1, 2)
```
1       3   4
5   6   7   8
```
<br />

Trailing tab in first row
```
1t2\t3\t
```


<br />
<hr />

# Alternative Installation

<h2 class="code">1. Download</h2>

Click the tar.gz or zip buttons at the top of the page to download a tar.gz or .zip compressed directory.

Or copy and paste the following command into the terminal to have it download it for you!

```shell
wget http://www.liambeckman.com/pkgs/matrix/matrix.tar.gz

# or if you prefer curl:
# curl http://www.liambeckman.com/pkgs/matrix/matrix.tar.gz -o matrix.tar.gz
```


<h2 class="code">Optional (but recommended): verify file integrity</h2>

```shell
#-------------------------------#
# RECIEVE GPG KEYS
#-------------------------------#

gpg --keyserver pgp.mit.edu --recv-keys AC1CC079

#-------------------------------#
# RECIEVE SHA256SUMS
#-------------------------------#

wget http://www.liambeckman.com/pkgs/matrix/sha256sums.txt{,.asc}
# or if you prefer curl:
# curl http://www.liambeckman.com/pkgs/matrix/sha256sums.txt{,.asc} -o sha256sums.txt -o sha256sums.txt.asc

#-------------------------------#
# VERIFY SHA256SUMS
#-------------------------------#

gpg --verify sha256sums.txt.asc

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


<h2 class="code">2. Extract</h2>


```shell
tar -zxvf matrix.tar.gz
# or if you downloaded the zip file
# unzip matrix.zip
```


<h2 class="code">3. Compile and run</h2>


```shell
cd matrix

chmod u+x matrix
./matrix add m1 m1

chmod u+x p1gradingscript
./p1gradingscript
```

<br />

# Uninstallation


<h2 class="code">1. Delete the directory/folder.</h2>

```shell
rm -rfI matrix
```



