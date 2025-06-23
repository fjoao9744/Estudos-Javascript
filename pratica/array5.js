const produtos = [
  { id: 1, nome: "Camiseta Branca", preco: 49.90, quantidade: 30 },
  { id: 2, nome: "Notebook Dell Inspiron", preco: 3899.99, quantidade: 5 },
  { id: 3, nome: "Tênis Esportivo", preco: 199.90, quantidade: 12 },
  { id: 4, nome: "Fone de Ouvido Bluetooth", preco: 129.99, quantidade: 0 },
  { id: 5, nome: "Caneca Personalizada", preco: 24.90, quantidade: 20 },
  { id: 6, nome: "Mouse Sem Fio", preco: 59.90, quantidade: 18 },
  { id: 7, nome: "Teclado Mecânico", preco: 349.90, quantidade: 7 },
  { id: 8, nome: "Monitor 24'' Full HD", preco: 899.99, quantidade: 10 },
  { id: 9, nome: "Carregador USB-C", preco: 39.90, quantidade: 25 },
  { id: 10, nome: "Capa de Celular", preco: 19.90, quantidade: 50 },
  { id: 11, nome: "Livro 'JavaScript Essencial'", preco: 69.90, quantidade: 15 },
  { id: 12, nome: "Mochila Antifurto", preco: 179.90, quantidade: 8 },
  { id: 13, nome: "Smartwatch X1", preco: 299.90, quantidade: 4 },
  { id: 14, nome: "Óculos de Sol", preco: 89.90, quantidade: 22 },
  { id: 15, nome: "HD Externo 1TB", preco: 449.90, quantidade: 6 },
  { id: 16, nome: "Luminária LED USB", preco: 34.90, quantidade: 40 },
  { id: 17, nome: "Agenda 2025", preco: 27.90, quantidade: 14 },
  { id: 18, nome: "Garrafa Térmica", preco: 79.90, quantidade: 9 },
  { id: 19, nome: "Travesseiro Ortopédico", preco: 109.90, quantidade: 11 },
  { id: 20, nome: "Cabo HDMI 2m", preco: 29.90, quantidade: 35 }
];

produtos.map(function(event) {
    console.log(`${event.nome} Preço total: ${parseFloat(event.preco * event.quantidade).toFixed(2)} (${event.preco} x ${event.quantidade})`)
})
