import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { withStyles, Typography, TextField, FormControl, InputLabel, Select, Button, Paper } from 'material-ui';

import { editTodo, getTodo } from '../ducks/todo/actions';
import { styles } from '../styles';

class TodoEditForm extends React.Component {
    static propTypes = {
        classes: PropTypes.object.isRequired,
        getTodo: PropTypes.func.isRequired,
        editTodo: PropTypes.func.isRequired,
        todoData: PropTypes.object.isRequired,
        history: PropTypes.object.isRequired
    };

    constructor(props) {
        super(props);
        this.state = {
            title: '',
            description: '',
            importance: ''
        };
    }

    componentWillMount() {
        this.props.getTodo(this.props.match.params.id);
        this.setState({
            title: this.props.todoData.title,
            description: this.props.todoData.description,
            date: this.props.todoData.date,
            importance: this.props.todoData.importance
        });
    }

    componentWillReceiveProps(newProps) {
        console.log(newProps);
        this.setState({
            title: newProps.todoData.title,
            description: newProps.todoData.description,
            date: newProps.todoData.date,
            importance: newProps.todoData.importance
        });
    }

    handleChange = (event) => {
        this.setState({ [event.target.name]: event.target.value });
    };

    handleSubmit = () => {
        this.props.editTodo({
            id: this.props.todoData.id,
            title: this.state.title,
            description: this.state.description,
            date: this.state.date === undefined ? '' : this.state.date,
            importance: this.state.importance
        });
        this.props.history.push('/');
    };

    render() {
        const { classes } = this.props;
        return (
            <Paper className={classes.rootEditor}>
                <Typography variant="headline" component="h2">
                    Редактирование
                </Typography>
                    <form onSubmit={this.handleSubmit}>
                    <div>
                        <TextField
                            className={classes.fieldLine}
                            onChange={this.handleChange}
                            required
                            type="textarea"
                            label="Заголовок"
                            name="title"
                            value={this.state.title}
                            margin="dense"
                        />
                    </div>

                    <div>
                        <TextField
                            className={classes.fieldLine}
                            onChange={this.handleChange}
                            id="datetime-local"
                            label="Выберите дату и время"
                            type="datetime-local"
                            name="date"
                            value={this.state.date}
                            InputLabelProps={{ shrink: true }}
                            margin="dense"
                        />
                    </div>

                    <div>
                        <TextField
                            className={classes.fieldLine}
                            onChange={this.handleChange}
                            required
                            label="Описание"
                            name="description"
                            multiline
                            rows="4"
                            value={this.state.description}
                            margin="dense"
                        />
                    </div>

                    <FormControl className={classes.fieldLine}>
                        <InputLabel htmlFor="importance-native-simple">Важность</InputLabel>
                        <Select
                            native
                            value={this.state.importance}
                            name="importance"
                            onChange={this.handleChange}
                            inputProps={{
                                name: 'importance',
                            }}
                        >
                            <option value={'Обычная'}>Обычная</option>
                            <option value={'Важная'}>Важная</option>
                            <option value={'Очень важная'}>Очень важная</option>
                        </Select>
                    </FormControl>

                    <div className={classes.buttonLine}>
                        <Button
                            variant="raised"
                            color="primary"
                            aria-label="send"
                            type="submit"
                        >
                            Изменить
                        </Button>
                    </div>
                    </form>
            </Paper>
        );
    }
}

const mapStateToProps = (state) => ({
    todoData: state.todos.todo
});

const mapDispatchToProps = {
    getTodo,
    editTodo
};

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(TodoEditForm));