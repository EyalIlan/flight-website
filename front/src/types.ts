export type Flights = Flight[]

export interface Flight {
    ID: string
    Segments: Segment[]
    AveragePrice: number
    CurrencySymbol: string
}

export interface Segment {
    Legs: Leg[]
    SegmentDuration: number
    ValidatingCarrier: string
}

export interface Leg {
    DeparturePoint: DeparturePoint
    ArrivalPoint: ArrivalPoint
    FlightNumber: string
    AirlineName: string
    AirlineCode: string
}

export interface DeparturePoint {
    AirportName: string
    AirportCode: string
    City: string
    DateTime: string
}

export interface ArrivalPoint {
    AirportName: string
    AirportCode: string
    City: string
    DateTime: string
}
