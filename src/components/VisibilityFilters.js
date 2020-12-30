import React from 'react';
import cx from 'classnames';
import { useDispatch, useSelector } from 'react-redux';
import { VISIBILITY_FILTERS } from '../constants';
import allActions from '../store/actions';

const VisibilityFilters = () => {
  const activeFilter = useSelector((state) => state.visibilityFilter);
  const dispatch = useDispatch();

  const setFilters = (currentFilter) => {
    dispatch(allActions.todoActions.setFilter(currentFilter));
  };
  return (
    <div className='visibility-filters'>
      {Object.keys(VISIBILITY_FILTERS).map((filterKey) => {
        const currentFilter = VISIBILITY_FILTERS[filterKey];
        return (
          <span
            key={`visibility-filter-${currentFilter}`}
            className={cx(
              'filter',
              currentFilter === activeFilter && 'filter--active'
            )}
            onClick={() => {
              setFilters(currentFilter);
            }}
          >
            {currentFilter}
          </span>
        );
      })}
    </div>
  );
};

export default VisibilityFilters;
