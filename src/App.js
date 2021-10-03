import { useSelector, useDispatch } from 'react-redux';
// import { bindActionCreators } from 'redux';
// import { actionCreators } from './state/index';
import { depositMoney, withdrawMoney } from './state/action-creators/index';

function App() {

  // access the data in the store
  // this state is the state from th redux store
  const account = useSelector((state) => state.account);
  const dispatch = useDispatch();

  // const { depositMoney, withdrawMoney } = bindActionCreators(actionCreators, dispatch);

  const onClickDeposit = () => {
    dispatch(depositMoney(1000));
  };

  const onClickWithdraw = () => {
    dispatch(withdrawMoney(1000));
  };

  return (
    <div className="App">
      <h1>{account}</h1>
      <button onClick={onClickDeposit}>Deposit</button>
      <button onClick={onClickWithdraw}>Withdraw</button>
    </div>
  );
}

export default App;
