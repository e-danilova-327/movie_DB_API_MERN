import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
    appBar: {
        borderRadius: 5,
        margin: "20px 0",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "10px 30px",
        backgroundColor: "#000000",
        width: "100%",
    },
    heading: {
        color: "#ffffff",
        textDecoration: "none",
    },
    brandContainer: {
        display: "flex",
        alignItems: "center",
    },
    button: {
        backgroundColor: "#d50000",
        //fontWeight: "bold",
        color: "#ffffff",
        textDecoration: "none",
        margin: "0 10px",
        "&:hover": {
            backgroundColor: "#ffab00",
            color: "#000000",
            textDecoration: "none",
        },
    },
    icon: {
        color: "#ffffff",
        //backgroundColor: "#d50000",
        borderRadius: 5,
    },
    tooltip: {
        backgroundColor: "#d50000",
        borderRadius: 5,
    },
    red: {
        //color: theme.palette.getContrastText(amber[A700]),
        backgroundColor: "#d50000",
        color: "#ffffff",
    },
    userName: {
        display: "flex",
        alignItems: "center",
    },
    profile: {
        display: "flex",
        justifyContent: "space-between",
        width: "400px",
    },
    toolbar: {
        display: "flex",
        justifyContent: "flex-end",
        width: "400px",
    },
}));
