import React, { Suspense } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Layout from './components/layout/Layout';
import LoadingSpinner from './components/UI/LoadingSpinner';

// import QuoteListPage from './pages/QuoteListPage';
const QuoteListPage = React.lazy(() => import('./pages/QuoteListPage'));

// import NewQuotePage from './pages/NewQuotePage';
const NewQuotePage = React.lazy(() => import('./pages/NewQuotePage'));

// import QuoteDetailPage from './pages/QuoteDetailPage';
const QuoteDetailPage = React.lazy(() => import('./pages/QuoteDetailPage'));

// import NotFoundPage from './pages/NotFoundPage';
const NotFoundPage = React.lazy(() => import('./pages/NotFoundPage'));

function App() {
    return (
        <Layout>
            <Suspense
                fallback={
                    <div className="centered">
                        <LoadingSpinner />
                    </div>
                }
            >
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
            </Suspense>
        </Layout>
    );
}

export default App;
