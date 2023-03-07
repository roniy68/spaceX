import { useSelector, useDispatch } from 'react-redux';
import { reserveRocket } from './rocketSlice';
import './Home.css';

const Home = () => {
  const { rockets } = useSelector((store) => store.rocket);
  const dispatch = useDispatch();
  const displayRockets = rockets.length ? (
    <ul>
      {
      rockets.map((rocket) => (
        <li key={rocket.id}>
          <div>
            <img src={rocket.image} height="60px" alt="logo" />
          </div>
          <div>
            <h2>{rocket.title}</h2>
            <p>
              {rocket.description}
            </p>
            <button type="button" onClick={() => dispatch(reserveRocket(rocket.id))}>Reserve Rocket</button>
          </div>
        </li>
      ))
    }
    </ul>
  ) : (<p>there is no rocket on the list</p>);

  return (
    <div>
      {displayRockets}
    </div>
  );
};

export default Home;
