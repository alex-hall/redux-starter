import React, {Component} from 'react';
import logo from './logo.svg';
import Footer from './components/Footer'
import AddTodo from './containers/AddTodo'
import VisibileTodoList from "./containers/VisibileTodoList";
import './App.css';

class App extends Component {
    render() {
        return (
            <div>
                <AddTodo/>
                <VisibileTodoList/>
                <Footer/>
            </div>
        );
    }
}

export default App;
