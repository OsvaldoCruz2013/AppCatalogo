# 🚀 GUIA RÁPIDO - Teste e Validação

## Checklist de Testes ✅

### Antes de Entregar

Execute os seguintes testes para garantir que tudo está funcionando:

#### 1️⃣ Teste de Inicialização

- [ ] O app inicia automaticamente na tela de lista
- [ ] Não aparecem erros no console
- [ ] Todos os 7 produtos são exibidos

#### 2️⃣ Teste da Tela de Lista

- [ ] Cards estão bem formatados e legíveis
- [ ] Cada card mostra: título, descrição, preço, categoria e rating
- [ ] Cards respondem ao toque (feedback visual)
- [ ] A rolagem da lista funciona suavemente

#### 3️⃣ Teste de Navegação

- [ ] Ao clicar em um produto, abre a tela de detalhes
- [ ] Transição entre telas é suave
- [ ] A tela de detalhes mostra o produto correto

#### 4️⃣ Teste da Tela de Detalhes

- [ ] Todas as informações do produto são exibidas:
  - [ ] Título
  - [ ] Descrição
  - [ ] Preço formatado (R$ XX,XX)
  - [ ] Categoria
  - [ ] Rating (avaliação)
  - [ ] Lista de características completa
  - [ ] Código do produto (ID)
- [ ] Botão "Adicionar ao Carrinho" mostra um alerta
- [ ] Botão "Voltar à Lista" retorna à tela anterior
- [ ] Header do navegador mostra "Detalhes do Produto"

#### 5️⃣ Teste Visual

- [ ] Cores estão consistentes (tema roxo)
- [ ] Textos estão legíveis
- [ ] Espaçamentos estão adequados
- [ ] Ícones/emojis são exibidos corretamente

#### 6️⃣ Teste no Dispositivo Real

- [ ] Testado no navegador do Snack ✓
- [ ] Testado no Expo Go (celular) ✓
- [ ] Interface responsiva funciona bem

---

## 🧪 Como Testar no Expo Snack

### Passo a Passo:

1. **Abrir o Snack**
   - Acesse o link do seu Snack no navegador
   - Aguarde carregar completamente

2. **Testar no Simulador Web**
   - Use o preview à direita da tela
   - Clique em produtos e navegue
   - Teste todos os botões

3. **Testar no Celular**
   ```
   1. Instale o app "Expo Go" (Google Play / App Store)
   2. Escaneie o QR Code do Snack
   3. Aguarde o bundle baixar
   4. Teste no dispositivo real
   ```

---

## 🐛 Resolução de Problemas

### Problema: Tela branca ao iniciar

**Solução:**

- Verifique se o arquivo `app/index.tsx` existe
- Confirme que contém `router.replace('/list')`
- Limpe o cache do Snack (menu → Clear cache)

### Problema: "Cannot find module"

**Solução:**

- Verifique se todas as dependências estão no package.json
- Confirme que os caminhos de import estão corretos
- Para `../data/products`: certifique-se que a pasta data existe

### Problema: Navegação não funciona

**Solução:**

- Verifique se `expo-router` está instalado (~3.4.0)
- Confirme que o `_layout.tsx` está configurado
- Verifique se o main no package.json é `expo-router/entry`

### Problema: Dados não aparecem na tela detail

**Solução:**

- Verifique se os parâmetros estão sendo passados em `router.push()`
- Confirme que `useLocalSearchParams()` está sendo usado
- Check se o parse do JSON das features está correto

---

## 📱 Produtos no Catálogo

O app contém 7 produtos:

1. **Smartphone Galaxy X Pro** - R$ 3.499,90
2. **Notebook UltraBook Pro** - R$ 5.299,90
3. **Fone de Ouvido Bluetooth Premium** - R$ 899,90
4. **Smartwatch Fitness Plus** - R$ 1.299,90
5. **Tablet Pro 12.9"** - R$ 4.199,90
6. **Câmera Mirrorless 4K** - R$ 6.799,90
7. **Console de Videogame NextGen** - R$ 3.999,90

Todos têm informações completas e características detalhadas.

---

## 📊 Validação de Requisitos

### Requisitos Técnicos

- [x] Expo Router configurado
- [x] Estrutura de pastas /app
- [x] TypeScript ativo
- [x] 2 telas implementadas
- [x] Navegação Stack

### Requisitos Funcionais

- [x] Lista com 5+ itens (7 incluídos)
- [x] Itens clicáveis
- [x] Detalhes mostram todas as informações
- [x] Dados mockados em arquivo separado
- [x] Parâmetros passados via navegação

### Requisitos de Navegação

- [x] router.replace usado
- [x] router.push usado
- [x] useLocalSearchParams usado
- [x] Objeto completo passado

---

## 💡 Dicas Finais

### Para uma boa nota:

1. ✅ Teste TUDO antes de entregar
2. ✅ Verifique o link do Snack (copie e cole em aba anônima)
3. ✅ Garanta que não há erros no console
4. ✅ Confirme que o código está bem organizado
5. ✅ Documente qualquer problema encontrado

### Pontos extras:

- Interface bonita e profissional ⭐
- Código limpo e comentado ⭐
- Dados interessantes e realistas ⭐
- Atenção aos detalhes visuais ⭐

---

## 📝 Formato de Entrega

1. **Criar documento Word/PDF:**

   ```
   Título: [Seu Nome] - TP2
   Conteúdo:
   - Link do Expo Snack
   - (Opcional) Screenshots das telas
   - (Opcional) Breve descrição
   ```

2. **Nome do arquivo:**

   ```
   nome_sobrenome_TP2.pdf
   ```

3. **Verificar antes de enviar:**
   - Link está correto e funcionando ✓
   - Arquivo está em PDF ✓
   - Nome do arquivo está correto ✓

---

## 🎯 Resultado Esperado

Quando o professor testar seu Snack:

1. ✅ App abre direto na lista de produtos
2. ✅ Pode clicar em qualquer produto
3. ✅ Vê todos os detalhes na segunda tela
4. ✅ Pode voltar para a lista
5. ✅ Interface está bonita e funcional
6. ✅ Nenhum erro aparece

---

**Boa sorte! 🚀**

Se tudo estiver ✅, seu trabalho está pronto para entrega!
