// YourComponent.js
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPaginatedItems, setCurrentPage } from '../redux/sclice';
import { Link } from 'react-router-dom';
import './index.css';

const YourComponent = () => {
  const dispatch = useDispatch();
  const { items, currentPage, totalPages, status, error } = useSelector((state) => state.items);

  useEffect(() => {
    dispatch(fetchPaginatedItems(currentPage));
  }, [currentPage, dispatch]);

  const handlePageChange = (newPage) => {
    dispatch(setCurrentPage(newPage));
  };

  if (status === 'loading') {
    return <div>Loading...</div>;
  }

  if (status === 'failed') {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="container">
      <h1>Paginated Items</h1>
      <ul className="items-list">
        {items.map((item) => (
          <li key={item.id} className="item">
            <img src={item.imageUrl} alt={item.name} className="item-image" />
            <span className="item-name">{item.name}</span>
          </li>
        ))}
      </ul>

      {/* Render pagination controls */}
      <div className="pagination-controls">
        <button onClick={() => handlePageChange(currentPage - 1)} disabled={currentPage === 1}>
          Previous
        </button>
        {Array.from({ length: totalPages }, (_, index) => (
          <Link to={`/page/${index + 1}`} key={index}>
            <button
              onClick={() => handlePageChange(index + 1)}
              className={currentPage === index + 1 ? 'current-page' : ''}
            >
              {index + 1+"-0"}
            </button>
          </Link>
        ))}
        <span>{`Page ${currentPage} of ${totalPages}`}</span>
        <button onClick={() => handlePageChange(currentPage + 1)} disabled={currentPage === totalPages}>
          Next
        </button>
      </div>
    </div>
  );
};

export default YourComponent;
