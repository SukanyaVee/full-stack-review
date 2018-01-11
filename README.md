Project planning:
=======================

Packages required to yarn: 
-----------------------------------
axios 
express 
cors???
body-parser 
massive 
express-sessions 
auth0-lock
react 
redux 
react-redux 
react-router-dom
react-router
dotenv
redux-promise-middleware

Routes/ Components:
---------------------
	Home
		Login
	Private (dashboard) 
        -> headers
        logout page???

End-points:
/user-data
/login
/logout

Middleware
    check auth


Redux/state: 
-----------------
User info from auth0:
    Picture (redux)
    Id (redux)
    Username (redux)
    Password/auth (state)
    Email	(redux)
Account balance (redux)
    loggedIn (state)

Database schema:
--------------------------
User table
    Id autoincrement
    Username
    auth/password
    picture
    Email
    balance?
transactions table
    trans id
