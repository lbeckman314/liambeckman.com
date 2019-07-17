PUBLIC_WWW = "/var/www/liambeckman.com/public_html"

node {
   stage('Update') {
      git url: "https://git.liambeckman.com/cgit/website/"
   }
   stage('Build') {
      sh "bundle install"
      sh "bundle exec jekyll build --incremental -s . -d $PUBLIC_WWW"
   }
}
