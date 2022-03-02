import React from "react";
import Layout from "../../../components/Layout";
import { black } from "../../../components/extras";
import {
    Grid,
    Card,
    CardContent,
    Typography,
    Button,
    ThemeProvider,
} from "@mui/material";
import { Router } from "../../../routes";

const RequestCard = ({
    ID,
    Approvers,
    totalContributors,
    Description,
    ReceiverWalletID,
    Amount,
}) => {
    return (
        <Card variant="outlined">
            <CardContent>
                <Typography
                    variant="h4"
                    sx={{
                        fontSize: "20px",
                        float: "right",
                    }}
                >
                    {`Approved: ${Approvers}/${totalContributors}`}
                </Typography>
                <Typography variant="h4" sx={{ fontSize: 25 }} gutterBottom>
                    {`Request ID: ${ID}`}
                </Typography>

                <Typography
                    gutterBottom
                    variant="h2"
                    component="div"
                    sx={{ fontSize: "24px", marginTop: "40px" }}
                >
                    {`${Description}`}
                </Typography>
                <Typography
                    gutterBottom
                    variant="h5"
                    component="div"
                    sx={{
                        fontSize: "40px",
                        float: "right",
                        marginLeft: "50px",
                    }}
                >
                    {`${Amount} Eth`}
                </Typography>
                <Typography
                    gutterBottom
                    component="div"
                    color="text.secondary"
                    sx={{
                        fontSize: "25px",
                        marginTop: "20px",
                    }}
                >
                    {`Receiver Wallet ID: ${ReceiverWalletID}`}
                </Typography>
                <ThemeProvider theme={black}>
                    <Button
                        variant="contained"
                        elevation={0}
                        sx={{
                            marginTop: "20px",
                            width: "25%",
                            height: "55px",
                        }}
                    >
                        Approve
                    </Button>
                </ThemeProvider>
                <ThemeProvider theme={black}>
                    <Button
                        variant="outlined"
                        elevation={0}
                        sx={{
                            marginTop: "20px",
                            width: "25%",
                            height: "55px",
                            marginLeft: "20px",
                        }}
                    >
                        Finalize
                    </Button>
                </ThemeProvider>
            </CardContent>
        </Card>
    );
};

const requestValues = [
    {
        ID: "1",
        Approvers: "10",
        totalContributors: "35",
        Description: "Bill for 2 EC2 instances for the month of Feb.",
        ReceiverWalletID: "0xSNONS2ASIOS",
        Amount: "0.002",
    },
    {
        ID: "2",
        Approvers: "8",
        totalContributors: "35",
        Description: "Bill for 2 ECS instances for the month of Feb.",
        ReceiverWalletID: "0xSNONS2ASIOS",
        Amount: "0.003",
    },
];

const Requests = ({ address }) => {
    const renderDetails = () => {
        return Array.from(requestValues).map((_, index) => (
            <Grid item xs={12} lg={6}>
                <RequestCard
                    ID={requestValues[index].ID}
                    Approvers={requestValues[index].Approvers}
                    totalContributors={requestValues[index].totalContributors}
                    Description={requestValues[index].Description}
                    ReceiverWalletID={requestValues[index].ReceiverWalletID}
                    Amount={requestValues[index].Amount}
                    key={index}
                ></RequestCard>
            </Grid>
        ));
    };

    return (
        <Layout>
            <ThemeProvider theme={black}>
                <Button
                    variant="outlined"
                    elevation={0}
                    sx={{
                        marginTop: "20px",
                        width: "20%",
                        height: "55px",
                        marginLeft: "20px",
                        float: "right",
                    }}
                    onClick={() => {
                        Router.pushRoute(`/campaigns/${address}/requests/new`);
                    }}
                >
                    Create a New Request
                </Button>
            </ThemeProvider>
            <Typography
                gutterBottom
                variant="h2"
                sx={{ textAlign: "center", margin: "40px" }}
            >
                Campaign Requests
            </Typography>

            <Grid container spacing={2}>
                {renderDetails()}
            </Grid>
        </Layout>
    );
};

Requests.getInitialProps = async (props) => ({
    address: props.query.address,
});

export default Requests;
