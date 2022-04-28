import { Route, Switch, Redirect } from 'react-router-dom';
import QuoteDetailPage from './pages/QuoteDetailPage';
import QuoteListPage from './pages/QuoteListPage';
import NewQuotePage from './pages/NewQuotePage';
import Layout from './components/layout/Layout';
import NotFoundPage from './pages/NotFoundPage';

function App() {
    return (
        <Layout>
            <Switch>
                <Route path="/" exact>
                    <Redirect to="/quotes" />
                </Route>
                <Route path="/quotes" exact>
                    <QuoteListPage />
                </Route>
                <Route path="/quotes/:quoteId">
                    <QuoteDetailPage />
                </Route>
                <Route path="/new-quote">
                    <NewQuotePage />
                </Route>
                <Route path="*">
                    <NotFoundPage />
                </Route>
            </Switch>
        </Layout>
    );
}

export default App;
