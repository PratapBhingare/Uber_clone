# Backend API Documentation

## `/users/register` – User Registration API

### Description

The `/users/register` endpoint is used to register a new user. It validates input, hashes the password, saves the user, and returns a JWT token.

### Method & URL

**POST** `/users/register`

### Request Body Format

- `fullname`

  - `firstname` (required, min 3 chars)
  - `lastname` (optional, min 3 chars)
- `email` (required, valid email)
- `password` (required, min 6 chars)

### Required Fields & Validation Rules

* `fullname.firstname` Required, min 3 chars
* `fullname.lastname` Optional, min 3 chars
* `email` Required, valid email
* `password` Required, min 6 chars

### Success Response (201)

* `token` jwt_generated_token_here
* `user`

  * `_id` 675ab12f9e23c45a8c12d1c3
  * `fullname`

    * `firstname` John
    * `lastname` Doe
  * `email` [john@example.com](mailto:john@example.com)





### Validation Error Response (400)

* `errors`

  * `type` field
  * `msg` Firstname must be at least 3 character long
  * `path` fullname.firstname
  * `location` body

### Missing Fields Error (500)

* `error` Fields are Required!

### Email Already Exists Error (409)

* `error` Email already exists


------------------------------------------------------------------------------------------



## `/users/login` – User Login API

### Description
The `/users/login` endpoint is used to authenticate an existing user. It checks the email and password, validates input, compares the hashed password, and returns a JWT token along with user data.

### Method & URL
**POST** `/users/login`

### Request Body Format
- `email` (required, valid email)
- `password` (required, min 6 chars)

### Required Fields & Validation Rules
- `email` Required, valid email  
- `password` Required, min 6 chars  

### Success Response (200)
- `token` jwt_generated_token_here  
- `user`  
  - `_id` user_id_here  
  - `fullname`  
    - `firstname` John  
    - `lastname` Doe  
  - `email` john@example.com  

### Invalid Credentials Response (401)
- `message` Invalid Email or Password  

### Validation Error Response (400)
- `errors`  
  - `type` field  
  - `msg` Validation error message  
  - `path` Field that failed  
  - `location` body 


------------------------------------------------------------------------------------------


## `/users/profile` – Get User Profile

### Description
The `/users/profile` endpoint returns the authenticated user's details. It requires a valid JWT token which is checked through middleware before the user data is returned.

### Method & URL
**GET** `/users/profile`

### Authentication
- Requires JWT token  
- Token must not be blacklisted  
- Token can be provided in  
  - Cookies (`token`)  
  - Authorization header `Bearer <token>`  

### Success Response (200)
- `_id` user_id_here  
- `fullname`  
  - `firstname` John  
  - `lastname` Doe  
- `email` john@example.com  
- Any other user fields stored in the database  

### Unauthorized Response (401)
- `message` Unauthorized user  
(Occurs when no token is provided or token is blacklisted)

### Invalid Token Response (401)
- `message` Unauthorized  
(Occurs when token is expired or invalid)


-----------------------------------------------------------------------

## `/users/logout` – User Logout API

### Description
The `/users/logout` endpoint logs out the authenticated user by clearing the token cookie and adding the token to the blacklist so it cannot be reused.

### Method & URL
**POST** `/users/logout`

### Authentication
- Requires a valid JWT token  
- Token can be provided in  
  - Cookies (`token`)  
  - Authorization header `Bearer <token>`  

### Success Response (200)
- `message` logged Out

### Unauthorized Response (401)
- `message` Unauthorized user  
(Occurs if the route is protected and the token is missing)
