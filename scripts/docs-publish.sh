#!/usr/bin/env bash
set -e

yarn docs-gen

git config --global user.email yangchenshin77@gmail.com
git config --global user.name Lucas Yang

mkdir -p ~/.ssh
chmod 600 ~/.ssh
ssh-keyscan github.com >> ~/.ssh/known_hosts

gh-pages -t -d docs-dist -m "Update [ci skip]" -r git@github.com:ycs77/bootstrap-vue-arsenic.git
