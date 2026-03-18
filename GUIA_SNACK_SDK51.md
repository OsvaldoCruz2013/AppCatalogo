# 📱 GUIA COMPLETO - SNACK SDK 54

## ⚠️ IMPORTANTE: Use as versões SDK 54 (atualizado!)

Este guia foi atualizado com as versões corretas para o Snack SDK 54.

## ✅ PASSO A PASSO

### 1. Abrir o Snack

- Acesse: https://snack.expo.dev/@osvaldocruz/desenvolvimento_mobile_com_react_native_tp2
- Faça login se necessário

### 2. Configurar o arquivo App.js

⚠️ **IMPORTANTE:** O Snack cria um arquivo `App.js` por padrão. Com Expo Router, este arquivo precisa redirecionar para o entry do Expo Router.

1. Clique em `App.js`
2. **APAGUE TODO O CONTEÚDO**
3. Cole **EXATAMENTE** este código:

```js
export { default } from "expo-router/entry";
```

**Isso é essencial!** Sem este export, você verá o erro: "No default export of 'App.js' to render!"

### 3. Criar Estrutura de Pastas

Clique no ícone "+" ao lado de "PROJECT" e crie:

- Pasta: `app`
- Pasta: `data`

### 4. Copiar package.json PRIMEIRO (MUITO IMPORTANTE!)

**Clique em `package.json` e SUBSTITUA TODO O CONTEÚDO por:**

```json
{
  "dependencies": {
    "expo-router": "~3.5.23",
    "react-native-safe-area-context": "4.10.5",
    "react-native-screens": "~3.31.1",
    "expo-linking": "~6.3.1",
    "expo-constants": "~16.0.1",
    "expo-status-bar": "~1.12.1"
  }
}
```

**⚠️ IMPORTANTE: Use exatamente essas versões no Snack!**

⚠️ **AGUARDE 15-20 SEGUNDOS** após salvar para as dependências instalarem!

---

### 5. Criar app/\_layout.tsx

Dentro da pasta `app`, crie o arquivo `_layout.tsx`:

```tsx
import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <>
      <Stack>
        <Stack.Screen name="index" options={{ headerShown: false }} />
        <Stack.Screen name="list" options={{ headerShown: false }} />
        <Stack.Screen name="detail" options={{ headerShown: false }} />
      </Stack>
    </>
  );
}
```

---

### 6. Criar app/index.tsx

Dentro da pasta `app`, crie o arquivo `index.tsx`:

```tsx
import { Redirect } from "expo-router";

export default function Index() {
  return <Redirect href="/list" />;
}
```

---

### 7. Criar app/list.tsx

Dentro da pasta `app`, crie o arquivo `list.tsx`:

```tsx
import React from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  StatusBar,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { router } from "expo-router";
import { products, Product } from "../data/products";

export default function ListScreen() {
  const handleItemPress = (item: Product) => {
    // Navegar para a tela de detalhes passando todos os dados do produto
    router.push({
      pathname: "/detail",
      params: {
        id: item.id,
        title: item.title,
        description: item.description,
        price: item.price.toString(),
        category: item.category,
        rating: item.rating.toString(),
        features: JSON.stringify(item.features),
      },
    });
  };

  const renderItem = ({ item }: { item: Product }) => (
    <TouchableOpacity
      style={styles.card}
      onPress={() => handleItemPress(item)}
      activeOpacity={0.7}
    >
      <View style={styles.cardContent}>
        <View style={styles.categoryBadge}>
          <Text style={styles.categoryText}>{item.category}</Text>
        </View>

        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.description} numberOfLines={2}>
          {item.description}
        </Text>

        <View style={styles.footer}>
          <Text style={styles.price}>
            R$ {item.price.toFixed(2).replace(".", ",")}
          </Text>
          <View style={styles.ratingContainer}>
            <Text style={styles.star}>⭐</Text>
            <Text style={styles.rating}>{item.rating}</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#6200ee" />

      <View style={styles.header}>
        <Text style={styles.headerTitle}>🛍️ Produtos em Destaque</Text>
        <Text style={styles.headerSubtitle}>
          {products.length} produtos disponíveis
        </Text>
      </View>

      <FlatList
        data={products}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.listContainer}
        showsVerticalScrollIndicator={false}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
  },
  header: {
    backgroundColor: "#fff",
    padding: 20,
    paddingTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#e0e0e0",
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 5,
  },
  headerSubtitle: {
    fontSize: 14,
    color: "#666",
  },
  listContainer: {
    padding: 16,
  },
  card: {
    backgroundColor: "#fff",
    borderRadius: 12,
    marginBottom: 16,
    elevation: 3,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  cardContent: {
    padding: 16,
  },
  categoryBadge: {
    backgroundColor: "#6200ee",
    alignSelf: "flex-start",
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 16,
    marginBottom: 12,
  },
  categoryText: {
    color: "#fff",
    fontSize: 12,
    fontWeight: "600",
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 8,
  },
  description: {
    fontSize: 14,
    color: "#666",
    lineHeight: 20,
    marginBottom: 12,
  },
  footer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 8,
    paddingTop: 12,
    borderTopWidth: 1,
    borderTopColor: "#f0f0f0",
  },
  price: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#6200ee",
  },
  ratingContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  star: {
    fontSize: 16,
    marginRight: 4,
  },
  rating: {
    fontSize: 16,
    fontWeight: "600",
    color: "#333",
  },
});
```

---

### 8. Criar app/detail.tsx

Dentro da pasta `app`, crie o arquivo `detail.tsx`:

```tsx
import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  StatusBar,
  TouchableOpacity,
  Alert,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useLocalSearchParams, router } from "expo-router";

export default function DetailScreen() {
  // Receber os parâmetros passados pela navegação
  const params = useLocalSearchParams();

  const { id, title, description, price, category, rating, features } = params;

  // Parse das features que foram enviadas como JSON string
  const featuresList = features ? JSON.parse(features as string) : [];

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="light-content" backgroundColor="#6200ee" />

      {/* Header customizado com botão voltar */}
      <View style={styles.customHeader}>
        <TouchableOpacity
          onPress={() => router.back()}
          style={styles.backButton}
        >
          <Text style={styles.backButtonText}>← Voltar</Text>
        </TouchableOpacity>
        <Text style={styles.customHeaderTitle}>Detalhes do Produto</Text>
        <View style={styles.headerPlaceholder} />
      </View>

      <ScrollView style={styles.container}>
        {/* Header com categoria */}
        <View style={styles.header}>
          <View style={styles.categoryBadge}>
            <Text style={styles.categoryText}>{category}</Text>
          </View>
          <View style={styles.ratingBadge}>
            <Text style={styles.star}>⭐</Text>
            <Text style={styles.ratingText}>{rating}</Text>
          </View>
        </View>

        {/* Área de imagem placeholder */}
        <View style={styles.imagePlaceholder}>
          <Text style={styles.imagePlaceholderText}>📱</Text>
          <Text style={styles.imagePlaceholderSubtext}>Imagem do Produto</Text>
        </View>

        {/* Conteúdo principal */}
        <View style={styles.content}>
          <Text style={styles.title}>{title}</Text>

          <View style={styles.priceContainer}>
            <Text style={styles.priceLabel}>Preço:</Text>
            <Text style={styles.price}>
              R${" "}
              {parseFloat(price as string)
                .toFixed(2)
                .replace(".", ",")}
            </Text>
          </View>

          <View style={styles.divider} />

          <View style={styles.section}>
            <Text style={styles.sectionTitle}>📝 Descrição</Text>
            <Text style={styles.description}>{description}</Text>
          </View>

          <View style={styles.divider} />

          <View style={styles.section}>
            <Text style={styles.sectionTitle}>✨ Características</Text>
            {featuresList.map((feature: string, index: number) => (
              <View key={index} style={styles.featureItem}>
                <Text style={styles.featureBullet}>•</Text>
                <Text style={styles.featureText}>{feature}</Text>
              </View>
            ))}
          </View>

          <View style={styles.divider} />

          <View style={styles.section}>
            <Text style={styles.sectionTitle}>ℹ️ Informações Adicionais</Text>
            <View style={styles.infoRow}>
              <Text style={styles.infoLabel}>Código do Produto:</Text>
              <Text style={styles.infoValue}>#{id}</Text>
            </View>
            <View style={styles.infoRow}>
              <Text style={styles.infoLabel}>Categoria:</Text>
              <Text style={styles.infoValue}>{category}</Text>
            </View>
            <View style={styles.infoRow}>
              <Text style={styles.infoLabel}>Avaliação:</Text>
              <Text style={styles.infoValue}>{rating} ⭐</Text>
            </View>
          </View>

          {/* Botões de ação */}
          <View style={styles.buttonContainer}>
            <TouchableOpacity
              style={styles.primaryButton}
              onPress={() =>
                Alert.alert("Sucesso!", "Produto adicionado ao carrinho!")
              }
            >
              <Text style={styles.primaryButtonText}>
                🛒 Adicionar ao Carrinho
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.secondaryButton}
              onPress={() => router.back()}
            >
              <Text style={styles.secondaryButtonText}>← Voltar à Lista</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#6200ee",
  },
  customHeader: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#6200ee",
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: "#5a00d6",
  },
  backButton: {
    padding: 8,
  },
  backButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
  },
  customHeaderTitle: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
    flex: 1,
    textAlign: "center",
  },
  headerPlaceholder: {
    width: 60,
  },
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 16,
    backgroundColor: "#fff",
  },
  categoryBadge: {
    backgroundColor: "#6200ee",
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
  },
  categoryText: {
    color: "#fff",
    fontSize: 14,
    fontWeight: "600",
  },
  ratingBadge: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff3cd",
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: "#ffc107",
  },
  star: {
    fontSize: 16,
    marginRight: 4,
  },
  ratingText: {
    fontSize: 14,
    fontWeight: "600",
    color: "#333",
  },
  imagePlaceholder: {
    height: 250,
    backgroundColor: "#e0e0e0",
    justifyContent: "center",
    alignItems: "center",
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
  imagePlaceholderText: {
    fontSize: 80,
    marginBottom: 8,
  },
  imagePlaceholderSubtext: {
    fontSize: 16,
    color: "#666",
  },
  content: {
    backgroundColor: "#fff",
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 16,
  },
  priceContainer: {
    flexDirection: "row",
    alignItems: "baseline",
    marginBottom: 20,
  },
  priceLabel: {
    fontSize: 16,
    color: "#666",
    marginRight: 8,
  },
  price: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#6200ee",
  },
  divider: {
    height: 1,
    backgroundColor: "#e0e0e0",
    marginVertical: 20,
  },
  section: {
    marginBottom: 8,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 12,
  },
  description: {
    fontSize: 16,
    color: "#666",
    lineHeight: 24,
  },
  featureItem: {
    flexDirection: "row",
    marginBottom: 8,
    paddingLeft: 8,
  },
  featureBullet: {
    fontSize: 20,
    color: "#6200ee",
    marginRight: 12,
    marginTop: -4,
  },
  featureText: {
    flex: 1,
    fontSize: 15,
    color: "#666",
    lineHeight: 22,
  },
  infoRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderBottomColor: "#f0f0f0",
  },
  infoLabel: {
    fontSize: 15,
    color: "#666",
  },
  infoValue: {
    fontSize: 15,
    color: "#333",
    fontWeight: "600",
  },
  buttonContainer: {
    marginTop: 24,
    marginBottom: 20,
  },
  primaryButton: {
    backgroundColor: "#6200ee",
    padding: 16,
    borderRadius: 8,
    alignItems: "center",
    marginBottom: 12,
    elevation: 2,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },
  primaryButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  secondaryButton: {
    backgroundColor: "#fff",
    padding: 16,
    borderRadius: 8,
    alignItems: "center",
    borderWidth: 2,
    borderColor: "#6200ee",
  },
  secondaryButtonText: {
    color: "#6200ee",
    fontSize: 16,
    fontWeight: "bold",
  },
});
```

---

### 9. Criar data/products.ts

Dentro da pasta `data`, crie o arquivo `products.ts`:

```typescript
export interface Product {
  id: string;
  title: string;
  description: string;
  price: number;
  category: string;
  rating: number;
  features: string[];
}

export const products: Product[] = [
  {
    id: "1",
    title: "Smartphone Galaxy X Pro",
    description:
      "Smartphone de última geração com tela AMOLED de 6.7 polegadas",
    price: 3499.9,
    category: "Smartphones",
    rating: 4.8,
    features: [
      'Tela AMOLED 6.7" 120Hz',
      "Câmera tripla 108MP",
      "12GB RAM + 256GB",
      "Bateria 5000mAh",
      "5G",
    ],
  },
  {
    id: "2",
    title: "Notebook UltraBook Pro",
    description: "Notebook leve e potente para trabalho e entretenimento",
    price: 5299.9,
    category: "Notebooks",
    rating: 4.9,
    features: [
      "Intel Core i7 13ª geração",
      "16GB RAM DDR5",
      "SSD 512GB NVMe",
      'Tela 15.6" Full HD',
      "Peso: 1.5kg",
    ],
  },
  {
    id: "3",
    title: "Fone de Ouvido Bluetooth Premium",
    description: "Fone com cancelamento de ruído ativo e som de alta qualidade",
    price: 899.9,
    category: "Áudio",
    rating: 4.7,
    features: [
      "Cancelamento de ruído ativo",
      "Bateria até 30 horas",
      "Bluetooth 5.3",
      "Confortável para uso prolongado",
      "Resistente à água IPX4",
    ],
  },
  {
    id: "4",
    title: "Smartwatch Fitness Plus",
    description: "Relógio inteligente com monitoramento completo de saúde",
    price: 1299.9,
    category: "Wearables",
    rating: 4.6,
    features: [
      "Monitor cardíaco 24h",
      "GPS integrado",
      "Resistente à água 5ATM",
      "Bateria 7 dias",
      "Mais de 100 modos esportivos",
    ],
  },
  {
    id: "5",
    title: 'Tablet Pro 12.9"',
    description: "Tablet profissional com caneta stylus e teclado opcional",
    price: 4199.9,
    category: "Tablets",
    rating: 4.9,
    features: [
      'Tela Liquid Retina 12.9"',
      "Processador M2",
      "8GB RAM + 128GB",
      "Suporte para Apple Pencil",
      "Face ID",
    ],
  },
  {
    id: "6",
    title: "Câmera Mirrorless 4K",
    description: "Câmera profissional para fotografia e vídeo em 4K",
    price: 6799.9,
    category: "Câmeras",
    rating: 4.8,
    features: [
      "Sensor CMOS 24MP",
      "Vídeo 4K 60fps",
      "Estabilização de 5 eixos",
      "Wi-Fi e Bluetooth",
      "Visor eletrônico OLED",
    ],
  },
  {
    id: "7",
    title: "Console de Videogame NextGen",
    description: "Console de última geração com gráficos em 4K e ray tracing",
    price: 3999.9,
    category: "Games",
    rating: 4.9,
    features: [
      "Resolução 4K 120fps",
      "Ray Tracing em tempo real",
      "SSD ultrarrápido 1TB",
      "Controle sem fio com feedback háptico",
      "Retrocompatibilidade",
    ],
  },
];
```

---

### 10. Testar no Snack

Após copiar TODOS os arquivos:

1. Clique em **"Save"** (Ctrl+S)
2. Aguarde 10-15 segundos
3. Clique em **"Web"** no painel direito
4. Deve aparecer a lista com 7 produtos
5. Clique em um produto para ver os detalhes
6. Teste o botão "Voltar"

### 11. Testar no Celular (Opcional)

1. Instale o **Expo Go** no seu celular (Android ou iOS)
2. No Snack, clique em **"My Device"**
3. Escaneie o QR Code com o Expo Go
4. O app deve funcionar normalmente

---

## ⚠️ SOLUÇÃO DE PROBLEMAS

### Se aparecer "No default export of 'App.js' to render!":

1. **É o erro mais comum!** Acontece quando o App.js está vazio ou sem export
2. Abra o arquivo `App.js` no Snack
3. Cole EXATAMENTE este código:
   ```js
   export { default } from "expo-router/entry";
   ```
4. Salve (Ctrl+S) e aguarde recarregar

### Se aparecer erro de SafeAreaView (deprecation warning):

1. Verifique se `app/list.tsx` e `app/detail.tsx` têm: `import { SafeAreaView } from "react-native-safe-area-context"`
2. NÃO deve ter: `import { SafeAreaView } from "react-native"`
3. Salve todos os arquivos e aguarde recarregar

### Se aparecer tela em branco:

1. Verifique se o `App.js` tem: `export { default } from 'expo-router/entry';`
2. Verifique se o `package.json` tem APENAS as 4 dependências listadas
3. Verifique se a pasta `app` tem os 4 arquivos (.tsx)
4. Verifique se a pasta `data` tem o arquivo products.ts
5. Clique em "Clear Cache" no menu (3 pontos)
6. Recarregue a página

### Se aparecer erro de dependências:

1. Volte no `package.json`
2. Confirme que tem EXATAMENTE as versões corretas para SDK 54:
   - `expo-router`: ~4.0.9
   - `expo-status-bar`: ~2.0.0
   - `react-native-safe-area-context`: 4.12.0
   - `react-native-screens`: ~4.3.0

### Se a navegação não funcionar:

1. Verifique se o arquivo `app/_layout.tsx` existe
2. Verifique se o arquivo `app/index.tsx` existe
3. Confirme que TODOS os nomes de arquivos estão corretos

---

## ✅ CHECKLIST FINAL

- [ ] App.js com `export { default } from 'expo-router/entry';`
- [ ] package.json com "main" e 4 dependências
- [ ] Pasta `app` criada
- [ ] Pasta `data` criada
- [ ] app/\_layout.tsx criado
- [ ] app/index.tsx criado
- [ ] app/list.tsx criado (com SafeAreaView de react-native-safe-area-context)
- [ ] app/detail.tsx criado (com SafeAreaView de react-native-safe-area-context)
- [ ] data/products.ts criado
- [ ] Salvou o Snack (Ctrl+S)
- [ ] Testou na Web
- [ ] Viu a lista de 7 produtos
- [ ] Clicou em um produto e viu os detalhes
- [ ] Testou o botão voltar

---

## 🎯 LINK FINAL

Após confirmar que tudo funciona, seu Snack estará em:
https://snack.expo.dev/@osvaldocruz/desenvolvimento_mobile_com_react_native_tp2

**Use este link para entregar o TP2!**
