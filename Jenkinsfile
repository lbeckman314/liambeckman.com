BUNDLE = "/usr/local/bin/bundle"
JEKYLL = "/usr/local/bin/jekyll"
PUBLIC_WWW = "pi@liambeckman.com:/var/www/liambeckman.com/public_html"
RSYNC = "/usr/local/bin/rsync"

node {
   stage('Build') {
      sh "$BUNDLE install"
      sh "$BUNDLE exec $JEKYLL build --incremental"
   }
   stage('Deploy') {
       sh "rsync -crvz --delete _site/* $PUBLIC_WWW"
   }
}

