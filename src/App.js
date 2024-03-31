import { zoomImg } from "./utils/zoom";


const App = () => (
    <div className="App">
      <figure className="zoom" onMouseMoveCapture={zoomImg} style={{"backgroundImage": "url(https://i.pinimg.com/originals/2b/de/de/2bdede0647e3cdf75b44ea33723201d9.jpg)" }}>
        <img src="https://i.pinimg.com/originals/2b/de/de/2bdede0647e3cdf75b44ea33723201d9.jpg" alt='zoom' width='100%'/>
      </figure>
    </div>
  );


export default App;
