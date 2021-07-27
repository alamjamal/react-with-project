import React from 'react'
import { Route, Switch} from 'react-router-dom'
import About from './About'
import Contact from './Contact'
import Menu from './Menu'
import Error from './Error'

import Name from './Name'

const App = () => {
    return (
        <>
        <Menu />
        
        <Switch>
            <Route exact path='/' component={About} />
            <Route  exact path='/contact' component={Contact} />
            <Route exact  path='/name/:name' component={Name} />

            <Route component={Error} />


        </Switch>
       
        </>

    );
}

export default App
