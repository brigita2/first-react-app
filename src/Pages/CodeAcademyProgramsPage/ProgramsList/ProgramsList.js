import './programsList.css';

function ProgramItem() {
    return (
        <div className="programs-list">
        <div className="program-item">
          <a href="/#">
            <div className="program-main-info">
              <img className="program-image" src="https://codeacademy.lt/wp-content/uploads/2022/08/Black-18.svg" alt=''/>
              <h2 className="program-title">„Salesforce“ CRM – pradedančių</h2>
              <p className="program-description">„Salesforce“ – įmonės operacinė sistema, leidžianti skirtingiems padaliniams sklandžiai dalintis informacija, sėkmingiau aptarnauti klientus, didinti produktyvumą, o svarbiausia – efektyviau išnaudoti sukauptus duomenis.</p>
            </div>

            <div className="program-features-wrapper">
              <ul className="program-features-list">
                <li className="program-feature-item">1 lygis</li>
                <li className="program-feature-item">Vakarais</li>
              </ul>
            </div>

            <span className="program-extra-info">Naujas</span>
          </a>
        </div>

        <div className="program-item">
          <a href="/#">
            <div className="program-main-info">
              <img className="program-image" src="https://codeacademy.lt/wp-content/uploads/2022/08/Black-18.svg" alt=''/>
              <h2 className="program-title">Python – pradedantiesiems užimtiems asmenims (223002626)</h2>
              <p className="program-description">Python – aiškiai suprantama ir greitai išmokstama, tačiau labai universali ir galinga programavimo kalba, todėl šią kalbą išmokti yra nesunku, o ja naudotis – smagu ir patogu.</p>
            </div>

            <div className="program-features-wrapper">
              <ul className="program-features-list">
                <li className="program-feature-item">Finansuojama UŽT - dirbantiems</li>
                <li className="program-feature-item">Vakarais</li>
              </ul>
            </div>

            <span className="program-extra-info">Finansuojama UŽT</span>
          </a>
        </div>
        
        <div className="program-item">
          <a href="/#">
            <div className="program-main-info">
              <img className="program-image" src="https://codeacademy.lt/wp-content/uploads/2022/08/Black-18.svg" alt=''/>
              <h2 className="program-title">„Salesforce“ CRM – pradedančių</h2>
              <p className="program-description">„Salesforce“ – įmonės operacinė sistema, leidžianti skirtingiems padaliniams sklandžiai dalintis informacija, sėkmingiau aptarnauti klientus, didinti produktyvumą, o svarbiausia – efektyviau išnaudoti sukauptus duomenis.</p>
            </div>

            <div className="program-features-wrapper">
              <ul className="program-features-list">
                <li className="program-feature-item">1 lygis</li>
                <li className="program-feature-item">Vakarais</li>
              </ul>
            </div>

            <span className="program-extra-info">Naujas</span>
          </a>
        </div>

        <div className="program-item">
          <a href="/#">
            <div className="program-main-info">
              <img className="program-image" src="https://codeacademy.lt/wp-content/uploads/2022/08/Black-18.svg" alt=''/>
              <h2 className="program-title">Python – pradedantiesiems užimtiems asmenims (223002626)</h2>
              <p className="program-description">Python – aiškiai suprantama ir greitai išmokstama, tačiau labai universali ir galinga programavimo kalba, todėl šią kalbą išmokti yra nesunku, o ja naudotis – smagu ir patogu.</p>
            </div>

            <div className="program-features-wrapper">
              <ul className="program-features-list">
                <li className="program-feature-item">Finansuojama UŽT - dirbantiems</li>
                <li className="program-feature-item">Vakarais</li>
              </ul>
            </div>

            <span className="program-extra-info">Finansuojama UŽT</span>
          </a>
        </div>
      </div>
    )
}
export default ProgramItem;