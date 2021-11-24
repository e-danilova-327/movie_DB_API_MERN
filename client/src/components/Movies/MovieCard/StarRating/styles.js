import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
    ratingCard: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
        borderRadius: "5px",
        paddingTop: "10px",
        marginTop: "10px",
    },
    ratingButton: {
        color: "#ffffff",
        fontWeight: "bold",
        backgroundColor: "#ffab00",
        borderRadius: "5px",
        marginTop: "10px",
        "&:hover": {
            backgroundColor: "#d50000",
            color: "#ffffff",
            textDecoration: "none",
        },
    },
}));
