// import logo from './logo.svg';
import './App.css';
import Products from './Product';


function formatName(user) {
  return user.firstName + " " + user.lastName;
}

function App() {

  const user = {
    firstName: "Greg",
    lastName: 'Lim',
    imageUrl: 'https://picsum.photos/200/300'
  }
  return (
    <div className="App">
      Hello, {formatName(user)}
      <br />
      <img src={user.imageUrl}></img>

      <Products />
    </div>
  );
}

export default App;
