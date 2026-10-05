# language: pt
Funcionalidade: Autenticação de Usuário
Como um usuário cadastrado no sistema
Quero realizar o login informando minhas credenciais
Para acessar a minha área restrita

Contexto:
Dado que o usuário está na página de login

Cenário: Login bem-sucedido com credenciais válidas
Quando o usuário informa um e-mail válido "admin@biblioteca.com" e a senha correta "admin123"
E clica no botão de entrar
Então o usuário deve ser redirecionado para o painel principal
E deve visualizar a mensagem de boas-vindas "Painel Administrativo"

Cenário: Tentativa de login com senha incorreta (Negativo)
Quando o usuário informa um e-mail válido "admin@biblioteca.com" e a senha incorreta "senhaerrada!"
E clica no botão de entrar
Então o usuário deve permanecer na página de login
E deve visualizar a mensagem de erro "Email ou senha incorretos."