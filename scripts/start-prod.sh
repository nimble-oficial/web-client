#!/bin/bash
echo "Starting prod server"

npx next build && npx next start
