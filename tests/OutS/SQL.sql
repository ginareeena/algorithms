/*
Carousel Image:
https://docs.google.com/document/d/1N9lVrt8tZhfDgtP2q9onr9FIh5m0k8PO90A-1HASHEE/edit?usp=sharing

CONTEXT:

On OutS.com, when you log in, we have a bunch of carousels that display
recommendations to parents to urge them to sign up. Today, we will be
trying to re-create the "Popular" classes carousel. This carousel returns
classes (in order of popularity) that are relevant to the parent and child.

*/

/*
QUESTION 1:
Create a schema that would allow a developer to build this FE carosusel.
*/

-- users
-- classes
-- teachers


CREATE TABLE classes (
  class_id INT NOT NULL
  className
)

CREATE TABLE sections(
  start_time TIMESTAMP
  end_time TIMESTAMP
  class_id INT FOREIGN KEY REFERENCE classes(id)
  teacher_id FOREIGN KEY REFERENCES teachers(id)
  popularityScore
  minAge
  maxAge
)

CREATE TABLE teachers(
  teacher_id INT NOT NULL
  teacher_name
)

/*
QUESTION 2:
Build an SQL query that queries our database and returns popular classes for my 7 year old child.
*/

SELECT * FROM sections inner join classes on classes.class_id = sections.class_id
inner join teachers on sections.teacher_id = teachers.teachers_id
WHERE popularityScore > 80 AND sections.maxAge <= 7 AND sections.minAge <= 7

/*
QUESTION 3:
Build an REST API call or a GraphQL call with the return type that fetches data from the databases.
(If time) Write an API call that allows a user to "favorite" a class
*/

-- app.get("/popularClasses)"
-- Sections.findAll(
-- GET request
-- fetch(url)
-- convert .json
-- req.body
-- popularClasses = req.body.toJson
-- res.send(

--
GET /classes?filter=popularity&limit=10&offset=10

[
  {

  }
]
