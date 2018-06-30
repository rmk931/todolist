import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { withStyles, Typography, Table, TableCell, Checkbox, TableHead, 
    TableRow, Paper, TableBody, Button, Toolbar, InputLabel, Select, FormControl  } from 'material-ui';

import { deleteTodo, completeTodo, changeTodoFilter } from '../ducks/todo/actions';
import { getTodoList } from '../ducks/todo/selectors';
import { styles } from '../styles';


class TodoList extends React.Component {
    static propTypes = {
        classes: PropTypes.object.isRequired,
        deleteTodo: PropTypes.func.isRequired,
        completeTodo: PropTypes.func.isRequired,
        changeTodoFilter: PropTypes.func.isRequired,
        history: PropTypes.object.isRequired,
        todos: PropTypes.array.isRequired
    };

    constructor(props) {
        super(props);

        this.state = {}
    }

    handleChange = event => {
        this.setState({[event.target.name]: event.target.value });
        this.props.changeTodoFilter(event.target.value);
    };

    toTodo = (id) => {
        this.props.history.push(`/todo/${id}`);
    }

    toEditTodo = (id) => {
        this.props.history.push(`/todo/edit/${id}`);
    }

    deleteTodo = (id) => {
        this.props.deleteTodo(id);
    }

    completeTodo = (id) => {
        this.props.completeTodo(id);
    }

    render() {
        const { classes } = this.props;
        console.log(this.props.filter);
        return (
            <Paper className={classes.rootList}>
                <Toolbar>
                    <div className={classes.titleList}>
                        <Typography onClick={() => this.changeFilter()} variant="title" id="tableTitle">
                            Задачи
                        </Typography>
                    </div>
                    <div className={classes.spacer}/>
                    <div className={classes.actions}>
                    <FormControl>
                        <InputLabel htmlFor="importance-native-simple">Задачи</InputLabel>
                        <Select
                            native
                            value={this.state.filter}
                            name="filter"
                            onChange={this.handleChange}
                            onClose={() => this.changeFilter()}
                            
                            inputProps={{
                                name: 'filter',
                                id: 'importance-native-simple'
                            }}
                        >
                            <option value={'Все'}>Все</option>
                            <option value={'Обычная'}>Обычные</option>
                            <option value={'Важная'}>Важные</option>
                            <option value={'Очень важная'}>Очень важные</option>
                        </Select>
                    </FormControl>
                    </div>
                </Toolbar>
                <Table className={classes.table}>
                    <TableHead>
                        <TableRow>
                            <TableCell className={classes.headBtnCell}></TableCell>
                            <TableCell className={classes.headCell}>Задача</TableCell>
                            <TableCell className={classes.headCell}>Срок</TableCell>
                            <TableCell className={classes.headCell}>Важность</TableCell>
                            <TableCell></TableCell>
                            <TableCell></TableCell>
                            <TableCell></TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {this.props.todos.map((todo) => {
                            return (
                                <TableRow key={todo.id}>
                                    <TableCell  className={classes.btnCell}><Checkbox defaultChecked={todo.completed} onClick={() => this.completeTodo(todo.id)}/></TableCell>
                                    <TableCell className={classes.cell}>{todo.title}</TableCell>
                                    {new Date(todo.date) < Date.now() && !todo.completed ? 
                                        <TableCell className={classes.cell}><span className={classes.red}>{this.props.formatDate(todo.date)}</span></TableCell> :
                                        <TableCell className={classes.cell}>{this.props.formatDate(todo.date)}</TableCell>}
                                    <TableCell className={classes.cell}>{todo.importance}</TableCell>
                                    <TableCell className={classes.btnCell}>
                                        <Button
                                            variant="raised"
                                            color="primary"
                                            onClick={() => this.toTodo(todo.id)}
                                            size="small"
                                            className={classes.btn}>
                                            Подробнее
                                        </Button>
                                    </TableCell>
                                    <TableCell className={classes.btnCell}>
                                        {todo.completed ?
                                        <Button
                                            variant="raised"
                                            color="primary"
                                            onClick={() => this.toEditTodo(todo.id)}
                                            size="small"
                                            disabled
                                            className={classes.btn}>
                                            Изменить
                                        </Button> :
                                        <Button
                                            variant="raised"
                                            color="primary"
                                            onClick={() => this.toEditTodo(todo.id)}
                                            size="small"
                                            className={classes.btn}>
                                            Изменить
                                        </Button>}
                                    </TableCell>
                                    <TableCell className={classes.btnCell}>
                                        <Button
                                            variant="raised"
                                            color="secondary"
                                            onClick={() => this.deleteTodo(todo.id)}
                                            size="small"
                                            className={classes.btn}>
                                            Удалить
                                        </Button>
                                    </TableCell>
                                </TableRow>
                            );
                        })}
                    </TableBody>
                </Table>
            
            </Paper>
        );
    }
}

const mapStateToProps = state => ({
    todos: getTodoList(state)
});

const mapDispatchToProps = {
    deleteTodo,
    completeTodo,
    changeTodoFilter
};

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(TodoList));