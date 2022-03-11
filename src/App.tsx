/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { useArticleList } from "./hooks/useArticleList";

import "./App.css";

function App() {
  const [articleName, setArticleName] = useState("");
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const { articleList, getArticleList } = useArticleList();

  useEffect(() => {
    getArticleList();
  }, []);

  return (
    <div className="App">
      <h1>掲示板アプリ</h1>
      <div className="post-field">
        <span>投稿者名: </span>
        <input type="text" value={articleName} />
        <div>
          <span>記事タイトル: </span>
          <input type="text" value={title} />
        </div>
        <div>
          <br />
          <span>投稿内容: </span>
          <textarea cols={20} rows={5} value={body}></textarea>
        </div>
        <button type="button">記事投稿</button>
      </div>
      <hr />
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
