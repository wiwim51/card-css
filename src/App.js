import profile from './images/prof.jpg'
import github from './images/github.png'

function App() {
  return (
    <>
      <div className="card">
        <div className="content">
          <div className="picture">
            <img src={profile} alt="mon profile"/>
          </div>
          <h1 className="title">LEMMER Jordane</h1>
          <p>Hi, i'm Web Developer ⚔ | #React /#JavaScript /#Node /#MySQL /#Mongodb /#HTML /#CSS /#SASS</p>
          <a href="https://github.com/wiwim51"><img src={github} alt="github"></img></a>
        </div>
      </div>
    </>
  );
}

export default App;
