PUBLIC_WWW = "/var/www/liambeckman.com/public_html"
BUNDLE = "/usr/local/bin/bundle"
JEKYLL = "/usr/local/bin/jekyll"

node {
   stage('Build') {
      sh "echo pwd; pwd"
      sh "echo whoami; whoami"
      sh "$BUNDLE install"
      sh "$BUNDLE exec $JEKYLL build --incremental --source . --destination $PUBLIC_WWW"
   }
}
