# DOCUMENTO DE ENTREGA - TP2

## Desenvolvimento Mobile com React Native

---

### 👨‍💻 Aluno

**Nome:** [SEU_NOME_AQUI]  
**Curso:** Desenvolvimento Mobile com React Native - INFNET  
**Trabalho:** TP2 - Aplicativo de Catálogo

---

### 🔗 Link do Projeto

**Expo Snack:** [COLE_SEU_LINK_AQUI]

> **Instruções para obter o link:**
>
> 1. Acesse https://snack.expo.dev
> 2. Importe ou crie o projeto seguindo as instruções em SNACK_INSTRUCTIONS.md
> 3. Clique em "Save" no Expo Snack
> 4. Copie a URL gerada e cole acima

---

### 📱 Sobre o Aplicativo

**Nome:** App Catálogo  
**Descrição:** Aplicativo de catálogo de produtos eletrônicos com navegação entre lista e detalhes

**Funcionalidades Implementadas:**

- ✅ Tela de listagem com 7 produtos
- ✅ Cards clicáveis com informações resumidas
- ✅ Navegação para tela de detalhes
- ✅ Exibição completa de informações do produto
- ✅ Botão para retornar à lista
- ✅ Interface moderna e responsiva

---

### 🏗️ Estrutura Técnica

**Tecnologias:**

- React Native
- Expo ~50.0.0
- Expo Router ~3.4.0
- TypeScript

**Navegação Implementada:**

- `router.replace('/list')` - Define tela inicial
- `router.push({ pathname, params })` - Navega para detalhes
- `useLocalSearchParams()` - Recebe parâmetros na tela de detalhes
- `router.back()` - Volta para tela anterior

**Estrutura de Pastas:**

```
/app
  ├── _layout.tsx    (Configuração de rotas Stack)
  ├── index.tsx      (Ponto de entrada)
  ├── list.tsx       (Tela de listagem)
  └── detail.tsx     (Tela de detalhes)
/data
  └── products.ts    (Dados mockados)
```

---

### ✅ Requisitos Atendidos

| Requisito               | Status | Observações                       |
| ----------------------- | ------ | --------------------------------- |
| 2 telas (List e Detail) | ✅     | Implementadas com Expo Router     |
| Mínimo 5 itens na lista | ✅     | 7 produtos incluídos              |
| Itens clicáveis         | ✅     | TouchableOpacity com feedback     |
| Dados mockados          | ✅     | Arquivo separado data/products.ts |
| Estrutura de pastas     | ✅     | Conforme especificado             |
| Navegação Stack         | ✅     | Configurada no \_layout.tsx       |
| router.replace          | ✅     | Usado no list.tsx                 |
| router.push             | ✅     | Usado para ir para detail         |
| useLocalSearchParams    | ✅     | Usado para receber dados          |
| Objeto completo passado | ✅     | Todos os dados do produto         |

---

### 🎨 Destaques do Design

- Interface limpa e moderna
- Cards com sombras e bordas arredondadas
- Badges coloridos para categoria e avaliação
- Cores consistentes (tema roxo #6200ee)
- Layout responsivo
- Feedback visual nos toques

---

### 📝 Observações

O projeto foi desenvolvido seguindo as melhores práticas de React Native e organização de código. A navegação foi implementada utilizando Expo Router conforme solicitado, com uso correto de `router.replace`, `router.push` e `useLocalSearchParams`.

Todos os produtos contêm informações completas (ID, título, descrição, preço, categoria, rating e características) que são exibidas de forma elegante na tela de detalhes.

---

### 📚 Arquivos de Documentação

- `README.md` - Documentação completa do projeto
- `SNACK_INSTRUCTIONS.md` - Instruções detalhadas para usar no Expo Snack
- Código comentado para facilitar compreensão

---

**Data de Entrega:** [DATA_AQUI]
