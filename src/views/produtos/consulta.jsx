import React from "react";

import ProdutoService from "../../app/produtoService";

class ConsultaProdutos extends React.Component {
  state = {
    produtos: [],
  };

  constructor() {
    super();
    this.service = new ProdutoService();
  }

  componentDidMount() {
    const produtos = this.service.obterProdutos();
    this.setState({ produtos });
  }

  render() {
    return (
      <div className="card">
        <div className="card-header">Consulta de produtos</div>
        <div className="card-body"></div>
        <table className="table table-hover">
          <thead>
            <tr>
              <th>Nome</th>
              <th>SKU</th>
              <th>Preço</th>
              <th>Fornecedor</th>
              <th>Buttons</th>
            </tr>
          </thead>
          <tbody>
            {this.state.produtos.map((produto, index) => {
              return (
                <tr key={index}>
                  <td>{produto.nome}</td>
                  <td>{produto.sku}</td>
                  <td>{produto.preco}</td>
                  <td>{produto.fornecedor}</td>
                  <td>Buttons</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}
export default ConsultaProdutos;
