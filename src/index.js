import React from 'react';
import ReactDOM from 'react-dom';

import './styles.css';
import { User } from './components/User';
import { UserSelect } from './components/UserSelect';
import { PhotoList } from './components/PhotoList';
import { AddPhoto } from './components/AddPhoto';

function App() {
  return (
    <div className="App">
      <User>
        <nav className="navbar">
          <h2>PhotoBoard Offline</h2>
          <UserSelect />
        </nav>
        <main className="main">
          <ul className="photo-grid">
            <PhotoList />
            <AddPhoto />
          </ul>
          <button
            className="clear-storage"
            onClick={() => localStorage.clear()}
          >
            Clear Storage
          </button>
        </main>
      </User>
    </div>
  );
}

ReactDOM.render(<App />, document.querySelector('#root'));
