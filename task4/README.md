# task4

## Front-end:

React, TS, React-query, React-hook-form, Axios, Bootstrap

## Back-end:

Node JS, TS, Express, Sequelize, Mysql2, Fast-csv

## Deploy:

https://auth-table.onrender.com

## Video link:

https://www.dropbox.com/s/6psy7s3b46a36j4/task4.itransition.mp4?dl=1

## Technical Specification:

Create a Web application with registration and authentication.

Non-authenticated users should not have access to the user management (admin panel).
Authenticated users should have access the user management table: id, name, e-mail, last login time, registration time, status (active/blocked).
The left column of the table should contains checkboxes without labels for multiple selection (table header contains “Select All” checkbox without label).

There must be a toolbar over the table with the flooring actions: Block (red button with text), Unblock (icon), Delete (icon).

You have to use a CSS framework (Bootstrap is recommended, but you can choose any CSS framework).

Every users should be able to block or delete yourself or any other user.
If user account is blocked or deleted any next user’s request should redirect to the login page.
User can use any non-empty password (even one character).
Blocked user should not be able to login, deleted user can re-register.
