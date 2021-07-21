import React, {Component} from 'react';
import css from './country-item.module.css';


export default class CountryItem extends Component{
    render(){
        const{id,flag,name}=this.props.item;
        return(
            <div  className={css.Tela} id={id}>
            <img  className={css.Bandeira} src={flag} alt={name}/>
           <h4 className={css.Texto}> {name}</h4>
            </div>

        );

    }
}