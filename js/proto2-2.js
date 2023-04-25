// -------------------- Fortune types
const fortuneTypes = [
    "始めてみるといいことがある趣味",
    "飲んでみるといいことがある日本酒",
    "行くといいことがあるサウナ",
    "探索するといいことがある地下鉄の駅",
    // "意識してみるといいことがある筋肉",
    // "レシピを見るといいことがある料理",
    // "読んでみるといいことがある書籍",
    // "試しに使ってみるといいことがあるAIサービス",
    // "話してみるといいことがあるストレングスファインダー",
    // "使ってみるといい質問",
];


// -------------------- Define the API fortune fetching functions
async function fetchApiFortune1() {
    // First API call
    const response1 = await $.getJSON("/api/brands");
    // Second API call (if needed)
    const response2 = await $.getJSON("/api/breweries");
    // Third API call (if needed)
    const response3 = await $.getJSON("/api/flavor-charts");

    // Combine and adapt the data from all API calls
    const adaptedData = adaptApiData1(response1, response2, response3);

    return adaptedData;
}

async function fetchApiFortune2() {
    // First API call
    const response1 = await $.getJSON("https://api1.example.com/fortune");
    // Second API call (if needed)
    const response2 = await $.getJSON("https://api2.example.com/fortune");

    // Combine and adapt the data from both API calls
    const adaptedData = adaptApiData1(response1, response2);

    return adaptedData;
}

async function fetchApiFortune3() {
    // First API call
    const response1 = await $.getJSON("https://api1.example.com/fortune");
    // Second API call (if needed)
    const response2 = await $.getJSON("https://api2.example.com/fortune");

    // Combine and adapt the data from both API calls
    const adaptedData = adaptApiData1(response1, response2);

    return adaptedData;
}

async function fetchApiFortune4() {
    // First API call
    const response1 = await $.getJSON("https://api1.example.com/fortune");
    // Second API call (if needed)
    const response2 = await $.getJSON("https://api2.example.com/fortune");

    // Combine and adapt the data from both API calls
    const adaptedData = adaptApiData1(response1, response2);

    return adaptedData;
}

async function fetchApiFortune5() {
    // First API call
    const response1 = await $.getJSON("https://api1.example.com/fortune");
    // Second API call (if needed)
    const response2 = await $.getJSON("https://api2.example.com/fortune");

    // Combine and adapt the data from both API calls
    const adaptedData = adaptApiData1(response1, response2);

    return adaptedData;
}


// -------------------- Define the data adaptation functions
function adaptApiData1(response1, response2, response3) {
    // Implement the data mapping for API占い1, combining data from all responses
    return response1.data.map((item1, index) => {
        const item2 = response2.data.find((element) => element.id === item1.breweryId);
        const item3 = response3.data.find((element) => element.brandId === item1.id);

        return {
            id: item1.id,
            name: "おすすめのお酒: " + item1.name || "",
            description1: item2 ? "蔵元: " + item2.name || "" : "",
            description2: item2 ? item2.someDescription2 || "" : "",
            description3: item2 ? item2.someDescription3 || "" : "",
            description4: item2 ? item2.someDescription4 || "" : "",
            parameter1: item3 ? item3.f1 || "" : "",
            parameter2: item3 ? item3.f2 || "" : "",
            parameter3: item3 ? item3.f3 || "" : "",
            parameter4: item3 ? item3.f4 || "" : "",
            parameter5: item3 ? item3.f5 || "" : "",
            parameter6: item3 ? item3.f6 || "" : "",
        };
    });
}

function adaptApiData2(response1, response2) {
    // Implement the data mapping for API占い1, combining data from all responses
    return response1.data.map((item1, index) => {
        const item2 = response2.data[index];

        return {
            id: item1.id,
            name: item1.name,
            description1: "追加の文字列: " + item1.someDescription1,
            description2: item1.someDescription2 || "",
            description3: item2.someDescription3 || "",
            description4: item2.someDescription4 || "",
            parameter1: item1.someParameter1 || "",
            parameter2: item1.someParameter2 || "",
            parameter3: item2.someParameter3 || "",
            parameter4: item2.someParameter4 || "",
            parameter5: item1.someParameter5 || "",
            parameter6: item2.someParameter6 || "",
        };
    });
}

function adaptApiData3(response1, response2) {
    // Implement the data mapping for API占い1, combining data from all responses
    return response1.data.map((item1, index) => {
        const item2 = response2.data[index];

        return {
            id: item1.id,
            name: item1.name,
            description1: "追加の文字列: " + item1.someDescription1,
            description2: item1.someDescription2 || "",
            description3: item2.someDescription3 || "",
            description4: item2.someDescription4 || "",
            parameter1: item1.someParameter1 || "",
            parameter2: item1.someParameter2 || "",
            parameter3: item2.someParameter3 || "",
            parameter4: item2.someParameter4 || "",
            parameter5: item1.someParameter5 || "",
            parameter6: item2.someParameter6 || "",
        };
    });
}

function adaptApiData4(response1, response2) {
    // Implement the data mapping for API占い1, combining data from all responses
    return response1.data.map((item1, index) => {
        const item2 = response2.data[index];

        return {
            id: item1.id,
            name: item1.name,
            description1: "追加の文字列: " + item1.someDescription1,
            description2: item1.someDescription2 || "",
            description3: item2.someDescription3 || "",
            description4: item2.someDescription4 || "",
            parameter1: item1.someParameter1 || "",
            parameter2: item1.someParameter2 || "",
            parameter3: item2.someParameter3 || "",
            parameter4: item2.someParameter4 || "",
            parameter5: item1.someParameter5 || "",
            parameter6: item2.someParameter6 || "",
        };
    });
}

function adaptApiData5(response1, response2) {
    // Implement the data mapping for API占い1, combining data from all responses
    return response1.data.map((item1, index) => {
        const item2 = response2.data[index];

        return {
            id: item1.id,
            name: item1.name,
            description1: "追加の文字列: " + item1.someDescription1,
            description2: item1.someDescription2 || "",
            description3: item2.someDescription3 || "",
            description4: item2.someDescription4 || "",
            parameter1: item1.someParameter1 || "",
            parameter2: item1.someParameter2 || "",
            parameter3: item2.someParameter3 || "",
            parameter4: item2.someParameter4 || "",
            parameter5: item1.someParameter5 || "",
            parameter6: item2.someParameter6 || "",
        };
    });
}


// -------------------- Define the CSV parsing function
// Add 10 adaptCsvData functions
function adaptCsvData1(csvData) {
    // Implement the data mapping for CSV data 1
    return csvData.map((item) => {
        return {
            id: item.id,
            name: item.name,
            description1: item.description1,
            description2: item.someDescription2 || "",
            description3: item.someDescription3 || "",
            description4: item.someDescription4 || "",
            parameter1: item.parameter1 || "",
            parameter2: item.parameter2 || "",
            parameter3: item.parameter3 || "",
            parameter4: item.parameter4 || "",
            parameter5: item.parameter5 || "",
            parameter6: item.parameter6 || "",
        };
    });
}

function adaptCsvData2(csvData) {
// Implement the data mapping for CSV data 2
    return csvData.map((item) => {
        return {
            id: item.id,
            name: item.name,
            description1: item.description1,
            description2: item.description2 || "",
            description3: item.description3 || "",
            description4: item.description4 || "",
            parameter1: item.parameter1 || "",
            parameter2: item.parameter2 || "",
            parameter3: item.parameter3 || "",
            parameter4: item.parameter4 || "",
            parameter5: item.parameter5 || "",
            parameter6: item.parameter6 || "",
        };
    });
}

function adaptCsvData3(csvData) {
    // Implement the data mapping for CSV data 2
    return csvData.map((item) => {
        return {
            id: item.id,
            name: item.name,
            description1: item.description1,
            description2: item.description2 || "",
            description3: item.someDescription3 || "",
            description4: item.someDescription4 || "",
            parameter1: item.parameter1 || "",
            parameter2: item.parameter2 || "",
            parameter3: item.parameter3 || "",
            parameter4: item.parameter4 || "",
            parameter5: item.parameter5 || "",
            parameter6: item.parameter6 || "",
        };
    });
}

function adaptCsvData4(csvData) {
    // Implement the data mapping for CSV data 2
    return csvData.map((item) => {
        return {
            id: item.id,
            name: item.name,
            description1: item.description1,
            description2: item.description2 || "",
            description3: item.someDescription3 || "",
            description4: item.someDescription4 || "",
            parameter1: item.parameter1 || "",
            parameter2: item.parameter2 || "",
            parameter3: item.parameter3 || "",
            parameter4: item.parameter4 || "",
            parameter5: item.parameter5 || "",
            parameter6: item.parameter6 || "",
        };
    });
}

function adaptCsvData5(csvData) {
    // Implement the data mapping for CSV data 2
    return csvData.map((item) => {
        return {
            id: item.id,
            name: item.name,
            description1: item.description1,
            description2: item.someDescription2 || "",
            description3: item.someDescription3 || "",
            description4: item.someDescription4 || "",
            parameter1: item.parameter1 || "",
            parameter2: item.parameter2 || "",
            parameter3: item.parameter3 || "",
            parameter4: item.parameter4 || "",
            parameter5: item.parameter5 || "",
            parameter6: item.parameter6 || "",
        };
    });
}

function adaptCsvData6(csvData) {
    // Implement the data mapping for CSV data 2
    return csvData.map((item) => {
        return {
            id: item.id,
            name: item.name,
            description1: item.description1,
            description2: item.someDescription2 || "",
            description3: item.someDescription3 || "",
            description4: item.someDescription4 || "",
            parameter1: item.parameter1 || "",
            parameter2: item.parameter2 || "",
            parameter3: item.parameter3 || "",
            parameter4: item.parameter4 || "",
            parameter5: item.parameter5 || "",
            parameter6: item.parameter6 || "",
        };
    });
}

function adaptCsvData7(csvData) {
    // Implement the data mapping for CSV data 2
    return csvData.map((item) => {
        return {
            id: item.id,
            name: item.name,
            description1: item.description1,
            description2: item.someDescription2 || "",
            description3: item.someDescription3 || "",
            description4: item.someDescription4 || "",
            parameter1: item.parameter1 || "",
            parameter2: item.parameter2 || "",
            parameter3: item.parameter3 || "",
            parameter4: item.parameter4 || "",
            parameter5: item.parameter5 || "",
            parameter6: item.parameter6 || "",
        };
    });
}

function adaptCsvData8(csvData) {
    // Implement the data mapping for CSV data 2
    return csvData.map((item) => {
        return {
            id: item.id,
            name: item.name,
            description1: item.description1,
            description2: item.someDescription2 || "",
            description3: item.someDescription3 || "",
            description4: item.someDescription4 || "",
            parameter1: item.parameter1 || "",
            parameter2: item.parameter2 || "",
            parameter3: item.parameter3 || "",
            parameter4: item.parameter4 || "",
            parameter5: item.parameter5 || "",
            parameter6: item.parameter6 || "",
        };
    });
}

function adaptCsvData9(csvData) {
    // Implement the data mapping for CSV data 2
    return csvData.map((item) => {
        return {
            id: item.id,
            name: item.name,
            description1: item.description1,
            description2: item.someDescription2 || "",
            description3: item.someDescription3 || "",
            description4: item.someDescription4 || "",
            parameter1: item.parameter1 || "",
            parameter2: item.parameter2 || "",
            parameter3: item.parameter3 || "",
            parameter4: item.parameter4 || "",
            parameter5: item.parameter5 || "",
            parameter6: item.parameter6 || "",
        };
    });
}

function adaptCsvData10(csvData) {
// Implement the data mapping for CSV data 10
return csvData.map((item) => {
    return {
        id: item.id,
        name: item.name,
        description1: item.description1,
        description2: item.someDescription2 || "",
        description3: item.someDescription3 || "",
        description4: item.someDescription4 || "",
        parameter1: item.parameter1 || "",
        parameter2: item.parameter2 || "",
        parameter3: item.parameter3 || "",
        parameter4: item.parameter4 || "",
        parameter5: item.parameter5 || "",
        parameter6: item.parameter6 || "",
    };
});
}

function parseCSV(csvData, fortuneType) {
    const parsedData = Papa.parse(csvData, {
        header: true,
        skipEmptyLines: true,
    });

    // Choose the appropriate adaptCsvData function based on fortuneType
    let adaptedData;
    switch (fortuneType) {
        case "始めてみるといいことがある趣味":
            adaptedData = adaptCsvData1(parsedData.data);
            break;
        case "飲んでみるといいことがある日本酒":
            adaptedData = adaptCsvData2(parsedData.data);
            break;
        case "行くといいことがあるサウナ":
            adaptedData = adaptCsvData3(parsedData.data);
            break;
        case "探索するといいことがある地下鉄の駅":
            adaptedData = adaptCsvData4(parsedData.data);
            break;
        case "CSV占い5":
            adaptedData = adaptCsvData5(parsedData.data);
            break;
        case "CSV占い6":
            adaptedData = adaptCsvData6(parsedData.data);
            break;
        case "CSV占い7":
            adaptedData = adaptCsvData7(parsedData.data);
            break;
        case "CSV占い8":
            adaptedData = adaptCsvData8(parsedData.data);
            break;
        case "CSV占い9":
            adaptedData = adaptCsvData9(parsedData.data);
            break;
        case "CSV占い10":
            adaptedData = adaptCsvData10(parsedData.data);
            break;
        default:
        throw new Error("Unknown fortuneType for CSV data");
    }

    return adaptedData;
}

// -------------------- function createResultHtml(result) { ... }
function createResultHtml(result) {
    return `
        <h4>${result.name}</h4>
        <p>${result.description1}</p>
        <p>${result.description2}</p>
        <p>${result.description3}</p>
        <p>${result.description4}</p>
    `;
}

// -------------------- Define the result display function
function euclideanDistance(pointA, pointB) {
    if (pointA.length !== pointB.length) {
        throw new Error("The dimensions of the input points must be the same.");
    }

    let distance = 0;
    for (let i = 0; i < pointA.length; i++) {
      distance += (pointA[i] - pointB[i]) ** 2;
      console.log(pointA[i]);
      console.log(pointB[i]);
      console.log(distance);
    }

    return Math.sqrt(distance);
}
function displayResults(fortuneResults) {
    const yourResult = fortuneResults[Math.floor(Math.random() * fortuneResults.length)];
    const myResult = fortuneResults[Math.floor(Math.random() * fortuneResults.length)];
    const pointA = [
        yourResult.parameter1 ?? 128,
        yourResult.parameter2 ?? 128,
        yourResult.parameter3 ?? 128,
        yourResult.parameter4 ?? 128,
        yourResult.parameter5 ?? 128,
        yourResult.parameter6 ?? 128,
    ];
    const pointB = [
        myResult.parameter1 ?? 128,
        myResult.parameter2 ?? 128,
        myResult.parameter3 ?? 128,
        myResult.parameter4 ?? 128,
        myResult.parameter5 ?? 128,
        myResult.parameter6 ?? 128,
    ];
    const distance = euclideanDistance(pointA, pointB);
    console.log("Euclidean distance:", distance);

    let compatibility;

    if (distance <= 102.57) {
    compatibility = 'SSS';
    } else if (distance <= 141.73) {
    compatibility = 'SS';
    } else if (distance <= 164.66) {
    compatibility = 'S';
    } else if (distance <= 193.54) {
    compatibility = 'A';
    } else if (distance <= 232.62) {
    compatibility = 'B';
    } else if (distance <= 265.47) {
    compatibility = 'C';
    } else if (distance <= 302.43) {
    compatibility = 'D';
    } else if (distance <= 329.24) {
    compatibility = 'E';
    } else {
    compatibility = 'Z';
    }

    console.log(compatibility);

    $("#your-result").html(createResultHtml(yourResult));
    $("#my-result").html(createResultHtml(myResult));
    $("#our-result").html(`<p>${compatibility}</p>`);

    $("#results").show();
}

// -------------------- Your fetchFortuneResults function comes here
async function fetchFortuneResults(fortuneType) {
    const apiFortunes = {
        "日本酒占い": fetchApiFortune1,
        "API占い2": fetchApiFortune2,
        "API占い3": fetchApiFortune3,
        "API占い4": fetchApiFortune4,
        "API占い5": fetchApiFortune5,
    };

    const apiFetchFunction = apiFortunes[fortuneType];

    if (apiFetchFunction) {
        try {
            const fortuneResults = await apiFetchFunction();
            displayResults(fortuneResults);
        } catch (error) {
            console.error("Error fetching fortune data from API:", error);
        }
    } else {
        try {
            const response = await fetch(`csv/${fortuneType}.csv`);
            const csvData = await response.text();
            const fortuneResults = parseCSV(csvData, fortuneType); // Pass fortuneType
            displayResults(fortuneResults);
        } catch (error) {
            console.error("Error fetching fortune data from CSV:", error);
        }
    }
}


// -------------------- let selectedFortune = ""; から始まるイベントハンドラの設定
let selectedFortune = "";

let selectedFortunes = [];
$("#cards").empty();

for (let i = 0; i < 3; i++) {
    let randomIndex = Math.floor(Math.random() * fortuneTypes.length);
    let fortune = fortuneTypes[randomIndex];

    if (!selectedFortunes.includes(fortune)) {
        selectedFortunes.push(fortune);
        $("#cards").append(`<div class="card selectable-fortune" style="display: none;"><p class="text-dark m-0">${fortune}</p></div>`);
    } else {
        i--;
    }
}

// selectable-fortune クラスの click イベントを、生成時にバインドするように変更
$(".selectable-fortune").on("click", async function () {
    selectedFortune = $(this).text();
    $('#cards').fadeOut(1000)
    $('#scene4').fadeOut(1000)
    $('.selectable-fortune').fadeOut(1000)
    $("#start-btn-container").fadeIn(2000);
    await fetchFortuneResults(selectedFortune);
    fetchFortuneResults(selectedFortune);
});



// -------------------- $(document).ready(() => { ... }); を含むドキュメントレディイベントハンドラ
$(document).ready(() => {
    $("#fortuneSelector").on("change", async (event) => {
      const fortuneType = $(event.target).val();

      if (fortuneType) {
        await fetchFortuneResults(fortuneType);
      }
    });
  });