import React from 'react';
import { Pagination } from 'react-bootstrap';

const PaginationComponent = ({ currentPage, totalPages, onPageChange }) => {
    const pageNumbers = [];
    for (let i = 1; i <= totalPages; i++) {
      pageNumbers.push(i);
    }
  
    const limit = 3;
    const startPage = Math.max(1, currentPage - limit);
    const endPage = Math.min(totalPages, currentPage + limit);
  
    return (
    <div className="mt-4 d-flex justify-content-center">
      <Pagination>
        <Pagination.Prev onClick={() => onPageChange(currentPage > 1 ? currentPage - 1 : 1)} />
        {currentPage > 4 && <Pagination.Ellipsis disabled />}
  
        {pageNumbers.map((pageNumber) => {
          if (pageNumber === currentPage) {
            return (
              <Pagination.Item key={pageNumber} active>
                {pageNumber}
              </Pagination.Item>
            );
          } else if (pageNumber >= startPage && pageNumber <= endPage) {
            return (
              <Pagination.Item key={pageNumber} onClick={() => onPageChange(pageNumber)}>
                {pageNumber}
              </Pagination.Item>
            );
          }
          return null;
        })}
  
        {currentPage < totalPages - 3 && <Pagination.Ellipsis disabled />}
        <Pagination.Next onClick={() => onPageChange(currentPage < totalPages ? currentPage + 1 : totalPages)} />
      </Pagination>
    </div>
    );
  };
  
  export default PaginationComponent;