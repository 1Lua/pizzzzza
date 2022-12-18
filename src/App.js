import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from './elements/nav/nav';
import { Provider } from 'react-redux';
import store from "./redux/store"
import Cart from './elements/cart/cart';
import Main from './elements/mainpage/main';

function App() {
  return <Provider store={store}>
    <Nav/>
    <Main/>
    <Cart/>
  </Provider>
}

export default App;
