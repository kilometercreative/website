#!/usr/bin/env bash

all=$(ls)
while IFS='' read -r line || [[ -n "$line" ]]; do
    all=$(echo "$all" | grep -v -e "^"$(echo "$line" | sed -e "s/*/\\\(.*\\\)/g")"$")
done < .s3ignore

CMDS=()
while read -r i; do
    CMDS+=("--include=$i")
done <<< "$all"

echo "${CMDS[@]}" | xargs aws s3 sync . s3://kilometercreative.com/v2 --exclude "*" --profile km