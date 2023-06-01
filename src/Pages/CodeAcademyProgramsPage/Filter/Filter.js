import './filter.css';

function Filter() {
    return (
        <div className="programs-filter">
        <form className="programs-filter-form">
          <span className="programs-found">Rastos 48 programos</span>

          <div className="form-control">
            <label htmlFor="course-select">Tema</label>
            <select id="course-select">
              <option>Visos</option>
              <option>Testavimas</option>
              <option>Programavimas</option>
            </select>
          </div>

          <div className="form-control">
            <label htmlFor="location-select">Vieta</label>
            <select id="location-select">
              <option>Visos</option>
              <option>Online</option>
              <option>Vilnius</option>
            </select>
          </div>

          <div className="form-control">
            <label htmlFor="type-select">Tipas</label>
            <select id="type-select">
              <option>Visi</option>
              <option>Pirmas tipas</option>
              <option>Antras tipas</option>
            </select>
          </div>

          <fieldset>
            <legend>Laikas</legend>
            <div className="form-control">
              <input type="checkbox" id="time-variation-1" name="time"/>
              <label htmlFor="time-variation-1">Dienomis</label>
            </div>
            <div className="form-control">
              <input type="checkbox" id="time-variation-2" name="time"/>
              <label htmlFor="time-variation-2">Vakarais</label>
            </div>
          </fieldset>

     
          <input className="button-primary" type="submit" value="Filtruoti"/>
          <input className="button-secondary" type="reset" value="Išvalyti"/>
        </form>

        <button className="button button-filter">Filtruoti</button>
      </div>
    )
}
export default Filter;