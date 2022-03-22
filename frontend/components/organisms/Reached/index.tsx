import ReachItem from '../../molecules/ReachItem';

export default function Reached() {
  return (
    <section className="reached pt-50 pb-50">
      <div className="container-fluid">
        <div className="d-flex flex-lg-row flex-column align-items-center justify-content-center gap-lg-0 gap-4">
          <ReachItem title="290M+" category="Players Top Up" />
          <ReachItem title="12.500" category="Games Available" />
          <ReachItem title="99,9%" category="Happy Players" />
          <ReachItem title="4.7" category="Rating worldwide" />
        </div>
      </div>
    </section>
  );
}
