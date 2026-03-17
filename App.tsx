import React, { useState } from "react";
import { View, Text, FlatList } from "react-native";
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
    imagem: "https://images.unsplash.com/photo-1598373182133-52452f7691ef?w=200",
    noCarrinho: false,
  },
  {
    id: 4,
    nome: "Ovos (Dúzia)",
    imagem: "https://images.unsplash.com/photo-1587486913049-53fc88980cfc?w=200",
    noCarrinho: false,
  },
  {
    id: 5,
    nome: "Manteiga",
    imagem: "https://images.unsplash.com/photo-1588195538326-c5b1e9f80a1b?w=200",
    noCarrinho: false,
  }
];

export default function App() {

  // Estado que armazena a lista de produtos
  const [produtos, setProdutos] = useState<ProdutoType[]>(produtosIniciais);

  // Função que alterna o estado noCarrinho de um produto específico
  function toggleCarrinho(id: number) {
    const novaLista = produtos.map((produto) =>
      produto.id === id
        ? { ...produto, noCarrinho: !produto.noCarrinho } // cria novo objeto invertendo o valor
        : produto
    );

    setProdutos(novaLista);
  }

  // Gera o texto do painel com os itens adicionados ao carrinho
  const itensCarrinho = produtos
    .filter((p) => p.noCarrinho) // filtra apenas os que estão no carrinho
    .map((p) => p.nome) // pega os nomes
    .join(", "); // transforma em string separada por vírgula

  return (
    <View>
      {/* Painel de resumo */}
      <Text>Itens no Carrinho: {itensCarrinho || "Nenhum"}</Text>

      <FlatList
        data={produtos}
        keyExtractor={(item) => item.id.toString()}

        // Renderiza cada item usando o componente Produto
        renderItem={({ item }) => (
          <Produto produto={item} onToggleCarrinho={toggleCarrinho} />
        )}
      />
    </View>
  );
}