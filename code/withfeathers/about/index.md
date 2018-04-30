---
layout: my-default
title: code
---

<div class="container">


<div class="fixed" id="featured" style="border: solid 1px #d5d5d5; width: 100%; margin: 0%">
    <a href="https://www.github.com/lbeckman314/withFeathers"><img class="center emily" src="/assets/png/emily-dickinson.png"></a>
    <div class="border-code"></div>
    <p class="center">
    <a id="title" href="https://www.github.com/lbeckman314/withFeathers">withFeathers</a></p>
    <p class = "code">Print a poem by Emily!</p>

    <ul class="code">
        <li class="code"><a href="https://liambeckman.com/pkgs/withFeathers/withFeathers.zip"><img src="/assets/svg/octicons-5.0.1/lib/svg/file-zip.svg"> zip</a></li>
        <li class="code"><a href="https://liambeckman.com/pkgs/withFeathers/withFeathers.tar.gz"><img src="/assets/svg/octicons-5.0.1/lib/svg/file-zip.svg"> tar.gz</a></li>
        <li class="code"><a href="https://github.com/lbeckman314/withFeathers/"><img src="/assets/svg/octicons-5.0.1/lib/svg/code.svg"> github</a> / <a href="https://git.liambeckman.com/cgit/withFeathers">cgit</a></li>
        <li class="code"><a href="https://liambeckman.com/pkgs/withFeathers/sha256sums.txt"><img src="/assets/svg/octicons-5.0.1/lib/svg/file-text.svg"> checksums</a> / <a href="https://liambeckman.com/pkgs/withFeathers/sha256sums.txt.asc">gpg</a></li>
    </ul>

  </div>


</div>

This program prints a randomly chosen emily dickinson poem!

<br />
<hr />

# Installation


<h2 class="code">0. Prerequisites</h2>

[`python`](https://www.python.org/) :: for running the script.

[`git`](https://git-scm.com/) :: for a quick git clone.

If you are running Windows, the above utilities will be packaged in any of the following: [babun](https://babun.github.io/), [cmder](http://cmder.net/), or [Linux Subsystem for Windows](https://docs.microsoft.com/en-us/windows/wsl/install-win10). Take your pick! : )

The above utilities should be installed (or readily available) if you are running a Unix derivative (such as Linux, macOS, or any of the BSD's).

<h2 class="code">1. Quickstart</h2>

```shell
# clone the git repo
git clone https://github.com/lbeckman314/withFeathers

# enter directory
cd withFeathers/withFeathers

# run the script
python main.py --print
```

<br />

# Uninstallation


<h2 class="code">0. Delete the directory/folder.</h2>

```shell
rm -rfI withFeathers
```

<br />
<hr />

# Documentation

```shell
$ python main.py --help
usage: main.py [-h] [-c] [-d] [-f FILENAME] [-o OUTPUTDIR] [-p] [-r] [-t]
               [-u URL] [-v]

Print some poems!

optional arguments:
  -h, --help            show this help message and exit
  -c, --clean           remove files/dirs after run (default: False)
  -d, --decorate        decorate the output (default: False)
  -f FILENAME, --filename FILENAME
                        specify filename of source file (default: pg12242.txt)                                                                        
  -o OUTPUTDIR, --outputDir OUTPUTDIR
                        specify directory path of poem files (default:
                        emilyPoems)
  -p, --print           print poems to stdout (default: False)
  -r, --randomoff       toggle picking random poem (default: False)
  -t, --time            print time elapsed to stdout (default: False)
  -u URL, --url URL     specify source url
  -v, --version         show program's version number and exit

```
