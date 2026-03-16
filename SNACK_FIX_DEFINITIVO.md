# ✅ CONTEÚDO CORRETO PARA CADA ARQUIVO NO SNACK

## 📄 package.json

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

**IMPORTANTE:** APENAS isso! Sem name, version, main, scripts.

---

## 📄 app/\_layout.tsx

```tsx
import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerShown: false }} />
      <Stack.Screen name="list" options={{ headerShown: false }} />
      <Stack.Screen name="detail" options={{ headerShown: false }} />
    </Stack>
  );
}
```

---

## 📄 app/index.tsx

```tsx
import { Redirect } from "expo-router";

export default function Index() {
  return <Redirect href="/list" />;
}
```

---

## 📄 data/products.ts

(copie da seção 4 do SNACK_COMPLETO.md - são os 7 produtos completos)

---

## 📄 app/list.tsx

(copie da seção 5 do SNACK_COMPLETO.md - tela de listagem completa)

---

## 📄 app/detail.tsx

(copie da seção 6 do SNACK_COMPLETO.md - tela de detalhes completa)

---

## ⚠️ CHECKLIST NO SNACK:

1. ✅ Deletou o arquivo `App.js` (se existir)?
2. ✅ O `package.json` tem APENAS as dependencies (sem name, main, etc.)?
3. ✅ Tem pasta `app` com 4 arquivos (.tsx)?
4. ✅ Tem pasta `data` com 1 arquivo (.ts)?
5. ✅ Clicou em "Save"?
6. ✅ Esperou o Snack recompilar (barra de progresso)?

Se tudo isso está OK e ainda dá erro, **clique em "Clear cache and reload"** no menu do Snack (ícone de 3 pontos).
