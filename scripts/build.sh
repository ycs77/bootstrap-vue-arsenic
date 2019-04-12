#!/usr/bin/env bash
set -e

echo 'Checking plugin metadata...'
node -r esm scripts/check-plugin-meta.js || exit 1
echo 'Done.'
echo ''

# Cleanup
rm -rf dist es

echo 'Compile JS...'
node_modules/.bin/rollup -c scripts/rollup.config.js
echo 'Done.'
echo ''

echo 'Build ES modules...'
NODE_ENV=es node_modules/.bin/babel src --out-dir es --ignore 'src/**/*.spec.js'
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

echo 'Compile SASS...'
node_modules/.bin/node-sass \
  --output-style expanded \
  --source-map true \
  --source-map-contents true \
  --precision 6 \
  scripts/build.scss \
  dist/bootstrap-vue-arsenic.css

node_modules/.bin/postcss \
  --config scripts/postcss.config.js \
  --replace dist/bootstrap-vue-arsenic.css
echo 'Done.'
echo ''

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
