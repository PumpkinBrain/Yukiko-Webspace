cd public/
destination=data/posts.json

echo "" >$destination
echo "[" >>$destination
for file in blogs/*; do
  title=$(grep -E '^\[metadata\.title\]:#' $file | sed 's/^[^"]*"/"/')
  tag=$(grep -E '^\[metadata\.tag\]:#' $file | sed 's/^[^"]*"/"/')
  date=$(grep -E '^\[metadata\.date\]:#' $file | sed 's/^[^"]*"/"/')
  description=$(grep -E '^\[metadata\.description\]:#' $file | sed 's/^[^"]*"/"/')
  echo "{
  \"title\": $title,
  \"tag\": $tag,
  \"date\": $date,
  \"file\": \"$file\",
  \"description\": $description
}," >>$destination
done
echo "]" >>$destination
sed -i ':a;N;$!ba;s/\n//g' $destination &&
  sed -i 's/\([[:space:]]\+\)\([:,{]\)/\2/g' $destination &&
  sed -i 's/\([:,{]\)[[:space:]]\+/\1/g' $destination &&
  sed -i 's/},\]/}\]/' $destination
