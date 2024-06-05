How to Run locally:
- Git Clone this
- start the terminal 'npm init -y'
- setup database in terminal (using postgres) 'npx sequelize-cli db:create' and 'npx sequelize db:migrate'
- run app js 'npx nodemon app.js'
- test the API using Postmann

User:
- POST: /register
- POST: /login
- GET: /user
- POST: /edit-user
- POST: /questionnaire
- POST: /new-score
- POST: /new-lesson
- GET: /score
- GET: /lesson
- POST: /notes-topic
- GET: /notes
- GET: /learning-plan
- POST: /edit-learning-plan
- POST: /course-progress
- GET: /progress
- GET: /streak
- GET: /notes-format
- POST: /notes-format