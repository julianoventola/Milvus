# Desafio Milvus - Backend

- run : npm install OU yarn
- run server: yarn dev OU npm run dev

* package manager utilizado : yarn

* Docker deve ser instalado

  - https://docs.docker.com/install/

  - POSTGRES(versão 11 utilizada):

    - Run: docker run --name database -e POSTGRES_PASSWORD=docker -p 5432:5432
    - Se o docker parar, run: docker start database
    - Ver as instancias rodando, run: docker ps
    - crie um banco de dados(manualmente) chamado 'milvus'
    - run: yarn sequelize db:migrate OU npm run sequelize db:migrate

- Rotas sem necessidade de autenticação(login):

  - CRUD clientes
  - Listagem de usuários (com e sem filtros)
  - Listagem de clientes (com e sem filtros)
  - Cadastro de usuários

- Auth: Bearer token

- Rotas com necessidade de autenticação(login):

  - Alterar usuário
  - Deletar usuário

* Rotas com filtros via parametros(query), paginação de 5 itens e ordenação 'asc'

  - Usuários:
    - Filtos possiveis:
      - por nome (deve ser colocar o '%' no começo/fim do nome para validação),
      - por id 'id maior que x',
      - por sexo, por padrão esta masculino(male)
  - Clientes:
    - Filtos possiveis:
      - por nome da companhia(deve ser colocar o '%' no começo/fim do nome para validação),
      - por id 'id maior que x',
      - por complemento, nulo ou existente

* Nodemailer utilizado para envio de email
  - mailtrap.io deve ser configurado!
