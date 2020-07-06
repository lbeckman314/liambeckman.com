---
title: code
---

# commands I don't want to forget (but often do...)

<div class="safety">
    <h2>Safety First</h2>
    <p>Copying and pasting the code samples below can be <a href="https://thejh.net/misc/website-terminal-copy-paste">dangerous</a>. I recommend not copying and pasting as the root or administrative user.</p>
</div>

## $ shell

```shell
# recursively search for "date" in files, and output date combined with filename
grep -r -T date * | awk -e '/date/{ print $3 "-" $1 }' | sort -r | sed 's/://'
```

```sh
# does the same as above, then prints out files that do not contain "date"
grep -r -T date * | awk -e '/date/{ print $3 "-" $1 }' | sort -r | sed 's/://'; echo;  grep -L -r -T date *
```

```sh
# for all files in current directory, change spaces to dashes
for file in ./*; do; mv "$file" "${file// /-}"; done
```

```sh
# for all files in current directory, change uppercase to lowercase
for f in `./*`; do mv -v "$f" "`echo $f | tr '[A-Z]' '[a-z]'`"; done
```

```shell
# mount hardrive as rw
# https://raspberrypi.stackexchange.com/questions/38723/ntfs-usb-hdd-read-only-how-to-enable-write-permissions
sudo mount -t ntfs-3g -o uid=pi,gid=pi /dev/sda1 /media/USBDRIVE/
```

```sh
# view packages by size
# https://unix.stackexchange.com/questions/40442/which-installed-software-packages-use-the-most-disk-space-on-debian
dpkg-query -Wf '${Installed-Size}\t${Package}\n' | sort -n
```

```sh
# remove uninstalled packages from dpkg
# https://unix.stackexchange.com/questions/40442/which-installed-software-packages-use-the-most-disk-space-on-debian
dpkg --list |grep "^rc" | cut -d " " -f 3 | xargs sudo dpkg --purge
```

```sh
# https://wiki.archlinux.org/index.php/QEMU#Running_virtualized_system
qemu-system-x86_64 -m 4G -enable-kvm -drive file=img1.cow,format=qcow2 -vga qxl -device virtio-serial-pci -device virtserialport[0/125]
v=spicechannel0,name=com.redhat.spice.0 -chardev spicevmc,id=spicechannel0,name=vdagent -spice unix,addr=/tmp/vm_spice.socket,disable-ticketing

remote-viewer spice+unix:///tmp/vm_spice.socket
```

## : vim

```vim
" don't add comments on new lines
set formatoptions-=ro

" don't hide markup characters
set conceallevel=0
```

```vim
" remove trailing whitespace
" http://vim.wikia.com/wiki/Remove_unwanted_spaces
%s/\s\+$//
```

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

```vim
" add !important to css color values
" http://vimregex.com/#backreferences
%s/#[0-9a-z]*/\0 !important/
```

