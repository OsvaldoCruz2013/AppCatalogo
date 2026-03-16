# 🎯 Instruções para uso no Expo Snack

## Como usar este projeto no Expo Snack:

### Opção 1: Importar arquivos manualmente

1. Acesse [https://snack.expo.dev](https://snack.expo.dev)
2. Crie um novo projeto Snack
3. Configure as dependências no `package.json`:
   - Certifique-se de que `expo-router` está incluído
   - Use versões compatíveis do Expo (~50.0.0)

4. Crie a estrutura de pastas:
   - Clique em "+" para criar novas pastas
   - Crie a pasta `app/`
   - Crie a pasta `data/`

5. Copie os arquivos na seguinte ordem:

   **a) data/products.ts**
   - Criar arquivo `data/products.ts`
   - Copiar todo o conteúdo do arquivo local

   **b) app/\_layout.tsx**
   - Criar arquivo `app/_layout.tsx`
   - Copiar todo o conteúdo do arquivo local

   **c) app/index.tsx**
   - Criar arquivo `app/index.tsx`
   - Copiar todo o conteúdo do arquivo local

   **d) app/list.tsx**
   - Criar arquivo `app/list.tsx`
   - Copiar todo o conteúdo do arquivo local

   **e) app/detail.tsx**
   - Criar arquivo `app/detail.tsx`
   - Copiar todo o conteúdo do arquivo local

6. Verifique se o `package.json` contém:

```json
{
  "dependencies": {
    "expo": "~50.0.0",
    "expo-router": "~3.4.0",
    "expo-status-bar": "~1.11.1",
    "react": "18.2.0",
    "react-native": "0.73.0",
    "react-native-safe-area-context": "4.8.2",
    "react-native-screens": "~3.29.0"
  }
}
```

7. Aguarde o Snack processar e compilar
8. Teste no simulador web ou use o app Expo Go no seu celular

### Opção 2: Usar GitHub (mais fácil)

1. Faça upload do projeto para um repositório GitHub
2. No Expo Snack, clique em "Import from GitHub"
3. Cole a URL do repositório
4. O Snack importará automaticamente todos os arquivos

## ⚠️ Pontos de Atenção

- **Versões**: Use as versões exatas especificadas no package.json
- **Main Entry**: O entry point deve ser `expo-router/entry` no package.json
- **Estrutura**: Mantenha a estrutura de pastas exatamente como está
- **TypeScript**: O Snack suporta TypeScript nativamente

## 🧪 Testando

Após importar:

1. O app deve iniciar na tela de lista automaticamente
2. Clique em qualquer produto da lista
3. Você deve ser direcionado para a tela de detalhes
4. Use o botão "Voltar à Lista" para retornar

## 📱 Testando no Celular

1. Baixe o app "Expo Go" na Google Play ou App Store
2. Escaneie o QR Code do Snack com o app Expo Go
3. O aplicativo será carregado no seu celular

## 🔗 Link do Snack

Após criar seu Snack:

1. Clique em "Save" no Expo Snack
2. Copie a URL gerada (algo como: https://snack.expo.dev/@seuusuario/nome-do-projeto)
3. Esta é a URL que você deve colocar no documento de entrega

## ✅ Checklist de Validação

Antes de entregar, verifique:

- [ ] O app inicia na tela de lista
- [ ] Todos os 7 produtos são exibidos
- [ ] Ao clicar em um produto, abre a tela de detalhes
- [ ] Todas as informações do produto são exibidas na tela de detalhes
- [ ] O botão "Voltar à Lista" funciona
- [ ] Não há erros no console
- [ ] O link do Snack está funcionando

## 💡 Dicas

- Se encontrar erros de importação, verifique os caminhos dos imports
- Certifique-se de que o TypeScript está ativado no Snack
- Se o app não iniciar na tela correta, verifique o arquivo index.tsx
- Limpe o cache do Snack se encontrar problemas (botão de menu → Clear cache)

## 📞 Problemas Comuns

**Erro: "Cannot find module"**

- Verifique se todos os arquivos foram criados
- Confirme os caminhos de importação

**Tela branca ao iniciar**

- Verifique o arquivo app/index.tsx
- Certifique-se de que router.replace('/list') está sendo chamado

**Navegação não funciona**

- Verifique se expo-router está instalado
- Confirme que o \_layout.tsx está configurado corretamente

Boa sorte com o trabalho! 🚀
