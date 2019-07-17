PUBLIC_WWW = "/var/www/liambeckman.com/public_html"
BUNDLE = "/usr/local/bin/bundle"
JEKYLL = "/usr/local/bin/jekyll"

node {
   stage('Update') {
      git url: "https://git.liambeckman.com/cgit/website/"
   }
   stage('Build') {
      sh "$BUNDLE install"
      sh "$BUNDLE exec $JEKYLL build --incremental --source . --destination $PUBLIC_WWW"
   }
}
