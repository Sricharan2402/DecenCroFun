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
        Heading: "Requests",
        Value: "12",
        Description: "requests have been made by this campaign's manager.",
    },
];

const show = ({ address }) => {
    const renderDetails = () => {
        return Array.from(cardValues).map((_, index) => (
            <Grid item xs={12} md={6} lg={4} key={index}>
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
            <Grid container spacing={2}>
                {renderDetails()}
                <Grid item xs={12} md={6} lg={4}>
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
                                            wei
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
                <Grid item xs={12} md={6} lg={4}>
                    <CardActionArea>
                        <Card variant="outlined" sx={{ height: "180px" }}>
                            <CardContent>
                                <Typography
                                    sx={{ fontSize: 18 }}
                                    color="text.secondary"
                                    gutterBottom
                                >
                                    Approve Requests
                                </Typography>
                                <br />
                                <Typography variant="body1">
                                    Click here to view and approve pending
                                    requests for this campaign.
                                </Typography>
                            </CardContent>
                        </Card>
                    </CardActionArea>
                </Grid>
            </Grid>
        </Layout>
    );
};

show.getInitialProps = async (props) => ({
    address: props.query.address,
});

export default show;
