PUBLIC_WWW = "/var/www/liambeckman.com/public_html"

node {
   stage('Build') {
      sh "bundle install"
      sh "bundle exec jekyll build --incremental -s . -d $PUBLIC_WWW"
   }
}
