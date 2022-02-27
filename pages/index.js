import React from "react";
import Layout from "../components/Layout";
// import { Router } from "../routes";
import {
    Card,
    CardContent,
    CardActionArea,
    CardMedia,
    Grid,
    Typography,
    Box,
    Link,
} from "@mui/material";

const campaigns = [
    {
        Name: "Save Bandit",
        ID: "332j435h434j432hk",
        Description:
            "Bandit is stuck inside a drawer in Dunder Mifflin. Help us save him and provide him a new home away from Angela.",
        PhotoURL:
            "https://images.unsplash.com/photo-1644671253203-90cab345211c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80",
    },
    {
        Name: "Save Bandit again",
        ID: "jf08j4r08jf895gh539",
        Description:
            "Bandit is stuck inside a drawer in the Parks and Rec dept. Help us save him and provide him a new home away from April.",
        PhotoURL:
            "https://images.unsplash.com/photo-1643135163906-ff2dd0017e6f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    },
];

export default () => {
    // const handleViewCampaign = (index) => {
    //     Router.pushRoute(`/campaigns/${campaigns[index].ID}`);
    // };

    return (
        <Layout>
            <Typography
                gutterBottom
                variant="h2"
                sx={{ textAlign: "center", margin: "40px" }}
            >
                Current campaigns
            </Typography>

            <Grid container spacing={{ xs: 2, md: 3 }}>
                {Array.from(campaigns).map((_, index) => (
                    <Grid item xs={12} md={6} lg={4} key={index}>
                        <Card elevation={0}>
                            <Link
                                href={`/campaigns/${campaigns[index].ID}`}
                                sx={{ all: "unset" }}
                            >
                                <CardActionArea>
                                    <CardMedia
                                        component="img"
                                        height="200"
                                        image={campaigns[index].PhotoURL}
                                    />
                                    <CardContent>
                                        <Typography
                                            gutterBottom
                                            variant="h2"
                                            component="div"
                                            sx={{ fontSize: "30px" }}
                                        >
                                            {campaigns[index].Name}
                                        </Typography>

                                        <Typography
                                            gutterBottom
                                            variant="h2"
                                            component="div"
                                            sx={{ fontSize: "20px" }}
                                        >
                                            {`Campaign ID: ${campaigns[index].ID}`}
                                        </Typography>
                                        <br />
                                        <Typography
                                            gutterBottom
                                            variant="body2"
                                            color="text.secondary"
                                        >
                                            {campaigns[index].Description}
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                            </Link>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </Layout>
    );
};
