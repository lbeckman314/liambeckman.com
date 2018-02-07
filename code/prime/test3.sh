#!/bin/bash

# https://stackoverflow.com/questions/4651437/how-to-set-a-variable-to-the-output-from-a-command-in-bash#4651495
CODE="$(basename `git rev-parse --show-toplevel`)"
echo "$CODE"
