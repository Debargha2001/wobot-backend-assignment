Run application:
Step 1: Download zip and extract folders
Step 2: Open terminal and change ti this directory and run command "npm i"
Step 3: Run command "npm start" or "npm run start:dev"(for running in development) to start application

## API DOCUMENTATION

### 1. SignUp

Api description

Endpoint: `/users/signup`

Request Type: `POST`

Request Body: 

{
  "firstName": String,
  "lastName": String,
  "username": String,
  "password": String,
}

Response `200` :

{
	"status":'success',
	"token":"Something",
  "data":{....}
}


Response `400`:


{
	"status":'fail',
	"message":"Bad Request!"
}

### 2. LogIn

Api description

Endpoint: `/users/login`

Request Type: `POST`

Request Body: 

{
  "username": String,
  "password": String,
}

Response `200` :

{
	"status":'success',
	"token":"Something",
  "data":{....}
}

Response `401`:


{
	"status":'fail',
	"message":"unauthorized"
}


Response `400`:


{
	"status":'fail',
	"message":"Bad Request!"
}

### 3. Fetch User List

Api description

Endpoint: `/users`

Request Type: `GET`

Request Body: empty

Response `200` :

{
	"status":'success',
    "data":{....}
}

Response `401`:


{
	"status":'fail',
	"message":"unauthorized"
}


Response `400`:


{
	"status":'fail',
	"message":"Bad Request!"
}

### 4. Fetch User Details (Current Logged In User)

Api description

Endpoint: `/getUserDetails`

Request Type: `GET`

Request Body: empty

Response `200` :

{
	"status":'success',
    "data":{....}
}

Response `401`:


{
	"status":'fail',
	"message":"unauthorized"
}


Response `400`:


{
	"status":'fail',
	"message":"Bad Request!"
}

### 5. Fetch Any User Details By User Id

Api description

Endpoint: `/:id`

Request Type: `GET`

Request Body: empty

Response `200` :

{
	"status":'success',
    "data":{....}
}

Response `401`:


{
	"status":'fail',
	"message":"unauthorized"
}


Response `400`:


{
	"status":'fail',
	"message":"Bad Request!"
}

### 6. Upload Products

Api description

Endpoint: `/products`

Request Type: `POST`

Request Body: Upload a .csv file

Response `200` :

{
	"status":'success',
   "message": "Products are inserted successfully!"
}

Response `401`:


{
	"status":'fail',
	"message":"unauthorized"
}


Response `400`:


{
	"status":'fail',
	"message":"Bad Request!"
}

### 7. Fetch Product List

Api description

Endpoint: `/products`

Request Type: `GET`

Request Body: empty

Response `200` :

{
	"status":'success',
   "data": {.....}
}

Response `401`:


{
	"status":'fail',
	"message":"unauthorized"
}


Response `400`:


{
	"status":'fail',
	"message":"Bad Request!"
}
