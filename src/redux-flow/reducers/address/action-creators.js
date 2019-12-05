import { FETCHING, SUCCESS } from './actions';

const rawURL = 'http://apps.widenet.com.br/busca-cep/api/cep.json?code=';
const urlAllowCors = (url, data) => {
  let allowCors = 'https://cors-anywhere.herokuapp.com/';
  const getUrl = allowCors + url + data;
  return getUrl;
}

export const fetchAddress = (cep) => async (dispatch, getState) => {
  dispatch({ type: FETCHING });

  const getUrl = urlAllowCors(rawURL, cep)
  const response = await fetch(getUrl).then(res => res.json());

  dispatch({
    type: SUCCESS,
    payload: response
  });
};


