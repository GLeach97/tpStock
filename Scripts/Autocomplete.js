let availableKeywords = [
  { keyword: "Statuario Mercury Gloss 30 x 60", url: "/stat-merc-gloss-30x60" },
  { keyword: "Statuario Mercury Gloss 60 x 60", url: "/stat-merc-gloss-60x60" },
  { keyword: "Statuario Mercury Gloss 120 x 60", url: "/stat-merc-gloss-120x60" },
  { keyword: "Statuario Mercury Gloss 80 x 80", url: "/stat-merc-gloss-80x80" },
  { keyword: "Statuario Mercury Matt 30 x 60", url: "/stat-merc-matt-30x60" },
  { keyword: "Statuario Mercury Matt 60 x 60", url: "/stat-merc-matt-60x60" },
  { keyword: "Statuario Mercury Matt 120 x 60", url: "stat-merc-matt-120x60.html"}
];

const resultsBox = document.querySelector(".resultsBox");
const inputBox = document.getElementById("input-box");

inputBox.onkeyup = function(){
  let result = [];
  let input = inputBox.value;
  if(input.length){
    result = availableKeywords.filter((item)=>{
     return item.keyword.toLowerCase().includes(input.toLowerCase());
    })
    console.log(result);
  }
  Display(result);

  if (!result.length){
    resultsBox.innerHTML = "";
  }
}

function Display(results){
  const content = results.map((item)=>{
    return `<li onclick="selectInput('${item.keyword}', '${item.url}')">${item.keyword}</li>`;
  })

  resultsBox.innerHTML = "<ul>" + content.join("") + "</ul>";
}

function selectInput(keyword, url){
  inputBox.value = keyword;
  window.location.href = url;
  resultsBox.innerHTML = "";
}