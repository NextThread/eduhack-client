import React from "react";
import { BrowserRouter as Router, Link, Switch, Route } from "react-router-dom";
import SignIn from "../auth/signin/SignIn";
import SignUp from "../auth/signup/SignUp";
import Dashboard from "../dashboard/Dashboard";
import Overviewhackathon from "../Hackathon/OverviewPage/OverviewHackathon";
import LandingPage from "../landing-page/LandingPage";
import theme from "../ui/Theme";
import { ThemeProvider, Typography } from "@material-ui/core";
import Organizepage from "../Hackathon/OrganizePage/OrganizePage";
import Problemstatementform from "../Hackathon/ProblemStatementForm/ProblemStatementForm";
import Hackathonmain from "../Hackathon/HackathonMain/HackathonMain";
import Hackathonsubmission from "../Hackathon/HackathonSubmission/HackathonSubmission";
import Hackathonsummary from "../Hackathon/summary/HackathonSummary";
import ReactVirtualizedTable from "../table-demo/TableDemo";
import Codinglistmain from "../coding-list-page/CodingListMain";
import Codingmain from "../coding-main/CodingMain";
import Tempupload from "../TempUpload";

const AppRouter = (props) => {
    return (
        <ThemeProvider theme={theme}>
            {/* <Typography color="textPrimary"> */}
            <div className="App">
                <Router>
                    <Route exact path="/" component={LandingPage} />
                    <Route exact path="/auth/signin" component={SignIn} />
                    <Route exact path="/auth/signup" component={SignUp} />
                    <Route exact path="/dashboard" component={Dashboard} />
                    <Route exact path="/hackathon/organize/overview" component={Overviewhackathon} />
                    <Route exact path="/hackathon/organize/" component={Organizepage} />
                    <Route exact path="/hackathon/view/:id" component={Hackathonmain} />
                    <Route exact path="/hackathon/submission/:id" component={Hackathonsubmission} />
                    <Route exact path="/hackathon/submission/summary/:id" component={Hackathonsummary} />
                    <Route exact path="/table" component={ReactVirtualizedTable} />
                    <Route exact path="/coding/practice/:language" component={Codinglistmain} />
                    <Route exact path="/coding/question/:id" component={Codingmain} />
                    <Route exact path="/temp/upload" component={Tempupload} />
                </Router>
            </div>
            {/* </Typography> */}
        </ThemeProvider>
    );
};

export default AppRouter;
