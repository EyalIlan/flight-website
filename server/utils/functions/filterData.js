


const necceryData = {
    "ID": "9fd77536-1563-480c-b6d8-f73b147fb02e",
    "Segments": [{
            "Legs": [{
                    "DeparturePoint": {
                        "AirportName": "Ben Gurion International Airport",
                        "AirportCode": "TLV",
                        "City": "תל אביב",
                        "DateTime": "2022-05-25T04:45:00"
                    },
                    "ArrivalPoint": {
                        "AirportName": "Schiphol International Airport",
                        "AirportCode": "AMS",
                        "City": "אמסטרדם",
                        "DateTime": "2022-05-25T08:45:00"
                    },
                    "FlightNumber": "8424",
                    "AirlineName": "Air France",
                    "AirlineCode": "AF"
                }, {
                    "DeparturePoint": {
                        "AirportName": "Schiphol International Airport",
                        "AirportCode": "AMS",
                        "City": "אמסטרדם",
                        "DateTime": "2022-05-25T17:05:00"
                    },
                    "ArrivalPoint": {
                        "AirportName": "John F. Kennedy International Airport",
                        "AirportCode": "JFK",
                        "City": "ניו יורק",
                        "DateTime": "2022-05-25T19:10:00"
                    },
                    "FlightNumber": "6699",
                    "AirlineName": "Air France",
                    "AirlineCode": "AF"
                }
            ],
            "SegmentDuration": 1285.0,
            "ValidatingCarrier": "AF"
        }
    ],
    "AveragePrice": 1981.0,
    "CurrencySymbol": "$"
}






const filterUnecessaryUserData = (array) =>{
    let obj = []
    
    array.forEach((p,index) =>{
      
    obj.push(p)

    for(const [key,value] of Object.entries(p)){
      
        if(necceryData[key] === undefined){
            delete obj[index][key]
        }
    }
//
    // console.log(necceryData.Segments[0]);

    p.Segments.forEach((seq,i) =>{
        for(const [key,value] of Object.entries(seq)){
            
            if(necceryData.Segments[0][key] === undefined){
                delete  obj[index].Segments[i][key]
            }
        }

    })
//

    p.Segments.forEach((seq,k) =>{

        seq.Legs.forEach((leg,Index) =>{


            for(const [key,value] of Object.entries(leg)){

                if(necceryData.Segments[0].Legs[0][key] === undefined || necceryData.Segments[0].Legs[1][key] === undefined){
                    delete  obj[index].Segments[k].Legs[Index][key]
                }
            }
    
        })


    })
   
    
})
//
    return obj

    }



module.exports = {
    filterUnecessaryUserData
}

// filterUnecessaryUserData(testData)










