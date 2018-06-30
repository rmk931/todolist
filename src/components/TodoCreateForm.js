import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { v4 } from 'node-uuid';

import { withStyles, Typography, TextField, FormControl, InputLabel, Select, Button, Paper } from 'material-ui';

import { createTodo } from '../ducks/todo/actions';
import { styles } from '../styles';

class TodoCreateForm extends React.Component {
    static propTypes = {
        classes: PropTypes.object.isRequired,
        createTodo: PropTypes.func.isRequired,
        history: PropTypes.object.isRequired
    };

    constructor(props) {
        super(props);

        this.state = {
            importance: 'Обычная'
        };
    }

    handleChange = event => {
        this.setState({ [event.target.name]: event.target.value });
    };

    handleSubmit = () => {
        this.props.createTodo({
            id: v4(),
            title: this.state.title,
            description: this.state.description,
            date: this.state.date === undefined ? '' : this.state.date,
            importance: this.state.importance,
            completed: false
        });
        this.props.history.push('/');
    };

    render() {
        const { classes } = this.props;
        return (
            <Paper className={classes.rootEditor}>
                <Typography variant="headline" component="h2">
                    Новая задача
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
                            defaultValue={this.state.title}
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
                            defaultValue={this.state.date}
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
                            Создать
                        </Button>
                    </div>
                    </form>
            </Paper>
        );
    }
}

const mapDispatchToProps = {
    createTodo
};
 
export default connect(null, mapDispatchToProps)(withStyles(styles)(TodoCreateForm));