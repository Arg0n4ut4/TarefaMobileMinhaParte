import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";

// Interface criada para tipar corretamente os produtos
export interface ProdutoType {
  id: number;
  nome: string;
  imagem: string;
  noCarrinho: boolean;
}

// Props do componente: recebe um produto e uma função callback
interface Props {
  produto: ProdutoType;
  onToggleCarrinho: (id: number) => void;
}

export default function Produto({ produto, onToggleCarrinho }: Props) {
  return (
    <View>
      <Image source={{ uri: produto.imagem }} style={{ width: 50, height: 50 }} />
      <Text>{produto.nome}</Text>

      {/* Ao clicar, chama a função do componente pai passando o id */}
      <TouchableOpacity onPress={() => onToggleCarrinho(produto.id)}>
        <Ionicons
          // Alterna o ícone dependendo do estado do produto
          name={produto.noCarrinho ? "cart" : "cart-outline"}
          size={28}
          color="black"
        />
      </TouchableOpacity>
    </View>
  );
}