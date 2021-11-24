import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
    media: {
        height: 0,

        paddingTop: "100%",
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        backgroundBlendMode: "darken",
        objectFit: "cover",
    },
    border: {
        border: "solid",
    },
    card: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        borderRadius: "5px",
        height: "100%",
        width: "100%",
        position: "relative",
        backgroundColor: "#d50000",
    },
    overlay: {
        position: "absolute",
        top: "10px",
        left: "1px",
        color: "#ffffff",
    },
    overlayName: {
        position: "absolute",
        top: "10px",
        left: "10px",
        color: "#ffffff",
    },
    overlay2: {
        position: "absolute",
        top: "10px",
        right: "1px",
        color: "#d50000",
    },
    grid: {
        display: "flex",
    },
    details: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        margin: "20px",
        color: "#ffffff",
    },
    title: {
        padding: "10px 20px",
        color: "#ffffff",
    },
    cardActions: {
        padding: "0 16px 8px 16px",
        display: "flex",
        justifyContent: "space-between",
    },
    rating: {
        position: "absolute",
        zIndex: theme.zIndex.drawer - 1,
        opacity: 0.5,
        flexWrap: "no-wrap",
    },
}));
