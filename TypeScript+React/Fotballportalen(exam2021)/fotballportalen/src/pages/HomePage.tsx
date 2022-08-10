import { FC } from "react"
import { Container } from "react-bootstrap";

const HomePage: FC = () => {
    return(
        <Container>
            <h3>Velkommen til Fotballportalen!</h3>
            <p>På denne nettsiden har du mulighet til å finne informasjon om dine favorittlag og favorittspillere fra Premier League!</p>
            <p>Du kan også tippe på hvem DU tror vinner PL</p>
        </Container>
        
    )

}

export default HomePage;