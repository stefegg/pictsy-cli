# pictsy-cli

Install - npm install -g ./ in the main directory

Usage - you'll need to create .env in the root folder and populate it with the following -

BUCKET=

AWS_ACCESS_KEY_ID=

AWS_SECRET_ACCESS_KEY=

MONGO_PATH=

MONGO_SECRET=

DB_COLLECTION=

If you do not provide the last 3 values, defaults will be provided for you. The CLI does not work unless the top three AWS values are provided by the user, either in the command line or in the root .env file. 

Commands:

--pictsy list - lists all images in the MongoDB

--pictsy show (id) - find an image by ID

--pictsy upload (file.extension) - upload a file to S3 and create a record in MongoDB

--pictsy download (filename.extension), (filepath) download a file from your S3 bucket to the specified path

Endpoints - 

If you start this bad boy up, there are a few endpoints you can hit --

--pictsy start (port # optional) to start. If you don't give it a port # with PORT= , it'll automatically start on 5000.

/list/ - returns all images in the DB

/show/:id/ - returns an image by ID.

Sweet.

Really this was a learning experience for me. So mind any rough edges and generally ignore the test directory unless you're going to change more things that I'm not going to mention here.
