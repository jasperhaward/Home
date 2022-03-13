import { Router, Route } from "@plugins/router";
import { Container, FooterBar, HeaderBar } from "@components";

import HomePage from "@routes/home";
import AboutPage from "@routes/about";

function App() {
    return (
        <Router>
            <HeaderBar />
            <Container>
                <Route route="/" component={HomePage} />
                <Route route="/about" component={AboutPage} />
            </Container>
            <FooterBar />
        </Router>
    );
}

export default App;
