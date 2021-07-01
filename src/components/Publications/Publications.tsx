import React, { useState, useEffect } from 'react';
import usePublications, {
  Filter,
  Publication,
} from '../../hooks/usePublications';
import 'antd/dist/antd.css';
import { Spin, Space, List, Card } from 'antd';
import Filters from '../Filters/Filters';

const Publications = () => {
  const [filter, setFilter] = useState({});

  const { status, data, refetch, isFetching } = usePublications(filter);

  const onFilter = (newFilter: Filter | {}) => {
    setFilter([newFilter]);
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
        <Filters onFilter={onFilter} />
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
            renderItem={(item: Publication) => (
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
};

export default Publications;
