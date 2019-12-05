import React from 'react';
import './style.css';

const SearchCep = ({ 
  address,
  city,
  code,
  district,
  state,
  status,
  isFetching,
  handleSubmit
}) => (
  <article className="article-search">
    <form className="form-search" onSubmit={ handleSubmit }>
      <input className="inpt-cep" type="text"  name="cep"/>
      <button type="submit" className="btn-search-cep" disabled={ isFetching }>
      { isFetching ? 'Buscando ...' : 'Buscar Endereço' }
      </button>
    </form>

  { status === 0 && <div>CEP não encontrado</div> }
  { status === 1 && (
    <table className="tbl-results-cep">
      <thead>
        <tr>
          <td>CEP</td>
          <td>Endereço</td>
          <td>Bairro</td>
          <td>Cidade</td>
          <td>Estado</td>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>{ code }</td>
          <td>{ address }</td>
          <td>{ district }</td>
          <td>{ city }</td>
          <td>{ state }</td>
        </tr>
      </tbody>
    </table>
  )}

  </article>
);

export default SearchCep;