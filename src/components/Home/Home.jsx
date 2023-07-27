import { connect } from 'react-redux';
import { VictoryBar, VictoryChart, VictoryTheme } from 'victory';
import './Home.css';
import { Col, Container, Row } from 'react-bootstrap';

function Home ({ products, categories, users }) {

    const newProducts = products.map((p) => p.price);
    const newCategories = categories.map((p) => p.name);
    const newUsers = users.map((p) => p.name);
    const cantCategories = newCategories.length;
    const cantProducts = newProducts.length;
    const cantUsers = newUsers.length;
    
    return (
        <Container fluid>
            <Row>
                <Col md={12}>
            <h1 className='container'>Graficos Estadisticos</h1>

            <div style={{ width: '80%', height: '80%', }} className='container'>
                <VictoryChart
                    theme={VictoryTheme.material}
                    domainPadding={{ x: 20 }}
                >
                    <VictoryBar
                        barRatio={0.5}
                        style={{
                        data: { fill: "#c43a31" }
                        }}
                        data={[
                            {x: "usuarios", y: `${cantUsers}`},
                            {x: "Categoria", y: `${cantCategories}`},
                            {x: "Productos", y: `${cantProducts}`},
                        ]}
                    />
                </VictoryChart>
            </div>
            </Col>
            </Row>
            </Container>
    )
}

const mapStateToProps = (state) => {
    return {
        products: state.products,
        categories: state.categories,
        users: state.users
    }
}

export default connect(mapStateToProps, null)(Home);