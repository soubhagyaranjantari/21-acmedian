import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Acmedian from './Component/Acmedian/Acmedian';
import Color from './Component/colorGenerator/Color';
import LoadMoreProduct from './Component/load-more/LoadMoreProduct';
import Star from './Component/star-rating/Star';
import AllRouter from './component2/Router';
import QrCodeGenerator from './Component/qr-code-generator';
import Switch_mode from './Component/dark-mode/Index';
import ScrollIndicator from './Component/custom-scroolbar';
import Modal from './Component/Modal.js/Modal';
import YourComponent from './pagination/component';

function App() {

  const data = [
    { 'a': 'a', b: 'b', fff: 'c1' },
    { 'avc': 'a', b: 'b', eee: 'c2' },
    { 'asd': 'kanhu', b: 'b', ddd: 'c22' },
    { 'sad': 'a', b: 'b', hhh: 'c3' },
  ]
  let name = 'kanhu'
  let pass = "c2"
  let check = data.some((e) => {
    return e.asd === name && e.ddd === pass
  })
  // console.log(check);

  console.log('kanhu');
  return (
    <div className="App">
      {/* <BrowserRouter>
        <AllRouter />
      </BrowserRouter> */}
      {/* <Acmedian/>
      <Color />
      <Star noOfStar={10}/> */}
      {/* <LoadMoreProduct/> */}

      {/* qrCode */}
      {/* <QrCodeGenerator /> */}
      {/* theme change */}
      {/* <Switch_mode/> */}
      {/* <ScrollIndicator url={"https://dummyjson.com/products?limit=100"}/> */}
      
      {/* <Modal/> */}
      <YourComponent/>
    </div>
  );
}

export default App;
