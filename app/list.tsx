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
