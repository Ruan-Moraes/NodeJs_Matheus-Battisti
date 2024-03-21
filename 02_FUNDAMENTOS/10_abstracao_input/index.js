const inquirer = require('inquirer');
const chalk = require('chalk');

inquirer
  .prompt([
    {
      name: 'p1',
      message: 'Qual a sua primeira nota?',
    },
    {
      name: 'p2',
      message: 'Qual a sua segunda nota?',
    },
    {
      name: 'p3',
      message: 'Qual a sua terceira nota?',
    },
    {
      name: 'p4',
      message: 'Qual a sua quarta nota?',
    },
    {
      name: 'p5',
      message: 'Qual a sua quinta nota?',
    },
  ])
  .then((answers) => {
    const media =
      (parseInt(answers.p1) +
        parseInt(answers.p2) +
        parseInt(answers.p3) +
        parseInt(answers.p4) +
        parseInt(answers.p5)) /
      5;

    if (media < 4) {
      console.log(chalk.red(`Você está reprovado! Sua média é: ${media}`));
    }

    if (media >= 4 && media < 7) {
      console.log(
        chalk.yellow(`Você está de recuperação! Sua média é: ${media}`)
      );
    }

    if (media >= 7) {
      console.log(chalk.green(`Você está aprovado! Sua média é: ${media}`));
    }
  })
  .catch((err) => {
    console.log(err);
  });
