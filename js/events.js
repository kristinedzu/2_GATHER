"use strict";

const _eventRef = _db.collection("Events");
let _selectedImgFile = "";




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
        let user = [];
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
        <div class="padding">
        <div class= "event_date"
                <h4>${event.month}</h4>
                <h5 class="text-adjust">${event.day}</h5>
            </div>
            <div class="event_title">
                <h2>${event.name}</h2>
                <p class="text-adjust" >Organiser: ${event.organiser}</p>
            </div>
            <h7 clas="event_price">${event.price}</h7>
        </div>
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
        price: freeInput.value = "FREE",
        category: categoriesInput.value
    };
    _eventRef.add(newEvent);
    document.getElementById("create").style.display = "none";
    document.getElementById("myForm").reset();

}

//////////SEARCHBAR FUNCIONALITY
function search(searchValue) {
    _eventRef.onSnapshot(function (snapshotData) {
        let events = [];
        snapshotData.forEach(function (doc) {
            let event = doc.data();
            event.id = doc.id;
            events.push(event);
        });

        searchValue = searchValue.toLowerCase();
        let filteredEvents = events.filter(event => event.name.toLowerCase().includes(searchValue));

        console.log(filteredEvents);
        
        
    });
};





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

function showMe() {
    document.querySelector("#party").innerHTML = "HALLOWEEN PARTY";
}







// filter categories

// fetch all genres / categories from WP




function openMusic(value) {
    _eventRef.onSnapshot(function (snapshotData) {
        let events = [];
        snapshotData.forEach(function (doc) {
            let event = doc.data();
            event.id = doc.id;
            events.push(event);
        });

        value = "music";
        let filteredEvents = events.filter(event => event.category.includes("music"));

        console.log(filteredEvents);
        appendCategories(filteredEvents);
    });
    document.getElementById("categories-container").style.display = "none";
    document.getElementById("searchbar").style.display = "none";
    document.getElementById("closeCatBut").style.display = "block";
    document.getElementById("closeCatBut").innerHTML = "&#10005;" + "&emsp;" + "Music";
};

function openParty(value) {
    _eventRef.onSnapshot(function (snapshotData) {
        let events = [];
        snapshotData.forEach(function (doc) {
            let event = doc.data();
            event.id = doc.id;
            events.push(event);
        });

        value = "party";
        let filteredEvents = events.filter(event => event.category.includes("party"));

        console.log(filteredEvents);
        appendCategories(filteredEvents);
    });
    document.getElementById("categories-container").style.display = "none";
    document.getElementById("searchbar").style.display = "none";
    document.getElementById("closeCatBut").style.display = "block";
    document.getElementById("closeCatBut").innerHTML = "&#10005;" + "&emsp;" + "Party";
};

function openSport(value) {
    _eventRef.onSnapshot(function (snapshotData) {
        let events = [];
        snapshotData.forEach(function (doc) {
            let event = doc.data();
            event.id = doc.id;
            events.push(event);
        });

        value = "sport";
        let filteredEvents = events.filter(event => event.category.includes("sport"));

        console.log(filteredEvents);
        appendCategories(filteredEvents);
    });
    document.getElementById("categories-container").style.display = "none";
    document.getElementById("searchbar").style.display = "none";
    document.getElementById("closeCatBut").style.display = "block";
    document.getElementById("closeCatBut").innerHTML = "&#10005;" + "&emsp;" + "Sport";
};

function openArt(value) {
    _eventRef.onSnapshot(function (snapshotData) {
        let events = [];
        snapshotData.forEach(function (doc) {
            let event = doc.data();
            event.id = doc.id;
            events.push(event);
        });

        value = "art";
        let filteredEvents = events.filter(event => event.category.includes("art"));

        console.log(filteredEvents);
        appendCategories(filteredEvents);
    });
    document.getElementById("categories-container").style.display = "none";
    document.getElementById("searchbar").style.display = "none";
    document.getElementById("closeCatBut").style.display = "block";
    document.getElementById("closeCatBut").innerHTML = "&#10005;" + "&emsp;" + "Art";
};

function openGames(value) {
    _eventRef.onSnapshot(function (snapshotData) {
        let events = [];
        snapshotData.forEach(function (doc) {
            let event = doc.data();
            event.id = doc.id;
            events.push(event);
        });

        value = "games";
        let filteredEvents = events.filter(event => event.category.includes("games"));

        console.log(filteredEvents);
        appendCategories(filteredEvents);
    });
    document.getElementById("categories-container").style.display = "none";
    document.getElementById("searchbar").style.display = "none";
    document.getElementById("closeCatBut").style.display = "block";
    document.getElementById("closeCatBut").innerHTML = "&#10005;" + "&emsp;" + "games";
};

function openFood(value) {
    _eventRef.onSnapshot(function (snapshotData) {
        let events = [];
        snapshotData.forEach(function (doc) {
            let event = doc.data();
            event.id = doc.id;
            events.push(event);
        });

        value = "food";
        let filteredEvents = events.filter(event => event.category.includes("food"));

        console.log(filteredEvents);
        appendCategories(filteredEvents);
    });
    document.getElementById("categories-container").style.display = "none";
    document.getElementById("searchbar").style.display = "none";
    document.getElementById("closeCatBut").style.display = "block";
    document.getElementById("closeCatBut").innerHTML = "&#10005;" + "&emsp;" + "food";
};

function openTechnology(value) {
    _eventRef.onSnapshot(function (snapshotData) {
        let events = [];
        snapshotData.forEach(function (doc) {
            let event = doc.data();
            event.id = doc.id;
            events.push(event);
        });

        value = "technology";
        let filteredEvents = events.filter(event => event.category.includes("technology"));

        console.log(filteredEvents);
        appendCategories(filteredEvents);
    });
    document.getElementById("categories-container").style.display = "none";
    document.getElementById("searchbar").style.display = "none";
    document.getElementById("closeCatBut").style.display = "block";
    document.getElementById("closeCatBut").innerHTML = "&#10005;" + "&emsp;" + "technology";
};

function openCulture(value) {
    _eventRef.onSnapshot(function (snapshotData) {
        let events = [];
        snapshotData.forEach(function (doc) {
            let event = doc.data();
            event.id = doc.id;
            events.push(event);
        });

        value = "culture";
        let filteredEvents = events.filter(event => event.category.includes("culture"));

        console.log(filteredEvents);
        appendCategories(filteredEvents);
    });
    document.getElementById("categories-container").style.display = "none";
    document.getElementById("searchbar").style.display = "none";
    document.getElementById("closeCatBut").style.display = "block";
    document.getElementById("closeCatBut").innerHTML = "&#10005;" + "&emsp;" + "culture";
};

function openEducation(value) {
    _eventRef.onSnapshot(function (snapshotData) {
        let events = [];
        snapshotData.forEach(function (doc) {
            let event = doc.data();
            event.id = doc.id;
            events.push(event);
        });

        value = "education";
        let filteredEvents = events.filter(event => event.category.includes("education"));

        console.log(filteredEvents);
        appendCategories(filteredEvents);
    });
    document.getElementById("categories-container").style.display = "none";
    document.getElementById("searchbar").style.display = "none";
    document.getElementById("closeCatBut").style.display = "block";
    document.getElementById("closeCatBut").innerHTML = "&#10005;" + "&emsp;" + "education";
};

function openLiterature(value) {
    _eventRef.onSnapshot(function (snapshotData) {
        let events = [];
        snapshotData.forEach(function (doc) {
            let event = doc.data();
            event.id = doc.id;
            events.push(event);
        });

        value = "literature";
        let filteredEvents = events.filter(event => event.category.includes("literature"));

        console.log(filteredEvents);
        appendCategories(filteredEvents);
    });
    document.getElementById("categories-container").style.display = "none";
    document.getElementById("searchbar").style.display = "none";
    document.getElementById("closeCatBut").style.display = "block";
    document.getElementById("closeCatBut").innerHTML = "&#10005;" + "&emsp;" + "literature";
};

function openShopping(value) {
    _eventRef.onSnapshot(function (snapshotData) {
        let events = [];
        snapshotData.forEach(function (doc) {
            let event = doc.data();
            event.id = doc.id;
            events.push(event);
        });

        value = "shopping";
        let filteredEvents = events.filter(event => event.category.includes("shopping"));

        console.log(filteredEvents);
        appendCategories(filteredEvents);
    });
    document.getElementById("categories-container").style.display = "none";
    document.getElementById("searchbar").style.display = "none";
    document.getElementById("closeCatBut").style.display = "block";
    document.getElementById("closeCatBut").innerHTML = "&#10005;" + "&emsp;" + "Shopping";
};

function openSightseeing(value) {
    _eventRef.onSnapshot(function (snapshotData) {
        let events = [];
        snapshotData.forEach(function (doc) {
            let event = doc.data();
            event.id = doc.id;
            events.push(event);
        });

        value = "sightseeing";
        let filteredEvents = events.filter(event => event.category.includes("sightseeing"));

        console.log(filteredEvents);
        appendCategories(filteredEvents);
    });
    document.getElementById("categories-container").style.display = "none";
    document.getElementById("searchbar").style.display = "none";
    document.getElementById("closeCatBut").style.display = "block";
    document.getElementById("closeCatBut").innerHTML = "&#10005;" + "&emsp;" + "sightseeing";
};

function openMovies(value) {
    _eventRef.onSnapshot(function (snapshotData) {
        let events = [];
        snapshotData.forEach(function (doc) {
            let event = doc.data();
            event.id = doc.id;
            events.push(event);
        });

        value = "movies";
        let filteredEvents = events.filter(event => event.category.includes("movies"));

        console.log(filteredEvents);
        appendCategories(filteredEvents);
    });
    document.getElementById("categories-container").style.display = "none";
    document.getElementById("searchbar").style.display = "none";
    document.getElementById("closeCatBut").style.display = "block";
    document.getElementById("closeCatBut").innerHTML = "&#10005;" + "&emsp;" + "movies";
};

function openEnvironment(value) {
    _eventRef.onSnapshot(function (snapshotData) {
        let events = [];
        snapshotData.forEach(function (doc) {
            let event = doc.data();
            event.id = doc.id;
            events.push(event);
        });

        value = "environment";
        let filteredEvents = events.filter(event => event.category.includes("environment"));

        console.log(filteredEvents);
        appendCategories(filteredEvents);
    });
    document.getElementById("categories-container").style.display = "none";
    document.getElementById("searchbar").style.display = "none";
    document.getElementById("closeCatBut").style.display = "block";
    document.getElementById("closeCatBut").innerHTML = "&#10005;" + "&emsp;" + "environment";
};


function appendCategories(filteredEvents) {
    let htmlTemplate = "";
    for (let event of filteredEvents) {
        htmlTemplate += `
        <article>
        <img src="${event.img}">
        <div class="padding">
        <div class= "event_date"
                <h4>${event.month}</h4>
                <h5 class="text-adjust">${event.day}</h5>
            </div>
            <div class="event_title">
                <h2>${event.name}</h2>
                <p class="text-adjust" >Organiser: ${event.organiser}</p>
            </div>
            <h7 clas="event_price">${event.price}</h7>
        </div>
        </article>
        `;
    }
    document.querySelector('#filtered-events').innerHTML = htmlTemplate;

}


function closeFilteredCategories() {
    document.getElementById("filtered-events").style.display = "none";
    document.getElementById("categories-container").style.display = "grid";
    document.getElementById("searchbar").style.display = "block";
    document.getElementById("closeCatBut").style.display = "none";
    window.location.reload();
}