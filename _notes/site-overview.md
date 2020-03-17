---
name: Site Overview
date: 2020-03-12
created: 2020-02-27
---

# Overview

The following represents an attempt to build a website with as much control over the development process for the least amount of money required. There are many ways to accomplish this -- and likely much more efficient and elegant ways to do so as well -- but these are the steps that I am currently using and mostly content with.

The overall process involves generating a static site with Jekyll, pushing to Gitea, deploying with Jenkins, hosting with Apache, and certifying with Lets Encrypt/Certbot.

The world is big and diverse, and there are many fine static site generators, version control systems, and automation and web servers out there. Therefore, an effort is made to maintain a level of "plug-and-play" independence in regards to platforms and services. This is to give users the freedom to replace any one option with another while keeping the overall system functioning and running smoothly. Pick your poison.

Let's dive in!

# Requirements

- Internet Access. Any bandwidth will do.
- A computer. I usually use an old x220. Any computer will do.
- An operating system. I usually use Void Linux. Any operating system will do (though *nix ones are prefered).
- A terminal and shell. I usually use rxvt-unicode and zsh. Any terminal/shell will do.
- A browser. I usually use Firefox. Any browser will do.

And since we're going the self-hosting route, we need:
- A server. I use FreeBSD (x230 Thinkpad) and Raspbian (Raspberry Pi Model 3). Any setup will do.
- A router. I use a WRT54GL (that I found at a thriftstore) loaded with DD-WRT. Any router will do.

# Install dependencies

Since the *static-site-generator du jour* is Jekyll, Ruby is required. Install it for your operating system by following the instructions at https://www.ruby-lang.org/en/downloads/.

```
# Install ruby. "pkg" represents the package manager command for the operating system
# (e.g. "apt" for Debian-based systems).
pkg install ruby

# Install Jekyll and Bundler gems through RubyGems
gem install jekyll bundler

# Install dependencies
bundle install

# Create a new Jekyll site at ./myblog
jekyll new myblog

# Change into your new directory
cd myblog

# Build the site on the preview server
bundle exec jekyll serve

# Opening http://localhost:4000 in the browser should yield the new site.
```

```shell
echo "Hello, World!" >> index.md

# Install Git.
pkg install git

git init

git add --all

git commit -m "Init commit."

git remote add origin git@liambeckman.com:/liam/website.git

git push origin master
```

# Version Control

```shell
# Install gitea.
pkg install git gitea

# Enable/start the gitea service.
# On FreeBSD, that would look something like:
#   sysrc gitea_enable=YES
#   service gitea start
```

# Building & Deployment

```
# Install jenkins
pkg install jenkins
```

# Hosting

```
# Install apache
pkg install apache
```

## Backups

```
# Install borgbackup
pkg install borgbackup
```

# Domain Registrar

# DNS Records

# SSL Certification

```
# Install certbot
pkg install certbot
```

