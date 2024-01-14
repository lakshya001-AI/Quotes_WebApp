const new_quote = document.querySelector('.newquote_btn');
const tweet = document.querySelector('.tweetbtn');

const api_url = 'https://type.fit/api/quotes';
async function getData(index){
    const response = await fetch(api_url);
    const data = await response.json();
    const quote = data[index].text;
    const author = data[index].author;
    const slice = author.slice(0,15);
    console.log(data);
    document.querySelector(".quote_display").innerText = quote;
    document.querySelector(".author_display").innerText = slice;

}
let val = 0;
new_quote.addEventListener("click", ()=>{
    getData(val);
    val++;
 });

 function tweetsend(){
    window.open(`https://twitter.com/intent/tweet?text=${document.querySelector(".quote_display").innerText + "\n" + document.querySelector(".author_display").innerText}`);
 }
 


