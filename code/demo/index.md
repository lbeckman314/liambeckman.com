---
layout: my-default
title: code
---

<div class="container">

    <div class="code-main">
        <a href="https://www.github.com/lbeckman314/demo"><img class="center" src="/assets/png/demo.png"></a>
        <div class="border-code"></div>
        <p class="center">
        <a id="title" href="https://www.github.com/lbeckman314/demo">demo</a></p>

        <p class = "code">A terminal emulator emulator that allows users to try out programs.</p>

        <ul class="code">
            <li class="code"><a href="https://liambeckman.com/pkgs/demo/demo.zip"><img src="/assets/svg/octicons-5.0.1/lib/svg/file-zip.svg"> zip</a></li>
            <li class="code"><a href="https://liambeckman.com/pkgs/demo/demo.tar.gz"><img src="/assets/svg/octicons-5.0.1/lib/svg/file-zip.svg"> tar.gz</a></li>
            <li class="code"><a href="https://github.com/lbeckman314/demo/"><img src="/assets/svg/octicons-5.0.1/lib/svg/code.svg"> github</a> / <a href="https://git.liambeckman.com/cgit/demo">cgit</a></li>
            <li class="code"><a href="https://liambeckman.com/pkgs/demo/sha256sums.txt"><img src="/assets/svg/octicons-5.0.1/lib/svg/file-text.svg"> checksums</a> / <a href="https://liambeckman.com/pkgs/demo/sha256sums.txt.asc">gpg</a></li>
        </ul>

    </div>


</div>

This is a glorified textarea element that emulates terminal emulators.

| [demo](/code/demo)         | [demonic](/code/demonic) |
+----------------------------+--------------------------|
| minimal, easily embeddable | lots of features         |
| ed compatible :p           | vi, tmux compatible      |
| made by a CS student       | made by professionals    |

# Give it a Spin!

Feel free to try out some of my programs in an interactive sandbox. Click on any of the examples below to give them a spin.

<div class="demo-examples-container">
    <code class="demo-examples">devilish</code>
    <code class="demo-examples">matriz multiply mBig1 mBig2</code>
    <code class="demo-examples">palindrome</code>
    <code class="demo-examples">prime 10101</code>
    <code class="demo-examples">withfeathers --print</code>
    <code class="demo-examples">wyeast</code>
    <code class="demo-examples">zigzag-server</code>
</div>

<pre id="info"></pre>
<div id="terminal">
    <textarea class="terminals"></textarea>
</div>
<script src="/assets/js/demo.js"></script>
<script type="text/javascript">MYLIBRARY.init(["prime 10101"]);</script>

<div id="button-container">
    <span id="duplicate-terminal">+</span>
    <div class="what-is-this">
        <a href="/code/demo">About</a>
        |
        <a href="https://github.com/lbeckman314/demo">Source Code</a>
    </div>
</div>

<br />
<hr />

# Installation

<h2 class="code">0. Prerequisites</h2>

[`node.js`](https://nodejs.org/en/) :: for running the server.

[`npm`](https://www.npmjs.com/) :: for installing the dependencies.

[`firejail`](https://firejail.wordpress.com/) :: for running programs in a sandboxed chroot environment.

[`git`](https://git-scm.com/) :: for a quick git clone.

If you are running Windows, the above utilities will be packaged in any of the following: [babun](https://babun.github.io/), [cmder](http://cmder.net/), or [Linux Subsystem for Windows](https://docs.microsoft.com/en-us/windows/wsl/install-win10). Take your pick! : )

The above utilities should be installed (or readily available) if you are running a Unix derivative (such as Linux, macOS, or any of the BSD's).

<h2 class="code">1. Quickstart</h2>

```shell
# clone the git repo
git clone https://github.com/lbeckman314/demo

# enter directory
cd demo

# install dependencies
npm install

# copy example config
cp config-example.js config.js

# edit key, certificate, and passphrase information
nano config.js

# run server (if no port number is provided, 12345 in this example, the server will default to port 8181)
node server.js 12345

# edit server information
nano demo.js

# then you can connect to the server from a client (e.g. client-example.html)
```

<br />

# Uninstallation

<h2 class="code">0. Delete the directory/folder.</h2>

```shell
# remove this directory
rm -rfI demo
```
