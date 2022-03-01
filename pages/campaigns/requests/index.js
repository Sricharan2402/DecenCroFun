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

const RequestCard = ({
    ID,
    Approvers,
    totalContributors,
    Description,
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
                    variant="h5"
                    component="div"
                    sx={{
                        fontSize: "25px",
                        float: "right",
                        marginTop: "20px",
                        marginLeft: "50px",
                    }}
                >
                    {`${Amount} Eth`}
                </Typography>
                <Typography
                    gutterBottom
                    variant="h2"
                    component="div"
                    sx={{ fontSize: "22px", marginTop: "20px" }}
                >
                    {`${Description}`}
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
        Amount: "0.002",
    },
    {
        ID: "2",
        Approvers: "8",
        totalContributors: "35",
        Description: "Bill for 2 ECS instances for the month of Feb.",
        Amount: "0.003",
    },
];

export default () => {
    const renderDetails = () => {
        return Array.from(requestValues).map((_, index) => (
            <Grid item xs={12} lg={6}>
                <RequestCard
                    ID={requestValues[index].ID}
                    Approvers={requestValues[index].Approvers}
                    totalContributors={requestValues[index].totalContributors}
                    Description={requestValues[index].Description}
                    Amount={requestValues[index].Amount}
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
                        width: "25%",
                        height: "55px",
                        marginLeft: "20px",
                        float: "right",
                    }}
                >
                    Create Request
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
