# Projeto-LabookBack

## Requesitos
O LaBook será uma rede social com o objetivo de promover a conexão e interação entre seus mais diversos usuários. Os usuários podem criar posts de dois tipos ("evento" ou "normal"), comentá-los e curti-los também. O desenvolvedor do frontend acha que é bastante experiente; dessa forma, já preparou uma lista de todos os endpoints que serão necessários para o projeto e foi adiantando o desenvolvimento enquanto você não chegava. Mas, alguns dos endpoints acabaram por ser feitos na pressa e estão um tanto desestrurados, e sem nenhum tipo de tratamento ou modelagem de dados. Seguem listados abaixo:

+ Very easy!

Ordered

1. **Cadastrar**

Para o cadastro nessa rede social, o usuário deve fornecer seu nome, seu e-mail e uma senha. Além disso, esse endpoint já tem que realizar o login do usuário, fornecendo seu token de autenticação no retorno da requisição.

2. **Logar**

Para realizar o login, basta informar seu e-mail e a sua senha. O retorno deve conter o token de autenticação do usuário

3. **Criar post**

O post deve ser criado, passando-se as informações de: foto, descrição, data de criação e tipo ("normal" ou "evento").

4. **Buscar Post por ID**

Ao passar o id de um post, você deve obter as informações a respeito daquele post


+ Você deve analisar e pensar quais são os endpoints que necessitam do token de autenticação

+ Lembre-se de que o Backend deve ser muito conciso. Isso significa que você deve prever a maior parte dos erros que possam acontecer e já se precaver contra eles. (Não se preocupe muito com essa parte, mas, se der tempo, foque nisso!)

## Tabelas


## Bibliotecas
+ bcryptjs
+ cors 
+ express
+ jsonwebToken
+ knex
+ uuid
+ typescript
+ mysql



