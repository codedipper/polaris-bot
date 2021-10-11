#!/bin/bash

git add .
echo Please enter the commit message.
read COMMIT_MSG
git commit -m "$COMMIT_MSG"
git push -u origin main
