#!/usr/bin/env bash

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
git pull -f git@github.com:AndrewJCate/andrewjcate.github.io.git master:gh-pages
git push -f git@github.com:AndrewJCate/andrewjcate.github.io.git master:gh-pages

# TO USE: in terminal type "bash deploy.sh"
