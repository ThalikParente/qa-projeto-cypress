# 🧩 Testes End-to-End com Cypress  
### Projeto baseado na aplicação Real World App (RWA)

Este repositório faz parte do meu processo de estudos e prática em **automação de testes com Cypress**, utilizando a aplicação **Real World App (RWA)** — uma aplicação real criada pela equipe do Cypress para simular cenários de autenticação, cadastro e transações financeiras.  

O foco deste projeto é desenvolver habilidades práticas de QA com base em um sistema real, aplicando boas práticas de automação e documentação de testes.

# 🎯 O objetivo é colocar em prática:

- Identificar e documentar cenários de teste.
- Escrever e organizar casos de teste manuais.
- Automatizar fluxos end-to-end utilizando boas práticas.
- Aplicar o padrão Page Object Model (POM) para reutilização de código.
- Registrar e reportar defeitos funcionais detectados.

---

## ⚙️ Como Executar os Testes

1️⃣ Pré-requisitos

Antes de executar os testes, é necessário:

- Node.js (versão 18 ou superior)
- Git instalado e configurado

2️⃣ Clonar o projeto base (aplicação oficial)
 Este projeto foi construído sobre o repositório oficial Real World App.
```bash
git clone https://github.com/cypress-io/cypress-realworld-app.git
```
Acesse a pasta do projeto:
```bash
cd cypress-realworld-app
```
Instale as dependências:
```bash
npm install
```
3️⃣ Instalar o Cypress (caso não esteja presente)
Se o Cypress ainda não estiver instalado, execute:

Instalar o **Cypress** (caso ainda não esteja instalado globalmente):  
```bash
npm install cypress --save-dev
```
Para abrir a interface do Cypress:
```
npx cypress open
```
4️⃣ Adicionar meus arquivos de automação

Após instalar o RWA e o Cypress, adicione meus arquivos de automação (pastas como `cypress/e2e`, `support`, `docs`, etc.) dentro do projeto clonado:

```
git clone https://github.com/ThalikParente/qa-projeto-cypress.git
```
Após adicionar os arquivos, os testes poderão ser executados normalmente dentro da interface do Cypress.


## 🧩 Estrutura dos Exercícios

Os testes estão divididos por temas conforme os exercícios do curso:

## 🔹 Exercício 1 — Login e Cadastro de Usuários

Foco nos cenários de autenticação e criação de contas.
Os casos de teste estão disponíveis na pasta [`casos-de-teste`](./Exercicio1/docs/casos-de-teste):

| ID    | Nome                            | Descrição                                              |
| ----- | ------------------------------- | ------------------------------------------------------ |
| [CT-01](./Exercicio1/docs/casos-de-teste/ct-01-login-valido.md)| Login com sucesso               | Verifica login com credenciais válidas.                |
| [CT-02](./Exercicio1/docs/casos-de-teste/ct-02-login-invalido.md) | Login inválido               | Valida mensagem de erro ao logar com dados incorretos. |
| [CT-03](./Exercicio1/docs/casos-de-teste/ct-03-cadastro-com-sucesso.md) | Cadastro de usuário com sucesso | Valida o fluxo de registro completo.          |
| [CT-04](./Exercicio1/docs/casos-de-teste/ct-04-cadastro-invalido.md) | Cadastro com campos vazios      | Valida mensagens de erro para campos obrigatórios.     |

---

## 🔹 Exercício 2 — Transferência e Solicitação de Dinheiro

Validações de transações entre usuários.
Os casos de teste estão disponíveis na pasta [`casos-de-teste`](./Exercicio2/docs/casos-de-teste):

| ID    | Nome                                 | Descrição                                   |
| ----- | ------------------------------------ | ------------------------------------------- |
| [CT-01](./Exercicio2/docs/casos-de-teste/ct-01-transferencia-valida.md) | Transferência com sucesso            | Realiza transferência com saldo suficiente. |
| [CT-02](./Exercicio2/docs/casos-de-teste/ct-02-transferencia-saldo-insuficiente.md) | Transferência com saldo insuficiente | Impede transferência sem saldo.             |
| [CT-03](./Exercicio2/docs/casos-de-teste/ct-03-solicitar-transferencia.md) | Solicitação de dinheiro              | Verifica solicitação de transferência.      |

---

## 🐞 Bug Report

Durante a execução dos testes, foi identificado um **defeito funcional** na aplicação relacionado ao cenário de **transferência com saldo insuficiente**, onde o sistema permite concluir a operação mesmo sem saldo disponível.

Mais detalhes estão documentados em:  
[`BUG-01-transferencia-saldo-insuficiente.md`](./Exercicio2/docs/bugs/BUG-01-transferencia-saldo-insuficiente.md)

---

## 🔹 Exercício 3 — Histórico de Transações

Validação da exibição e filtragem do histórico de transações.

Os casos de teste estão disponíveis na pasta [`casos-de-teste`](./Exercicio3/docs/casos-de-teste):

| ID    | Nome                  | Descrição                                          |
| ----- | --------------------- | -------------------------------------------------- |
| [CT-01](./Exercicio3/docs/casos-de-teste/ct-01-visualizar-historico-transacoes.md) | Visualizar histórico de transações | Verifica histórico após o login. |
| [CT-02](https://github.com/ThalikParente/qa-projeto-cypress/blob/main/Exercicio3/docs/casos-de-teste/ct-02-transacoes-novo-usuario.md) | Transações novo usuário  | Exibe corretamente o histórico de transações de um novo usuário |

---

## 🧠 Aprendizados Gerais

✅ Aplicação de boas práticas de estruturação de testes com **Cypress e Page Objects**.  
✅ Documentação de casos de teste antes da automação.  
✅ Identificação e registro de **defeitos funcionais** com evidências.  
✅ Organização e versionamento com **commits padronizados**.  
✅ Utilização de hooks **beforeEach** para reduzir redundâncias nos testes.  
✅ Prática completa do ciclo de QA: análise, planejamento, execução, automação e reporte.

---

## 🔗 Recursos e Referências

- [Aplicação oficial — Real World App (RWA)](https://github.com/cypress-io/cypress-realworld-app)
- [Documentação oficial do Cypress](https://docs.cypress.io/)
- [Meu repositório de automação](https://github.com/ThalikParente/qa-projeto-cypress)
- [Repositório Cypress Heroes (projeto oficial da equipe Cypress)](https://github.com/cypress-io/cypress-heroes)


---

📅 **Última atualização:** 27/10/2025  
👤 **Autor:** [Thálik Andrade Parente](https://github.com/ThalikParente)  
💬 “**Qualidade não é uma fase, é uma cultura dentro do time.**”

[![Linkedin](https://img.shields.io/badge/LinkedIn-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/thálik-parente/) 
[![Gmail](https://img.shields.io/badge/Gmail-D14836?style=for-the-badge&logo=gmail&logoColor=white)](mailto:thalik.aparente@gmail.com)
[![Discord](https://img.shields.io/badge/Discord-5865F2?style=for-the-badge&logo=discord&logoColor=white)](https://discord.com/users/thalik6)
