#!/bin/bash
upload() {
  curl -H "Authorization: Bearer $NEOCITIES_KEY" \
    -F "${1#*/}=@$1" "https://neocities.org/api/upload"
}
delete() {
  curl -H "Authorization: Bearer $NEOCITIES_KEY" \
    "$1" "https://neocities.org/api/delete"
}
getFiles() {
  files=$(curl -s -H "Authorization: Bearer $NEOCITIES_KEY" \
    "https://neocities.org/api/list" | jq -r '.files[].path') # Extract file paths

  string=""
  for file in $files; do
    string="$string -d filename[]=$file"
  done
  echo "$string"
}
clearProject() {
  files=$(getFiles)
  delete "$files"
}

run_files() {
  echo "clearing deployed files..."
  clearProject
  echo "uploading new files..."
  for file in "$1"/*; do
    if [ -d "$file" ]; then
      run_files $file
    else
      echo $file
      upload $file
    fi
  done
}

run_files dist
