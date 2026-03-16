# 🎯 SNACK - PASSO A PASSO DEFINITIVO

## ⚠️ IMPORTANTE: Package.json CORRETO para Snack

**Use ESTE package.json no Snack (NÃO o do projeto local!):**

```json
{
  "dependencies": {
    "expo-router": "~3.4.0",
    "expo-status-bar": "~1.11.1",
    "react-native-safe-area-context": "4.8.2",
    "react-native-screens": "~3.29.0"
  }
}
```

**AVISO:** O Snack já fornece automaticamente: expo, react, react-native, react-dom!
**NÃO adicione** essas dependências no package.json do Snack!

---

## 📋 PASSO A PASSO

### 1️⃣ Acesse o Snack

- Vá em: https://snack.expo.dev
- Faça login com sua conta Expo (ou crie uma)

### 2️⃣ Delete o App.js (se existir)

- No painel esquerdo, clique com botão direito em `App.js`
- Escolha "Delete"

### 3️⃣ Configure o package.json

- Clique em `package.json` no painel esquerdo
- **APAGUE TUDO** que está lá
- Cole o conteúdo acima (seção "Package.json CORRETO")

### 4️⃣ Crie a pasta `app`

- Clique no ícone "+" ao lado de "FILES"
- Escolha "Create folder"
- Digite: `app`

### 5️⃣ Crie a pasta `data`

- Clique no ícone "+" novamente
- Escolha "Create folder"
- Digite: `data`

### 6️⃣ Crie os arquivos (copie do SNACK_COMPLETO.md)

**Dentro da pasta `app`:**

- Crie: `_layout.tsx` → copie seção 2 do SNACK_COMPLETO.md
- Crie: `index.tsx` → copie seção 3 do SNACK_COMPLETO.md
- Crie: `list.tsx` → copie seção 5 do SNACK_COMPLETO.md
- Crie: `detail.tsx` → copie seção 6 do SNACK_COMPLETO.md

**Dentro da pasta `data`:**

- Crie: `products.ts` → copie seção 4 do SNACK_COMPLETO.md

### 7️⃣ Salve o Snack

- Clique em "Save" no canto superior direito
- O Snack vai recarregar automaticamente

### 8️⃣ Teste no preview

- Clique na aba "My Device" ou "Android" ou "iOS"
- O app deve mostrar a lista de 7 produtos!

### 9️⃣ Copie o link para entregar

- A URL na barra de endereço é seu link do Snack
- Exemplo: `https://snack.expo.dev/@seuusuario/appcatalogo`
- **Este é o link que você vai entregar no TP2!**

---

## 🐛 Se a tela continuar cinza:

### Verifique no Snack:

1. ✅ Deletou o `App.js`?
2. ✅ O `package.json` tem APENAS as 4 dependências acima?
3. ✅ Criou as pastas `app` e `data`?
4. ✅ Os 5 arquivos `.tsx` e `.ts` foram criados E preenchidos?
5. ✅ Clicou em "Save"?

### Console de erros:

- No Snack, clique na aba "Logs" (embaixo)
- Veja se há algum erro em vermelho
- Se houver, me mande um print!

---

## ✅ Estrutura final do Snack:

```
📁 Seu Snack
├── 📄 package.json (4 dependências)
├── 📁 app
│   ├── 📄 _layout.tsx
│   ├── 📄 index.tsx
│   ├── 📄 list.tsx
│   └── 📄 detail.tsx
└── 📁 data
    └── 📄 products.ts
```

**Total: 6 arquivos** (1 JSON + 4 TSX + 1 TS)

---

## 🎉 Quando funcionar:

1. Você verá a tela roxa com "🛍️ Produtos em Destaque"
2. Lista com 7 produtos em cards brancos
3. Ao clicar em um produto, vai para a tela de detalhes
4. Botão "Voltar" funciona
5. Botão "Adicionar ao Carrinho" mostra alerta

**Pronto para entregar!** 🚀
