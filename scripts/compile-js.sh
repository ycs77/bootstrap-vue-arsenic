#!/usr/bin/env bash

echo 'Prettify JS...'
npm run prettify
echo 'Done.'
echo ''

echo 'Lint JS...'
npm run lint
echo 'Done.'
echo ''

echo 'Compile JS...'
node_modules/.bin/rollup -c scripts/rollup.config.js
echo 'Done.'
echo ''
