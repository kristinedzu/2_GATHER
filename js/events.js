"use strict";

const _eventRef = _db.collection("Events");

function orderByUpcoming() {
    _eventRef.orderBy("date").onSnapshot(function (snapshotData) {
        let events = [];
        snapshotData.forEach(function (doc) {
            let event = doc.data();
            event.id = doc.id;
            events.push(event);
        });
        appendEvents(events);
    });
}

orderByUpcoming();

function orderByLocation() {
    _eventRef.orderBy("location").onSnapshot(function (snapshotData) {
        let events = [];
        snapshotData.forEach(function (doc) {
            let event = doc.data();
            event.id = doc.id;
            events.push(event);
        });
        appendEvents(events);
    });
}

function orderByFriends() {
    _eventRef.orderBy("name").onSnapshot(function (snapshotData) {
        let events = [];
        snapshotData.forEach(function (doc) {
            let event = doc.data();
            event.id = doc.id;
            events.push(event);
        });
        appendEvents(events);
    });
}

// append events to the DOM
function appendEvents(events) {
    let htmlTemplate = "";
    for (let event of events) {
        console.log(event);
        htmlTemplate += `
        <article>
        <img src="${event.img}">
        <h2>${event.name}</h2>
        <p>${event.date}</p>
        <p>${event.location}</p>
        </article>
        `;
    }
    document.querySelector('#movie-container').innerHTML = htmlTemplate;
}














// create new event
// add a new event to firestore 



function createAnEvent() {

    let nameInput = document.querySelector('#name');
    let descriptionInput = document.querySelector('#description');
    let imageInput = document.querySelector('#imagePreview');
    let priceInput = document.querySelector('#price');
    let freeInput = document.querySelector('#free');
    let categoriesInput = document.querySelector('#categories');

    let newEvent = {
        name: nameInput.value,
        description: descriptionInput.value,
        img: imageInput.src,
        price: priceInput.value,
        price: freeInput.value = "0",
        category: categoriesInput.value
    };
    _eventRef.add(newEvent);
    document.getElementById("create").style.display = "none";

}

function search(searchValue) {
    searchValue = searchValue.toLowerCase();
    let filteredEvents = events.filter(event => event.name.toLowerCase().includes(searchValue));

    console.log(filteredEvents);
    appendEvents(events);
}

function previewImage(file, previewId) {
    if (file) {
        _selectedImgFile = file;
        let reader = new FileReader();
        reader.onload = event => {
            document.querySelector('#' + previewId).setAttribute('src', event.target.result);
        };
        reader.readAsDataURL(file);
    }
}

// button to open the form

function openForm() {
    document.getElementById("create").style.display = "block";
}


function closeIcon() {
    document.getElementById("create").style.display = "none";
}











