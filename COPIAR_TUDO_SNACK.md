# 🚀 COPIAR TUDO PARA O SNACK - SDK 51

## ⚠️ IMPORTANTE ANTES DE COMEÇAR:

1. Acesse: https://snack.expo.dev
2. Faça login com @osvaldocruz
3. Crie um NOVO Snack
4. Delete TODOS os arquivos que vierem por padrão (App.js, components/, etc)
5. Copie os 6 arquivos abaixo EXATAMENTE como estão

---

## 📄 ARQUIVO 1: package.json

**Caminho:** `package.json` (raiz do projeto)

```json
{
  "dependencies": {
    "expo-router": "~3.5.23",
    "expo-status-bar": "~1.12.1",
    "react-native-safe-area-context": "4.10.5",
    "react-native-screens": "~3.31.1"
  }
}
```

---

## 📄 ARQUIVO 2: app/_layout.tsx

**Caminho:** `app/_layout.tsx`

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

## 📄 ARQUIVO 3: app/index.tsx

**Caminho:** `app/index.tsx`

```tsx
import { Redirect } from "expo-router";

export default function Index() {
  return <Redirect href="/list" />;
}
```

---

## 📄 ARQUIVO 4: data/products.ts

**Caminho:** `data/products.ts`

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
    description: "Smartphone de última geração com tela AMOLED de 6.7 polegadas",
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
      "Gráficos 4K a 120fps",
      "Ray Tracing em tempo real",
      "SSD ultra-rápido 1TB",
      "Compatível com jogos anteriores",
      "Controle sem fio incluído",
    ],
  },
];
```

---

## 📄 ARQUIVO 5: app/list.tsx

**Caminho:** `app/list.tsx`

```tsx
import React from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  StatusBar,
  SafeAreaView,
} from "react-native";
import { router } from "expo-router";
import { products, Product } from "../data/products";

export default function ListScreen() {
  const handleItemPress = (item: Product) => {
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

## 📄 ARQUIVO 6: app/detail.tsx

**Caminho:** `app/detail.tsx`

```tsx
import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  StatusBar,
  TouchableOpacity,
  SafeAreaView,
  Alert,
} from "react-native";
import { useLocalSearchParams, router } from "expo-router";

export default function DetailScreen() {
  const params = useLocalSearchParams();
  const { id, title, description, price, category, rating, features } = params;
  const featuresList = features ? JSON.parse(features as string) : [];

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="light-content" backgroundColor="#6200ee" />

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
        <View style={styles.header}>
          <View style={styles.categoryBadge}>
            <Text style={styles.categoryText}>{category}</Text>
          </View>
          <View style={styles.ratingBadge}>
            <Text style={styles.star}>⭐</Text>
            <Text style={styles.ratingText}>{rating}</Text>
          </View>
        </View>

        <View style={styles.imagePlaceholder}>
          <Text style={styles.imagePlaceholderText}>📱</Text>
          <Text style={styles.imagePlaceholderSubtext}>Imagem do Produto</Text>
        </View>

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

## ✅ CHECKLIST FINAL

Depois de copiar todos os arquivos:

- [ ] Deletou App.js do Snack
- [ ] Copiou os 6 arquivos na ordem
- [ ] Verificou que package.json tem apenas 4 dependências
- [ ] Clicou em "Save" no Snack
- [ ] Aguardou recarregar (15 segundos)
- [ ] Testou em "Web" no preview
- [ ] Renomeou o projeto para: `desenvolvimento_mobile_com_react_native_tp2`

---

## 🎯 LINK FINAL

Após salvar, seu link será:

https://snack.expo.dev/@osvaldocruz/desenvolvimento_mobile_com_react_native_tp2

**Este é o link que você vai entregar no TP2!** ✅
