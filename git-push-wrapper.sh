#!/bin/bash

# Check for the custom argument
if [ "$1" = "--allow" ]; then
  echo "Push is allowed."
  git push
else
  echo "Push is not allowed. Use './git-push-wrapper.sh --allow' to allow the push."
  exit 1  # Block the push
fi
