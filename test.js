const express = require("express");
const app = express();
app.set("view engine", "ejs");

//이미지파일 랜더하는 코드
// app.use(express.static("public"));
app.use("/public", express.static("static")); //ejs에서 경로를 /public으로 해줬을때 실제 파일폴더 이름인 static으로 바꿔줘라는 명령

const port = 8000;
// 8000 or 3000 or 8080

app.get("/", (req, res) => {
  // req 요청, res 응답

  // res.send("hello");

  // 파일 자체를 가져오는 방법 : 아래처럼 절대경로도 넣어주어야함(__dirname)
  // res.sendFile(__dirname + "/test.html");

  //ejs
  // res.render("test");

  var person = [
    { name: "han", gender: "duwk" },
    { name: "handsfdf", gender: "man" },
  ];
  res.render("test", { per: person });
});

app.listen(port, () => {
  console.log("server open", port);
});

// 경로이동 예를들어 a태그
app.get("/test1", (req, res) => {
  res.render("test1");
});
