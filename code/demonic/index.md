---
title: demonic
---

{% include code.html name='demonic' desc='A suite of programs designed to execute commands in a sandboxed environment.' %}

# Give it a Spin!

Feel free to try out some of my programs in an interactive sandbox. Click on any of the examples below to give them a spin.

<div class="demonic-examples-container">
    <code class="demonic-examples">palindrome</code>
    <code class="demonic-examples">prime 10101</code>
    <code class="demonic-examples">withfeathers --print</code>
</div>

{% include demonic.html name='prime 10101' %}

# Installation

<h2>0. Prerequisites</h2>

[`node.js`](https://nodejs.org/en/) :: for running the server.

[`npm`](https://www.npmjs.com/) :: for installing the dependencies.

[`firejail`](https://firejail.wordpress.com/) :: for running programs in a sandboxed chroot environment.

[`git`](https://git-scm.com/) :: for a quick git clone.

If you are running Windows, the above utilities will be packaged in any of the following: [babun](https://babun.github.io/), [cmder](http://cmder.net/), or [Linux Subsystem for Windows](https://docs.microsoft.com/en-us/windows/wsl/install-win10). Take your pick! : )

The above utilities should be installed (or readily available) if you are running a Unix derivative (such as Linux, macOS, or any of the BSD's).

<h2>1. Quickstart</h2>

```shell
# clone the git repo
git clone https://github.com/lbeckman314/demonic

# enter directory
cd demonic

# install dependencies
npm install

# copy example config
cp config-example.js config.js

# edit key, certificate, and passphrase information
nano config.js

# run server (if no port number is provided, 12345 in this example, the server will default to port 8181)
node server.js 12345

# edit server information
nano demonic.js

# then you can connect to the server from a client (e.g. client-example.html)
```

<br />

# Uninstallation

<h2>0. Delete the directory/folder.</h2>

```shell
# remove this directory
rm -rfI demonic
```
