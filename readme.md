- Este projeto é para treinamento de preparação de ambiente
 
► Instalando
 [x] Iniciar o npm com npm init -y
 [x] Criar o .editorconfig
  - O editor config vai criar um serie de configurações para o ambiente.
  - Como é instalado: Primeiro instala a extensão editorCongig e depois na raiz do projeto com botão direito escolher generate .editorConfig.
  - Ele vem com as configurações padrão, ai só mudar o que quiser.
  - Alterados: indent_size = 2 e end_of_line = lf
  [x] Instalar a extensão do editorconfig.
  [x] Clicar com o botão direito do mouse no root e clicar em generate .editorconfig

 [x] typescript
  [x] install typescript with npm i -D typescript
  [x] iniciar as configurações do typescript com npx tsc --init. Isso vai criar o arquivo tsconfig
  [x] Preparar as configurações do arquivo tsconfig
  [x] Preparar scripts para build
  [x] Instalar rimraf -D para remover a pasta dist antes de fazer o build
  [-] Instalar tsconfig-paths -D para fazer resolução dos paths configurados no tsconfig
   - Esse paths é para quando fizer um import não ser necessário fazer todo o caminho do arquivo.
   [x] No arquivo tsconfig.json colocar as instruções baseUrl: ".", paths: {"@src/*": ["src/algumaPasta/*"]}
   - Para fazer funcionar deve exectuar o comando ex: ts-node -r tsconfig-path/register src/server.ts
   - Em produção: instalar tscpaths e configurar -- AINDA NÃO FUNCIONOU --

 [x] Eslint
  [x] Instalar o plugin do Eslint
  [x] Instalar esLint -D
  [x] Iniciar o eslint e configurar com npm init @eslint/config
  - ctrl + shift + p para abrir o terminal de configurações e procure por: Open User Settings.
  - Pesquise por on save. Selecione a caixa "Editor: format on save" para garantir que será aplicado a formatação toda vez que salvar.
  [x] lint-staged
   [x] Instalar lint-staged -D
   [x] Criar arquivo lintstagedrc e colocar os comandos:
    [x] Analisar erros de lint no código: eslint ./src/** --fix
    [x] Analisar erros de test no código: npm run test:staged

 [x] husky
  [x] Instalar husky npm i -D husky
  [x] Iniciar husky npx husky install
  [x] Criar pre-commit e pre-push - npx husky add .husky/pre-commit, npx husky add .husky/pre-push
  [x] Informar nos arquivos do husky quais os comandos serão executados
   [x] Comando de pre-commit: 
    [x] npx lint-staged
   [x] Comando de pre-push: 
    [x] npm run test:ci

 [x] jest
  [x] Instalar o jest e suas extensões npm i -D jest @types/jest ts-jest
   - ts-jest: É o que vai permitir escrever os testes em typescript
  [x] Configurar os scripts de teste
   [x] Executar jest --init
   [x] Preparar as configurações do jest.config.js
    - Configuração: 
     -transform: Vai ser informado uma expressão regular que vai encontrar todos os arquivos .ts e rodar o ts-jest neles, isso vai fazer com que rodando o ts-jest os arquivos ts sejam convertidos para js e assim entendidos pelo jest.
     - transform: { '.+\\.ts$': 'ts-jest' }
  [x] Adicionar no arquivo eslintrc em env o jest: true
  [x] Adicionar comandos no script
   - --passWithNoTests: É para fazer o jest passar caso tenha arquivo de teste sem teste escrito 
   - --silent: É para ocultar excesso de informação no log quando roda o teste como a lista de testes realizados
   - --noStackTrace: É para ocultar a informação que o jest da de qual linha está o erro
   - --runInBand: É para informar o jest que deve executar os testes de forma serial. Isso evita erros por que sua forma normal de executar é em paralelo.
   - --watch: É para o jest ficar monitorando arquivos de teste que forem alterados e rodar novamente o teste assim que forem salvos
   - -c algum-arquivo-config.js: Esse '-c' é para informar ao jest qual arquivo vai estar a configuração que ele deve executar
   - --coverage: É para fazer coleta de cobertura de teste quando executar o script
   - --findRelatedTests: É para informar ao jest que só deve executar testes em arquivos relacionados
   [x] Configurar arquivo de teste
    - command: jest --passWithNoTests --silent --noStackTrace --runInBand
   [x] Configurar arquivo de teste unitário
    - commnad: test:unit: npm test -- --watch -c jest-unit-config.js
    [x] Criar arquivo jest-integration-config.js
   [x] Configurar arquivo de teste de integração
    - commnad: test:integration: npm test -- --watch -c jest-integration-config.js
    [x] Criar arquivo jest-unit-config.js
   [x] test:verbose
    - Teste para mostrar todas as stacks sem omitir informação. Normalmente usado para encontrar erros.
   [x] test:staged
    - Teste executado antes de fazer um commit para validar todos os testes
   [x] test:ci
    - Teste executado antes de fazer um push para validar todos os testes
  [x] Adicionar nas configurações do husky para validar teste antes de commit e push

 [] dotenv

 [] git
  [x] Executar o git init para iniciar um projeto git.
  [x] criar arquivo .gitignore
  [] Configurar atalhos
  [] Configurar visualização do git status
  [] Configurar visualização do git log
  [] Git commit message linter

 [] docker