import React, {Component} from 'react';

import css from './country-list.module.css';
import CountryItem from './CountryItem';
export default class CountryList extends Component{

    render() {
        const {data}=this.props;
        if(!data){
            return <h4>Carregando...</h4>
        }
        if(data.lenght===0){
            return <h4>Nenhum pais encontrado</h4>
        }

        return (
            <div >
                
                <h2 className="title">Países</h2>

                <ul  >
                    {data.map((item)=>{
                        const {id}=item;
                        return (
                            <div className={css.TelaBandeira} >
                            <li  key={id} >
                                <CountryItem item={item}/>
                                </li>
                                </div>
                        );
                    })}
                    </ul>
                    </div>

        );
    }
}