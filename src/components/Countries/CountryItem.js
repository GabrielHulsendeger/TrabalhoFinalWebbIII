import React, {Component} from 'react';
import css from './country-item.module.css';


export default class CountryItem extends Component{
    render(){
        const{id,flag,name}=this.props.item;
        return(
            <div  className={css.Telas} id={id}>



            <div  >
            <img  className={css.Bandeira} src={flag} alt={name}/>
            



            <div  ></div>
           <h4 className={css.Texto}> {name}</h4>
           </div>
            </div>

        );

    }
}