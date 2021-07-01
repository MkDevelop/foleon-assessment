import React, { useState, useEffect } from 'react';
import usePublications, { Filter } from '../hooks/usePublications';
import 'antd/dist/antd.css';
import { Spin, Space, List, Card, Select, Input, Button } from 'antd';
const { Option } = Select;
const { Search } = Input;

export interface Publications {
  id: string;
  name: string;
  identifier?: string;
  hostname?: string;
}

function Publications({}) {
  const [keywords, setKeywords] = useState('');
  const [field, setField] = useState('');
  const [filter, setFilter] = useState({});

  const { status, data, refetch, isFetching } = usePublications(filter);
  function onFieldChange(value: any) {
    setField(value);
    console.log(`selected ${value}`);
  }

  function onSearch(val: any) {
    if (val === '') setFilter({});
  }

  function onSearchChange(event: any) {
    setKeywords(event.target.value);
  }

  const onFilter = () => {
    const newFilter: Filter = {
      field: field,
      type: 'like',
      value: keywords,
    };
    setFilter([newFilter]);
  };

  const clearFilters = () => {
    setFilter({});
    setKeywords('');
  };

  useEffect(() => {
    refetch();
  }, [filter]);

  return (
    <>
      {isFetching && (
        <Space size="middle">
          <Spin size="large" />
        </Space>
      )}
      <>
        <Select
          data-testid={'select-filter'}
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
          data-testid={'search'}
          placeholder="Search"
          value={keywords}
          allowClear
          onSearch={onSearch}
          onChange={onSearchChange}
          style={{ width: 200 }}
        />
        <Button
          data-testid={'filter-button'}
          disabled={!field || !keywords}
          onClick={onFilter}
        >
          Filter
        </Button>
        <Button
          data-testid={'clear-filters'}
          disabled={!field || !keywords}
          onClick={clearFilters}
        >
          Clear filters
        </Button>
        {status === 'success' && data && data.title.length === 0 && (
          <p>No results</p>
        )}
        {!isFetching && status === 'success' && data && data.title.length > 0 && (
          <List
            data-testid="publications-list"
            grid={{
              gutter: 16,
              xs: 1,
              sm: 2,
              md: 4,
              lg: 4,
              xl: 6,
              xxl: 3,
            }}
            pagination={{
              showSizeChanger: true,
              pageSizeOptions: ['5', '10', '100', '1000'],
              position: 'both',
            }}
            dataSource={data.title}
            renderItem={(item: Publications) => (
              <List.Item data-testid="publications-list">
                <Card title={item.name}>
                  <p>name: {item.name}</p>
                  <p>id: {item.id}</p>
                </Card>
              </List.Item>
            )}
          />
        )}
      </>
    </>
  );
}
export default Publications;
