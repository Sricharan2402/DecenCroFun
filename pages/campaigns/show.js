import React, { useState } from "react";
import { black } from "../../components/extras";
import Layout from "../../components/Layout";
import {
    Grid,
    Card,
    CardContent,
    CardActionArea,
    Typography,
    TextField,
    InputAdornment,
    Button,
    ThemeProvider,
    Link,
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

const Show = ({ address }) => {
    const [donationAmount, setDonationAmount] = useState(0);

    const handleContribute = () => {
        console.log(donationAmount);
        document.getElementById("donAmt").value = "";
        /*
        .
        .
        .
        */
        setDonationAmount(0);
        console.log(address);
        location.reload();
    };
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
                                    id="donAmt"
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
                                    onChange={(e) => {
                                        setDonationAmount(e.target.value);
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
                                        onClick={handleContribute}
                                    >
                                        Donate
                                    </Button>
                                </ThemeProvider>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item xs={12}>
                        <Card variant="outlined" sx={{ height: "180px" }}>
                            <Link
                                href={`/campaigns/${address}/requests`}
                                sx={{ all: "unset" }}
                            >
                                <CardActionArea>
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
                                            requests have been made for this
                                            campaign. Click here to approve them
                                            if you are an approver or create
                                            requests if you are the manager.
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                            </Link>
                        </Card>
                    </Grid>
                </Grid>
            </Grid>
        </Layout>
    );
};

Show.getInitialProps = async (props) => ({
    address: props.query.address,
});

export default Show;
