# 🧩 Testes End-to-End com Cypress — Real World App (RWA)

Este repositório faz parte do meu processo de estudos e prática em **automação de testes com Cypress**, utilizando a aplicação **Real World App (RWA)** — uma aplicação real criada pela equipe do Cypress para simular cenários de autenticação, cadastro e transações financeiras.  

O objetivo é colocar em prática o que venho aprendendo sobre:
- Identificação e documentação de **cenários de teste**;  
- Escrita de **casos de teste manuais**;  
- **Automação end-to-end** com boas práticas;  
- Estruturação de **Page Objects** e reutilização de código.  

---

## ⚙️ Pré-requisitos

Antes de executar os testes, é necessário:

1. Ter o **Node.js** instalado (versão 18 ou superior);  
2. Clonar este repositório:  
   ```bash
   git clone https://github.com/seuusuario/nome-do-repositorio.git
   ```
3. Instalar as dependências do projeto:  
   ```bash
   npm install
   ```
4. Instalar o **Cypress** (caso ainda não esteja instalado globalmente):  
   ```bash
   npm install cypress --save-dev
   ```
5. Acessar a aplicação **Real World App (RWA)**:  
   🔗 [https://example.cypress.io/realworld](https://example.cypress.io/realworld)  
   *(ou o link configurado no ambiente do curso)*  

---

# 🧩 Exercício 1 — Login e Cadastro de Usuários

Este exercício aborda cenários de **autenticação e registro de novos usuários**, praticando a automação de fluxos básicos do sistema.

---

## 🧾 Casos de Teste Documentados

Os casos de teste estão disponíveis na pasta [`docs`](./Exercicio1/docs):

| ID | Nome | Descrição |
|------|-------|------------|
| [CT-01](./docs/ct-01_login_valido.md) | Login com sucesso | Verifica se o login é realizado corretamente com credenciais válidas. |
| [CT-02](./docs/ct-02_login_invalido.md) | Login com credenciais inválidas | Verifica se o sistema exibe mensagem de erro ao tentar logar com email/senha incorretos. |
| [CT-03](./docs/ct-03_register_valido.md) | Registro de novo usuário com sucesso | Verifica se é possível cadastrar um novo usuário com dados válidos. |
| [CT-04](./docs/ct-04_register_incompleto.md) | Registro com informações faltantes | Verifica se o sistema impede o cadastro quando há campos obrigatórios vazios. |

---

# 🧩 Exercício 2 — Transferência e Solicitação de Dinheiro

Neste exercício, os testes abordam cenários de **transações financeiras** entre usuários, com foco na validação de fluxos de transferência e solicitação de valores.

---

## 🧾 Casos de Teste Documentados

Os casos de teste estão disponíveis na pasta [`docs`](./Exercicio2/docs):

| ID | Nome | Descrição |
|------|-------|------------|
| [CT-01](./docs/ct-01_transferencia_valida.md) | Transferência com sucesso | Verifica se o sistema realiza corretamente uma transferência com saldo suficiente. |
| [CT-02](./docs/ct-02_transferencia_saldo_insuficiente.md) | Transferência com saldo insuficiente | Verifica se o sistema impede a transferência quando o saldo é menor que o valor informado. |
| [CT-03](./docs/ct-03_solicitacao_transferencia.md) | Solicitação de transferência | Verifica se o sistema permite solicitar uma transferência para outro usuário. |

---

## 🐞 Bug Report

Durante a execução dos testes, foi identificado um **defeito funcional** na aplicação relacionado ao cenário de **transferência com saldo insuficiente**, onde o sistema permite concluir a operação mesmo sem saldo disponível.

Mais detalhes estão documentados em:  
[`BUG-01-transferencia-saldo-insuficiente.md`](./docs/bug-reports/BUG-01-transferencia-saldo-insuficiente.md)

---

# 🧩 Exercício 3 — Histórico de Transações

O terceiro exercício tem como foco **a validação do histórico de transações**, garantindo que os registros sejam exibidos corretamente após operações de envio, recebimento ou solicitação de valores.

---

## 🧾 Casos de Teste Documentados

Os casos de teste estão disponíveis na pasta [`docs`](./Exercicio3/docs):

| ID | Nome | Descrição |
|------|-------|------------|
| [CT-01](./docs/ct-01_historico_exibicao.md) | Exibição de histórico de transações | Verifica se o histórico é exibido corretamente após o login. |
| [CT-02](./docs/ct-02_historico_detalhe.md) | Detalhe de transação | Verifica se o sistema exibe as informações corretas ao abrir o detalhe de uma transação. |
| [CT-03](./docs/ct-03_historico_filtro.md) | Filtro de transações | Verifica se os filtros de histórico funcionam corretamente ao exibir transações específicas. |

---

# 🧠 Aprendizados Gerais

✅ Aplicação de boas práticas de **estruturação de testes Cypress** (com uso de Page Objects e fixtures).  
✅ Criação e documentação de **casos de teste manuais** antes da automação.  
✅ Identificação e registro de **defeitos funcionais** com evidências.  
✅ Organização do projeto e versionamento com **commits padronizados**.  
✅ Utilização do **beforeEach** para otimizar a repetição de etapas nos testes.  

---

📅 **Última atualização:** 23/10/2025  
👤 **Autor:** Thálik Andrade Parente  
💬 “**Qualidade não é uma fase, é uma cultura dentro do time.**”
