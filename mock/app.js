const cheerio = require('cheerio');
const fs = require('fs');
const sres = fs.readFileSync('./data1.html', 'utf8');
// sres.text 里面存储着网页的 html 内容，将它传给 cheerio.load 之后
// 就可以得到一个实现了 jquery 接口的变量，我们习惯性地将它命名为 `$`
// 剩下就都是 jquery 的内容了
const $ = cheerio.load(sres);
$('.nav li').each((index, element) => {
  const $element = $(element);
  // console.log($element.text());
});
console.log($('#leftcol h1').text());