# Requirements

Design a web application that allows employees to submit feedback toward each other's performance review.

_Partial solutions are acceptable._ It is not necessary to submit a complete solution that implements every requirement.

### Admin view

- Add/remove/update/view employees
- Add/update/view performance reviews
- Assign employees to participate in another employee's performance review

### Employee view

- List of performance reviews requiring feedback
- Submit feedback

-----------------------------

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

## Emloyee user

1. Login on http://localhost:3000/login
2. Successfully logged in with default employee account or created account by admin
3. List of performance reviews requiring feedback
   Submit feedback
