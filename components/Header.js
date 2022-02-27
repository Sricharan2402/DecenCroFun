import React from "react";
import { black } from "../components/extras";
import { AppBar, Toolbar, Button, Typography, Link } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";

export default () => {
    return (
        <AppBar
            elevation={0}
            sx={{ backgroundColor: "black", color: "white" }}
            position="sticky"
        >
            <Toolbar>
                <Typography
                    variant="h2"
                    component="anchor"
                    sx={{
                        flexGrow: 1,
                        fontSize: "30px",
                        cursor: "pointer",
                    }}
                >
                    <Link href="/" underline="none" sx={{ color: "white" }}>
                        DecenCroFun
                    </Link>
                </Typography>

                <ThemeProvider theme={black}>
                    <Link href="/campaigns/new">
                        <Button variant="outlined" color="secondary">
                            Create Campaign
                        </Button>
                    </Link>
                </ThemeProvider>
            </Toolbar>
        </AppBar>
    );
};
