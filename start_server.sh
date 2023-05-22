#!/bin/bash
docker run -d -it --rm --name website -v /home/ec2-user/efs/Website/public-html:/usr/local/apache2/htdocs/ -p 8080:80 httpd
