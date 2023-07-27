import Product from './Product';
import ProductIdFilter from '../Filters/ProductsFilters/ProductIdFilter';
import ProductNameFilter from '../Filters/ProductsFilters/ProductNameFilter';
// import CategoryFilter from '../Filters/ProductsFilters/CategoryFilter';
import { useSelector } from 'react-redux';
import { useState } from 'react';
import PaginationComponent from '../Pagination/Pagination';
import RestartFilters from '../Filters/ProductsFilters/RestartFilters';
import style from "./Products.module.css";
import { Container, Row, Table } from 'react-bootstrap';

function Products () {
  const products = useSelector((state) => state.products);
  const idSorted = useSelector((state) => state.productIdSort)
  const productNameSort = useSelector(state => state.productNameSort)

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  const applyFilters = (nameOrder, idOrder, arr) => {
    const nameSortedArray = arr.slice().sort((a, b) => {
        if (nameOrder === "a-z") {
          return a.name.localeCompare(b.name);
        } else if (nameOrder === "z-a") {
            return b.name.localeCompare(a.name);
        } else {
            return 0;
        }
    });

    const idSortedArray = nameSortedArray.sort((a, b) => {
        if (idOrder === "asc") {
            return a.id - b.id;
        } else if (idOrder === "des") {
            return b.id - a.id;
        } else {
            return 0;
        }
    });

    return idSortedArray;
};
  
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentProducts = applyFilters(productNameSort, idSorted, products).slice(indexOfFirstItem, indexOfLastItem);
    return (
      
      <Container fluid>
        <Table striped bordered hover table-bordered>
          <thead>
            <tr>
              <th><ProductIdFilter setCurrentPage={setCurrentPage}/></th>
              <th><ProductNameFilter setCurrentPage={setCurrentPage}/></th>
              <th>Precio</th>
              <th>Categorias</th>
              <th>Estado</th>
            </tr>
          </thead>
          <tbody>
              {currentProducts.map((product) => (
                <Product
                  key={product.id}
                  id={product.id}
                  image={product.image}
                  name={product.name}
                  price={product.price}

                  category={product.Categories}
                  status={product.status}
                />
              ))}
        </tbody>
        </Table>
      <Row>
      <RestartFilters />
        <PaginationComponent 
        currentPage={currentPage}
        totalPages={Math.ceil(products.length / itemsPerPage)}
        onPageChange={setCurrentPage}
        /> 
      </Row>
  </Container>
    )
}

export default Products;