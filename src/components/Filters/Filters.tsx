import React, { useState, ChangeEvent } from 'react';
import { Select, Input, Button } from 'antd';
import { Filter } from '../../hooks/usePublications';
const { Option } = Select;
const { Search } = Input;

interface FilterProps {
  onFilter: (filter: Filter | {}) => void;
}

const Filters: React.FC<FilterProps> = ({ onFilter }) => {
  const [field, setField] = useState('');
  const [keywords, setKeywords] = useState('');

  const onFieldChange = (value: string) => {
    setField(value);
  };

  const onSearch = (value: string) => {
    if (value === '') onFilter({});
  };

  const onSearchChange = (event: ChangeEvent<HTMLInputElement>) => {
    const target = event.target as HTMLButtonElement;
    setKeywords(target?.value);
  };

  const clearFilters = () => {
    onFilter({});
    setKeywords('');
  };

  const onFilterClick = () => {
    const newFilter: Filter = {
      field: field,
      type: 'like',
      value: keywords,
    };
    onFilter(newFilter);
  };

  return (
    <>
      <Select
        data-testid="select-filter"
        showSearch
        style={{ width: 200 }}
        placeholder="Select a filter"
        optionFilterProp="children"
        onChange={onFieldChange}
        onSearch={onSearch}
        filterOption={false}
      >
        <Option value="name">Name</Option>
        <Option value="id">Id</Option>
      </Select>

      <Search
        data-testid="search"
        placeholder="Search"
        value={keywords}
        allowClear
        onSearch={onSearch}
        onChange={onSearchChange}
        style={{ width: 200 }}
      />
      <Button
        data-testid="filter-button"
        disabled={!field || !keywords}
        onClick={onFilterClick}
      >
        Filter
      </Button>
      <Button
        data-testid="clear-filters"
        disabled={!field || !keywords}
        onClick={clearFilters}
      >
        Clear filters
      </Button>
    </>
  );
};

export default Filters;
