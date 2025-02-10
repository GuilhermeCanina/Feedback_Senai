# Feedbacks - Banco de Dados

Este projeto é um banco de dados simples para armazenar feedbacks de usuários. Ele foi criado para registrar informações de feedbacks recebidos, incluindo dados como nome, e-mail, data e o conteúdo do feedback.

## Estrutura do Banco de Dados

O banco de dados `feedbacks` contém uma tabela chamada `feedbacks` com as seguintes colunas:

### Tabela: `feedbacks`

| Nome da Coluna  | Tipo de Dado   | Descrição                                           |
|-----------------|----------------|-----------------------------------------------------|
| `feedback_id`   | INTEGER        | Identificador único para cada feedback (auto incremento) |
| `data`          | DATE           | Data em que o feedback foi dado                     |
| `nome`          | VARCHAR(100)    | Nome do usuário que enviou o feedback               |
| `email`         | VARCHAR(100)    | E-mail do usuário que enviou o feedback             |
| `feedback`      | VARCHAR(255)    | O conteúdo do feedback dado pelo usuário            |

## Tecnologias Usadas

Este projeto utiliza as seguintes tecnologias:

- **MySQL**: Sistema de gerenciamento de banco de dados utilizado para a criação e manipulação do banco de dados.
- **SQL**: Linguagem usada para definir, manipular e consultar os dados.

## Como Testar o Banco de Dados

### Pré-requisitos

Antes de começar, você precisa ter o MySQL instalado em sua máquina. Se ainda não o instalou, siga as instruções de instalação do MySQL para o seu sistema operacional:

- [Instalar MySQL no Windows](https://dev.mysql.com/doc/refman/8.0/en/installing.html)
- [Instalar MySQL no macOS](https://dev.mysql.com/doc/refman/8.0/en/osx-installation.html)
- [Instalar MySQL no Linux](https://dev.mysql.com/doc/refman/8.0/en/linux-installation.html)

### Passo a Passo

1. **Clone ou crie o banco de dados:**

   Se você tem o arquivo SQL que contém a definição do banco, basta executá-lo no seu cliente MySQL. Caso contrário, execute os comandos abaixo:

   1. Abra o terminal do MySQL ou uma interface de gerenciamento de banco de dados como o **phpMyAdmin**.
   2. Crie o banco de dados com o comando:

      ```sql
      CREATE DATABASE feedbacks;
      USE feedbacks;
      ```

2. **Crie a Tabela:**

   Execute o seguinte código SQL para criar a tabela `feedbacks`:

   ```sql
   CREATE TABLE feedbacks(
       feedback_id INTEGER PRIMARY KEY AUTO_INCREMENT,
       data DATE NOT NULL,
       nome VARCHAR(100) NOT NULL,
       email VARCHAR(100) NOT NULL,
       feedback VARCHAR(255) NOT NULL
   );
