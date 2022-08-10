import Foundation
@testable import VG_Pent
import XCTest

class MockForecastClient: PentForecastClient {
    func loadMockData(fileName: String) -> Data? {
        if let fileURL = Bundle.main.url(forResource: fileName, withExtension: "json") {
            guard let data = try? Data(contentsOf: fileURL) else { fatalError() }
            return data
        }
        return nil
    }

    func pentForecastDecoder(from data: Data) -> PentLongTermForecastInfo {
        do {
            let decoder = JSONDecoder()
            decoder.dateDecodingStrategy = .iso8601
            return try decoder.decode(PentLongTermForecastInfo.self, from: data)
        } catch {
            XCTFail("Decoder error - wrong format or data")
            fatalError()
        }
    }

    func getForcastPent(latitude _: String, longitude _: String) -> PentLongTermForecastInfo {
        let data = loadMockData(fileName: "MockBrumunddal")!
        let forecast = pentForecastDecoder(from: data)
        return forecast
    }

    // Can be used change properties of mock object PentLongTermForecastInfo and makes it mutable
    func getMutableForecastData() -> PentLongTermForecastInfoEditor {
        let data = loadMockData(fileName: "MockBrumunddal")!
        do {
            let decoder = JSONDecoder()
            decoder.dateDecodingStrategy = .iso8601
            return try decoder.decode(PentLongTermForecastInfoEditor.self, from: data)
        } catch {
            XCTFail("Decoder error - wrong format or data")
            fatalError()
        }
    }

    // Converts a mutable PentLongTermForecastInfo to immutable
    func convertToImmutableModel(forecastEdit: PentLongTermForecastInfoEditor) throws -> PentLongTermForecastInfo {
        let data: Data
        do {
            let encoder = JSONEncoder()
            encoder.dateEncodingStrategy = .iso8601
            data = try encoder.encode(forecastEdit)
        } catch {
            XCTFail("Decoder error - wrong format or data")
            fatalError()
        }
        return pentForecastDecoder(from: data)
    }
}
