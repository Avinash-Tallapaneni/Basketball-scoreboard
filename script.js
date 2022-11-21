let home_scores = document.getElementById("scores_home");
let guest_scores = document.getElementById("scores-guest");

let home_points = 0;
let guest_points = 0;

let one_point =(event) => {
    const name = event.currentTarget.name;
    if (name == "home") {
    home_points +=1;
    home_scores.innerText = home_points; }
    else
   {
    guest_points +=1;
    guest_scores.innerText = guest_points;
 }
}

let two_point =(event) => {
    const name = event.currentTarget.name;
    if (name == "home") {
    home_points +=2;
    home_scores.innerText = home_points; }
    else
   {
    guest_points +=2;
    guest_scores.innerText = guest_points;
 }
}
let five_point =(event) => {
    const name = event.currentTarget.name;
    if (name == "home") {
    home_points +=5;
    home_scores.innerText = home_points; }
    else
   {
    guest_points +=5;
    guest_scores.innerText = guest_points;
 }
}