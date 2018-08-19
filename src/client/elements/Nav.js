import React from 'react';
//Below the parent's component state is changed via redux action. 
import store from '../redux/store';
import {changeLayout} from '../redux/actions';


export function Nav(props){
  return (
    <nav>
    <h1>Nav</h1>
    <button onClick={()=>{store.dispatch(changeLayout()); console.log(store.getState().changeLayout.layout)}} >
    Change Layout with Redux State
    </button>
    <div>
      <h1>The current layout is : </h1>
      <p style={{color: "gray"}}>{props.template}</p>
    </div>

    </nav>
  )
}
