import { expect } from 'chai';
import deepFreeze from 'deep-freeze';
import address from './index';
import { SUCCESS } from './actions';

it('should action UPDATE_ADDRESS update address', () => {

  const before = deepFreeze({
    address: '',
    city: '',
    code: '',
    district: '',
    state: '',
    status: null,
    isFetching: true
  });

  const action = deepFreeze({
    type: SUCCESS,
    payload: {
      address: 'Rua Otávio Luvizzoto',
      city: 'Sorocaba',
      code: '18074-145',
      district: 'Jardim Altos do Itavuvu',
      state: 'SP',
      status: 1
    }
  });

  const after = deepFreeze({
    address: 'Rua Otávio Luvizzoto',
    city: 'Sorocaba',
    code: '18074-145',
    district: 'Jardim Altos do Itavuvu',
    state: 'SP',
    status: 1,
    isFetching: false
  });

  expect(address(before, action)).to.be.deep.equal(after);

});

