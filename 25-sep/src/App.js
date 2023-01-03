import './App.css';
import Rating from './Rating';
import ExpandCollapse from './ExpandCollapse';
import RatingWithClick from './RatingWithClick'
import Counter from './Counter'
import ButtonsContainer from './ButtonsContainer';
import PostList from './PostList';
import MyForm from './MyForm';
import ButtonsWithForm from './ButtonsWithForm';
import CatFacts from './CatFacts';
function App() {

  return (
    <div className="App">

      {/* <ButtonsWithForm/> */}

      <CatFacts/>

      {/* <MyForm /> */}

      {/* <PostList/> */}

      {/* <ButtonsContainer /> */}


      {/* should be max 5
      <br />
      <Counter limit={5} />

      <hr />


      should be max 10
      <br />
      <Counter limit='10' />
      <hr />


      should be max 20
      <br />
      <Counter limit='20' />
      <hr /> */}


      {/* <MyButton label='Home' />

      <MyButton label='Home' />
      <MyButton label='Home' />

      <MyButton label='Home' />

      <MyButton label='Home' />
      <MyButton label='Home' />
      <MyButton label='Home' /> */}


    </div>
  );
}

export default App;
