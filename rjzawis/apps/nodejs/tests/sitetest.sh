#!/bin/bash

if curl http://serve:5000 | grep site; then
  echo "\n\nSite exists\nSite test passes.\n"
  exit 0
else
  echo "\n\nSite does not exist\nSite test FAILS.\n"
  exit 1
fi
