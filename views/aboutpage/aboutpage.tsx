import { Pagecontainer } from '@layouts';

const AboutPage = () => {
  return (
    <>
      <Pagecontainer>
        <section
          style={{ minHeight: '88vh', display: 'grid', placeContent: 'center' }}
        >
          <div className="container">
            <h1>About Page</h1>
          </div>
        </section>
      </Pagecontainer>
    </>
  );
};
export default AboutPage;
