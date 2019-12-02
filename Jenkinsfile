PUBLIC_WWW = "/var/www/liambeckman.com/public_html"
BUNDLE = "/usr/local/bin/bundle"
JEKYLL = "/usr/local/bin/jekyll"

node {
   stage('Update') {
      sh "git clean -fdx"
      git url: "git@liambeckman.com:/srv/git/website.git"
   }
   stage('Build') {
      sh "$BUNDLE install"
      sh "$BUNDLE exec $JEKYLL build --incremental --source . --destination $PUBLIC_WWW"
   }
}
