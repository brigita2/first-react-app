import './ProgramsPage.css';
import Banner from '../Banner/Banner';
import Filter from '../Filter/Filter';
import ProgramsList from '../ProgramsList/ProgramsList';

function ProgramsPage() {
    return (
  <div className="container">
    <div className="page-content">
      <h1 className="page-title">Programos</h1>
      <Banner />
      <div className="programs-wrapper">
      <Filter />
      <ProgramsList />
      </div>
    </div>
  </div>
    )
}
export default ProgramsPage;