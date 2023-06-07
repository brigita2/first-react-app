function ProgramItem ({ programLink, image, title, description, level, time, label }) {
    return (
        <div className="program-item">
        <a href={programLink}>
          <div className="program-main-info">
            <img className="program-image" src={image} alt=''/>
            <h2 className="program-title">„{title}</h2>
            <p className="program-description">{description}</p>
          </div>

          <div className="program-features-wrapper">
            <ul className="program-features-list">
              <li className="program-feature-item">{level}</li>
              <li className="program-feature-item">{time}</li>
            </ul>
          </div>

          <span className="program-extra-info">{label}</span>
        </a>
      </div>
    )
}
export default ProgramItem;