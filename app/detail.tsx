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
