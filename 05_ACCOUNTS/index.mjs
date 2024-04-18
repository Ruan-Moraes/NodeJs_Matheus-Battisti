import fs from 'fs';

import inquirer from 'inquirer';
import select from '@inquirer/select';
import chalk from 'chalk';

console.clear();

function init() {
  console.log(chalk.white.bgBlue('Menu do Banco'));

  select({
    message: 'Select a package manager',
    choices: [
      {
        name: 'Criar Conta',
        value: 'createAccount',
        description:
          'Crie uma nova conta para desfrutar de todos os benefícios.',
      },
      {
        name: 'Ver Saldo',
        value: 'balance',
        description: 'Verifique o saldo de uma conta.',
      },
      {
        name: 'Depositar um valor em uma conta',
        value: 'deposit',
        description: 'Deposite um valor em uma conta para aumentar o saldo.',
      },
      {
        name: 'Sacar um valor de uma conta',
        value: 'withdraw',
        description: 'Saque um valor de uma conta.',
      },
      {
        name: 'Transferir um valor de uma conta para outra',
        value: 'transfer',
        description: chalk.yellow(
          'Transfira um valor de uma conta para outra. Tenha cuidado, pois essa ação é irreversível.'
        ),
      },
      {
        name: 'Deletar uma conta',
        value: 'deleteAccount',
        description: chalk.red('Deletar uma conta é uma ação irreversível.'),
      },
      {
        name: 'Limpar o terminal',
        value: 'clear',
        description: 'Limpar o terminal.',
      },
      {
        name: 'Sair',
        value: 'exit',
        description: 'Sair do programa.',
      },
    ],
  })
    .then((answer) => {
      if (answer === 'createAccount') {
        console.log(chalk.white.bgGreen('Criar Conta'));

        createAccount();
      }

      if (answer === 'balance') {
        console.log(chalk.white.bgGreen('Ver Saldo'));

        balance();
      }

      if (answer === 'deposit') {
        console.log(chalk.white.bgGreen('Depositar um valor em uma conta'));

        deposit();
      }

      if (answer === 'withdraw') {
        console.log(chalk.white.bgGreen('Sacar um valor de uma conta'));

        withdraw();
      }

      if (answer === 'transfer') {
        console.log(
          chalk.white.bgGreen('Transferir um valor de uma conta para outra')
        );

        transfer();
      }

      if (answer === 'deleteAccount') {
        console.log(chalk.white.bgGreen('Deletar Conta'));

        deleteAccount();
      }

      if (answer === 'clear') {
        console.clear();

        init();
      }

      if (answer === 'exit') {
        console.log(chalk.white.bgBlue('Obrigado por usar o nosso Banco!'));
        console.clear();

        process.exit();
      }
    })
    .catch((err) => {
      console.log(chalk.white.bgRed(err));
    });
}

function createAccount() {
  inquirer
    .prompt([
      {
        type: 'input',
        name: 'nameAccount',
        message: 'Qual o nome da conta?',
      },
      {
        type: 'password',
        name: 'passwordAccount',
        message: 'Digite a senha da conta.',
      },
    ])
    .then((answers) => {
      console.log(chalk.white.bgBlue('Criando conta...'));

      const account = {
        name: answers.nameAccount,
        password: answers.passwordAccount,
        balance: 0,
      };

      if (fs.existsSync(`accounts/${answers.nameAccount}.json`)) {
        console.log(chalk.white.bgRed('Essa conta já existe!'));

        returningToTheMenu();
      } else {
        fs.writeFileSync(
          `accounts/${answers.nameAccount}.json`,
          JSON.stringify(account)
        );

        console.log(chalk.white.bgGreen('Conta criada com sucesso!'));

        returningToTheMenu();
      }
    })
    .catch((err) => {
      console.log(chalk.white.bgRed(err));
    });
}

function balance() {
  inquirer
    .prompt([
      {
        type: 'input',
        name: 'nameAccount',
        message: 'Qual o nome da conta?',
      },
      {
        type: 'password',
        name: 'passwordAccount',
        message: 'Digite a senha da conta.',
      },
    ])
    .then((answers) => {
      console.log(chalk.white.bgBlue('Verificando saldo...'));

      const account = JSON.parse(
        fs.readFileSync(`accounts/${answers.nameAccount}.json`)
      );

      if (answers.passwordAccount !== account.password) {
        console.log(chalk.white.bgRed('Senha incorreta!'));

        returningToTheMenu();
      }

      if (answers.passwordAccount === account.password) {
        setTimeout(() => {
          console.log(chalk.white.bgGreen(`Saldo: ${account.balance}`));
        }, 250);

        returningToTheMenu();
      }
    })
    .catch(() => {
      console.log(chalk.white.bgRed('Essa conta não existe!'));

      returningToTheMenu();
    });
}

function deleteAccount() {
  inquirer
    .prompt([
      {
        type: 'input',
        name: 'nameAccount',
        message: 'Qual o nome da conta?',
      },
      {
        type: 'password',
        name: 'passwordAccount',
        message: 'Digite a senha da conta.',
      },
    ])
    .then((answers) => {
      inquirer
        .prompt([
          {
            type: 'confirm',
            name: 'confirm',
            message: 'Tem certeza que deseja deletar essa conta?',
          },
        ])
        .then((confirm) => {
          if (confirm.confirm) {
            console.log(chalk.white.bgBlue('Deletando conta...'));

            const account = JSON.parse(
              fs.readFileSync(`accounts/${answers.nameAccount}.json`)
            );

            if (answers.passwordAccount !== account.password) {
              console.log(chalk.white.bgRed('Senha incorreta!'));

              returningToTheMenu();
            }

            if (answers.passwordAccount === account.password) {
              fs.unlinkSync(`accounts/${answers.nameAccount}.json`);

              console.log(chalk.white.bgGreen('Conta deletada com sucesso!'));

              returningToTheMenu();
            }
          }

          if (!confirm.confirm) {
            console.log(chalk.white.bgRed('Operação cancelada!'));

            returningToTheMenu();
          }
        });
    });
}

function deposit() {
  inquirer
    .prompt([
      {
        type: 'input',
        name: 'nameAccount',
        message: 'Qual o nome da conta?',
      },
      {
        type: 'number',
        name: 'value',
        message: 'Qual o valor do depósito?',
      },
    ])
    .then((answers) => {
      console.log(chalk.white.bgBlue('Depositando...'));

      const account = JSON.parse(
        fs.readFileSync(`accounts/${answers.nameAccount}.json`)
      );

      account.balance += answers.value;

      fs.writeFileSync(
        `accounts/${answers.nameAccount}.json`,
        JSON.stringify(account)
      );

      setTimeout(() => {
        console.log(chalk.white.bgGreen('Depósito realizado com sucesso!'));
      }, 250);

      returningToTheMenu();
    })
    .catch(() => {
      console.log(chalk.white.bgRed('Essa conta não existe!'));

      returningToTheMenu();
    });
}

function withdraw() {
  inquirer
    .prompt([
      {
        type: 'input',
        name: 'nameAccount',
        message: 'Qual o nome da conta?',
      },
      {
        type: 'password',
        name: 'passwordAccount',
        message: 'Digite a senha da conta.',
      },
      {
        type: 'number',
        name: 'value',
        message: 'Qual o valor do saque?',
      },
    ])
    .then((answers) => {
      console.log(chalk.white.bgBlue('Sacando...'));

      const account = JSON.parse(
        fs.readFileSync(`accounts/${answers.nameAccount}.json`)
      );

      if (answers.passwordAccount !== account.password) {
        console.log(chalk.white.bgRed('Senha incorreta!'));

        returningToTheMenu();
      }

      if (answers.passwordAccount === account.password) {
        if (answers.value > account.balance) {
          console.log(chalk.white.bgRed('Saldo insuficiente!'));

          returningToTheMenu();
        }

        if (answers.value <= account.balance) {
          account.balance -= answers.value;

          fs.writeFileSync(
            `accounts/${answers.nameAccount}.json`,
            JSON.stringify(account)
          );

          setTimeout(() => {
            console.log(chalk.white.bgGreen('Saque realizado com sucesso!'));
          }, 250);

          returningToTheMenu();
        }
      }
    })
    .catch(() => {
      console.log(chalk.white.bgRed('Essa conta não existe!'));

      returningToTheMenu();
    });
}

function transfer() {
  inquirer
    .prompt([
      {
        type: 'input',
        name: 'nameAccount',
        message: 'Qual o nome da conta?',
      },
      {
        type: 'password',
        name: 'passwordAccount',
        message: 'Digite a senha da conta.',
      },
      {
        type: 'input',
        name: 'nameAccountTransfer',
        message: 'Qual o nome da conta de destino?',
      },
      {
        type: 'number',
        name: 'value',
        message: 'Qual o valor da transferência?',
      },
    ])
    .then((answers) => {
      console.log(chalk.white.bgBlue('Transferindo...'));

      const account = JSON.parse(
        fs.readFileSync(`accounts/${answers.nameAccount}.json`)
      );

      if (answers.passwordAccount !== account.password) {
        console.log(chalk.white.bgRed('Senha incorreta!'));

        returningToTheMenu();
      }

      if (answers.passwordAccount === account.password) {
        if (answers.value > account.balance) {
          console.log(chalk.white.bgRed('Saldo insuficiente!'));

          returningToTheMenu();
        }

        if (answers.value <= account.balance) {
          const accountTransfer = JSON.parse(
            fs.readFileSync(`accounts/${answers.nameAccountTransfer}.json`)
          );

          account.balance -= answers.value;
          accountTransfer.balance += answers.value;

          fs.writeFileSync(
            `accounts/${answers.nameAccount}.json`,
            JSON.stringify(account)
          );

          fs.writeFileSync(
            `accounts/${answers.nameAccountTransfer}.json`,
            JSON.stringify(accountTransfer)
          );

          setTimeout(() => {
            console.log(
              chalk.white.bgGreen('Transferência realizada com sucesso!')
            );
          }, 250);

          returningToTheMenu();
        }
      }
    })
    .catch(() => {
      console.log(chalk.white.bgRed('Essa conta não existe!'));

      returningToTheMenu();
    });
}

function returningToTheMenu() {
  setTimeout(() => {
    console.clear();

    init();
  }, 3000);
}

init();
