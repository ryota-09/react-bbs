/* eslint-disable react-hooks/exhaustive-deps */
import { ChangeEvent, useEffect, useState } from "react";
import { useArticleList } from "./hooks/useArticleList";

import "./App.css";
import { usePostArticle } from "./hooks/usePostArticle";
import { useCommentList } from "./hooks/useCommentList";

function App() {
  const [articleName, setArticleName] = useState("");
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const { articleList, getArticleList } = useArticleList();
  const { postArticle } = usePostArticle();
  const { commentList, getCommentList } = useCommentList();

  useEffect(() => {
    getArticleList();
    getCommentList();
  }, []);

  const onChangeName = (event: ChangeEvent<HTMLInputElement>) => {
    setArticleName(event.target.value);
  };
  const onChangeTitle = (event: ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value);
  };
  const onChangeBody = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setBody(event.target.value);
  };

  

  return (
    <div className="App">
      <h1>掲示板アプリ</h1>
      <div className="post-field">
        <span>投稿者名: </span>
        <input type="text" value={articleName} onChange={onChangeName} />
        <div>
          <span>記事タイトル: </span>
          <input type="text" value={title} onChange={onChangeTitle} />
        </div>
        <div>
          <span>投稿内容: </span>
          <textarea
            cols={30}
            rows={5}
            value={body}
            onChange={onChangeBody}
          ></textarea>
        </div>
        <button type="button" onClick={() => postArticle(title, body)}>記事投稿</button>
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
