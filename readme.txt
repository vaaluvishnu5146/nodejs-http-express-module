1. Create a Project folder with name "FOLDER NAME"
2. Open command prompt in the same folder
3. Run command "npm init"
4. Run command npm i nodemon express body-parser mongoose --save
5. Create .env file and paste below:

NODE_ENV=development
MONGODB_DEV_URI=mongodb://localhost:27017/
MONGODB_DEV_NAME=bookings
MONGODB_PROD_URI=DBURI
MONGODB_PROD_NAME=DBNAME
HOSTNAME=0.0.0.0
JWT_SECRET=YOUR_APPLICATION_SECRET