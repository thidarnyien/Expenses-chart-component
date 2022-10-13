const expContainer = document.querySelector(".expContainer")
const dailyExpenses = [
    {
      "day": "mon",
      "amount": 17.45
    },
    {
      "day": "tue",
      "amount": 34.91
    },
    {
      "day": "wed",
      "amount": 52.36
    },
    {
      "day": "thu",
      "amount": 31.07
    },
    {
      "day": "fri",
      "amount": 23.39
    },
    {
      "day": "sat",
      "amount": 43.28
    },
    {
      "day": "sun",
      "amount": 25.48
    }
  ]
for (let i = 0; i < dailyExpenses.length; i++) {
    let div = document.createElement("div");
    div.classList.add("text-center");

    let dollar = document.createElement("p");
    dollar.classList.add("dollar");
    dollar.textContent ="$ "+ dailyExpenses[i].amount.toString();
    
    let progressDiv = document.createElement("div")
    progressDiv.classList.add("progress");

    let chart = document.createElement("div")
    chart.classList.add("chart", dailyExpenses[i].day);
    chart.style.height = ((240/80)* dailyExpenses[i].amount).toString() + "px";
    chart.addEventListener("mouseenter", ()=> {
      dollar.classList.toggle("d-block");
    })

    let day = document.createElement("p");
    day.textContent = dailyExpenses[i].day;

    progressDiv.append(dollar,chart);
    div.append(progressDiv,day);
    expContainer.append(div);
    
}