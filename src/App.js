import './App.css';
import Acmedian from './Component/Acmedian/Acmedian';
import Color from './Component/colorGenerator/Color';
import LoadMoreProduct from './Component/load-more/LoadMoreProduct';
import Star from './Component/star-rating/Star';

function App() {
  return (
    <div className="App">
      {/* <Acmedian/> */}
      {/* <Color /> */}
      {/* <Star noOfStar={10}/> */}
      <LoadMoreProduct/>

    </div>
  );
}

export default App;
