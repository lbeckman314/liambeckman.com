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
        Signed checksums and gpg signatures are included in every package for security. <a href="https://voidlinux.org/download/#verifying-file-integrity-and-its-digital-signature">Here</a> is an example of using the <a href="https://www.gnupg.org/">GNU Privacy Guard</a> to verify the integrity of a program.
    </p>
</div>

<div class="container">


<div class="code-main">
    <a href="https://www.github.com/lbeckman314/wyeast"><img class="center" src="/assets/png/wyeast.png"></a>
    <div class="border-code"></div>
    <p class="center">
    <a id="title" href="https://www.github.com/lbeckman314/wyeast">wyeast</a></p>
    <p class = "code">A multithreaded adventure game!</p>

    <ul class="code">
        <li class="code"><a href="https://liambeckman.com/pkgs/wyeast/wyeast.zip"><img src="/assets/svg/octicons-5.0.1/lib/svg/file-zip.svg"> zip</a></li>
        <li class="code"><a href="https://liambeckman.com/pkgs/wyeast/wyeast.tar.gz"><img src="/assets/svg/octicons-5.0.1/lib/svg/file-zip.svg"> tar.gz</a></li>
        <li class="code"><a href="https://github.com/lbeckman314/wyeast/"><img src="/assets/svg/octicons-5.0.1/lib/svg/code.svg"> github</a> / <a href="https://git.liambeckman.com/cgit/wyeast">cgit</a></li>
        <li class="code"><a href="https://liambeckman.com/pkgs/wyeast/sha256sums.txt"><img src="/assets/svg/octicons-5.0.1/lib/svg/file-text.svg"> checksums</a> / <a href="https://liambeckman.com/pkgs/wyeast/sha256sums.txt.asc">gpg</a></li>
    </ul>

  </div>


</div>

# Give it a Spin

<pre id="info"></pre>
<div id="terminal">
    <textarea class="terminals"></textarea>
</div>
<script src="/assets/js/demo.js"></script>
<script type="text/javascript">MYLIBRARY.init(["wyeast"]);</script>

<br />

Sick of ed and missing vi? Head on over to the [xterm.js](https://github.com/xtermjs/xterm.js)-powered [web app](https://liambeckman.com/code/term) for even more terminal goodness.

<br />
<hr />

# Installation

## 0. Prerequisites

[`gcc`](https://gcc.gnu.org/) :: for compiling the program.

[`git`](https://git-scm.com/) :: for a quick git clone.

If you are running Windows, the above utilities will be packaged in any of the following: [babun](https://babun.github.io/), [cmder](http://cmder.net/), or [Linux Subsystem for Windows](https://docs.microsoft.com/en-us/windows/wsl/install-win10). Take your pick! : )

The above utilities should be installed (or readily available) if you are running a Unix derivative (such as Linux, macOS, or any of the BSD's).

## Quick Start

To compile the program and run the game, enter

```sh
make all
./buildworld
./wyeast
```

This will start the game. Here is an example:

```
CURRENT LOCATION: loowit
POSSIBLE CONNECTIONS: klamath, sahale, umatilla, umpqua, chinook, wyeast.
WHERE TO? >klamath

CURRENT LOCATION: klamath
POSSIBLE CONNECTIONS: loowit, umatilla, wyeast, sahale, chinook.
WHERE TO? >loowit

CURRENT LOCATION: loowit
POSSIBLE CONNECTIONS: klamath, sahale, umatilla, umpqua, chinook, wyeast.
WHERE TO? >sahale

CURRENT LOCATION: sahale
POSSIBLE CONNECTIONS: loowit, klamath, umatilla.
WHERE TO? >umatilla

CURRENT LOCATION: umatilla
POSSIBLE CONNECTIONS: loowit, klamath, chinook, umpqua, wyeast, sahale.
WHERE TO? >chinook

CURRENT LOCATION: chinook
POSSIBLE CONNECTIONS: umatilla, loowit, umpqua, klamath.
WHERE TO? >umpqua

CURRENT LOCATION: umpqua
POSSIBLE CONNECTIONS: loowit, umatilla, chinook.
WHERE TO? >loowit

CURRENT LOCATION: loowit
POSSIBLE CONNECTIONS: klamath, sahale, umatilla, umpqua, chinook, wyeast.
WHERE TO? >wyeast

YOU HAVE FOUND THE END ROOM. CONGRATULATIONS!
YOU TOOK 8 STEPS. YOUR PATH TO VICTORY WAS:
klamath
loowit
sahale
umatilla
chinook
umpqua
loowit
wyeast
```

