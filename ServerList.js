import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const ServerList = () => {
  const [servers, setServers] = useState([]);

  useEffect(() => {
    axios.get('/servers')
      .then(response => setServers(response.data))
      .catch(error => console.log(error));
  }, []);

  const deleteServer = (id) => {
    axios.delete(/servers/${id})
      .then(() => setServers(servers.filter(server => server.id !== id)))
      .catch(error => console.log(error));
  };

  return (
    <div>
      <h1>Server List</h1>
      <Link to="/servers/new" className="btn btn-primary mb-3">Add Server</Link>
      <table className="table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Language</th>
            <th>Framework</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {servers.map(server => (<tr key={server.id}>
              <td>{server.id}</td>
              <td>{server.name}</td>
              <td>{server.language}</td>
              <td>{server.framework}</td>
              <td>
                <Link to={/servers/${server.id}} className="btn">View</Link>
                <Link to={/servers/${server.id}/edit} className="btn btn-primary me-2">Edit</Link>
                <button onClick={() => deleteServer(server.id)} className="btn btn-danger">Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ServerList;
