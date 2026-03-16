# 📱 App Catálogo - Trabalho Prático 2

Aplicativo de catálogo de produtos desenvolvido com React Native e Expo Router.

## 🎯 Objetivo

Aplicar conceitos de estruturação de projetos e navegação para criar um aplicativo com múltiplas telas, implementando navegação do tipo stack entre uma tela de listagem e uma tela de detalhes.

## 📋 Funcionalidades

- ✅ Tela de lista com 7 produtos mockados
- ✅ Cada item é clicável e navega para a tela de detalhes
- ✅ Tela de detalhes mostra todas as informações do produto
- ✅ Navegação usando Expo Router (router.replace e router.push)
- ✅ Passagem de parâmetros via useLocalSearchParams
- ✅ Design moderno e responsivo

## 📂 Estrutura do Projeto

```
AppCatalogo/
├── app/
│   ├── _layout.tsx      # Configuração das rotas (Stack Navigator)
│   ├── index.tsx        # Ponto de entrada (redireciona para /list)
│   ├── list.tsx         # Tela de listagem de produtos
│   └── detail.tsx       # Tela de detalhes do produto
├── data/
│   └── products.ts      # Dados mockados dos produtos
├── app.json             # Configuração do Expo
├── package.json         # Dependências do projeto
└── tsconfig.json        # Configuração do TypeScript
```

## 🛠️ Tecnologias Utilizadas

- **React Native**: Framework para desenvolvimento mobile
- **Expo**: Plataforma para desenvolvimento React Native
- **Expo Router**: Sistema de roteamento baseado em arquivos
- **TypeScript**: Tipagem estática para JavaScript

## 🚀 Como Executar

### Opção 1: Expo Snack (Recomendado para o trabalho)

1. Acesse [snack.expo.dev](https://snack.expo.dev)
2. Crie um novo projeto
3. Copie o conteúdo dos arquivos para o Snack
4. Execute no navegador ou usando o app Expo Go

### Opção 2: Localmente

```bash
# Instalar dependências
npm install

# Iniciar o projeto
npm start

# Ou executar diretamente
npx expo start
```

## 📱 Navegação

### Fluxo de Navegação:

1. **App inicia** → `index.tsx` → redireciona para `/list`
2. **Lista de Produtos** (`list.tsx`):
   - Utiliza `router.replace('/list')` para definir como tela inicial
   - Exibe 7 produtos em cards clicáveis
   - Ao clicar, usa `router.push()` para navegar para detalhes
3. **Detalhes do Produto** (`detail.tsx`):
   - Recebe parâmetros via `useLocalSearchParams()`
   - Exibe todas as informações do produto
   - Botão para voltar à lista

### Métodos de Navegação Utilizados:

- `router.replace('/list')`: Define a tela de lista como inicial
- `router.push({ pathname: '/detail', params: {...} })`: Navega para detalhes passando dados
- `router.back()`: Volta para a tela anterior

## 📦 Dados dos Produtos

Os produtos são mockados no arquivo `data/products.ts` e incluem:

- ID único
- Título
- Descrição
- Preço
- Categoria
- Rating (avaliação)
- Lista de características

## 🎨 Design

O aplicativo possui:

- Interface moderna e intuitiva
- Cards com sombras e bordas arredondadas
- Badges coloridos para categoria e rating
- Botões de ação estilizados
- Layout responsivo

## ✅ Requisitos Atendidos

- [x] Aplicativo com 2 telas (List e Detail)
- [x] Tela de lista com pelo menos 5 itens (7 produtos incluídos)
- [x] Itens clicáveis na lista
- [x] Dados mockados em arquivo separado
- [x] Estrutura de pastas organizada (/app)
- [x] Navegação com Expo Router
- [x] Uso de router.replace e router.push
- [x] Uso de useLocalSearchParams para receber dados
- [x] Passagem de objeto completo via parâmetros

## 👨‍💻 Autor

Desenvolvido como Trabalho Prático 2 da disciplina de Desenvolvimento Mobile com React Native - INFNET

## 📝 Notas

- O projeto está preparado para execução no Expo Snack
- Todas as dependências necessárias estão no package.json
- O código está comentado e organizado para fácil compreensão
