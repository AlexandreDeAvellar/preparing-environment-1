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
 [] jest
 [] dotenv
 [] git
  [x] Executar o git init para iniciar um projeto git.
  [x] criar arquivo .gitignore
  [] Configurar atalhos
  [] Configurar visualização do git status
  [] Configurar visualização do git log
  [] Git commit message linter
 [] docker
 [] husky