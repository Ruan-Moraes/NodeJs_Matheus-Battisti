const inquirer = require('inquirer');
const chalk = require('chalk');

inquirer
  .prompt([
    {
      name: 'name',
      message: 'Qual o seu nome?',
    },
    { name: 'idade', message: 'Qual a sua idade?' },
  ])
  .then((answers) => {
    try {
      if (answers.name === '' || answers.idade === '') {
        throw new Error(chalk.red('Nome e idade são obrigatórios'));
      }

      console.log(chalk.bgYellow.black('Nome: ' + answers.name));
      console.log(chalk.bgYellow.black('Idade: ' + answers.idade));

      if (answers.idade < 18) {
        console.log(chalk.red('Você é menor de idade'));
      } else {
        console.log(chalk.green('Você é maior de idade'));
      }
    } catch (error) {
      console.log(error);
    }
  })
  .catch((err) => {
    console.log('Tente novamente mais tarde! Erro: ' + err);
  });
