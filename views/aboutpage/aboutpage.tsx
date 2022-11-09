import PageContainer from '@rootlayouts/pagecontainer';

const AboutPage = () => {
  return (
    <PageContainer>
      <section
        style={{ minHeight: '88vh', display: 'grid', placeContent: 'center' }}
      >
        <div className="container">
          <h1>About Page</h1>
        </div>
      </section>
    </PageContainer>
  );
};
export default AboutPage;
