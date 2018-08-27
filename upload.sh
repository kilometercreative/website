#!/usr/bin/env bash

files=$(ls)
while read -r i; do
    files=$(echo "$files" | grep -v -e "^"$(echo "$i" | sed -e "s/*/\\\(.*\\\)/g")"$")
done < .s3ignore

rm -rf build
if [ ! -d build ]; then mkdir build; fi
if [ ! -d build/1 ]; then mkdir build/1; fi

while read -r i; do
    cp -r "$i" "build/1/$i"
    if [[ ! ${i} == *.js ]] && [[ ! ${i} == *.json ]] && [[ ! ${i} == *.html ]] && [[ ! ${i} == *.css ]];
    then
        cp -r "$i" "build/2/$i"
    fi
done <<< "$files"

node_modules/.bin/babel build/1 -d build/2
node_modules/.bin/html-minifier --collapse-whitespace --remove-comments --input-dir build/1 --output-dir build/2 --file-ext html
node_modules/.bin/html-minifier --collapse-whitespace --remove-comments --input-dir build/1 --output-dir build/2 --file-ext css
node_modules/.bin/html-minifier --collapse-whitespace --remove-comments --input-dir build/1 --output-dir build/2 --file-ext json

#echo "${includes[@]}" | xargs aws s3 sync . s3://kilometercreative.com/v2 --exclude "*" --profile "${profile-default}"