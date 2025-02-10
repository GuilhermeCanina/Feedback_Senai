# Feedbacks - Banco de Dados

Este projeto é um banco de dados simples para armazenar feedbacks de usuários. Ele foi criado para registrar informações de feedbacks recebidos, incluindo dados como nome, e-mail, data e o conteúdo do feedback.

## Tecnologias Usadas

### Frontend:
- **HTML**: Para estruturar as páginas.
- **CSS**: Para estilizar o layout e tornar as páginas visualmente agradáveis.
- **JavaScript**: Para adicionar interatividade e lógica no lado do cliente.

### Backend:
- **Node.js**: Ambiente de execução para JavaScript no lado do servidor.
- **Express**: Framework minimalista para Node.js, utilizado para criar o servidor web e lidar com rotas.

### Banco de Dados:
- **MySQL**: Sistema de gerenciamento de banco de dados relacional usado para armazenar os feedbacks.

### Ferramentas:
- **Git**: Sistema de controle de versão utilizado para gerenciar e versionar o código.
- **VSCode**: Editor de código-fonte recomendado para desenvolvimento, com suporte para Node.js e integração com Git.

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

## Requisitos

Antes de começar, você precisa instalar as seguintes ferramentas no seu ambiente de desenvolvimento:

1. **Git**: Ferramenta de controle de versão. Você pode baixar [aqui](https://git-scm.com/downloads).
2. **Node.js**: Ambiente de execução para JavaScript no servidor. Instale a versão mais recente do Node.js [aqui](https://nodejs.org/).
3. **MySQL**: Sistema de gerenciamento de banco de dados. Você pode baixar [aqui](https://dev.mysql.com/downloads/installer/).
4. **VSCode**: Editor de código-fonte. Baixe [aqui](https://code.visualstudio.com/).

## Como Testar o Banco de Dados

### 1. **Clone o Repositório**

Primeiro, clone o repositório para sua máquina local:

```bash
git clone https://github.com/GuilhermeCanina/feedbacks.git
cd feedbacks
```

###2. Instale as Dependências

Se você estiver configurando o backend com Node.js, vá para o diretório do projeto no terminal e instale as dependências com o seguinte comando:

```bash
npm install
```

Isso vai instalar todos os pacotes necessários listados no package.json.

###3. Crie o Banco de Dados

Abra o terminal MySQL e execute o seguinte comando para criar o banco de dados:

```sql
CREATE DATABASE feedbacks;
USE feedbacks;

CREATE TABLE feedbacks(
    feedback_id INTEGER PRIMARY KEY AUTO_INCREMENT,
    data DATE NOT NULL,
    nome VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL,
    feedback VARCHAR(255) NOT NULL
);
```

###6. Executar o Backend
```bash
npm start
```

O servidor ficará rodando localmente (geralmente em http://localhost:4000).


Se o projeto tiver um servidor Node.js com Express, você pode iniciar o servidor com o seguinte comando:
