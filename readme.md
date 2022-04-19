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
  [] Instalar tsconfig-paths -D para fazer resolução dos paths configurados no tsconfig
   - Esse paths é para quando fizer um import não ser necessário fazer todo o caminho do arquivo.
   [x] No arquivo tsconfig.json colocar as instruções baseUrl: ".", paths: {"@src/*": ["src/algumaPasta/*"]}
   - Para fazer funcionar deve exectuar o comando ex: ts-node -r tsconfig-path/register src/server.ts
   - Em produção: instalar tscpaths e configurar -- AINDA NÃO FUNCIONOU --
 [] Eslint
  [x] Instalar o plugin do Eslint
  [x] Instalar esLint -D
  [x] Iniciar o eslint e configurar com npm init @eslint/config
  - ctrl + shift + p para abrir o terminal de configurações e procure por: Open User Settings.
  - Pesquise por on save. Selecione a caixa "Editor: format on save" para garantir que será aplicado a formatação toda vez que salvar.
  [] lint-staged
   [x] Instalar lint-staged -D
   [] Criar arquivo lintstagedrc e colocar os comandos:
    [x] Analisar erros de lint no código: eslint ./src/** --fix
    [] Analisar erros de test no código: npm run test:staged
 [] husky
  [x] Instalar husky npm i -D husky
  [x] Iniciar husky npx husky install
  [x] Criar pre-commit e pre-push - npx husky add .husky/pre-commit, npx husky add .husky/pre-push
  [] Informar nos arquivos do husky quais os comandos serão executados
   [x] Comando de pre-commit: npx lint-staged
   [] Comando de pre-commit: npx EXECUTAR ALGUM SCRIPT DE TEST
 [] jest
  [] Instalar o jest e suas extensões npm i -D jest @types/jest ts-jest
   - ts-jest: É o que vai permitir escrever os testes em typescript
  [] Configurar os scripts de teste
   [x] Executar jest --init
   [] Preparar as configurações do jest.config.js
    - Configuração: 
     -transform: Vai ser informado uma expressão regular que vai encontrar todos os arquivos .ts e rodar o ts-jest neles, isso vai fazer com que rodando o ts-jest os arquivos ts sejam convertidos para js e assim entendidos pelo jest.
     - transform: { '.+\\.ts$': 'ts-jest' }
  [x] Adicionar no eslintrs em env o jest: true
  [] Adicionar nas configurações do husky para validar teste antes de commit e push
 [] dotenv
 [] git
  [x] Executar o git init para iniciar um projeto git.
  [x] criar arquivo .gitignore
  [] Configurar atalhos
  [] Configurar visualização do git status
  [] Configurar visualização do git log
  [] Git commit message linter
 [] docker