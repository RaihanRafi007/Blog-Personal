import { BrowserRouter as Router } from "react-router-dom";
// import { Provider } from "react-redux";

import { Helmet, HelmetProvider } from "react-helmet-async";

import AnimatedRoutes from "Routes";
import { Provider } from "react-redux";
import store from "store";

function App() {
  return (
    <HelmetProvider>
      <Helmet>
        <title>Lego | Software Agency</title>
        <meta
          name="description"
          content="Software and digital marketing agency. Website creation and application development services."
        />
        <meta
          name="keywords"
          content="software agency, marketing agency, website creation"
        />
        <meta name="robots" content="all" />
        <link rel="canonical" href="https://www.lego.com/" />
        <meta name="author" content="Lego" />
        <meta name="publisher" content="Lego" />

        {/* Social Media Tags */}
        <meta property="og:title" content="Lego | Software Agency" />
        <meta
          property="og:description"
          content="Software and digital marketing agency. Website creation and application development services."
        />
        <meta property="og:url" content="https://www.lego.com/" />
        <meta
          property="og:image"
          content="https://bafybeicwrhxloesdlojn3bxyjqnxgsagtd4sl53a7t4cn4vfe2abmybzua.ipfs.w3s.link/lightbnuilbg.jpg"
        />

        <meta name="twitter:title" content="Lego | Software Agency" />
        <meta
          name="twitter:description"
          content="Software and digital marketing agency. Website creation and application development services."
        />
        <meta
          name="twitter:image"
          content="https://bafybeicwrhxloesdlojn3bxyjqnxgsagtd4sl53a7t4cn4vfe2abmybzua.ipfs.w3s.link/lightbnuilbg.jpg"
        />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>
      <Provider store={store}>
        <Router>

            <AnimatedRoutes/>
        </Router>
      </Provider>
    </HelmetProvider>
  );
}

export default App;
