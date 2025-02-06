import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchPersonById, clearData } from '../store/actions/swapiActions';

const DataList = () => {
  const dispatch = useDispatch();
  const { loading, data, error } = useSelector(state => state);
  const [personId, setPersonId] = useState('');

  const handleFetchPerson = () => {
    if (personId) {
      dispatch(fetchPersonById(personId));
    }
  };

  return (
    <div>
      <div>
        <input
          type="text"
          placeholder="Enter Person ID"
          value={personId}
          onChange={(e) => setPersonId(e.target.value)}
        />
        <button onClick={handleFetchPerson}>Fetch Person by ID</button>
      </div>
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      <pre>
                {JSON.stringify(data, null, 2)}
            </pre>
    </div>
  );
};

export default DataList;