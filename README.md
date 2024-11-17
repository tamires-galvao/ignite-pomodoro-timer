# Pomodoro App

Este é um projeto de Pomodoro desenvolvido em **React**, utilizando **React Hook Form** para manipulação de formulários e validações com **Zod**. A aplicação permite que o usuário configure uma tarefa e um tempo para execução, baseado na técnica de produtividade Pomodoro.

## 📋 Índice
- [Demonstração](#-demonstração)
- [Tecnologias Utilizadas](#-tecnologias-utilizadas)
- [Instalação e Execução](#-instalação-e-execução)
- [Funcionalidades](#-funcionalidades)
- [Estilização](#-estilização)
- [Contribuições](#-contribuições)
- [Licença](#-licença)

## 🎥 Demonstração

> **Nota**: Adicione aqui capturas de tela ou um link para um vídeo de demonstração.

## 🚀 Tecnologias Utilizadas

- **React**: Biblioteca para construção de interfaces de usuário.
- **React Router DOM**: Gerenciamento de rotas para navegação entre páginas.
- **React Hook Form**: Manipulação e validação de formulários.
- **Zod**: Biblioteca de validação de esquemas de dados.
- **Styled-components**: Estilização com uso de CSS-in-JS.
- **Phosphor React**: Pacote de ícones para React.

## 📦 Instalação e Execução

1. **Clone o repositório**
   ```bash
   git clone git@github.com:tamires-galvao/ignite-pomodoro-timer.git
   cd ignite-pomodoro-timer
   ```

2. **Instale as dependências**
   ```bash
   npm install
   ```

3. **Execute o projeto**
   ```bash
   npm run dev
   ```

4. **Acesse no navegador**
   ```
   http://localhost:5173
   ```

## 📝 Funcionalidades

- **Iniciar Ciclo**: O usuário pode definir uma tarefa e a duração do ciclo (entre 5 a 60 minutos).
- **Histórico de Ciclos**: Visualize um histórico das tarefas realizadas com status (concluído, em andamento ou interrompido).
- **Validação de Formulário**: Utiliza Zod para garantir que os dados inseridos sejam válidos.
- **Contador de Tempo**: (A ser implementado) Um temporizador que realiza a contagem regressiva do ciclo Pomodoro.

### Descrição das Principais Pastas:

- **components/**: Componentes reutilizáveis, como botões e inputs.
- **layouts/**: Layout padrão para a aplicação.
- **pages/**: Páginas principais, como `Home` e `History`.
- **styles/**: Arquivos de estilização global e temas.

## 💅 Estilização

A estilização é feita com **styled-components**, permitindo o uso de temas e componentes reutilizáveis. O tema padrão utilizado está em `src/styles/themes/default.ts`, e as configurações globais estão em `src/styles/global.ts`.


## 🛠️ Validação com React Hook Form e Zod

O formulário na página **Home** utiliza o **React Hook Form** para manipulação dos inputs e **Zod** para validação dos dados.

Exemplo de validação:

```tsx
const newCycleFormValidationSchema = zod.object({
  task: zod.string().min(1, 'Insira uma tarefa'),
  minuteAmount: zod
    .number()
    .min(5, 'O ciclo precisa ser de no mínimo 5 minutos.')
    .max(60, 'O ciclo precisa ser de no máximo 60 minutos.'),
})
```

## 🔄 Rotas

A navegação é controlada pelo **React Router DOM**. As rotas configuradas estão no arquivo `Router.tsx`.

- **`/`**: Página Home
- **`/history`**: Página de Histórico

## 📜 Licença

Este projeto é licenciado sob a licença MIT - consulte o arquivo `LICENSE` para mais detalhes.

---

**Desenvolvido por Tamires Moreno** 🚀
