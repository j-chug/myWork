@testable import VG_Pent
import XCTest

class APIRequestTests: XCTestCase {
    private var mockApiRequest: GetLongTermForecastPentRequest!

    override func setUpWithError() throws {
        self.mockApiRequest = GetLongTermForecastPentRequest(
            coordinates: .init(longitude: 0.0, latitude: 0.0),
            resolution: 0,
            days: 0
        )
    }

    override func tearDownWithError() throws {
        self.mockApiRequest = nil
    }

    func test_decodeClientError_shouldReturn_ApiClientErrorInstance_shouldEqualAndNil() throws {
        let testCode = 404
        let testBody: String? = nil

        let sut = mockApiRequest.decodeClientError(statusCode: testCode, body: testBody)

        XCTAssertEqual(sut.statusCode, testCode, "Unexpected output")
        XCTAssertNil(sut.body)
    }

    func test_decodeClientError_shouldReturn_ApiClientErrorInstance_shouldEqualAndNotNil() throws {
        let testCode = 400
        let testBody: String? = "test"

        let sut = mockApiRequest.decodeClientError(statusCode: testCode, body: testBody)

        XCTAssertEqual(sut.statusCode, testCode, "Unexpected output")
        XCTAssertNotNil(sut.body)
    }

    func test_decodeResponse_withValidData_shouldNotThrowError() throws {
        // Arrange
        let mockData = MockForecastClient().loadMockData(fileName: "MockBrumunddal")

        // Act + Assert
        XCTAssertNoThrow(try mockApiRequest.decodeResponse(data: mockData), "Unexpected error thrown")
    }

    func test_decodeResponse_withValidData_shouldReturn_locationNameBrumunddal() throws {
        // Arrange
        let mockData = MockForecastClient().loadMockData(fileName: "MockBrumunddal")

        // Act
        let result = try mockApiRequest.decodeResponse(data: mockData)

        // Assert
        XCTAssertEqual(result.location.name, "Brumunddal")
    }

    func test_decodeResponse_withNilOptional_shouldCatchError_missingData() throws {
        // Arrange
        let mockData: Data? = nil

        // Act + Assert
        do {
            _ = try mockApiRequest.decodeResponse(data: mockData)
            XCTFail("Expected error: missingData")
        } catch ApiError<ApiClientError>.missingData {
            // Test passed - found expected error
        } catch {
            XCTFail("Expected error: missingData")
        }
    }

    func test_decodeResponse_withDecodingError_shouldCatchError_decodeResponse() throws {
        // Arrange
        let data = MockForecastClient().loadMockData(fileName: "MockBrumunddalError")

        // Act + Assert
        do {
            _ = try mockApiRequest.decodeResponse(data: data)
            XCTFail("Expected error: decodeResponse")
        } catch ApiError<ApiClientError>.decodeResponse {
            // Success!
        } catch {
            print(error)
            XCTFail("Expected error: decodeResponse")
        }
    }
}
