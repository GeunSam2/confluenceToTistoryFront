#!/bin/bash

docker run -dit --name confront -p 8003:8080 -v ${PWD}:/app geunsam2/reactbase:node15140 /bin/bash
