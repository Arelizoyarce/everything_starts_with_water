import { Button, Drawer, Grid, IconButton } from "@mui/material";
import backgroundImage from "../../assets/bg-drawer.png";
import splashImage from "../../assets/splash_drawer.png";
import Backdrop from "./Backdrop";
import CancelIcon from "@mui/icons-material/Cancel";

function DrawerForm1({ videoUrl, open, handleOpen, updatePointPosition }) {
    return (
        <div style={{ position: "relative" }}>
            {open && <Backdrop />}

            <Drawer
                anchor="right"
                open={open}
                onClose={()=>{handleOpen(); updatePointPosition()}}
                PaperProps={{
                    sx: {
                        width: "70%",
                        position: "absolute",
                        textAlign: "center",
                        zIndex: 3,
                        backgroundImage: `url(${backgroundImage})`,
                        backgroundSize: "100% 100%",
                    },
                }}
                style={{ position: "inherit" }}
            >
                <Grid
                    style={{ paddingTop: "20px" }}
                    container
                    justifyContent="end"
                    alignContent="center"
                    direction="column"
                >
                    <iframe
                        src={videoUrl}
                        width="1024px"
                        height="576px"
                        title="video"
                    ></iframe>
                </Grid>
                <Grid
                    container
                    height="15%"
                    alignItems="center"
                    justifyContent="end"
                >
                    <Button
                        size="large"
                        variant="contained"
                        onClick={()=>{handleOpen(); updatePointPosition()}}
                        style={{
                            marginRight: "5%",
                            backgroundColor: "white",
                            color: "#009FE3",
                            fontWeight: "bold",
                        }}
                    >
                        CLOSE
                    </Button>
                </Grid>
            </Drawer>
            {open && (
                <div
                    style={{
                        position: "absolute",
                        left: "20%",
                        zIndex: 4,
                    }}
                >
                    <img
                        src={splashImage}
                        alt="Imagen"
                        width={300}
                        style={{ marginTop: "80%" }}
                    />
                </div>
            )}
        </div>
    );
}

export default DrawerForm1;
