## Todo List

Gerenciador para plano de estudo. Aqui você organiza seus estudos por tópicos e registra documento o resultado.  
esse projeto possui as funcionalidades de:

- [x] Listagem de planos de estudo separados por categoria de (para estudar) e (concluído)
- [x] Adição de novos planos de estudo
- [x] Atualização de plano de estudo para concluído ou não concluído
- [x] Atualização da descrição do plano de estudo
- [x] Remoção do plano de estudo

Na criação de um novo plano de estudo criei um modal totalmente personalizado usando ferramentas nativas do React DOM.

Para evitar prop drilling e tornar o código mais escalável criei um Contexto onde centralizo funcionalidades do módulo do projeto.

Como esse projeto tive o objetivo de estudar principalmente REACT, por isso optei por não construir um back-end para presistir os dados e delegar algumas lógicas. Portanto salvo no localStorage do navegador as informações referentes aos planos de estudo com o objetivo de trazer uma experiência um pouco melhor que apenas salvar as informações em um estado.

#### Deseja rodar o projeto na sua máquina?

```bash
git clone https://github.com/Marvinx9/todo-list.git
cd todo-list
```

cenário considerando que você deseja utilizar o npm  
Versão do node => 20.19.4  
Instale as dependências e rode o projeto

```bash
npm install
npm run dev
```

Projeto em ambiente de testes em:

```bash
https://todo-list-gamma-nine-71.vercel.app/
```
