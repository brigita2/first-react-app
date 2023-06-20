import Container from "../../Components/Container/Container";

const api = () => {
  return (
    <Container>
            <h1>Check out my API projects:</h1>
        <div>
            <div className="api-projects-list">
                <h2 className="project-title">Chuck Norris API</h2>
                <p className="project-description">Aprašymas</p>

                <a href='api/chuck-norris'>Click Here</a>
            </div>
        </div>

        <div>
            <div className="api-projects-list">
                <h2 className="project-title">Dogs API</h2>
                <p className="project-description">Aprašymas</p>

                <a href='api/dogs'>Click Here</a>
            </div>
        </div>

        <div>
            <div className="api-projects-list">
                <h2 className="project-title">AI API Page</h2>
                <p className="project-description">Aprašymas</p>

                <a href='api/ai'>Click Here</a>
            </div>
        </div>

    </Container>
  )
}

export default api;