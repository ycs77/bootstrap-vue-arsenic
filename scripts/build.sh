#!/usr/bin/env bash
set -e

echo 'Checking plugin metadata...'
node -r esm scripts/check-plugin-meta.js || exit 1
echo 'Done.'
echo ''

# Cleanup
rm -rf dist es

# Compile JS...
scripts/compile-js.sh

echo 'Build ES modules...'
NODE_ENV=es node_modules/.bin/babel src --out-dir es --ignore 'src/**/*/fixtures,src/**/*.spec.js'
echo 'Done.'
echo ''

echo 'Minify JS...'
node_modules/.bin/terser \
  dist/bootstrap-vue-arsenic.js \
  --compress typeofs=false \
  --mangle --comments '/^!/' \
  --source-map 'content=dist/bootstrap-vue-arsenic.js.map,includeSources,url=bootstrap-vue-arsenic.min.js.map' \
  --output dist/bootstrap-vue-arsenic.min.js
node_modules/.bin/terser \
  dist/bootstrap-vue-arsenic.common.js \
  --compress typeofs=false \
  --mangle --comments '/^!/' \
  --source-map 'content=dist/bootstrap-vue-arsenic.common.js.map,includeSources,url=bootstrap-vue-arsenic.common.min.js.map' \
  --output dist/bootstrap-vue-arsenic.common.min.js
node_modules/.bin/terser \
  dist/bootstrap-vue-arsenic.esm.js \
  --compress typeofs=false \
  --mangle \
  --comments '/^!/' \
  --source-map 'content=dist/bootstrap-vue-arsenic.esm.js.map,includeSources,url=bootstrap-vue-arsenic.esm.min.js.map' \
  --output dist/bootstrap-vue-arsenic.esm.min.js
echo 'Done.'
echo ''

# Compile SASS...
scripts/compile-sass.sh

echo 'Minify CSS...'
node_modules/.bin/cleancss \
  --level 1 \
  --format breaksWith=lf \
  --source-map \
  --source-map-inline-sources \
  --output dist/bootstrap-vue-arsenic.min.css \
  dist/bootstrap-vue-arsenic.css
echo 'Done.'
echo ''

echo 'Done building assets.'
