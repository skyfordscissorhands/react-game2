import './index.css';
import Header from '../Components/Header';
import Button from '../Components/Button';

function homePage() {

 

  

  return (
    <div className="App">
      <Header headerName={"Sneaker Style Quiz"}/>
      <p className= "title">question</p>
    <input className="textbox" type= "text"></input>
    <br></br>
    <p className= "title">question</p>
    <input className="textbox" type= "text"></input>
    <br></br>
    <p className= "title">question</p>
    <input className="textbox" type= "text"></input>
    <br></br>
    <Button onClick={()=>window.location="/generator"}>Submit</Button>
    </div>
  );
}

export default homePage;
