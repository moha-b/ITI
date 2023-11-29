// Q1
// images
let images = document.images;
console.log(images);
let anotherImages =
    document.querySelectorAll("img");
console.log(anotherImages);

// drop down a list
let arr = [];
let selector = document.querySelectorAll(".bPink")[1];
for (let i = 0; i < selector.length; i++) {
    arr[i] = selector[i].textContent;
}
console.log(arr);
// tds
let row = document.querySelectorAll("table")[1].querySelectorAll("tr");
let array = [];
for (let i = 0; i < row.length; i++) {
    let cells = row[i].querySelectorAll("td");
    array[i] = [];
    for (let j = 0; j < cells.length; j++) {
        array[i][j] = cells[j].textContent;
    }
}
console.log(array);
// class name
console.log(document.getElementsByClassName("fontBlue bGrey "));

// Q2
function createTrackList(trackName, parentElement) {

    let trackList = document.createElement('ul');

    let titleElement = document.createElement('h2');
    titleElement.textContent = trackName;

    parentElement.appendChild(titleElement);

    parentElement.appendChild(trackList);

    return trackList;
}

function addCourse(courseName, trackListElement) {
    let listItem = document.createElement('li');
    listItem.textContent = courseName;

    trackListElement.appendChild(listItem);
}

function removeCourse(courseName, trackListElement) {
    let courseItems = trackListElement.getElementsByTagName('li');
    for (let i = 0; i < courseItems.length; i++) {
        if (courseItems[i].textContent === courseName) {
            trackListElement.removeChild(courseItems[i]);
            break;
        }
    }
}

function moveCourse(courseName, targetTrackListElement) {
    let sourceCourseList = document.querySelector('ul');
    let courseItems = sourceCourseList.getElementsByTagName('li');
    for (let i = 0; i < courseItems.length; i++) {
        if (courseItems[i].textContent === courseName) {
            sourceCourseList.removeChild(courseItems[i]);
            addCourse(courseName, targetTrackListElement);
            break;
        }
    }
}

let parentElement = document.getElementById("paragraph1");
let track_1 = createTrackList("Track 1",parentElement);
addCourse("Js development",track_1);

// Q3
setInterval(function () {
    let randomNumber = Math.round(Math.random() * 7) + 1;
    images[0].src = `images/${randomNumber}.jpg`
},1000);

