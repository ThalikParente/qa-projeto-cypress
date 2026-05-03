# 🧪 E2E Test Automation – Real World App (Cypress)

Projeto de automação de testes end-to-end focado na validação de fluxos críticos de uma aplicação web com cenários reais de autenticação, cadastro e transações financeiras.

A automação foi desenvolvida utilizando Cypress, com foco em qualidade, comportamento do sistema e validação de regras de negócio em fluxos sensíveis.

---

## 🎯 Objetivo

Validar o comportamento da aplicação em cenários críticos, garantindo:

- Autenticação de usuários (login e cadastro)
- Execução de transações financeiras entre usuários
- Validação de saldo e regras de negócio
- Exibição e integridade do histórico de transações
- Tratamento de erros e cenários negativos

---

## 🧪 Cenários cobertos

Os cenários foram definidos com base em comportamento real do usuário e priorização de fluxos críticos da aplicação:

- Login com credenciais válidas e inválidas  
- Cadastro de novos usuários  
- Transferência de dinheiro entre usuários  
- Solicitação de pagamento  
- Validação de saldo insuficiente  
- Visualização e filtragem de histórico de transações  

---

## 🧾 Casos de Teste Documentados

Os cenários foram previamente estruturados e documentados antes da automação, seguindo abordagem baseada em comportamento do usuário e regras de negócio.

### 🔹 Autenticação e Cadastro

| ID | Nome | Descrição |
|----|------|----------|
| CT-01 | Login válido | Verifica login com credenciais válidas |
| CT-02 | Login inválido | Valida mensagem de erro com dados incorretos |
| CT-03 | Cadastro com sucesso | Valida fluxo completo de registro |
| CT-04 | Cadastro inválido | Valida mensagens de erro em campos obrigatórios |

---

### 🔹 Transações Financeiras

| ID | Nome | Descrição |
|----|------|----------|
| CT-05 | Transferência com sucesso | Realiza transferência com saldo suficiente |
| CT-06 | Saldo insuficiente | Valida bloqueio de transferência sem saldo |
| CT-07 | Solicitação de dinheiro | Verifica fluxo de solicitação de pagamento |

---

### 🔹 Histórico de Transações

| ID | Nome | Descrição |
|----|------|----------|
| CT-08 | Visualizar histórico | Verifica exibição após login |
| CT-09 | Novo usuário | Valida comportamento sem transações |

📌 Casos de teste detalhados disponíveis nas pastas `/Exercicio*/docs`

---

## 🐞 Bug identificado

Durante a execução dos testes, foi identificado um defeito funcional:

- **Cenário:** Transferência com saldo insuficiente  
- **Problema:** O sistema permite concluir a operação mesmo sem saldo disponível  

📌 Documentação completa:  
`/Exercicio2/docs/bugs/BUG-01-transferencia-saldo-insuficiente.md`

---

## 🛠️ Stack utilizada

- Cypress (E2E Test Automation)
- JavaScript
- Node.js
- Page Object Model (POM)
- Custom Commands

---

## 🧩 Estrutura do projeto

A automação segue boas práticas para garantir escalabilidade e manutenção:

- Page Objects → separação da lógica de interação  
- Custom Commands → reutilização de ações  
- Organização por domínio funcional  
- Cenários independentes e reutilizáveis  

---

## 🚀 Execução dos testes

### Pré-requisitos:
- Node.js 18+
- Git

### Passos:

```bash
# Clonar aplicação base
git clone https://github.com/cypress-io/cypress-realworld-app.git

# Clonar este repositório
git clone https://github.com/SEU-NOVO-NOME-AQUI.git

# Acessar aplicação
cd cypress-realworld-app
npm install
npm start
```
Aplicação disponível em: http://localhost:3000

```bash
# Em outro terminal
cd SEU-NOVO-NOME-AQUI

# Executar Cypress
npx cypress open
```
---
## 🧠 Abordagem de Qualidade

Os testes foram desenvolvidos com foco em:

- Priorização baseada em risco  
- Cobertura de fluxos críticos (financeiros)  
- Validação de regras de negócio  
- Testes positivos e negativos  
- Simulação de uso real do sistema  

---

## 💡 Diferenciais

- Cobertura de fluxos financeiros e cenários críticos com foco em impacto de negócio
- Identificação e documentação de defeitos reais  
- Estrutura baseada em boas práticas de automação  
- Aplicação de conceitos de STLC na construção dos testes  

---

## 🔗 Recursos

- Documentação Cypress: https://docs.cypress.io  
- Projeto base: https://github.com/cypress-io/cypress-realworld-app  

---

## 👤 Autor

Thálik Parente  

💬 "Qualidade não é uma fase, é uma cultura dentro do time."
