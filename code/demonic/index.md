---
title: code
---

<div class="container">

    <div class="code-main">
        <a href="https://www.github.com/lbeckman314/demonic"><img class="center" src="/assets/png/demonic-2.png"></a>
        <div class="border-code"></div>
        <p class="center">
        <a id="title" href="https://www.github.com/lbeckman314/demonic">demonic</a></p>

        <p class = "code">Like <a href="/code/demo">demo</a>, but more demonic!</p>

        <ul class="code">
            <li class="code"><a href="https://liambeckman.com/pkgs/demonic/demonic.zip"><img src="/assets/svg/octicons-5.0.1/lib/svg/file-zip.svg"> zip</a></li>
            <li class="code"><a href="https://liambeckman.com/pkgs/demonic/demonic.tar.gz"><img src="/assets/svg/octicons-5.0.1/lib/svg/file-zip.svg"> tar.gz</a></li>
            <li class="code"><a href="https://github.com/lbeckman314/demonic/"><img src="/assets/svg/octicons-5.0.1/lib/svg/code.svg"> github</a> / <a href="https://git.liambeckman.com/cgit/demonic">cgit</a></li>
            <li class="code"><a href="https://liambeckman.com/pkgs/demonic/sha256sums.txt"><img src="/assets/svg/octicons-5.0.1/lib/svg/file-text.svg"> checksums</a> / <a href="https://liambeckman.com/pkgs/demonic/sha256sums.txt.asc">gpg</a></li>
        </ul>

    </div>

</div>

This is an [xterm.js](http://xtermjs.org/)-powered web app that runs a shell I wrote called [devilish](/code/devilish) in a sandboxed environment. It's purpose is to show off some of the features of devilish without requiring users to download, compile, and run it on their own machine. I originally wrote [demo](/code/demo) to do the same thing, but ran into difficulty with ASCII escape sequences and other terminal-specific features. [xterm.js](http://xtermjs.org/) takes care of that, and allows anyone to explore in a safe, non-persistent sandbox. Networking is explicitly disabled, but Bash, tmux, and vim (among others) are installed and ready to use.

# Give it a Spin!

Try it out [here](https://liambeckman.com/code/term).

<a href="https://liambeckman.com/code/term">
    <img src="/assets/png/demonic-example-vi-tmux.png">
</a>


<br />

---

<br />

# Installation

<h2 class="code">0. Prerequisites</h2>

[`python 3`](https://www.python.org/) :: for running the server.

[`npm`](https://www.npmjs.com/) :: for installing the dependencies.

[`firejail`](https://firejail.wordpress.com/) :: for running programs in a sandboxed chroot environment.

[`git`](https://git-scm.com/) :: for a quick git clone.

If you are running Windows, the above utilities will be packaged in any of the following: [babun](https://babun.github.io/), [cmder](http://cmder.net/), or [Linux Subsystem for Windows](https://docs.microsoft.com/en-us/windows/wsl/install-win10). Take your pick! : )

The above utilities should be installed (or readily available) if you are running a Unix derivative (such as Linux, macOS, or any of the BSD's).

<h2 class="code">1. Quickstart</h2>

```shell
# clone the git repo
git clone https://github.com/lbeckman314/demonic

# enter directory
cd demonic

# install node.js dependencies
npm install xterm

# create virtual environment
python3 -m venv virtual

# activate virtual environment
source virtual/bin/activate

# install python dependencies
pip install terminado

# run server
python app.py

# then you can connect to the server from a client at HOST_ADDRESS:8282 (e.g. https://localhost:8282).
```

<br />

# Uninstallation

<h2 class="code">0. Delete the directory/folder.</h2>

```shell
# remove this directory
rm -rfI demonic
```
