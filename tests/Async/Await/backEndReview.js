//async/await

const getFishAndChips = async (fishApiUrl) => {
    const fish = await fetch(fishApiUrl).then(response => response.json());
  
    const fishIds = fish.map(fish => fish.id),
    chipReqOpts = { method: 'POST', body: JSON.stringify({ fishIds }) };
  
    const chips = await fetch(chipsApiUrl, chipReqOpts).then(response => response.json());
  }

// https://github.com/ginareeena/2101-GHP-RM-WEB-FT-JPFP/tree/master/server

// SQL queries/ROUTES
// https://github.com/ginareeena/2101-GHP-RM-WEB-FT-JPFP/blob/master/server/api/students.js

// get, post, put, delete
// patch?

router.get("/:id", async (req, res, next) => {
    try {
      const id = await req.params.id;
      const student = await Student.findByPk(id);
      const campusId = student.campusId;
  
      //handles students whose campus has been deleted or not assigned
      if (student.campusId) {
        const studentAndCampus = await Student.findByPk(id, {
          include: [
            {
              model: Campus,
              as: "campus",
              where: { id: campusId },
            },
          ],
        });
        res.send(studentAndCampus);
      } else {
        res.send(student);
      }
    } catch (error) {
      next(error);
    }
  });  


  router.post("/", async (req, res, next) => {
    console.log("are we getting inside student post route?");
    console.log("req.body--->", req.body);
    try {
      const newStudent = await Student.create(req.body);
      console.log(newStudent);
      res.status(201).send(newStudent);
    } catch (error) {
      next(error);
    }
  });
  
  router.delete("/:id", async (req, res, next) => {
    try {
      const student = await Student.findByPk(req.params.id);
      await student.destroy();
      // send back all the students
      const students = await Student.findAll();
      res.send(students);
    } catch (error) {
      next(error);
    }
  });
  
  // sent back the student AND their campus
router.put("/:id", async (req, res, next) => {
    try {
      const student = await Student.findByPk(req.params.id);
      const updatedStudent = await student.update(req.body);
      const updatedStudentandCampus = await Student.findByPk(updatedStudent.id, {
        include: [
          {
            model: Campus,
            as: "campus",
            where: { id: updatedStudent.campusId },
          },
        ],
      });
  
      res.send(updatedStudentandCampus);
    } catch (error) {
      next(error);
    }
  });
  
  module.exports = router;
  
  /// MODELS

const Sequelize = require("sequelize");
const db = require("./database");

module.exports = db.define("campus", {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
  imageUrl: {
    type: Sequelize.TEXT,
    defaultValue:
      "https://www.google.com/imgres?imgurl=https%3A%2F%2Fcdn.nohat.cc%2Fthumb%2Ff%2F720%2Fcomvecteezy378407.jpg&imgrefurl=https%3A%2F%2Fnohat.cc%2Ff%2Fschool-vector-icon%2Fcomvecteezy378407-201908071930.html&tbnid=bSnoGvhcrXrRFM&vet=12ahUKEwju3_rB1t_uAhVJT98KHSx8C4UQMygvegUIARC2Ag..i&docid=S1-MzfO_XdNo_M&w=720&h=720&q=college%20vector%20icon&ved=2ahUKEwju3_rB1t_uAhVJT98KHSx8C4UQMygvegUIARC2Ag",
  },
  address: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
  description: {
    type: Sequelize.TEXT,
  },
});

//have folders -> server -> db and api

//SERVER index.js looks like this:

const express = require('express')
const path = require('path')
const volleyball = require('volleyball')

const app = express()

// logging middleware
// Only use logging middleware when not running tests
const debug = process.env.NODE_ENV === 'test'
app.use(volleyball.custom({ debug }))

// body parsing middleware
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// static middleware
app.use(express.static(path.join(__dirname, '../public')))

app.use('/api', require('./api')) // include our routes!

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/index.html'))
}) // Send index.html for any other requests

// error handling middleware
app.use((err, req, res, next) => {
  if (process.env.NODE_ENV !== 'test') console.error(err.stack)
  res.status(err.status || 500).send(err.message || 'Internal server error')
})

module.exports = app

///API also has an index.js
