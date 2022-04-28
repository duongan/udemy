import QuoteList from '../components/quotes/QuoteList';

const DUMMY_QUOTES = [
    { id: 'q1', author: 'An', text: 'Some text here 1' },
    { id: 'q2', author: 'Duong', text: 'Some text here 2' },
];

const QuoteListPage = () => {
    return <QuoteList quotes={DUMMY_QUOTES} />;
};

export default QuoteListPage;
