// must include global bootstrap css in _app, b/c it is only component that is loaded on every route
// 'Root' component
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

const App = ({ Component, pageProps }) => {
  return <Component {...pageProps} />;
};

export default App;
