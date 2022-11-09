import PageContainer from '@rootlayouts/pagecontainer';

const HomePage = () => {
  return (
    <PageContainer>
      <section
        style={{ minHeight: '88vh', display: 'grid', placeContent: 'center' }}
      >
        <div className="container">
          <h1>Home Page</h1>
        </div>
      </section>
    </PageContainer>
  );
};
export default HomePage;
