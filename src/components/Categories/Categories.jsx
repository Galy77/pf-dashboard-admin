import ListGroup from 'react-bootstrap/ListGroup';
import style from "./Categories.module.css"
import { Col, Container, Row, Table } from 'react-bootstrap';
import { useSelector } from "react-redux";
import Category from "./Category"
import PaginationComponent from '../Pagination/Pagination';
import { useState } from 'react';

function Categories (){
    const categories = useSelector(state => state.categories)
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 10;

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentCategories = categories.sort((a, b) => a.id - b.id).slice(indexOfFirstItem, indexOfLastItem);
    return (
        <Container fluid>
            <Row className={style.title}>
                <Col xs={2} className={style.guide}>
                </Col>
            </Row>

            <Table striped bordered hover table-bordered>
        <thead>
          <tr>
            <th>ID</th>
            <th>Categoria</th>
            {/* <th>Estado</th> */}
         </tr>
        </thead>
        <tbody>   

        {currentCategories.map((category) => (
                    <Category
                    key={category.id}
                    id={category.id}
                    name={category.name}
                    image={category.image}
                    />
                ))}
        </tbody>
        </Table>
            <Row>
                <PaginationComponent 
                currentPage={currentPage}
                totalPages={Math.ceil(categories.length / itemsPerPage)}
                onPageChange={setCurrentPage}
                />
            </Row>
        </Container>
    )
}

export default Categories