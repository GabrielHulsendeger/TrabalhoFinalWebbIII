import React,{Component} from "react";
//linhas 3 e 5 referem-se a aprte de popular a tela com dados
import CountryList from './components/Countries/CpuntryList';

import css from './app.module.css';

import { getTotalPopulation} from './helpers/reduce-helpers';
import { formatNumber} from './helpers/format-helpers';


export default class App extends Component{
constructor(){
  super();
  
  this.state = {
allCountries:[],
currentCountries: [],
filter: '',
countryCount: 0,
totalPopulation: 0,
formattedPopulation: '0',
  };
}

async componentDidMount(){
  const res = await fetch('https://rescountries.eu/rest/v2/all');
  const json = await res.json();

  const countries =json.map((item)=> {
    const ( name, flag, numericCode, population, area)=item;

    return{
      id: numericCode,
      nameFilter: name.tolowerCase() ,
      name,  
      flag,
      population,
      area,
    };
    });

    const totalPopulation=getTotalPopulation(countries);

    this.setState({
      allCountries: countries,
      countries,
      countryCount: countries.lenght,
      totalPopulation,
      formattedPopulation: formatNumber(totalPopulation),
    });
  }

  handleFilter = (event)=>{
    const filterText = event.target.value;// pega o valor digitado
    const filterTestLowerCase = filterText.tolowerCase();// transforma para letra minuscula

    this.setState({filter: filterText});

    let {countries, allCountries}=this.state;
    countries= allCountries.filter((country)=>{
      return country.nameFilter.includes(filterTextLowerCase);  

    });
    const totalPopulation=getTotalPopulation(countries);

    this.setState({
      countries,
      countryCount: countries.lenght,
      totalPopulation,
      formattedPopulation: formatNumber(totalPopulation),
    });
  };
  render(){
    const{countries, filter, countryCount, formattedPopulation}=this.state;

    return (
      <div className={css.mainContainer}>
        <div className={css.flexRow}>

          <div className="input-field">
            <input
            placeholder="filtro"
            type="text"
            value={filter}
            onChange={this.handleFilter}
            />
          </div>

            <div className={css.LefRightSpace}>
              Quantidade de países: <strong>{countryCount}</strong>
            </div>
          
            <div className={css.LefRightSpace}>
              População total: <strong>{formattedPopulation}</strong>
            </div>
          </div>
              <br/>
              <div> 
                <CountryList data={countries}/>
              </div>  
        </div>
    );
  }
  }