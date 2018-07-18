#!/usr/bin/env bash

files=$(ls)
while IFS='' read -r line || [[ -n "$line" ]]; do
    files=$(echo "$files" | grep -v -e "^"$(echo "$line" | sed -e "s/*/\\\(.*\\\)/g")"$")
done < .s3ignore

includes=()
while read -r i; do
    includes+=("--include=$i")
done <<< "$files"

echo "${includes[@]}" | xargs aws s3 sync . s3://kilometercreative.com/v2 --exclude "*" --profile "${profile-default}"