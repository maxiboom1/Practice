// prompt - the text that sent to gpt
// completion = gpt response
// prompt engineering - the art of verbatim a correct prompt
// Token - a part of a word that gpt uses in its algorithms. a word is in 4 tokens
// The maximum tokens for a single prompt + completion is 4096 tokens


async function generate (){
    try{
        const programmingLanguageBox= document.getElementById("programmingLanguageBox");
        const difficultyBox =document.getElementById("difficultyBox");
        const countBox = document.getElementById("countBox");
        const questionsDiv = document.getElementById("questionsDiv");

        const language = programmingLanguageBox.value;
        const difficulty = difficultyBox.value;
        const count = countBox.value;

        // Create prompt with input values:
        const prompt = generatePrompt(language, difficulty, count);
        // Get completion
        const completion = await getCompletion(prompt);

        // Display:
        questionsDiv.innerHTML = completion;
    }catch(err){
        alert(err.message);
    }


function generatePrompt(language, difficulty, count){
    

    let prompt = `${personalInput}:
    Write ${count} job interview questions for ${language} programming language.
    Each question should be suitable for ${difficulty} difficulty level.
    Each question should be wrapped with an HTML paragraph
    Under each question place hidden answer that can be collapsed by user click
    `;

    return prompt.trim();
}

async function getCompletion(prompt){
    

    // API Key:
    const apiKey = "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";

    //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 - Assaf

    // URL:
    const url = "https://api.openai.com/v1/completions";

    // Request body:
    const body = {
        prompt, // The prompt
        model:"text-davinci-003", // ChatGPT algorithm
        max_tokens: 2500,// Max completion tokens
    };

    const options = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
            "Authorization": "Bearer " + apiKey
        },
        body: JSON.stringify(body)
    };

    // Fetch:
    const response = await fetch(url, options);
    const json = await response.json();

    // If there is an error:
    if(response.status >= 400) throw json.error;

    // Extract the completion:
    const completion = json.choices[0].text;

    return completion;
}

}