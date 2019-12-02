BUNDLE = "/usr/local/bin/bundle"
GIT_URL = "git@liambeckman.com:/srv/git/website.git"
JEKYLL = "/usr/local/bin/jekyll"
PUBLIC_WWW = "/var/www/liambeckman.com/public_html"

node {
   stage('Update') {
      sh "git clean -fdx"
      git url: "$GIT_URL"
   }
   stage('Build') {
      sh "$BUNDLE install"
      sh "$BUNDLE exec $JEKYLL build --incremental --source . --destination $PUBLIC_WWW"
   }
}
