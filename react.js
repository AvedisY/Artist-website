import React from 'react';
import ReactDOM from 'react-dom';

class End extends React.Component{
  render(){
    return( 
      <div className='End'>     
      <h4><i>&copy</i> 2022 By avard </h4>
      </div>
    );
  }
}


ReactDOM.render(
  <End />,
  document.getElementById('App')
)

