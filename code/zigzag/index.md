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
    <a href="https://www.github.com/lbeckman314/zigzag"><img class="center" src="/assets/png/zigzag.png"></a>
    <div class="border-code"></div>
    <p class="center">
    <a id="title" href="https://www.github.com/lbeckman314/zigzag">zigzag</a></p>
    <p class = "code">A homegrown TCP chat system built with love!</p>

    <ul class="code">
        <li class="code"><a href="https://liambeckman.com/pkgs/zigzag/zigzag.zip"><img src="/assets/svg/octicons-5.0.1/lib/svg/file-zip.svg"> zip</a></li>
        <li class="code"><a href="https://liambeckman.com/pkgs/zigzag/zigzag.tar.gz"><img src="/assets/svg/octicons-5.0.1/lib/svg/file-zip.svg"> tar.gz</a></li>
        <li class="code"><a href="https://github.com/lbeckman314/zigzag/"><img src="/assets/svg/octicons-5.0.1/lib/svg/code.svg"> github</a> / <a href="https://git.liambeckman.com/cgit/zigzag">cgit</a></li>
        <li class="code"><a href="https://liambeckman.com/pkgs/zigzag/sha256sums.txt"><img src="/assets/svg/octicons-5.0.1/lib/svg/file-text.svg"> checksums</a> / <a href="https://liambeckman.com/pkgs/zigzag/sha256sums.txt.asc">gpg</a></li>
    </ul>

  </div>


</div>

# Give it a Spin

<pre id="info"></pre>
<div id="terminal">
    <textarea class="terminals"></textarea>
</div>
<script src="/assets/js/demo.js"></script>
<script type="text/javascript">MYLIBRARY.init(["zigzag-server"]);</script>

<br />

Sick of ed and missing vi? Head on over to the [xterm.js](https://github.com/xtermjs/xterm.js)-powered [web app](https://liambeckman.com/code/term) for even more terminal goodness.

<br />
<hr />

# Installation

## Prerequisites

[`python3`](https://www.python.org/) :: for running the server.

[`gcc`](https://gcc.gnu.org/) :: for compiling the client.

[`git`](https://git-scm.com/) :: for a quick git clone.

If you are running Windows, the above utilities will be packaged in any of the following: [babun](https://babun.github.io/), [cmder](http://cmder.net/), or [Linux Subsystem for Windows](https://docs.microsoft.com/en-us/windows/wsl/install-win10). Take your pick! : )

The above utilities should be installed (or readily available) if you are running a Unix derivative (such as Linux, macOS, or any of the BSD's).


## Quick Start

```sh
python3 zigzag-server.py PORT
make && ./zigzag-client.out ADDRESS PORT
```

where ADDRESS is the IP address of the host running the server, and PORT is the port number that the server is running on.

-----

## Server

To run the server, enter:

```sh
python3 zigzag-server.py PORT
```

where PORT is any open port on the host system.

A shell script — available-port.sh — is made available to the user so they do not have to guess an open port. It scans for open ports on the host system, and returns a random open port. This can be helpful on busy multiuser systems. To use it to run the server, enter:

```sh
chmod u+x available-port.sh
python3 zigzag-server.py `./available-port.sh`
```

Upon successful startup, the server will output the following, including the IP address and port number that may be used to connect a client to the server.

```sh
 ______     __     ______     ______     ______     ______
/\___  \   /\ \   /\  ___\   /\___  \   /\  __ \   /\  ___\
\/_/  /__  \ \ \  \ \ \__ \  \/_/  /__  \ \  __ \  \ \ \__ \
  /\_____\  \ \_\  \ \_____\   /\_____\  \ \_\ \_\  \ \_____\
  \/_____/   \/_/   \/_____/   \/_____/   \/_/\/_/   \/_____/

The server is ready to receive.
IP address: 192.168.169.36
port number: 12000
```

-----

## CLIENT

To run the client, enter:

```sh
make
./zigzag-client.out ADDRESS PORT
```

where ADDRESS is the IP address of the host running the server, and PORT is the port number that the server is running on.

Upon successful startup, the client will output the following, letting the user know that it has successfully connected to the server.


```sh
 _____
|_  (_)__ _ _____ _ __ _
 / /| / _` |_ / _` / _` |
/___|_\__, /__\__,_\__, |
      |___/        |___/

Connected to server.
Enter your nickname:
```

-----

## UNINSTALLATION

To delete the program and all associated files (including this README and the zip file), run:

```sh
make uninstall
```

