import React from "react";

class ConsultaProdutos extends React.Component {
  state = {
    produtos: [],
  };
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
            {this.state.produtos.map((produto) => {
              return (
                <tr>
                  <td>Nome</td>
                  <td>SKU</td>
                  <td>Preço</td>
                  <td>Fornecedor</td>
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
