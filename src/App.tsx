/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import { useArticleList } from "./hooks/useArticleList";

import "./App.css";

function App() {
  const { articleList, getArticleList } = useArticleList();
  
  useEffect(() => {
    getArticleList();
  },[])

  return (
    <div className="App">
      <h1>掲示板アプリ</h1>
      {articleList.map((article) => (
        <div key={article.id}>
          <p>{article.title}</p>
          <p>{article.body}</p>
          <hr />
        </div>
      ))}
    </div>
  );
}

export default App;
