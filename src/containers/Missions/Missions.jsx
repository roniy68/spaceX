import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import fetchMissions from './missionAPI';
import { joinMission } from './missionSlice';
import styles from './mission.module.scss';

const Missions = () => {
  const { missions } = useSelector((store) => store.mission);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchMissions());
  }, [dispatch]);

  const HandleClick = (id) => {
    dispatch(joinMission(id));
  };

  const displayMissions = missions.length ? (
    <table className={styles.word}>
      <tbody>
        <tr>
          <th>missions</th>
          <th>description</th>
          <th>status</th>
          <th>s/n</th>
        </tr>
        {
          missions.map((mission) => (
            <tr key={mission.id}>
              <td>{mission.mission_name}</td>
              <td>{mission.description}</td>
              <td>{mission.joined ? 'Active member' : 'Not a member'}</td>
              <td>
                <button
                  type="button"
                  className="bookButton"
                  onClick={() => HandleClick(mission.id)}
                >
                  {mission.joined ? 'Leave Mission' : 'Join Mission'}
                </button>
              </td>
            </tr>
          ))
        }
      </tbody>
    </table>
  ) : (<p className={styles.word}>there is no book on the shelf</p>);

  return (
    <>
      {displayMissions}
    </>
  );
};

export default Missions;
