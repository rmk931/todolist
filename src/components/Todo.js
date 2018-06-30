import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { withStyles, Typography, Card, CardContent } from 'material-ui';

import { getTodo } from '../ducks/todo/actions';
import { styles } from '../styles';

class Todo extends React.Component {
    static propTypes = {
        classes: PropTypes.object.isRequired,
        formatDate: PropTypes.func.isRequired,
        todoData: PropTypes.object.isRequired,
        getTodo: PropTypes.func.isRequired
    };

    componentDidMount() {
        this.props.getTodo(this.props.match.params.id);
    }

    render() {
        const { formatDate, todoData, classes } = this.props;
        return (
            <Card className={classes.card}>
                <CardContent>
                    <Typography color="textSecondary" className={classes.title}>
                        {todoData.importance} задача
                    </Typography>
                    <Typography variant="headline" component="h2">
                        {todoData.title}
                    </Typography>
                    {todoData.completeDate ? 
                        <Typography className={classes.pos} color="textSecondary">
                            Выполнено: {formatDate(todoData.completeDate)}
                        </Typography> : (
                        todoData.date ? (
                        new Date(todoData.date) < Date.now() && !todoData.completed ?
                        <Typography className={classes.pos} color="secondary"> 
                            Срок: {formatDate(todoData.date)}
                        </Typography> : 
                        <Typography className={classes.pos} color="textSecondary"> 
                            Срок: {formatDate(todoData.date)}
                        </Typography>) : <br />)
                    }
                    <Typography component="p">
                        {this.props.todoData.description}
                    </Typography>
                </CardContent>
            </Card>
        );
    }
}

const mapStateToProps = (state) => ({
    todoData: state.todos.todo
});

const mapDispatchToProps = {
    getTodo
};

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(Todo));