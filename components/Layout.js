import React from "react";
import Head from "next/head";
import Header from "./Header";
import { CssBaseline, Container } from "@mui/material";
export default (props) => {
    return (
        <div>
            <Header></Header>
            <Container maxWidth="xl">
                <Head>
                    <link
                        rel="stylesheet"
                        href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
                    />
                    <link
                        rel="stylesheet"
                        href="https://fonts.googleapis.com/icon?family=Material+Icons"
                    />
                </Head>

                <CssBaseline />

                {props.children}
            </Container>
        </div>
    );
};
