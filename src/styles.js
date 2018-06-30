export const styles = theme => ({
    root: {
        display: 'flex',
        flexWrap: 'nowrap',
        flexDirection: 'column',
        height: '100%',
        overflowX: 'auto',
        alignItems: 'center'
    },
    rootEditor: {
        marginTop: theme.spacing.unit * 3,
        textAlign: 'center',
        display: 'flex',
        flexWrap: 'nowrap',
        flexDirection: 'column',
        alignItems: 'center',
        width: 500
    },
    fieldLine: {
        margin: '8px 12px 8px 12px',
        width: 250,
    },
    buttonLine: {
        margin: '12px 12px 12px 12px',
    },
    card: {
        marginTop: theme.spacing.unit * 3,
        display: 'flex',
        flexWrap: 'nowrap',
        flexDirection: 'column',
        width: 500
    },
    title: {
        marginBottom: 16,
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
    },
    rootList: {
        marginTop: theme.spacing.unit * 3,
        overflowX: 'auto',
        width: 1100
    },
    red: {
        textColor: 'red',
        color: 'red'
    },
    headCell: {
        fontSize: 14,
        color: 'black',
        width: 200,
        padding: 0
    },
    headBtnCell: {
        width: 120,
        padding: 0
    },
    cell: {
        width: 200,
        padding: 3
    },
    titleList: {
        flex: '0 0 auto',
      },
    spacer: {
        flex: '1 1 100%',
    },
    actions: {
        width: 210
    },
    btn: {
        width: 100,
        margin: 0
    },
    btnCell: {
        width: 120,
        padding: 0
    }
});