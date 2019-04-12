#!/usr/bin/env bash

echo 'Compile JS...'
node_modules/.bin/rollup -c scripts/rollup.config.js
echo 'Done.'
echo ''
