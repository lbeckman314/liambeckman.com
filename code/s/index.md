---
layout: my-default
title: code
---

# commands I don't want to forget (but often do...)

<br />

## $ shell

<br />

```shell
# mount hardrive as rw
# https://raspberrypi.stackexchange.com/questions/38723/ntfs-usb-hdd-read-only-how-to-enable-write-permissions
sudo mount -t ntfs-3g -o uid=pi,gid=pi /dev/sda1 /media/USBDRIVE/
```

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
" does the same removal as above, but silently restores position in buffer (and retabs)
" https://vi.stackexchange.com/questions/7761/how-to-restore-the-position-of-the-cursor-after-executing-a-normal-command
let currBuff=bufnr("%") | let save_pos = getpos(".") | silent bufdo %s/\s\+$//e | silent retab | update | execute 'buffer ' . currBuff | call setpos('.', save_pos) | noh
```

<br />

```vim
" add !important to css color values
" http://vimregex.com/#backreferences
%s/#[0-9a-z]*/\0 !important/
```

