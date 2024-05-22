const Task = require('../models/Task');

module.exports = class TaskController {
  static createTask(req, res) {
    res.render('tasks/create');
  }

  static async createTaskSave(req, res) {
    const { title, description, done = false } = req.body;

    await Task.create({ title, description, done });

    res.redirect('/tasks');
  }

  static async showTasks(req, res) {
    const tasks = await Task.findAll({
      raw: true,
    });

    res.render('tasks/all', { tasks });
  }
};
