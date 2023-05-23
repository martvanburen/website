#!/bin/bash
docker run -it --rm --name website -v $(pwd)/public-html:/usr/local/apache2/htdocs/ -p 8080:80 httpd
