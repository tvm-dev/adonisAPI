Esta é uma API criada com AdonisJS para fins didáticos.

O passo a passo para fazer ela funcionar segue abaixo:

###
Passo a passo para executar com sucesso esta api:

0) Clone o repositório
1) Para instalar todos os pacotes, digite: npm install
2) execute o lucid, escolhendo SQLite com terminal: node ace configure @adonisjs/lucid
3)  Substutia o conteudo do arquivo .env por:
   <br>
PORT=3333
HOST=0.0.0.0
NODE_ENV=development
APP_KEY=NssQrcRUPEG0zPHZ72KoOSzYCwI1s-Jv
DRIVE_DISK=local
DB_CONNECTION=sqlite

E salve tudo.
<br>4) execute isso: node ace migration:run </br>
5) coloque o servidor para rodar e teste tudo no insomnia: node ace serve --watch

fim
