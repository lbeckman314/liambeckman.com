# About

I built this website as a way to store and present various works and projects. The site itself owes it's beginnings to Jonathan McGlone's wonderfully helpful [guide](jmcglone.com/guides/github-pages/).

This website is built with [Jekyll](https://jekyllrb.com/) and hosted on my Raspberry Pi ([Raspbian](https://www.raspberrypi.org/downloads/raspbian/) on RPi3 Model B).

# Building

## Requirements

- [Ruby](https://www.ruby-lang.org/en/): for building the site with Jekyll and Bundler.
- [Jekyll](https://jekyllrb.com/): static site generator.
- [Bundler](https://bundler.io/): dependency management.
- [Git](https://www.ruby-lang.org/en/): source code management.

## Instructions

Source code can be found [here](https://github.com/lbeckman314/lbeckman314.github.io). To spin up your own site, follow [the jekyll quick-start quide](https://jekyllrb.com/docs/quickstart/) (adapted below):

```shell
# install ruby
# for OS-specific instructions, check out https://www.ruby-lang.org/en/downloads/

# Install Jekyll and Bundler gems through RubyGems
gem install jekyll bundler

# install dependencies
bundle install

# Create a new Jekyll site at ./myblog
jekyll new myblog

# alternatively, clone an existing jekyll site
# git clone https://liambeckman.com/cgit/website.git

# Change into your new directory
cd myblog

# Build the site on the preview server
bundle exec jekyll serve

# Now browse to http://localhost:4000

# then you can change the html/css files in the myblog directory to suit your tastes!

# hosting is a whole 'nother beast, but services like github pages
# and gitlab pages make free hosting relatively easier.
```

# CI/CD

The website is updated every time a push is made to the `master` branch. Build commands are defined in the [Jenkinsfile](./Jenkinsfile), and build results can be viewed at either of the following URL's.

- [Jenkins (standard)](https://liambeckman.com/jenkins/job/website/)
- [Jenkins (Blue Ocean)](https://liambeckman.com/jenkins/blue/organizations/jenkins/website/activity)

[![Screenshot of website in Jenkins](./build.png)](https://liambeckman.com/jenkins/blue/organizations/jenkins/website/)

