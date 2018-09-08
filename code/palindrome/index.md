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
        Signed checksums and gpg signatures are included in every package for security. <a href="/code#security">Here</a> is an example of using the <a href="https://www.gnupg.org/">GNU Privacy Guard</a> to verify the integrity of a program.
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



<br />
<hr />

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
