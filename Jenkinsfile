PUBLIC_WWW = "/var/www/liambeckman.com/public_html"
BUNDLE = "/usr/local/bin/bundle"

node {
   stage('Build') {
      sh "$BUNDLE exec jekyll build --incremental -s . -d $PUBLIC_WWW"
   }
}
