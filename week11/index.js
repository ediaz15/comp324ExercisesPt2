
function main(){
    
    /*Test Json Obj*/
    /*
    const testJson = 
        {"items" : [  
            {
                "userID" : 1,
                "name": "Erick",
                "locations":[{
                        "virtual":"Zoom",
                        "inPerson":"Class",
                        "other":"Home"
                    }]
            },
            {
                "userID": 2,
                "name":"Prof Hayward",
                "locations": [{
                        "inPerson":[
                            "Class", "Office Hours"
                        ],
                        "other":"Home"
                    }]
            },
            {
                "userID": 3,
                "name": "roommate",
                "locations":[{
                        "virtual":"Zoom",
                        "inPerson":"Class",
                        "other":"Home"
                    }]
            }
        ]};
        */
    /* this used a object with the data we had from our json file
    function getJson(){
        var jsonItems = JSON.stringify(testJson);
        console.log(jsonItems);
        var jsonItemParsed = JSON.parse(jsonItems);
        console.log(jsonItemParsed); ??
    }
    getJson();*/
    
    //Now here we get the json data using promises and then chains
    //we use fetch(), handle response data -> console log!
    const loadJsonLocal = file => {
        const data = fetch(file);
        data.then(response => response.json())
            .then(jsonData => {
                console.log(jsonData);
            });
    }
    //console log the data when clicked [should be the json items!]
    const button = document.getElementById("loadItems");
    button.addEventListener('click', () => {
        loadJsonLocal("./test.json")
    });

}

main();