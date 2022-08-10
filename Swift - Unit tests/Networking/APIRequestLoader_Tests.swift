import XCTest
@testable import VG_Pent

class APIRequestLoaderTests: XCTestCase {
    var mockApiRequest: GetLongTermForecastPentRequest!
    var mockAPIRequestLoader: ApiRequestLoader<GetLongTermForecastPentRequest>!
    var urlSession: URLSession!

    override func setUpWithError() throws {
        let configuration = URLSessionConfiguration.ephemeral
        configuration.protocolClasses = [MockURLProtocol.self]
        urlSession = URLSession(configuration: configuration)

        self.mockApiRequest = GetLongTermForecastPentRequest(
            coordinates: .init(longitude: 0.0, latitude: 0.0),
            resolution: 1, days: 10
        )

        self.mockAPIRequestLoader = ApiRequestLoader(apiRequest: self.mockApiRequest, urlSession: self.urlSession)
    }

    override func tearDownWithError() throws {
        self.mockApiRequest = nil
        self.mockAPIRequestLoader = nil
    }

    func test_mapResponse_withStatusCode200_shouldReturn_PentLongTermForecastInfo() async throws {
        // Arrange
        let mockData = MockForecastClient().loadMockData(fileName: "MockBrumunddal")
        let url = URL(string: "https://lol.com")
        let statusCode = 200
        let mockResponse = HTTPURLResponse(url: url!, statusCode: statusCode, httpVersion: nil, headerFields: nil)!

        MockURLProtocol.requestHandler = { _ in
            return (mockData, mockResponse)
        }

        // Act
        let result = try await mockAPIRequestLoader.load()

        // Assert
        XCTAssertTrue((result as Any) is PentLongTermForecastInfo, "Wrong type? - Expected PentLongTermForecastInfo")
    }

    func test_mapResponse_withStatusCode404_shouldThrow_clientError() async throws {
        // Arrange
        let mockErrorBody = try JSONEncoder().encode(ErrorBody(statusCode: 404, message: ""))
        let url = URL(string: "https://lol.com")
        let statusCode = 404
        let mockResponse = HTTPURLResponse(url: url!, statusCode: statusCode, httpVersion: nil, headerFields: nil)!

        MockURLProtocol.requestHandler = { _ in
            return (mockErrorBody, mockResponse)
        }

        // Act + Assert
        do {
            _ = try await mockAPIRequestLoader.load()
            XCTFail("Error not thrown as expected")
        } catch ApiError<ApiClientError>.client {
            // success
        } catch {
            XCTFail("Unexpected error")
        }
    }

    func test_mapResponse_withStatusCode500_shouldThrow_serverError() async throws {
        // Arrange
        let mockData = MockForecastClient().loadMockData(fileName: "MockBrumunddal")
        let url = URL(string: "https://lol.com")
        let statusCode = 550
        let mockResponse = HTTPURLResponse(url: url!, statusCode: statusCode, httpVersion: nil, headerFields: nil)!

        MockURLProtocol.requestHandler = { _ in
            return (mockData, mockResponse)
        }

        // Act
        do {
            _ = try await mockAPIRequestLoader.load()
            XCTFail("Error not thrown as expected")
        } catch ApiError<ApiClientError>.server {
            // Success
        } catch {
            XCTFail("Unexpected error")
        }
    }

    func test_mapResponse_withStatusCode999_shouldThrow_unknownError() async throws {
        // Arrange
        let mockData = MockForecastClient().loadMockData(fileName: "MockBrumunddal")
        let url = URL(string: "https://lol.com")
        let statusCode = 999
        let mockResponse = HTTPURLResponse(url: url!, statusCode: statusCode, httpVersion: nil, headerFields: nil)!

        MockURLProtocol.requestHandler = { _ in
            return (mockData, mockResponse)
        }

        // Act
        do {
            _ = try await mockAPIRequestLoader.load()
            XCTFail("Error not thrown as expected")
        } catch ApiError<ApiClientError>.unknown {
            // Success
        } catch {
            XCTFail("Unexpected error")
        }
    }
}
