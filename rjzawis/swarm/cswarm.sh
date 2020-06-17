#!/bin/bash

if [ $1 = 1 ]; then
  ssh -i ../../secrets/A_udemyswarm.pem ec2-user@100.26.171.123

elif [ $1 = 2 ]; then
  ssh -i ../../secrets/A_udemyswarm.pem ec2-user@35.173.201.110

elif [ $1 = 3 ]; then
  ssh -i ../../secrets/A_udemyswarm.pem ec2-user@3.84.81.61

fi
