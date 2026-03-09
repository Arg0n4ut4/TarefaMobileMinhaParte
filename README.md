Tecnologia em Análise e Desenvolvimento de Sistemas

Setor de Educação Profissional e Tecnológica - SEPT

Universidade Federal do Paraná - UFPR

---

*DS151 - Desenvolvimento para Dispositivos Móveis*

Prof. Alexander Robert Kutzke

# Atividade Carrinho Simples 

**Objetivo:** Desenvolver um aplicativo móvel em React Native para gerenciamento de itens de supermercado, aplicando os conceitos de componentização, tipagem com TypeScript, passagem de propriedades (props) e gerenciamento de estado imutável.

**Dados Iniciais**
Utilize o array abaixo como o estado inicial da aplicação no arquivo principal (`App.tsx`):

```javascript
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

```

**Requisitos da Implementação**

**1. Componentização e Tipagem (`Produto.tsx`)**

* Crie um arquivo para abrigar o componente `Produto`.
* Defina e exporte uma interface TypeScript que descreva rigorosamente a estrutura dos objetos contidos no array `produtosIniciais`.
* O componente deve receber, via *props*, exatamente duas propriedades: um único objeto contendo os dados do produto e uma função de *callback* que será acionada no evento de clique.

**2. Interface do Item (UI)**

* O componente `Produto` deve renderizar a imagem e o nome do item.
* Inclua um ícone interativo da biblioteca `@expo/vector-icons/Ionicons`. O ícone deve exibir `cart-outline` quando a propriedade `noCarrinho` for `false` e `cart` quando for `true`.

**3. Renderização Principal e Estado (`App.tsx`)**

* Utilize o *hook* `useState` para gerenciar a lista de produtos.
* Renderize o inventário completo na tela utilizando exclusivamente o componente `FlatList`. O `renderItem` deve instanciar o componente `Produto` desenvolvido na etapa 1.

**4. Manipulação de Estado e Imutabilidade**

* Ao acionar o ícone do carrinho no componente filho, a função de *callback* deve ser disparada passando o `id` do produto.
* O componente pai deve interceptar este evento e atualizar o estado da lista, invertendo o valor lógico da propriedade `noCarrinho` do item correspondente.

**5. Painel de Resumo Condicional**

* Adicione ao topo da tela (fora da `FlatList`) um painel de texto estático com o prefixo: "Itens no Carrinho: ".
* Concatene a este texto os nomes apenas dos produtos cujo status `noCarrinho` seja `true`. Os nomes devem ser formatados como uma string contínua, separados por vírgula e espaço (exemplo: "Café em Grãos, Manteiga"). Utilize os métodos `.filter()` e `.map()` ou `.reduce()` para processar o estado antes da renderização.
