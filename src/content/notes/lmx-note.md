---
site: lmx
title: "我的学习笔记"
description: "一些前端学习的笔记和心得。"
pubDate: "Apr 15 2026"
heroImage: "/post_img.png"
badge: "学习"
tags: ["前端", "笔记"]
---

## 学习 React Hooks

useState 和 useEffect 是最常用的两个 Hook。

```jsx
function Counter() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    document.title = `点击了 ${count} 次`;
  }, [count]);
  return <button onClick={() => setCount(count + 1)}>+1</button>;
}
```

