#!/usr/bin/env bash

echo 'Lint JS...'
npm run lint
echo 'Done.'
echo ''

echo 'Compile JS...'
node_modules/.bin/rollup -c scripts/rollup.config.js
echo 'Done.'
echo ''
