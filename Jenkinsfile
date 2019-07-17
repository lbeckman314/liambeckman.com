PUBLIC_WWW = "/var/www/liambeckman.com/public_html"
BUNDLE = "/usr/local/bin/bundle"

node {
   stage('Build') {
      sh "$BUNDLE install"
      sh "$BUNDLE exec jekyll build --incremental --source . --destination $PUBLIC_WWW"
   }
}
