import React, { useEffect } from "react";
import Layout from "../../components/Layout";
import { black } from "../../components/extras";
import {
    Grid,
    Card,
    CardContent,
    CardActionArea,
    Typography,
    Link,
    TextField,
    InputAdornment,
    Button,
    ThemeProvider,
} from "@mui/material";

const CampaignCard = ({ Heading, Value, Description }) => {
    return (
        <Card variant="outlined" sx={{ height: "180px" }}>
            <CardContent>
                <Typography
                    sx={{ fontSize: 18 }}
                    color="text.secondary"
                    gutterBottom
                >
                    {Heading}
                </Typography>
                <Typography
                    gutterBottom
                    variant="h3"
                    component="div"
                    sx={{ fontSize: "30px" }}
                >
                    {Value}
                </Typography>

                <Typography variant="body1">{Description}</Typography>
            </CardContent>
        </Card>
    );
};

const cardValues = [
    {
        Heading: "Campaign Manager",
        Value: "0xDNUFF8334084DJ",
        Description:
            "has created this campaign and is responsible for all its requests.",
    },
    {
        Heading: "Minimum Contribution",
        Value: "100 wei",
        Description:
            "is the minimum amount you can contribute to gain approver access and vote on requests. ",
    },
    {
        Heading: "No.of Contributors",
        Value: "2341",
        Description: "people have already contributed to this campaign.",
    },
    {
        Heading: "Balance",
        Value: "0.0 ether",
        Description: "is the balance of this campaign's wallet.",
    },
];

const show = ({ address }) => {
    const renderDetails = () => {
        return Array.from(cardValues).map((_, index) => (
            <Grid item xs={12} lg={6} key={index}>
                <CampaignCard
                    Heading={cardValues[index].Heading}
                    // Replace with campaign details obtained from
                    // 'address' variable

                    Value={cardValues[index].Value}
                    Description={cardValues[index].Description}
                ></CampaignCard>
            </Grid>
        ));
    };

    return (
        <Layout>
            <Typography
                gutterBottom
                variant="h2"
                sx={{ textAlign: "center", margin: "40px" }}
            >
                Campaign Details
            </Typography>
            <Grid container columnSpacing={2}>
                <Grid container item spacing={2} xs={12} lg={8}>
                    {renderDetails()}
                </Grid>
                <Grid container item spacing={2} xs={12} lg={4}>
                    <Grid item xs={12}>
                        <Card variant="outlined" sx={{ height: "180px" }}>
                            <CardContent>
                                <Typography
                                    sx={{ fontSize: 18 }}
                                    color="text.secondary"
                                >
                                    Contribute
                                </Typography>
                                <TextField
                                    id="mincont"
                                    variant="outlined"
                                    required
                                    sx={{
                                        marginTop: "20px",
                                        width: "70%",
                                    }}
                                    InputProps={{
                                        startAdornment: (
                                            <InputAdornment position="start">
                                                Ether
                                            </InputAdornment>
                                        ),
                                    }}
                                />
                                <ThemeProvider theme={black}>
                                    <Button
                                        variant="contained"
                                        elevation={0}
                                        sx={{
                                            marginTop: "20px",
                                            width: "25%",
                                            marginLeft: "20px",
                                            height: "55px",
                                        }}
                                    >
                                        Donate
                                    </Button>
                                </ThemeProvider>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item xs={12}>
                        <CardActionArea>
                            <Card variant="outlined" sx={{ height: "180px" }}>
                                <CardContent>
                                    <Typography
                                        sx={{ fontSize: 18 }}
                                        color="text.secondary"
                                        gutterBottom
                                    >
                                        Requests
                                    </Typography>
                                    <Typography
                                        gutterBottom
                                        variant="h3"
                                        component="div"
                                        sx={{ fontSize: "30px" }}
                                    >
                                        12
                                    </Typography>

                                    <Typography variant="body1">
                                        requests have been made by this
                                        campaign's manager. Click here to view
                                        and approve them.
                                    </Typography>
                                </CardContent>
                            </Card>
                        </CardActionArea>
                    </Grid>
                </Grid>
            </Grid>
        </Layout>
    );
};

show.getInitialProps = async (props) => ({
    address: props.query.address,
});

export default show;
