import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
    root: {
        "& .MuiTextField-root": {
            margin: theme.spacing(1),
        },
    },
    paper: {
        padding: theme.spacing(2),

        border: "2px solid #000000",
    },
    form: {
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
    },
    fileInput: {
        width: "95%",
        margin: "20px 0",
    },
    buttonSubmit: {
        marginBottom: 10,
        backgroundColor: "#4caf50",
        "&:hover": {
            backgroundColor: "#ffab00",
            color: "#000000",
            textDecoration: "none",
        },
    },
    buttonClear: {
        marginBottom: 10,
        backgroundColor: "#d50000",
        "&:hover": {
            backgroundColor: "#ffab00",
            color: "#000000",
            textDecoration: "none",
        },
    },
}));
