# pictsy-cli

Install - npm install ./ in the main directory

Usage - you'll need to create /env/.env and populate it with the following -

BUCKET=

AWS_ACCESS_KEY_ID=

AWS_SECRET_ACCESS_KEY=

MONGO_SECRET=

MONGO_PATH=

DB_COLLECTION=


The CLI works with MongoDB and AWS S3 which you'll need to coordinate on your end. Once you've got this all done you can take it for a spin with the following commands.

--pictsy list - lists all images in the DB

--pictsy show (id) - find an image by ID

--pictsy upload (file.extension) - upload a file to S3 and create a record in MongoDB

--pictsy download (filename.extension), (filepath) download a file from your S3 bucket to the specified path

Endpoints - 

If you start this bad boy up, there are a few endpoints you can hit --

npm start (port # optional) to start. If you don't give it a port #, it'll automatically start on 5000.

/list/ - returns all images in the DB

/show/:id/ - returns an image by ID.

Sweet.
