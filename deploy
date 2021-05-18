#!/bin/bash

# Switch to release branch
git switch release

# Merge main branch
git merge main

# Build project
npm run build

# Deploy
npm run deploy

# Switch to main branch
git switch main