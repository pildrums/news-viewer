//https://newsapi.org/v2/top-headlines?country=kr&apiKey=f34737c157f04020b28f9deba9877cf5

import Categories from 'components/Categories';
import NewsList from 'components/NewsList';
import React, { useCallback, useState } from 'react';

const App = () => {
  // 뉴스뷰어를 들어왔을때 전체보기부터 나와야하니까 초기값은 all
  const [category, setCategory] = useState('all');
  const onSelect = useCallback((category) => setCategory(category), []);
  return (
    <>
      <Categories category={category} onSelect={onSelect} />
      <NewsList category={category} />
    </>
  );
};

export default App;

// 이제 한번 볼게요
