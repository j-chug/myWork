import Foundation

// Alle properties endret til var - for å endre verdier fleksibelt og gjøre testing enklere
struct PentLongTermForecastInfoEditor: Decodable, Hashable, Encodable {
    var location: Location
    var yr, storm: [Service]
}

// MARK: - Location
struct Location: Decodable, Hashable, Encodable {
    var id: String
    var category: Category
    var name: String
    var latitude, longitude: Double
    var elevation: Int
    var country, region, subregion, label: String
    var timezone: String
    var distance: Double
}

// MARK: - Category
struct Category: Decodable, Hashable, Encodable {
    var id, name: String
}

// MARK: - YR/Storm
struct Service: Decodable, Hashable, Encodable {
    var summary: Summary
    var steps: [Step]
}

// MARK: - Step
struct Step: Decodable, Hashable, Encodable {
    var precipitation: Double?
    var symbol: WeatherSymbolTesting?
    var startDate, endDate: Date
    var windDirection: Double?
    var windSpeed, temperature: Double?
}

// MARK: - Summary
struct Summary: Decodable, Hashable, Encodable {
    var date: Date
    var minimumTemperature, maximumTemperature, middayTemperature: Double?
    var sunrise, sunset: Date?
    var uvLevel: Double?
    var symbol: WeatherSymbolTesting?
    var precipitation, windSpeed: Double?
}
enum WeatherSymbolTesting: String, Decodable, Encodable {
    case clear = "01"
    case clearNight = "01n"
    case overcast = "02"
    case overcastNight = "02n"
    case partlyCloudy = "03"
    case partlyCloudyNight = "03n"
    case cloudy = "04"
    case rainShowers = "05"
    case rainShowersNight = "05n"
    case sleetShowers = "07"
    case sleetShowersNight = "07n"
    case snowShowers = "08"
    case snowShowersNight = "08n"
    case rain = "09"
    case heavyRain = "10"
    case rainAndThunder = "11"
    case sleet = "12"
    case snow = "13"
    case fog = "15"
    case absent = ""
}
