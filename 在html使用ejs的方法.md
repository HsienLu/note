#在 html 使用 ejs 的方法

### ejs 常用簡單語法介紹

1.撰寫程式邏輯

```jsx
<% "這裡寫程式邏輯" %>
```

2.傳遞參數

```jsx
<%= "傳遞參數" %>
```

3.傳遞 HTML 語法

```jsx
<%- "傳遞HTML語法" %>
```

<%= %> 和 <%- %>差別
"=":會完整傳遞
"-":它看得懂 HTML 語法

4.匯入 ejs:有兩個參數
第一個參數是路徑
第二個參數是要傳進去的變數要用物件包起來，有點像 React 的 Props

```jsx
<%- include("./layout/test",{element,id}) %>
```

### 範例

1.ejs 模板

```jsx
//檔名:test.ejs
<h1>hello world <%= element %><%= id %></h1>
```

2.要寫的 html，只列 body

```jsx
<% let name=["Robin","Amy","Ann"] %>//這裡是定義變數，未來可能會打API存在這
<% name.map((element,id)=> { %>//因為中間要塞這個可以轉譯HTML的語法，所以拆開來寫
<%- include("./layout/test",{element,id}) %>//匯入剛剛的ejs模板並帶入變數
<% }); %>//因為中間要塞這個可以轉譯HTML的語法，所以拆開來寫
```

3.完成結果如下
![](https://i.imgur.com/B91Jqx1.png)
