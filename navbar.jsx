import React from 'react';
import ReactDOM from 'react-dom';

class navbar extends React.Component{
    render(){
        return(
            <div>
                <section className="End">
                    <h4><i>&copy</i> 2022 By avard </h4>
                </section>
            </div>
        )
    }
}

ReactDOM.render(
    <navbar />,
    document.getElementById('app')
    );