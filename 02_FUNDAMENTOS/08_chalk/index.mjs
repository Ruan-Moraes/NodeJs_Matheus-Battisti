import chalk from 'chalk';

const nota = 6;

if (nota < 7) {
  console.log(chalk.red.bgWhite('Reprovado com nota: ' + nota));
} else {
    console.log(chalk.green('Aprovado com nota: ' + nota));
}