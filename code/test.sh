#!/bin/bash

# /srv/git/website.git/hooks/post-reveive
# chmod +x /srv/git/website.git/hooks/post-receive
# https://git-scm.com/book/en/v1/Git-on-the-Server-Setting-Up-the-Server
# https://www.digitalocean.com/community/tutorials/how-to-use-git-hooks-to-automate-development-and-deployment-tasks
# https://jekyllrb.com/docs/deployment-methods/#git-post-receive-hook

GIT_REPO=/srv/git/website.git
TMP_GIT_CLONE=$HOME/tmp/website
PUBLIC_WWW=/var/www/WEBSITE.com/public_html

while read oldrev newrev ref
do
    if [[ $ref =~ .*/master$ ]];
    then
        echo "Master ref received.  Deploying master branch to production..."
        #git --work-tree=/var/www/html --git-dir=/home/demo/proj checkout -f
        cd $TMP_GIT_CLONE
        git clone $GIT_REPO $TMP_GIT_CLONE
        bundle exec jekyll build -s $TMP_GIT_CLONE -d $PUBLIC_WWW
        rm -Rf $TMP_GIT_CLONE
        cd ~
    else
        echo "Ref $ref successfully received.  Doing nothing: only the master branch may be deployed on this server."
    fi
done
exit

