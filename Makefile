SHELL=/bin/bash
DOCKERUSER=geunsam2
IMGNAME=confluence2tistoryfront
CONTAINERNAME=confront
VERSION=v1
IMGFULLNAME=$(DOCKERUSER)/$(IMGNAME):$(VERSION)

build :
	docker build -t $(IMGFULLNAME) -f docker/Dockerfile .
	docker push $(IMGFULLNAME)
	if [ 1 -eq  $(shell docker ps | grep $(CONTAINERNAME)1 | wc -l) ];then echo '## Remove Container'; docker stop $(CONTAINERNAME)1; sleep 2; fi
	docker run -dit -p 8002:80 --rm --name $(CONTAINERNAME)1 $(IMGFULLNAME)

# start dev env
start : 
	echo '## Check Container live'
	if [ 1 -eq  $(shell docker ps | grep $(CONTAINERNAME)0 | wc -l) ];then echo '## Remove Container'; docker stop $(CONTAINERNAME)0; sleep 2; fi
	echo '## Run New Container'
	docker run -dit -p 8001:3000 -v $(shell pwd):/app --rm --name $(CONTAINERNAME)0 node:15.14.0 /bin/bash -c 'npm ci --prefix /app && npm start --prefix /app'
	
