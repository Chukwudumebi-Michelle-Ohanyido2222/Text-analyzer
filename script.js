const textInput = document.getElementById("textInput");
const analyzeBtn = document.getElementById("analyzeBtn");
const clearBtn = document.getElementById("clearBtn");

const wordCountSpan = document.getElementById("wordCount");
const charCountSpan = document.getElementById("charCount");
const freqWordSpan = document.getElementById("freqWord");


analyzeBtn.addEventListener("click", () => {
  const text = textInput.value.trim();

  if (!text) {
    alert("Please enter some text to analyze!");
    return;
  }

  const words = text.split(/\s+/);
  const wordCount = words.length;
  const charCount = text.replace(/\s/g, "").length;

  
  const freqMap = {};
  words.forEach(word => {
    const w = word.toLowerCase();
    if (freqMap[w]) freqMap[w]++;
    else freqMap[w] = 1;
  });

  let maxFreq = 0;
  let mostFreqWord = "-";
  for (const [word, count] of Object.entries(freqMap)) {
    if (count > maxFreq) {
      maxFreq = count;
      mostFreqWord = word;
    }
  }

  wordCountSpan.textContent = wordCount;
  charCountSpan.textContent = charCount;
  freqWordSpan.textContent = mostFreqWord;
});


clearBtn.addEventListener("click", () => {
  textInput.value = "";
  wordCountSpan.textContent = "0";
  charCountSpan.textContent = "0";
  freqWordSpan.textContent = "-";
});