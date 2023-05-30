import React from 'react';

const MainPage: React.FC = () => {
  const [data, setData] = React.useState('');

  return (
    <>
      <input type="text" onChange={(event) => setData(event.target.value)} />
      <p>Data: {data}</p>
    </>
  );
};

export default MainPage;
