import './App.css';
import TextField from '@mui/material/TextField'
import { React } from "react";
import CardAction from './components/CardAction'

function App() {

  return (
    <div className="App">
      <h1 className='appears-1'>Encontre Quem Você Procura.</h1>
      <div className="search appears-2">
        <TextField
          id="outlined-basic"
          fullWidth
          label="Pesquisar por doutores, estudantes..."
          InputLabelProps={{
            style: {
              textOverflow: 'ellipsis',
              fontSize: '18px',
              whiteSpace: 'nowrap',
              overflow: 'hidden',
              width: '100%',
              color: 'white'
            } }} 
        />
      </div>
      <div className="appears-3">
        <CardAction />
      </div>
    </div>
  );
}

export default App;
