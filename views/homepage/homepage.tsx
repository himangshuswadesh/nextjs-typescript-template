import { Pagecontainer } from '@layouts';

const HomePage = () => {
  return (
    <>
      <Pagecontainer>
        <section
          style={{ minHeight: '88vh', display: 'grid', placeContent: 'center' }}
        >
          <div className="container">
            <h1>Home Page</h1>
          </div>
        </section>
      </Pagecontainer>
    </>
  );
};
export default HomePage;
