# MArquei

## Descrição
```
 
```

### Logo



## Pré-requisitos

- [Node.js](https://nodejs.org/en/) ou [Yarn](https://yarnpkg.com/)
- [ExpoCli](https://docs.expo.io/workflow/expo-cli/) ou [Expo](https://expo.io/)

### Instalação

```bash
    # Clone este repositório
    $ git clone git@github.com:TheCodreRunners/marquei-app.git
```
### Entre na pasta do projeto

```bash
    $ cd marquei-app
```

### Instale as dependências

```bash
    $ yarn install
```
### Ou
```bash
    $ npm install
```
### Execute a aplicação
    
```bash
   $ expo start
```

### Estrutura de pastas
- app: pasta onde fica os arquivos da aplicação
- assets: pasta onde fica os arquivos de imagens, fontes e etc.
- components: pasta onde fica os componentes da aplicação
- templates: pasta onde fica os templates da aplicação (Template é um componente que tem a função de ser um container para outros componentes)
- mocked: pasta onde fica os arquivos de mocks (Mocks são arquivos que tem a função de simular dados de uma API)

#### Nomeclarura 
- feature: Nova funcionalidade
- bugfix: Correção de bug
- refactor: Refatoração de código
- chore: Atualização de dependências, configurações e etc.
- docs: Atualização de documentação


### Padrões de Branches
- feature/nome-da-task
- bugfix/nome-da-task

#### Exemplo:
- feature/MAR-12

### Padronização de Commits

- feat: MAR-12 funcionalidade
- fix: MAR-12 correção
- refactor: MAR-12 refatoração

#### Exemplo:
```bash
    $ git commit -m "feat: MAR-12 funcionalidade"
```

### Submeter para o repositório

```bash
    $ git push origin feature/MAR-12
```
#### Caso a branch esteja com nome diferente da branch do repositório local

```bash
    $ git push origin feature/MAR-12-examplo:feature/MAR-12
```
#### Atualizar repositório local (recomendando antes de submeter para o repositório e/ou antes de iniciar uma nova tarefa)

```bash
    $ git pull origin feature/MAR-12
```

#### Em caso de conflito, resolva os conflitos e submeta novamente para o repositório

```bash
    $ git push origin feature/MAR-12
```

### Comandos úteis
- Renomear último commit
```bash
    $ git commit --amend -m "feat: MAR-12 funcionalidade"
```
- Remover branch local
```bash
    $ git branch -D feature/MAR-12
```
- Rebase (atualizar branch local com a branch do repositório)

```bash
    $ git rebase origin/feature/MAR-12
```
- Remover branch local

```bash
    $ git branch -D feature/MAR-12
```


