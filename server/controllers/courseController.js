const { Course } = require("../models");
// const axios = require("axios");

class courseController {
  static async addCourse(req, res, next) {
    try {
      const { tittle,material } = req.body;

      const created = await Course.create({
        tittle,
        material
      });

      res.status(201).json({
        id: created.id,
        tittle: created.tittle,
        material: created.material,
      });
    } catch (err) {
      next(err);
    }
  }

  
}

module.exports = courseController;
