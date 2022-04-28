import { Link } from 'react-router-dom';

const Products = () => {
    return (
        <section>
            <h1>The Products Page</h1>
            <ul>
                <li>
                    <Link to="/products/a-book">A Book</Link>
                </li>
                <li>
                    <Link to="/products/a-carpet">A Carpet</Link>
                </li>
                <li>
                    <Link to="/products/a-car">A Car</Link>
                </li>
            </ul>
        </section>
    );
};

export default Products;
