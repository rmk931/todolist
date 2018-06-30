import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { withStyles } from 'material-ui';

import NavBar from './components/NavBar';
import Todo from './components/Todo';
import TodoList from './components/TodoList';
import TodoCreateForm from './components/TodoCreateForm';
import { styles } from './styles';
import TodoEditForm from './components/TodoEditForm';

class App extends React.Component {
    formatDate = (date) => {
        if (!date) return undefined;

        const newDate = new Date(date);
        const day = newDate.getDate();
        const month = newDate.getMonth();
        const year = newDate.getFullYear();
        const hours = newDate.getHours();
        const minutes = newDate.getMinutes();

        return `${day}.${month < 9 ? `0${month+1}` : month+1}.${year} ${hours}:${minutes < 10 ? '0'+minutes : minutes}`;
    };

    render() {
        return (
            <div className={this.props.classes.root}>
                <NavBar/>
                <Switch>
                    <Route exact path="/" render={(props)=><TodoList {...props} formatDate={this.formatDate}/>}/>
                    <Route exact path="/todo/new" component={TodoCreateForm} />
                    <Route exact path="/todo/edit/:id" component={TodoEditForm} />
                    <Route path="/todo/:id" render={(props)=><Todo {...props} formatDate={this.formatDate}/>}/>          
                </Switch>
            </div>
    );
  }
}

export default withStyles(styles)(App);
