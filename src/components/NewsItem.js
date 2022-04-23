import React from 'react';
import styled from 'styled-components';

// 까먹고 이걸 안했네요.
// 아까 데이터에서 title, description, url, urlToImage라는 정보를 안가져왔어요
// 이걸 가져오려면 파라미터로 전달을 받아야하고
// 전달받은 데이터를 각각에 뿌려줘야해요
// 이렇게 뿌리면 되요

const NewsItem = ({ article }) => {
  const { title, description, url, urlToImage } = article;
  // props로 전달 받은것 처럼 전달하시면 되여~
  return (
    <NewsItemBlock>
      {urlToImage && (
        <div className="thumbnail">
          <a href={url} target="_blank" rel="noopener noreferrer">
            <img src={urlToImage} alt="thumbnail" />
          </a>
        </div>
      )}
      <div className="contents">
        <h2>
          <a href={url} target="_blank" rel="nopenner noreferrer">
            {title}
          </a>
        </h2>
        <p>{description}</p>
      </div>
    </NewsItemBlock>
  );
};

const NewsItemBlock = styled.div`
  display: flex;

  .thumbnail {
    margin-right: 1rem;
    img {
      display: block;
      width: 160px;
      height: 100px;
      object-fit: cover;
    }
  }
  .contents {
    h2 {
      margin: 0;
      a {
        color: #000;
      }
    }
    p {
      margin: 0;
      line-height: 1.5;
      margin-top: 0.5rem;
      white-space: normal;
    }
  }
  & + & {
    margin-top: 3rem;
  }
`;

export default NewsItem;
