#!/usr/bin/env sh

abort on errors
set -e

env PUBLIC_URL=https://AndrewJCate.github.io/Portfolio-Website npm run build

cd build

git init
git add -A
git commit -m 'deploy'

# deploying to https://AndrewJCate.github.io (see https://pages.github.com for instructions)
# git push -f git@github.com:{USERNAME}/{USERNAME}.github.io.git main

# deploying to https://AndrewJCate.github.io/Portfolio-Website
git push -f git@github.com:AndrewJCate/Portfolio-Website.git main:gh-pages

# TO USE: in terminal type "bash deploy.sh"
