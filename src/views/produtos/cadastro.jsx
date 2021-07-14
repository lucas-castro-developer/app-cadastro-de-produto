import React from "react";

import ProdutoService from "../../app/produtoService";

import { withRouter } from "react-router-dom";

const estadoInicial = {
  nome: "",
  sku: "",
  descricao: "",
  preco: 0,
  fornecedor: "",
  sucesso: false,
  errors: [],
  atualizando: false
};

class CadastroProduto extends React.Component {
  state = estadoInicial;

  constructor() {
    super();
    this.service = new ProdutoService();
  }

  onChange = (event) => {
    const valor = event.target.value;
    const nomeDoCampo = event.target.name;
    this.setState({ [nomeDoCampo]: valor });
  };

  onSubmit = (event) => {
    const produto = {
      nome: this.state.nome,
      sku: this.state.sku,
      descricao: this.state.descricao,
      preco: this.state.preco,
      fornecedor: this.state.fornecedor,
    };
    try {
      this.service.salvar(produto);
      this.limpaCampos();
      this.setState({ sucesso: true });
    } catch (erro) {
      const errors = erro.errors;
      this.setState({ errors: errors });
    }
  };

  limpaCampos = () => {
    this.setState(estadoInicial);
  };

  componentDidMount() {
    const sku = this.props.match.params.sku;

    if (sku) {
      const resultado = this.service
        .obterProdutos()
        .filter((produto) => produto.sku === sku);
      if (resultado.length === 1) {
        const produtoEncontrado = resultado[0];
        this.setState({ ...produtoEncontrado, atualizando: true });
      }
    }
  }

  render() {
    return (
      <div className="card">
        <div className="card-header">
          { this.state.atualizando ? 'Atualização ' : 'Cadastro ' } de produto
        </div>
        <div className="card-body">
          {this.state.sucesso ? (
            <div className="alert alert-dismissible alert-success">
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="alert"
              ></button>
              <strong>Muito bem!</strong> Cadastro de produto realizado com
              sucesso!
            </div>
          ) : null}
          {this.state.errors.length > 0
            ? this.state.errors.map((msg) => {
                <div className="alert alert-dismissible alert-danger">
                  <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="alert"
                  ></button>
                  <strong>{msg}</strong>
                </div>;
              })
            : null}
          <div className="row">
            <div className="col-md-6">
              <div className="form-group">
                <label>Nome: *</label>
                <input
                  type="text"
                  name="nome"
                  onChange={this.onChange}
                  value={this.state.nome}
                  className="form-control"
                />
              </div>
            </div>
            <div className="col-md-6">
              <div className="form-group">
                <label>SKU: *</label>
                <input
                  type="text"
                  name="sku"
                  onChange={this.onChange}
                  value={this.state.sku}
                  className="form-control"
                  disabled={this.state.atualizando}
                />
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-md-12">
              <div className="form-control">
                <label>Descrição:</label>
                <textarea
                  name="descricao"
                  onChange={this.onChange}
                  value={this.state.descricao}
                  className="form-control"
                />
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-md-6">
              <div className="form-control">
                <label>Preço:</label>
                <input
                  type="number"
                  name="preco"
                  onChange={this.onChange}
                  value={this.state.preco}
                  className="form-control"
                />
              </div>
            </div>

            <div className="col-md-6">
              <div className="form-control">
                <label>Fornecedor:</label>
                <input
                  type="text"
                  name="fornecedor"
                  onChange={this.onChange}
                  value={this.state.fornecedor}
                  className="form-control"
                />
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-md-1">
              <button onClick={this.onSubmit} className="btn btn-success">
                {this.state.atualizando ? 'Atualizar' : 'Salvar'}
              </button>
            </div>
            <div className="col-md-1">
              <button onClick={this.limpaCampos} className="btn btn-primary">
                Limpar
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(CadastroProduto);
