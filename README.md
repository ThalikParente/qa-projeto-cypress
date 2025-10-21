# 🧩 Exercício 1 — Testes End-to-End com Cypress

Este exercício faz parte do meu processo de estudos e prática em **automação de testes com Cypress**, utilizando a aplicação **Real World App (RWA)** — uma aplicação real criada pela equipe do Cypress para simular cenários de autenticação, cadastro e transações financeiras.

O objetivo é colocar em prática o que venho aprendendo sobre **identificação de cenários de teste, escrita de casos de teste e automação end-to-end.**

---

## 🧾 Casos de Teste Documentados

Os casos de teste deste exercício estão disponíveis na pasta [`docs`](./Exercicio1/docs):

| ID | Nome | Descrição |
|------|-------|------------|
| [CT-01](./docs/ct-01_login_valido.md) | Login com sucesso | Verifica se o login é realizado com credenciais válidas. |
| [CT-02](./docs/ct-02_login_invalido.md) | Login com credenciais inválidas | Verifica se o sistema exibe erro com email/senha incorretos. |
| [CT-03](./docs/ct-03_cadastro_valido.md) | Registro de novo usuário com sucesso | Verifica se é possível cadastrar um novo usuário com dados válidos. |
| [CT-04](./docs/ct-04_cadastro_incompleto.md) | Registro com informações faltantes | Verifica se o sistema impede o cadastro quando há campos obrigatórios vazios. |

---


# 🧩 Exercício 2 — Transferência e Solicitação de Dinheiro

Este exercício faz parte da minha prática em **automação de testes com Cypress**, utilizando a aplicação **Real World App (RWA)** — uma aplicação real criada pela equipe do Cypress para simular cenários de autenticação, cadastro e transações financeiras.

O objetivo é colocar em prática o que venho aprendendo sobre **testes de fluxo de transferência e solicitação de valores**, abrangendo desde a **definição dos casos de teste** até a **automação end-to-end**.

---

## 🧾 Casos de Teste Documentados

Os casos de teste deste exercício estão disponíveis na pasta [`docs`](./Exercicio2/docs):

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

## 🧠 Aprendizados

- Prática de autenticação e transações entre usuários.  
- Identificação e documentação de **bugs funcionais** com evidências.  
- Escrita de testes automatizados com **Cypress**, usando boas práticas de organização.  
- Melhoria na padronização dos **casos de teste e commits**.  

---

📅 **Ultima atualização:** 21/10/2025  
👤 **Autor:** Thálik Andrade Parente