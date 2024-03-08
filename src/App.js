import logo from './logo.svg';
import './App.css';
import { MainBlock } from './components';
import { TryContainer } from './components';
import { FormContainer } from './components';
import { FormButton } from './components';
import { Form } from './components';
import { errorMessage } from './components';

function App() {
  return (
    <div className="App">
      <div className='grid-wrapper'>
        <div className='grid'>
          <div id='left-block'>
            <MainBlock />
          </div>
          <div id='right-block'>
            <TryContainer />
            <div>
              <Form />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
