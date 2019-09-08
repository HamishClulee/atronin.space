#!/usr/bin/env bash
cd server
kill -9 $(lsof -t -i:4888)
yarn start