import React, { useState } from 'react';

// Todo コンポーネントの定義
const Todo: React.FC = () => {
  const [todo, setTodo] = useState('Hello, React!');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // 追加処理をここに追加します
    console.log('Todo added:', todo);
    setTodo(''); // フォームをリセット
  };

  return (
    <div>
          <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
        />
        <input
          type="submit"
          value="追加"
        />
      </form>
    </div>
  );
};

export default Todo;
