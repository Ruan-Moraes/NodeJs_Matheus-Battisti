const Task = require('../models/Task');

module.exports = class TaskController {
  static createTask(req, res) {
    res.render('tasks/create');
  }

  static async createTaskSave(req, res) {
    const { title, description, done = false } = req.body;

    title.trim();
    description.trim();

    await Task.create({ title, description, done });

    res.redirect('/tasks');
  }

  static async removeTask(req, res) {
    const { id } = req.body;

    await Task.destroy({
      where: {
        id,
      },
    });

    res.redirect('/tasks');
  }

  static async updateTask(req, res) {
    const id = req.params.id;

    const task = await Task.findOne({
      where: {
        id,
      },
      raw: true,
    });

    task.title = task.title.trim();
    task.description = task.description.trim();

    res.render('tasks/edit', { task });
  }

  static async updateTaskSave(req, res) {
    const id = req.body.id;

    const { title, description, done } = req.body;

    title.trim();
    description.trim();

    await Task.update(
      { title, description, done },
      {
        where: {
          id,
        },
      }
    );

    res.redirect('/tasks');
  }

  static async toggleTaskStatus(req, res) {
    const id = req.body.id;

    const task = {
      done: req.body.done === '0' ? '1' : '0',
    };

    await Task.update(task, {
      where: {
        id,
      },
    });

    res.redirect('/tasks');
  }

  static async showTasks(req, res) {
    const tasks = await Task.findAll({
      raw: true,
    });

    res.render('tasks/all', { tasks });
  }
};
