import React from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

// ProdutoType -- Interface que tipa os produtos
export interface ProdutoType {
  id: number;
  nome: string;
  imagem: string;
  noCarrinho: boolean;
}

// Props -- Props do componente: produto e callback onToggleCarrinho
interface Props {
  produto: ProdutoType;
  onToggleCarrinho: (id: number) => void;
}

export default function Produto({ produto, onToggleCarrinho }: Props) {
  return (
    <View style={styles.card}>
      <View style={styles.numeroBox}>
        <Text style={styles.numeroTexto}>{produto.id}</Text>
      </View>
      <Image source={{ uri: produto.imagem }} style={styles.imagem} />
      <View style={styles.infoBox}>
        <Text style={styles.nomeProduto}>{produto.nome}</Text>
        <Text style={styles.statusProduto}>
          {produto.noCarrinho ? "No carrinho" : "Disponível"}
        </Text>
      </View>
      // onPress() -- Chama callback do componente pai com o id do produto
      <TouchableOpacity
        style={[
          styles.botaoCarrinho,
          produto.noCarrinho
            ? styles.botaoCarrinhoAtivo
            : styles.botaoCarrinhoInativo,
        ]}
        onPress={() => onToggleCarrinho(produto.id)}
      >
        <Ionicons
          // Ionicons name -- Alterna ícone conforme estado noCarrinho
          name={produto.noCarrinho ? "cart" : "cart-outline"}
          size={23}
          color={produto.noCarrinho ? "#052b37" : "#ffffff"}
        />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 22,
    padding: 12,
    marginBottom: 12,
    backgroundColor: "rgba(255, 159, 28, 0.28)",
    borderWidth: 1,
    borderColor: "rgba(255, 211, 149, 0.48)",
  },
  numeroBox: {
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: "rgba(255, 255, 255, 0.22)",
    alignItems: "center",
    justifyContent: "center",
    marginRight: 10,
  },
  numeroTexto: {
    color: "#fff6e8",
    fontWeight: "800",
  },
  imagem: {
    width: 56,
    height: 56,
    borderRadius: 14,
    marginRight: 12,
    borderWidth: 1,
    borderColor: "rgba(255, 255, 255, 0.5)",
  },
  infoBox: {
    flex: 1,
  },
  nomeProduto: {
    color: "#fff5e5",
    fontSize: 16,
    fontWeight: "700",
    marginBottom: 3,
  },
  statusProduto: {
    color: "#ffe0b2",
    fontSize: 12,
    fontWeight: "600",
  },
  botaoCarrinho: {
    width: 46,
    height: 46,
    borderRadius: 23,
    alignItems: "center",
    justifyContent: "center",
  },
  botaoCarrinhoInativo: {
    backgroundColor: "#ff8f00",
  },
  botaoCarrinhoAtivo: {
    backgroundColor: "#45d9ff",
  },
});
