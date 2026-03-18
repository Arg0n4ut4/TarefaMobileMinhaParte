import React, { useState } from "react";
import { SafeAreaView, View, Text, FlatList, StyleSheet } from "react-native";
import Produto, { ProdutoType } from "./Produto";

export const produtosIniciais = [
  {
    id: 1,
    nome: "Café em Grãos",
    imagem: "https://images.unsplash.com/photo-1559525839-b184a4d698c7?w=200",
    noCarrinho: false,
  },
  {
    id: 2,
    nome: "Leite Integral",
    imagem: "https://images.unsplash.com/photo-1563636619-e9143da7973b?w=200",
    noCarrinho: false,
  },
  {
    id: 3,
    nome: "Pão de Forma",
    imagem:
      "https://images.unsplash.com/photo-1598373182133-52452f7691ef?w=200",
    noCarrinho: false,
  },
  {
    id: 4,
    nome: "Ovos (Dúzia)",
    imagem:
      "https://images.unsplash.com/photo-1587486913049-53fc88980cfc?w=200",
    noCarrinho: false,
  },
  {
    id: 5,
    nome: "Manteiga",
    imagem:
      "https://images.unsplash.com/photo-1588195538326-c5b1e9f80a1b?w=200",
    noCarrinho: false,
  },
];

export default function App() {
  // produtos -- Estado que armazena a lista de produtos
  const [produtos, setProdutos] = useState<ProdutoType[]>(produtosIniciais);

  // toggleCarrinho() -- Alterna o estado noCarrinho de um produto específico
  function toggleCarrinho(id: number) {
    // novaLista -- Nova lista invertendo noCarrinho do produto com o id informado
    const novaLista = produtos.map((produto) =>
      produto.id === id
        ? { ...produto, noCarrinho: !produto.noCarrinho }
        : produto,
    );

    setProdutos(novaLista);
  }

  // itensSelecionados -- Produtos marcados no carrinho
  const itensSelecionados = produtos.filter((p) => p.noCarrinho);

  // itensCarrinho -- Texto com nomes dos itens marcados no carrinho
  const itensCarrinho = itensSelecionados.map((p) => p.nome).join(", ");

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <View style={styles.backgroundBlobOne} />
        <View style={styles.backgroundBlobTwo} />

        <View style={styles.floatingMenu}>
          <Text style={styles.titulo}>Mercado Inteligente</Text>
          <Text style={styles.subtitulo}>
            Selecione os itens para o carrinho
          </Text>
          <Text style={styles.resumoLinha}>
            Itens no Carrinho: {itensCarrinho || "Nenhum"}
          </Text>
        </View>

        <View style={styles.bottomPanel}>
          <Text style={styles.secaoTitulo}>Marcados para compra</Text>

          {itensSelecionados.length > 0 ? (
            itensSelecionados.map((item, index) => (
              <View key={item.id} style={styles.marcadoItem}>
                <Text style={styles.marcadoNumero}>{index + 1}.</Text>
                <Text style={styles.marcadoTexto}>{item.nome}</Text>
              </View>
            ))
          ) : (
            <Text style={styles.vazioTexto}>Nenhum item marcado.</Text>
          )}

          <Text style={[styles.secaoTitulo, styles.secaoMercadorias]}>
            Lista de mercadorias
          </Text>

          <FlatList
            data={produtos}
            keyExtractor={(item) => item.id.toString()}
            contentContainerStyle={styles.listaContent}
            showsVerticalScrollIndicator={false}
            // Produto (componente) -- Renderiza cada item da lista
            renderItem={({ item }) => (
              <Produto produto={item} onToggleCarrinho={toggleCarrinho} />
            )}
          />
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#f8f4ea",
  },
  container: {
    flex: 1,
    backgroundColor: "#f8f4ea",
    paddingHorizontal: 16,
    paddingTop: 12,
    paddingBottom: 0,
  },
  backgroundBlobOne: {
    position: "absolute",
    width: 250,
    height: 250,
    borderRadius: 125,
    backgroundColor: "rgba(255, 153, 0, 0.24)",
    top: -90,
    right: -50,
  },
  backgroundBlobTwo: {
    position: "absolute",
    width: 190,
    height: 190,
    borderRadius: 95,
    backgroundColor: "rgba(35, 157, 255, 0.16)",
    top: 72,
    left: -70,
  },
  floatingMenu: {
    backgroundColor: "rgba(255, 255, 255, 0.62)",
    borderRadius: 24,
    paddingHorizontal: 18,
    paddingVertical: 16,
    borderWidth: 1,
    borderColor: "rgba(255, 255, 255, 0.88)",
    marginBottom: 16,
    shadowOpacity: 0.12,
    shadowRadius: 18,
    shadowOffset: { width: 0, height: 8 },
    elevation: 7,
  },
  titulo: {
    color: "#2c2013",
    fontSize: 27,
    fontWeight: "800",
    marginBottom: 2,
  },
  subtitulo: {
    color: "#6f5d4c",
    fontSize: 14,
    marginBottom: 12,
    fontWeight: "500",
  },
  resumoLinha: {
    backgroundColor: "rgba(255, 149, 0, 0.18)",
    borderRadius: 14,
    paddingHorizontal: 12,
    paddingVertical: 10,
    color: "#4e2d00",
    fontWeight: "600",
    borderWidth: 1,
    borderColor: "rgba(255, 149, 0, 0.35)",
  },
  bottomPanel: {
    flex: 1,
    backgroundColor: "rgba(27,29,34,0.65)",
    borderWidth: 2,
    borderColor: "rgba(27,29,34, 1)",
    borderbottomWidth: 0,
    borderTopLeftRadius: 34,
    borderTopRightRadius: 34,
    paddingHorizontal: 20,
    paddingTop: 20,
    margintop: 12,
    marginhorizontal: 4,
  },
  secaoTitulo: {
    color: "#ff9f1c",
    fontSize: 18,
    fontWeight: "700",
    marginBottom: 10,
  },
  marcadoItem: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 6,
  },
  marcadoNumero: {
    color: "#ff9f1c",
    fontSize: 16,
    fontWeight: "700",
    width: 26,
  },
  marcadoTexto: {
    color: "#f5e5cb",
    fontSize: 15,
    fontWeight: "600",
    flex: 1,
  },
  vazioTexto: {
    color: "#b5b7bf",
    fontSize: 14,
    marginBottom: 8,
  },
  secaoMercadorias: {
    marginTop: 10,
    marginBottom: 12,
  },
  listaContent: {
    paddingBottom: 28,
  },
});
