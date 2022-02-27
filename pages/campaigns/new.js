import React, { useState } from "react";
import Layout from "../../components/Layout";
import { black } from "../../components/extras";
import {
    TextField,
    Typography,
    Container,
    Button,
    InputAdornment,
    FormControl,
    OutlinedInput,
} from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import { Router } from "../../routes";

export default () => {
    const [campaginName, setCampaignName] = useState();
    const [minContribution, setMinContribution] = useState();

    const handleCreate = () => {
        console.log(campaginName);
        console.log(minContribution);
        handleReset();

        Router.pushRoute("/");
    };

    const handleReset = () => {
        document.getElementById("create-campaign-form").reset();
        setCampaignName(null);
        setMinContribution(null);
    };

    return (
        <Layout>
            <Typography
                gutterBottom
                variant="h2"
                sx={{ textAlign: "center", margin: "40px" }}
            >
                New campaign
            </Typography>

            <Container maxWidth="md" align="center">
                <form id="create-campaign-form">
                    <TextField
                        id="campaignname"
                        label="Campaign Name"
                        variant="outlined"
                        required
                        onChange={(e) => {
                            setCampaignName(e.target.value);
                        }}
                        sx={{ marginTop: "50px", width: "75%" }}
                    />
                    <br />
                    <TextField
                        id="mincont"
                        label="Minimum Contribution"
                        variant="outlined"
                        required
                        onChange={(e) => {
                            setMinContribution(e.target.value);
                        }}
                        sx={{ marginTop: "50px", width: "30%" }}
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    wei
                                </InputAdornment>
                            ),
                        }}
                    />

                    <br />
                </form>
                <ThemeProvider theme={black}>
                    <Button
                        variant="contained"
                        sx={{
                            marginTop: "50px",
                            width: "150px",
                            marginRight: "20px",
                        }}
                        onClick={handleCreate}
                    >
                        Create
                    </Button>

                    <Button
                        variant="outlined"
                        sx={{
                            marginTop: "50px",
                            width: "150px",
                            marginLeft: "20px",
                        }}
                        onClick={handleReset}
                    >
                        Reset
                    </Button>
                </ThemeProvider>
            </Container>
        </Layout>
    );
};
