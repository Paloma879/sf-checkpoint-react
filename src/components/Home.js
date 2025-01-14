import "./home.css"
import {Link} from 'react-router-dom'

const Home = () => {
    return (
      <div className="home-cont">
        <h1>Bienvenid@s al Checkpoint 2</h1>
        <p>
            Somos un grupo de Tuki Skillers de la SkillFactory de Avalith
        </p>
        <div className="buttons">
          <Link to='/form' className="button-link"></Link>
          <Link to='/users' className="button-link"></Link>
          <Link to='/rym' className="button-link"></Link>
      </div>
      </div>
    );
  }
  
  export default Home;
  