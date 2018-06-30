import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';

import { withStyles, AppBar, Toolbar, Typography, Button} from 'material-ui';

const styles = {
    flex: {
        flex: 1
    }
};

const NavBar = ({ classes, history }) => {
    return (
        <AppBar position="static" className={classes.root}>
            <Toolbar>
                <Typography variant="title" color="inherit" className={classes.flex}>
                    ToDoList
                </Typography>
                <Button color="inherit" onClick={() => {history.push('/');}}>
                    All ToDos
                </Button>
                <Button color="inherit" onClick={() => {history.push('/todo/new');}}>
                    Add ToDo
                </Button>
            </Toolbar>
        </AppBar>
    );
}

NavBar.propTypes = {
    history: PropTypes.object.isRequired,
    classes: PropTypes.object.isRequired
};

export default withRouter(withStyles(styles)(NavBar));