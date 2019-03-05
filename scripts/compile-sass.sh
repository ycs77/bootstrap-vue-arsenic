#!/usr/bin/env bash

echo 'Compile SASS...'
node_modules/.bin/node-sass \
  --output-style expanded \
  --source-map true \
  --source-map-contents true \
  --precision 6 \
  src/index.scss \
  dist/bootstrap-vue-arsenic.css

node_modules/.bin/postcss \
  --config scripts/postcss.config.js \
  --replace dist/bootstrap-vue-arsenic.css
echo 'Done.'
echo ''
