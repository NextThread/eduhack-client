import React, { useState, useEffect } from "react";
import NavBar from "../../navbar/NavBar";
import Footer from "../../footer/Footer";
import {
    Button,
    TextField,
    Container,
    Grid,
    Typography,
    FormControl,
    InputLabel,
    MenuItem,
    Select,
    Icon,
    Avatar,
    Link,
} from "@mui/material";
import { makeStyles } from "@material-ui/core";
import {
    BusinessOutlined,
    Facebook,
    Instagram,
    LinkedIn,
    Twitter,
} from "@mui/icons-material";
import Formsectionheader from "../FormSectionHeader/FormSectionHeader";
import getIcon from "../../../static/Icons/getIcon";
import axios from "axios";

const useStyles = makeStyles((theme) => ({
    parent: {
        width: "100%",
    },
    carousel: {
        backgroundColor: "#D3D3D3",
        width: "100%",
        height: "60vh",
    },
    nestedGrid: {
        padding: "20px",
    },
    innerGrid: {
        padding: "5px 20px",
    },
    technologies: {
        padding: "10px 20px",
    },
}));

const splitString = (inputString, by) => {
    console.log("Data", inputString);
    return inputString.split(`${by}`);
};

const Hackathonsubmission = (props) => {
    const classes = useStyles();

    const [hackathon, setHackathon] = useState({});
    const [problemStatements, setProblemStatements] = useState([]);
    const [currentProblemStatement, setCurrentProblemStatement] = useState();

    useEffect(() => {
        axios
            .get(
                `http://localhost:4400/api/hackathon/get/id/${props.match.params.id}`,
                {
                    body: {},
                    headers: {
                        authorization: localStorage.getItem("session"),
                    },
                }
            )
            .then((responses) => {
                setHackathon(responses.data.get_hackathon_db.hackathon);
                console.log("Responses = ", responses);
                setProblemStatements(
                    responses.data.get_problem_statements_db.problemStatements
                );
            })
            .catch((err) => {
                console.log(
                    "Error fetching hackathon in Submission page axios"
                );
            });
    }, []);

    const handleSelectChange = (e) => {
        setCurrentProblemStatement(e.target.value);
    };

    const renderIcon = (tech) => {
        return getIcon(tech.toLowerCase());
    };

    return (
        <Typography fontFamily="Open Sans">
            <div className={classes.parent}>
                <NavBar location="dashboard" />

                <Grid container sm={12} xs={12} md={12}>
                    {/* Top Carousel */}
                    <Grid
                        item
                        xs={12}
                        sm={12}
                        md={12}
                        className={classes.carousel}
                    >
                        <Grid container xs={12} sm={12} md={12}>
                            <Grid
                                item
                                xs={6}
                                md={6}
                                sm={6}
                                className={classes.nestedGrid}
                            >
                                <Button variant="contained" size="large">
                                    <Typography
                                        fontFamily="Open Sans"
                                        letterSpacing="2px"
                                        variant="h6"
                                    >
                                        <strong>22:47:16</strong>
                                    </Typography>
                                </Button>
                            </Grid>
                            <Grid
                                item
                                xs={6}
                                md={6}
                                sm={6}
                                className={classes.nestedGrid}
                                style={{ placeSelf: "center" }}
                            >
                                <Typography
                                    fontFamily="Open Sans"
                                    fontSize="20px"
                                    letterSpacing="2px"
                                >
                                    <strong style={{ float: "right" }}>
                                        <BusinessOutlined
                                            style={{ placeSelf: "center" }}
                                        />
                                        Organized by{" "}
                                        {hackathon.organizedBy &&
                                            hackathon.organizedBy}
                                    </strong>
                                </Typography>
                            </Grid>

                            <Grid
                                item
                                xs={3}
                                md={3}
                                sm={3}
                                className={classes.nestedGrid}
                            ></Grid>
                            <Grid
                                item
                                xs={6}
                                md={6}
                                sm={6}
                                className={classes.nestedGrid}
                            >
                                <Typography
                                    fontFamily="Open Sans"
                                    letterSpacing="2px"
                                    variant="h4"
                                    style={{ textAlign: "center" }}
                                >
                                    <strong>CodeState'21 Version 2.0</strong>
                                </Typography>
                            </Grid>
                            <Grid
                                item
                                xs={3}
                                md={3}
                                sm={3}
                                className={classes.nestedGrid}
                                style={{ display: "flex", placeSelf: "center" }}
                            >
                                <Facebook style={{ margin: "5px" }} />
                                <Instagram style={{ margin: "5px" }} />
                                <Twitter style={{ margin: "5px" }} />
                                <LinkedIn style={{ margin: "5px" }} />
                            </Grid>
                        </Grid>
                    </Grid>

                    {/* Problem Statement Title */}
                    <Grid
                        item
                        xs={12}
                        md={3}
                        sm={4}
                        className={classes.innerGrid}
                    >
                        <Formsectionheader name="Problem Statements" />
                    </Grid>

                    {/* Problem Statement Details */}
                    <Grid
                        item
                        xs={12}
                        sm={12}
                        md={12}
                        className={classes.innerGrid}
                    >
                        <FormControl fullWidth>
                            <InputLabel id="demo-simple-select-label">
                                Problem Statements
                            </InputLabel>
                            <Select
                                id="demo-simple-select"
                                label="submissionFormat"
                                value={currentProblemStatement}
                                onChange={handleSelectChange}
                            >
                                {problemStatements.map((probState) => (
                                    <MenuItem
                                        value={probState.id}
                                        name={probState.id}
                                        key={probState.id}
                                    >
                                        {probState.title}
                                    </MenuItem>
                                ))}
                            </Select>
                        </FormControl>
                    </Grid>

                    {/* Submission Guidlines Title */}
                    <Grid
                        item
                        xs={12}
                        md={3}
                        sm={4}
                        className={classes.innerGrid}
                    >
                        <Formsectionheader name="Submission Guidlines" />
                    </Grid>

                    {/* Submission Guidlines Details */}
                    <Grid item xs={12} sm={12} md={12}>
                        <ul>
                            {hackathon.submissionGuidelines &&
                                splitString(
                                    hackathon.submissionGuidelines,
                                    ". "
                                ).map((guideline) => <li>{guideline}</li>)}
                        </ul>
                    </Grid>

                    {/* Accepted Technologies Title */}
                    <Grid
                        item
                        xs={12}
                        md={3}
                        sm={4}
                        className={classes.innerGrid}
                    >
                        <Formsectionheader name="Accepted Technologies" />
                    </Grid>
                    <Grid item xs={12} md={12} sm={12} />

                    {/* Accepted Technologies Details */}
                    {currentProblemStatement ? (
                        splitString(
                            problemStatements.filter(
                                (statement) =>
                                    statement.id == currentProblemStatement
                            )[0].technologies,
                            ","
                        ).map((tech) => (
                            <Grid
                                item
                                xs={6}
                                sm={4}
                                md={2}
                                className={classes.technologies}
                                style={{ display: "flex", placeSelf: "center" }}
                            >
                                <Avatar>
                                    <Icon>
                                        <img src={renderIcon(tech)} />
                                    </Icon>
                                </Avatar>
                                <Typography variant="h6">{tech}</Typography>
                            </Grid>
                        ))
                    ) : (
                        <Grid
                            item
                            xs={12}
                            sm={12}
                            md={12}
                            className={classes.innerGrid}
                        >
                            Please Select Problem Statement
                        </Grid>
                    )}

                    {/* Reference Material Title */}
                    <Grid item xs={12} md={12} sm={12} />
                    <Grid
                        item
                        xs={12}
                        md={3}
                        sm={4}
                        className={classes.innerGrid}
                    >
                        <Formsectionheader name="Reference Material" />
                    </Grid>
                    <Grid item xs={12} md={12} sm={12} />

                    {/* Reference Material Details */}
                    {currentProblemStatement ? (
                        splitString(
                            problemStatements.filter(
                                (statement) =>
                                    statement.id == currentProblemStatement
                            )[0].refMaterial,
                            ", "
                        ).map((refLink) => (
                            <Grid
                                item
                                xs={12}
                                sm={12}
                                md={12}
                                className={classes.innerGrid}
                            >
                                <Link href={refLink}>{refLink}</Link>
                            </Grid>
                        ))
                    ) : (
                        <Grid
                            item
                            xs={12}
                            sm={12}
                            md={12}
                            className={classes.innerGrid}
                        >
                            Please Select Problem Statement
                        </Grid>
                    )}

                    {/* Submission Title */}
                    <Grid item xs={12} md={12} sm={12} />
                    <Grid
                        item
                        xs={12}
                        md={3}
                        sm={4}
                        className={classes.innerGrid}
                    >
                        <Formsectionheader name="Submission" />
                    </Grid>
                    <Grid item xs={12} md={12} sm={12} />

                    {/* Submission Details */}
                    <Grid
                        item
                        xs={12}
                        sm={12}
                        md={12}
                        className={classes.innerGrid}
                    >
                        
                        <TextField
                        type="file" variant="outlined" />
                    </Grid>
                </Grid>

                <Grid
                    item
                    xs={12}
                    sm={12}
                    md={12}
                    className={classes.innerGrid}
                >
                    <center>
                        <Button variant="contained" size="large">
                            Submit
                        </Button>
                    </center>
                </Grid>

                <Footer />
            </div>
        </Typography>
    );
};

export default Hackathonsubmission;
