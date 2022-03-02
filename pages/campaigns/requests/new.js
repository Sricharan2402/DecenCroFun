import React, { useState } from "react";
import Layout from "../../../components/Layout";
import { black } from "../../../components/extras";
import {
    Typography,
    Button,
    ThemeProvider,
    Container,
    TextField,
    InputAdornment,
} from "@mui/material";
import { Router } from "../../../routes";

const newRequest = ({ address }) => {
    const [receiverWalletID, setReceiverWalletID] = useState();
    const [amount, setAmount] = useState();
    const [description, setDescription] = useState();

    const handleCreate = () => {
        console.log(receiverWalletID);
        console.log(amount);
        console.log(description);
        handleReset();

        Router.pushRoute(`/campaigns/${address}/requests`);
    };

    const handleReset = () => {
        document.getElementById("create-request-form").reset();
        setDescription(null);
        setAmount(null);
        setReceiverWalletID(null);
    };

    return (
        <Layout>
            <Typography
                gutterBottom
                variant="h2"
                sx={{ textAlign: "center", margin: "40px" }}
            >
                New Request Form
            </Typography>
            <Container maxWidth="md" align="center">
                <form id="create-request-form">
                    <TextField
                        id="requestdescription"
                        label="Description"
                        variant="outlined"
                        required
                        multiline
                        rows={4}
                        onChange={(e) => {
                            setDescription(e.target.value);
                        }}
                        sx={{ marginTop: "50px", width: "75%" }}
                    />
                    <TextField
                        id="receiverwallet"
                        label="Receiver Wallet ID"
                        variant="outlined"
                        required
                        onChange={(e) => {
                            setReceiverWalletID(e.target.value);
                        }}
                        sx={{ marginTop: "50px", width: "75%" }}
                    />
                    <br />
                    <TextField
                        id="amount"
                        label="Amount"
                        variant="outlined"
                        required
                        onChange={(e) => {
                            setAmount(e.target.value);
                        }}
                        sx={{ marginTop: "50px", width: "30%" }}
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    Eth
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

newRequest.getInitialProps = async (props) => ({
    address: props.query.address,
});

export default newRequest;
