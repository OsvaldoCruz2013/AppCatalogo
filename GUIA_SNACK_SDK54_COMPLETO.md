# 📱 Guia Completo - Snack com SDK 54.0.0

## ✅ Status do Projeto

### Local (SDK 54)

- **Status**: ✅ Servidor rodando
- **URL**: http://localhost:8084
- **SDK**: 54.0.0
- **Versões**:
  - expo-router: ~6.0.23
  - react: 19.1.0
  - react-native: 0.81.5

### Snack

- **URL**: https://snack.expo.dev/@osvaldocruz/desenvolvimento_mobile_com_react_native_tp2
- **SDK Requerido**: 54.0.0

---

## 📦 Dependências para o Snack (SDK 54)

### package.json Completo para Snack

Copie e cole este conteúdo COMPLETO no arquivo `package.json` do Snack:

```json
{
  "main": "expo-router/entry",
  "dependencies": {
    "expo-router": "~6.0.23",
    "expo-linking": "~8.0.11",
    "expo-constants": "~18.0.13",
    "expo-status-bar": "~3.0.9",
    "react-native-safe-area-context": "~5.6.0",
    "react-native-screens": "~4.16.0"
  }
}
```

**IMPORTANTE**:

- O Snack já inclui automaticamente: `expo`, `react`, `react-native`
- Não adicione essas dependências manualmente no package.json
- Use exatamente as versões acima (~6.0.23 para expo-router, não 4.0.x)

---

## 🚀 Passo a Passo para Configurar o Snack

### 1️⃣ Abrir o Snack

- Acesse: https://snack.expo.dev/@osvaldocruz/desenvolvimento_mobile_com_react_native_tp2
- Ou crie um novo Snack em: https://snack.expo.dev

### 2️⃣ Configurar SDK 54

- No canto superior direito, clique no dropdown de SDK
- Selecione **"54.0.0"**
- Aguarde o Snack reload

### 3️⃣ Atualizar package.json

1. Clique em **"package.json"** no painel esquerdo
2. Selecione TODO o conteúdo (Ctrl+A)
3. Delete (Delete ou Backspace)
4. Cole o conteúdo do arquivo `PACKAGE_JSON_SNACK_SDK54.json`
5. Salve (Ctrl+S)
6. **Aguarde 30-40 segundos** enquanto as dependências são instaladas

### 4️⃣ Verificar Estrutura de Arquivos

Certifique-se de que o Snack tem estes arquivos:

```
├── App.js (DEVE conter: export { default } from "expo-router/entry";)
├── package.json (SDK 54 dependencies)
├── app/
│   ├── _layout.tsx
│   ├── index.tsx
│   ├── list.tsx
│   └── detail.tsx
└── data/
    └── products.ts
```

### 5️⃣ Arquivo App.js

**CRÍTICO**: O arquivo `App.js` DEVE conter apenas:

```javascript
export { default } from "expo-router/entry";
```

❌ **NÃO pode ter**: `import App from './App'` ou `registerRootComponent`
✅ **Deve ter**: Apenas a linha export acima

---

## 🧪 Testando no Snack

### Teste Web

1. Clique em **"Web"** no painel direito do Snack
2. Aguarde 30-60 segundos para o build inicial
3. Deve aparecer a lista com 7 produtos:
   - Smartphone Galaxy S21
   - Notebook Dell XPS 13
   - Mouse Gamer Logitech
   - Teclado Mecânico RGB
   - Monitor LG UltraWide
   - Headset Bluetooth Sony
   - Webcam Full HD

### Testando Navegação

1. Clique em qualquer produto
2. Deve abrir a tela de detalhes com:
   - Botão "← Voltar" no topo
   - Imagem do produto
   - Nome, preço, avaliação
   - Descrição e recursos
3. Clique em "← Voltar"
4. Deve retornar à lista de produtos

### Teste Mobile (Opcional)

1. Instale o app **Expo Go** no seu celular
2. Escaneie o QR Code mostrado no Snack
3. Teste a navegação no dispositivo físico

---

## ⚠️ Problemas Comuns e Soluções

### Erro: "No default export of 'App.js'"

**Solução**: Verifique se o arquivo `App.js` contém apenas:

```javascript
export { default } from "expo-router/entry";
```

### Erro: "Unable to resolve expo-linking"

**Solução**:

1. Verifique se o package.json tem `"expo-linking": "~8.0.11"`
2. Salve o package.json (Ctrl+S)
3. Aguarde as dependências instalarem (30-40 segundos)
4. Recarregue o Snack (F5)

### Erro: "expo-router version mismatch"

**Solução**: Use exatamente `"expo-router": "~6.0.23"` (SDK 54 usa versão 6.x, não 4.x)

### Tela em Branco no Web

**Solução**:

1. Abra o Console do navegador (F12)
2. Verifique se há erros de import
3. Confirme que todas as dependências foram instaladas
4. Aguarde mais 10-20 segundos (build inicial pode demorar)

### Erro: "SafeAreaView is deprecated"

**Solução**: Já corrigido! Os arquivos `list.tsx` e `detail.tsx` importam SafeAreaView de:

```typescript
import { SafeAreaView } from "react-native-safe-area-context";
```

---

## 📋 Checklist Final Antes de Submeter

- [ ] SDK do Snack está em **54.0.0**
- [ ] package.json tem as 6 dependências corretas (expo-router ~6.0.23, etc)
- [ ] App.js contém apenas o export do expo-router/entry
- [ ] Pasta `app/` tem 4 arquivos (.tsx)
- [ ] Pasta `data/` tem 1 arquivo (products.ts)
- [ ] Teste Web: Lista de produtos aparece
- [ ] Teste Web: Clicar em produto abre detalhes
- [ ] Teste Web: Botão "Voltar" retorna à lista
- [ ] Aba "Problems" do Snack está vazia (sem erros)
- [ ] Snack mostra "All changes saved" no topo

---

## 🔗 Links Importantes

- **Snack**: https://snack.expo.dev/@osvaldocruz/desenvolvimento_mobile_com_react_native_tp2
- **GitHub**: https://github.com/OsvaldoCruz2013/AppCatalogo
- **Local**: http://localhost:8084

---

## 📝 Notas Técnicas

### Diferenças SDK 51 vs SDK 54

| Dependência          | SDK 51  | SDK 54  |
| -------------------- | ------- | ------- |
| expo-router          | ~3.5.23 | ~6.0.23 |
| expo-status-bar      | ~1.12.1 | ~3.0.9  |
| react                | 18.2.0  | 19.1.0  |
| react-native         | 0.74.5  | 0.81.5  |
| safe-area-context    | 4.10.5  | ~5.6.0  |
| react-native-screens | ~3.31.1 | ~4.16.0 |

### Por que não incluir expo, react, react-native?

O Snack automaticamente gerencia essas dependências base de acordo com o SDK selecionado. Adicionar manualmente pode causar conflitos de versão.

---

## ✅ Projeto Funcionando!

Ao seguir este guia:

- ✅ Versão local rodando em http://localhost:8084 (SDK 54)
- ⚠️ Versão Snack: Aguardando você aplicar o package.json correto
- ✅ GitHub publicado
- ✅ Todas as dependências corretas identificadas

**Próximo passo**: Aplicar o package.json no Snack e testar! 🚀
