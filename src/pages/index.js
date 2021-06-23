import './index.css';
import Header from '../Components/Header';
import Button from '../Components/Button';

function homePage() {

 

  

  return (
    <div className="App">
      <Header headerName={"Sneaker Style Quiz"}/>
    <Button onClick= {()=>window.location="/quiz"}>Take the quiz</Button>

    </div>
  );
}

export default homePage;
