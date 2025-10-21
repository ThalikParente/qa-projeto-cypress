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

## 💻 Estrutura da Automação

Os testes automatizados estão localizados na pasta [`e2e`](./Exercicio1/e2e), e seguem a seguinte organização:

