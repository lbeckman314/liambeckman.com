#!/bin/bash

rm sha256sums.txt
for dir in *;
do
    if [ -d "$dir" ]
    then
        cd "$dir"
        tar -zcvf "$dir".tar.gz src
        zip -r "$dir".zip src
        sha256sum *.tar.gz *.zip >> ../sha256sums.txt
        cd ..
    fi
done
#gpg --clearsign --yes sha256sums.txt
gpg --yes --output sha256sums.txt.sig --sign sha256sums.txt
