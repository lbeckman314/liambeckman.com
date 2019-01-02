---
layout: my-default
title: code
---


<div class="container">

    <div class="fixed pointer" id="featured" onclick="location.href='https://withfeathers.liambeckman.com'">
        <img class="center" src="/assets/png/withfeathers.png">
        <div class = "code-title">withfeathers *</div>
        <div class = "code-type web-app">web app</div>
        <p class = "code">Add a little Emily Dickinson to your day.</p>
    </div>

    <div class="fixed pointer" id="featured" onclick="location.href='https://webdev.liambeckman.com'">
        <a href="https://webdev.liambeckman.com"><img class="center" src="/assets/png/nest.png" ></a>
        <div class = "code-title">webdev projects</div>
        <div class = "code-type web-app">web app</div>
        <p class = "code">A nest of web development projects that are just gaining their wings.</p>
    </div>

    <div class="fixed pointer" id="featured" onclick="location.href='/code/devilish'">
        <a href="/code/devilish"><img class="center" src="/assets/png/devilish.png" ></a>
        <div class = "code-title">devilish</div>
        <div class = "code-type command-line">command line</div>
        <p class = "code">The shell from hell!</p>
    </div>

    <div class="fixed pointer" id="featured" onclick="location.href='/code/matrix'">
        <a href="/code/matrix"><img class="center" src="/assets/png/matrix.png" ></a>
        <div class = "code-title">matriz *</div>
        <div class = "code-type command-line">command line</div>
        <p class = "code">Multiply, add, transpose, and average matrices like it's going out of style!</p>
    </div>

    <div class="fixed pointer" id="featured" onclick="location.href='/code/prime'">
        <a href="/code/prime"><img class="center" src="/assets/png/prime.png"></a>
        <div class = "code-title">prime *</div>
        <div class = "code-type command-line">command line</div>
        <p class="code">Output the first million primes!</p>
    </div>


    <div class="fixed pointer" id="featured" onclick="location.href='/code/palindrome/'">
        <a href="/code/palindrome/"><img class="center" src="/assets/png/palindrome.png"></a>
        <div class = "code-title">palindrome *</div>
        <div class = "code-type command-line">command line</div>
        <p class="code">Determine whether your string is a palindrome!</p>
    </div>

    <div class="fixed pointer" id="featured" onclick="location.href='https://github.com/cs361-group24'">
        <a href="https://github.com/cs361-group24"><img class="center" src="/assets/png/removemywaste.png"></a>
        <div class = "code-title">RemoveMyWaste</div>
        <div class = "code-type android">android</div>
        <div class = "code-type web-app" id="rmw">web app</div>
        <p class="code">An application for household hazardous waste removal.</p>
    </div>

</div>

# * Interactive Demos

<script src="/assets/js/demo.js"></script>
<textarea id="terminal"></textarea>
<script type="text/javascript">MYLIBRARY.init(["prime 10101"]);</script>
<a style="float: right;" href="https://github.com/lbeckman314/demo">What is this?</a>
<br />

<hr />

<h1 id="security">make checksums, not war</h1>

adapted from the "Verifying file integrity and its digital signature" section of <a href="https://www.voidlinux.org/download/#verifying-file-integrity-and-its-digital-signature">the Void Linux download page.</a> (Copyright 2018 VoidLinux contributors. Copyright 2008-2018 Juan RP and contributors.)

<br />

My GPG Keys:

signer = `liam beckman ("I only want to live in peace, plant potatoes, and dream!" -Tove Jansson) <lbeckman314@gmail.com>`

key id = `AC1CC079`

key fingerprint = `2C81 8D24 2991 72E8 57D1  B235 144F 39B7 AC1C C079`


```shell
#-------------------------------#
# RECIEVE GPG KEYS
#-------------------------------#

gpg --keyserver pgp.mit.edu --recv-keys AC1CC079

#-------------------------------#
# RECIEVE SHA256SUMS
#-------------------------------#

wget http://www.liambeckman.com/pkgs/EXAMPLE/sha256sums.txt{,.asc}
# or if you prefer curl:
# curl http://www.liambeckman.com/pkgs/EXAMPLE/sha256sums.txt{,.asc} -o sha256sums.txt -o sha256sums.txt.asc

#-------------------------------#
# VERIFY SHA256SUMS
#-------------------------------#

gpg --verify sha256sums.txt.asc

# gpg: Signature made Tue Oct 31 11:11:11 2017 PDT using RSA key ID AC1CC079
# gpg: Good signature from "liam beckman ("I only want to live in peace, plant potatoes, and dream!" -Tove Jansson) <lbeckman314@gmail.com>" [unknown]

#-------------------------------#
# VERIFY FILE INTEGRITY
#-------------------------------#

sha256sum -c sha256sums.txt 2>/dev/null | grep EXAMPLE.tar.gz

# EXAMPLE.tar.gz: OK

#-------------------------------#
# OPTIONALLY REMOVE PUBLIC KEY
#-------------------------------#

# to remove my public key from your public key ring, simply
gpg --delete-key AC1CC079
```


<script>
// wait until the DOM before starting buttons
document.addEventListener('DOMContentLoaded', bindButtons);

function bindButtons() {
    let rmw = document.getElementById('rmw');
    rmw.onclick = function(e) {
        // https://stackoverflow.com/questions/2385113/howto-div-with-onclick-inside-another-div-with-onclick-javascript
        if (!e) var e = window.event;
        e.cancelBubble = true;
        if (e.stopPropagation) e.stopPropagation();
        location.href='https://removemywaste.liambeckman.com/';
    }
}
</script>
