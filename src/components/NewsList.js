// newsitem을 만들었으니까 이제 리스트도 만들어볼게요
import React from 'react';
import styled from 'styled-components';
import NewsItem from 'components/NewsItem';
import axios from 'axios';
import { useState } from 'react';
import { useEffect } from 'react';

// 실제로 아티클의 데이터는 여기 뉴스리스트에서 진행할거에요.
// 일단 더미데이터로 어떻게 ui가 나오는지 볼게요
// 이제 진짜 데이터를 가지고 와서 연동할거에요
// 항상 명심해야할 것은 데이터처리는 useEffect를 사용하셔서
// 처음 렌더링 되는 시점에서 데이터를 요청하면 되여
// 단 useEffect는 async를 쓸수가 없어요

const NewsList = ({ category }) => {
  const [articles, setArticles] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // 아까 제가 쓰지 말라고 했었는데 async를 써봤어요
    // 이럴 땐 이렇게 함수를 따로 선언 해주시면 되요
    const fetchData = async () => {
      setLoading(true);
      try {
        const query = category === 'all' ? '' : `&category=${category}`;
        const response = await axios.get(
          // apikey는 본인걸로 사용하셔야 되요 (이거 사람들이 마구 쓰면 api 사용 못해요)
          `https://newsapi.org/v2/top-headlines?country=kr${query}&apiKey=f34737c157f04020b28f9deba9877cf5`,
        );
        setArticles(response.data.articles);
      } catch (e) {
        console.log(e);
      }
      setLoading(false);
    };
    fetchData();
  }, [category]);

  // 대기 중일때 로딩창 로직이에요
  if (loading) {
    return <NewsListBlock>대기 중...</NewsListBlock>;
  }
  // 아티클이 없을 때
  // 밑에 코드는 맵함수 사용시에 null값인지 아닌지 먼저 조회를 하는 과정이 필요해요
  // 이게 없으면 null에는 map이 없기 때문에 에러나요
  if (!articles) {
    return null;
  }
  //아티클이 유효할 때
  return (
    <NewsListBlock>
      {articles.map((article) => (
        <NewsItem key={article.url} article={article} />
      ))}
    </NewsListBlock>
  );
};

const NewsListBlock = styled.div`
  box-sizing: border-box;
  padding-bottom: 3rem;
  width: 768px;
  margin: 0 auto;
  margin-top: 2rem;
  @media screen and (max-width: 768px) {
    width: 100%;
    padding-left: 1rem;
    padding-right: 1rem;
  }
`;

//이제 app 컴포넌트 내용 다 지우고 컴포넌트 얹어볼게요

export default NewsList;
