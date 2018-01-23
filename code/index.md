---
layout: my-default
title: code
---



<div class="container">

<div class="fixed" id="featured">
    <a href="http://liambeckman.com/codeliber8/"><img class="center" src="/assets/images/circleCabin.png"></a>
    <div class="border"></div>
    <p class="code"><a id="title" href="https://lbeckman314.github.io/liber8">liber8</a></p>
    <p class="code">This program helps organize your code and prose!</p>

  </div>

<div class="fixed" id="featured">
    <a href="http://liambeckman.com/codeitsAlive/"><img class="center" src="/assets/images/circleCabin.png" ></a>
    <div class="border"></div>
    <p class="code"><a id="title" href="https://lbeckman314.github.io/itsAlive">⚡ IT’S ALIVE!!! ⚡</a></p>
    <p class="code">This program installs my favorite applications and packages on a fresh ubuntu or arch install!</p>

  </div>

    <div class="fixed" id="featured">
   <a href="http://liambeckman.com/coderedOctober/"><img class="center" src="/assets/images/circleCabin.png"></a>
    <div class="border"></div>
    <p class="code"><a id="title" href="https://lbeckman314.github.io/redOctober">redOctober</a></p>
    <p class="code">This program parses a subtitle file (.svg) and adjusts timestamps. <strike>so i can finally watch my torrent of <em>Smultronstället</em></strike></p>

  </div>

    <div class="fixed" id="featured">
   <a href="http://liambeckman.com/codeiLoveHateHumanRobot/"><img class="center" src="/assets/images/circleCabin.png" ></a>
    <div class="border"></div>
    <p class = "code"><a id="title" href="https://lbeckman314.github.io/iLoveHateHumanRobot">I LOVE?HATE HUMAN?ROBOT</a></p>
    <p class = "code">This program helps you be on the <strike>right</strike> winning side of the eventual robopocalypse!</p>

  </div>


</div>



# practice safe file downloads

adapted from the "Verifying file integrity and its digital signature" section of <a href="https://www.voidlinux.eu/download/#verifying-file-integrity-and-its-digital-signature">the Void Linux download page</a>
Copyright 2008-2017 Juan RP and contributors

<br />

My GPG Keys:

signer = `liam beckman ("I only want to live in peace, plant potatoes, and dream!" -Tove Jansson) <lbeckman314@gmail.com>`

key id = `AC1CC079`

key fingerprint = `2C81 8D24 2991 72E8 57D1  B235 144F 39B7 AC1C C079`

<br />

```shell
gpg --keyserver pgp.mit.edu --recv-keys AC1CC079
wget http://www.liambeckman.com/code/sha256sums.txt{,.sig}
# or if you prefer curl:
# curl http://www.liambeckman.com/code/sha256sums.txt{,.sig} -o sha256sums.txt -o sha256sums.txt.sig
gpg --verify sha256sums.txt.sig

# gpg: Signature made Tue Oct 31 11:11:11 2017 PDT using RSA key ID AC1CC079
# gpg: Good signature from "liam beckman ("I only want to live in peace, plant potatoes, and dream!" -Tove Jansson) <lbeckman314@gmail.com>" [unknown]

sha256sum -c sha256sums.txt 2>/dev/null | grep example_file.tar.gz

# example_file.tar.gz: OK
```

<br />
<br />
# commands I don't want to forget

<br />

## $ shell

<br />
```sh
# view packages by size
# https://unix.stackexchange.com/questions/40442/which-installed-software-packages-use-the-most-disk-space-on-debian
dpkg-query -Wf '${Installed-Size}\t${Package}\n' | sort -n
```

<br />
```sh
# remove uninstalled packages from dpkg
# https://unix.stackexchange.com/questions/40442/which-installed-software-packages-use-the-most-disk-space-on-debian
dpkg --list |grep "^rc" | cut -d " " -f 3 | xargs sudo dpkg --purge
```

<br />

## : vim

<br />
```vim
" remove trailing whitespace
" http://vim.wikia.com/wiki/Remove_unwanted_spaces
%s/\s\+$//
```
<br />

```vim
" silently remove trailing whitespace from all open buffers
" http://vim.wikia.com/wiki/Run_a_command_in_multiple_buffers
" https://stackoverflow.com/questions/8906905/how-to-yank-from-the-command-line
bufdo %s/\s\+$//e | update
```

```vim
" does the same removal as above, but silently restores position in buffer
" https://vi.stackexchange.com/questions/7761/how-to-restore-the-position-of-the-cursor-after-executing-a-normal-command
let currBuff=bufnr("%") | let save_pos = getpos(".") | silent bufdo %s/\s\+$//e | update | execute 'buffer ' . currBuff | call setpos('.', save_pos) | noh
```

<br />

```vim
" add !important to css color values
" http://vimregex.com/#backreferences
%s/#[0-9a-z]*/\0 !important/
```

