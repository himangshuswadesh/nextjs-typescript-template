import { Button } from '@components';
import type { NextPage } from 'next';

const Home: NextPage = () => {
  return (
    <>
      <div className="container">
        <h1>next js template with typescript</h1>
        <Button>hello world</Button>
      </div>
    </>
  );
};

export default Home;
