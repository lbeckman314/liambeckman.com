#!/bin/bash

# /srv/git/website.git/hooks/post-reveive
# chmod +x /srv/git/website.git/hooks/post-receive
# https://git-scm.com/book/en/v1/Git-on-the-Server-Setting-Up-the-Server
# https://www.digitalocean.com/community/tutorials/how-to-use-git-hooks-to-automate-development-and-deployment-tasks
# https://jekyllrb.com/docs/deployment-methods/#git-post-receive-hook

GIT_REPO=/srv/git/website.git
TMP_GIT_CLONE=$HOME/tmp/website
PUBLIC_WWW=/var/www/WEBSITE.com/public_html

# https://stackoverflow.com/questions/15715825/how-do-you-get-git-repos-name-in-some-git-repository
CODE=basename `git rev-parse --show-toplevel`

while read oldrev newrev ref
do
    if [[ $ref =~ .*/master$ ]];
    then
        echo "Master ref received.  Deploying master branch to production..."
        #git --work-tree=/var/www/html --git-dir=/home/demo/proj checkout -f
        cd $TMP_GIT_CLONE
        git clone $GIT_REPO $TMP_GIT_CLONE

        cd code

        # we'll be creating a new one
        rm sha256sums.txt

        # if the git name matches a directory name
        if [ "$CODE" -eq "$dir"  ]
        then
            cd "$dir"
            rmt *tar.gz
            rmt *zip

            git pull origin master

            wget https://github.com/lbeckman314/$CODE/archive/master.tar.gz
            wget https://github.com/lbeckman314/$CODE/archive/master.zip
            cd ..

            #cd ..
            #tar -zcvf "$dir".tar.gz src
            #zip -r "$dir".zip src
        fi

        for dir in *;
        do
            if [ -d "$dir" ]
            then
                cd "$dir"
                sha256sum *.tar.gz *.zip >> ../sha256sums.txt
                cd ..
            fi
        done
        #gpg --clearsign --yes sha256sums.txt
        gpg --yes --output sha256sums.txt.sig --sign sha256sums.txt

        bundle exec jekyll build -s $TMP_GIT_CLONE -d $PUBLIC_WWW
        rm -Rf $TMP_GIT_CLONE
        cd ~
    else
        echo "Ref $ref successfully received.  Doing nothing: only the master branch may be deployed on this server."
    fi
done
exit

