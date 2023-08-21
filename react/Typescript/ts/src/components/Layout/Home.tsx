import {FC, ReactElement} from "react";
import {Link} from "react-router-dom";

const Home: FC = (): ReactElement => (
        <main className='home-container'>
            <h1>GitHub Battle: Battle your friends</h1>
            <Link to='battle' className='button'>Battle</Link>
        </main>
    );


export default Home;