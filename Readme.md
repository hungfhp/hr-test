# Project setup

### Prerequisites

MongoDB server running on port 27017
NodeJS environment

# Server

MongoDB + ExpressJS + JWT

##### How to run

```
# install dependencies
$ npm install

# Run server:
$ npm start
```

-> Server running on http://localhost:8080

# Client

React + antd

##### How to run

```
# install dependencies
$ yarn

# Run web app:
$ yarn start
```

-> Web app running on http://localhost:3000

## Users's example

Available users to login:

### Admin user:

```
email:      admin@gmail.com
password:   123456
```

### Employee user:

```
email:      employee@gmail.com
password:   123456
```

# Assumptions

## Admin user

1. Login on http://localhost:3000/login
2. Successfully logged in with default admin account
3. Add/update/view employees
   Add/update/view performance reviews
   Assign one employee to participate in another employee's performance review
   #Pending: remove employees, assign multiple employees to review

## Emloyee user

1. Login on http://localhost:3000/login
2. Successfully logged in with default employee account or created account by admin
3. List of performance reviews requiring feedback
   Submit feedback
