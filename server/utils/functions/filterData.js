


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







const legs =   [{
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
}]


const testData = [{
    "ID": "21698d52-4473-4a0e-92f7-66711e92ed43",
    "Key": null,
    "PassengersGroupedByType": {
        "Adult": {
            "Type": 1,
            "Label": "מבוגרים",
            "Amount": 2
        }
    },
    "Passengers": [{
            "FareBase": 717.0,
            "TotalPrice": 700.0,
            "TotalTax": 52.0,
            "PaxType": 1,
            "BaggageUpgrade": null
        }, {
            "FareBase": 717.0,
            "TotalPrice": 700.0,
            "TotalTax": 52.0,
            "PaxType": 1,
            "BaggageUpgrade": null
        }
    ],
    "Segments": [{
            "Legs": [{
                    "DeparturePoint": {
                        "AirportName": "Ben Gurion International Airport",
                        "AirportCode": "TLV",
                        "City": "תל אביב",
                        "DateTime": "2022-07-13T08:00:00"
                    },
                    "ArrivalPoint": {
                        "AirportName": "Kloten",
                        "AirportCode": "ZRH",
                        "City": "ציריך",
                        "DateTime": "2022-07-13T11:20:00"
                    },
                    "FlightNumber": "347",
                    "Duration": 0.0,
                    "OperatingCarrier": null,
                    "Class": "V",
                    "AirlineName": "El Al ",
                    "AircraftType": "בואינג 739-900",
                    "MealIncluded": false,
                    "AirlineCode": "LY"
                }, {
                    "DeparturePoint": {
                        "AirportName": "Kloten",
                        "AirportCode": "ZRH",
                        "City": "ציריך",
                        "DateTime": "2022-07-13T12:30:00"
                    },
                    "ArrivalPoint": {
                        "AirportName": "Schiphol International Airport",
                        "AirportCode": "AMS",
                        "City": "אמסטרדם",
                        "DateTime": "2022-07-13T14:10:00"
                    },
                    "FlightNumber": "728",
                    "Duration": 0.0,
                    "OperatingCarrier": null,
                    "Class": "Q",
                    "AirlineName": "Swiss",
                    "AircraftType": "",
                    "MealIncluded": false,
                    "AirlineCode": "LX"
                }
            ],
            "SegmentDuration": 430.0,
            "Direction": 1,
            "ValidatingCarrier": "LY",
            "BaggageInfo": {
                "Handbag": {
                    "Status": 0,
                    "Text": "אין מידע",
                    "Quantity": -1,
                    "Weight": null,
                    "Volume": null
                },
                "Laggage": {
                    "Status": 1,
                    "Text": "כלולה",
                    "Quantity": 1,
                    "Weight": null,
                    "Volume": null
                },
                "AirCarrierInfoLinks": {
                    "El Al ": "https://www.elal.com/he/PassengersInfo/Baggage/Pages/Policy.aspx",
                    "Swiss": "https://www.swiss.com/ch/en/prepare/baggage"
                },
                "Notes": null
            },
            "Key": "1400-TLV:ZRH~ZRH:AMS-13/07/2022 08:00:00-LY-347|13/07/2022 12:30:00-LX-728",
            "Index": 1
        }
    ],
    "TotalPrice": 1400.0,
    "AveragePrice": 700.0,
    "CurrencySymbol": "$",
    "AvailableSeat": 9,
    "RouteType": 1,
    "BaggageInfo": null,
    "ProviderCode": "G-AM_LY",
    "DeepLinkRef": null,
    "DiscountInfo": [{
            "Discount": 137.32,
            "Currency": 1,
            "DiscountCode": "INTERNET"
        }
    ]
}]



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










