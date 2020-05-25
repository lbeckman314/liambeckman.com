BUNDLE = "/usr/local/bin/bundle"
JEKYLL = "/usr/local/bin/jekyll"
PUBLIC_WWW = "pi@liambeckman.com:/var/www/liambeckman.com/public_html"
RSYNC = "/usr/local/bin/rsync"

node {
    stage('Update') {
        git url: 'https://git.liambeckman.com/liam/website/'
    }
    stage('Build') {
        sh "$BUNDLE install"
        sh "$BUNDLE exec $JEKYLL build"
    }
    stage('Deploy') {
        sh "rsync -crvz --delete _site/* $PUBLIC_WWW"
    }
}

