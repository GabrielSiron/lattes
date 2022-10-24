import '../../styles/themes/reset.css';
import './styles.css';
import { React } from "react";
import SelectAction from '../../components/SelectAction/index';
import colors from '../../styles/themes/dark';

function Home() {

  return (
    <div className="App" style={{background: colors.primary_dark}}>
      <h1 style={{color: colors.secondary_text}}>Encontre Quem Você Procura.</h1>
      <div className="search appears-2">
        <input placeholder='Pesquisar Por Pesquisadores' style={{
          background: colors.secondary_light
          }}/>
      </div>
      
      {/* <div> Icons made by <a href="https://www.freepik.com" title="Freepik"> Freepik </a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com'</a></div> */}
      <div className="appears-3">
        <SelectAction />
      </div>
    </div>
  );
}

export default Home;
