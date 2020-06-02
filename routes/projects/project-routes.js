const express = require('express');
const router = express.Router();
const Project = require('../../models/Project.model');

router.get('/projects', (req, res) => {
  Project.find()
    .then((projects) => {
      res.status(200).json(projects);
    })
    .catch((err) => res.json({ message: err.message }));
});

module.exports = router;
