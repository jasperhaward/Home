import { Router, Route } from "@plugins/router";
import { Container, FooterBar, HeaderBar } from "@components";

import HomePage from "@routes/home";
import AboutPage from "@routes/about";

function App() {
    return (
        <>
            <HeaderBar />
            <Container>
                <Router>
                    <Route route="/" component={HomePage} />
                    <Route route="/about" component={AboutPage} />
                </Router>
            </Container>
            <FooterBar />
        </>
    );
}

export default App;
