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
	"message":"err!"
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
	"message":"err!"
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
	"message":"err!"
}

### 4. Fetch User Details

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
	"message":"err!"
}

### 5. Upload Products

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
	"message":"err!"
}

### 6. Fetch Product List

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
	"message":"err!"
}
