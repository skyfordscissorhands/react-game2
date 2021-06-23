import './index.css';
import Header from '../Components/Header';
import Button from '../Components/Button';
import Generator from '../Components/Generator';

function homePage() {

 

  const shoes= ["loewe.jpg", "madewell-sneaker.jpg", "nb2.jpg", "new-balance-57-40.jpeg","nike1.webp" ]

  return (
    <div className="App">
      <Header headerName={"Sneaker Style Quiz"}/>
      <Button onClick={()=>window.location="/"}>Go Back</Button>
      <br></br>
      <Generator items={shoes}/>
    

    </div>
  );
}

export default homePage;
