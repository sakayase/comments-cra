import React, {Component} from 'react';
import AdminMode from './AdminMode';
import FormComment from './FormComment';
import ListComment from './ListComment';


class App extends Component {

  render() {

    return (
      <div className="App container">
        <AdminMode/>
        <div className="columns">
          <div className="column">
            <FormComment/>
          </div>
          <div className="column">
            <ListComment/>
          </div>
        </div>
      </div>
    );
  }
}

export default App;

