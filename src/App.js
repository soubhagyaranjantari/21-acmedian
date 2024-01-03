import './App.css';
import Acmedian from './Component/Acmedian/Acmedian';
import Color from './Component/colorGenerator/Color';
import LoadMoreProduct from './Component/load-more/LoadMoreProduct';
import Star from './Component/star-rating/Star';
import AllRouter from './component2/Router';

function App() {

  return (
    <div className="App">
      <AllRouter/>
      {/* <Acmedian/>
      <Color />
      <Star noOfStar={10}/> */}
      {/* <LoadMoreProduct/> */}

    </div>
  );
}

export default App;
