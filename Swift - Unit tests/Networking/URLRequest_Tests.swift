@testable import VG_Pent
import XCTest

class URLRequestTests: XCTestCase {
    private var sut: URLRequest!

    override func setUp() {
        super.setUp()
    }

    override func tearDown() {
        sut = nil
        super.tearDown()
    }

    func test_urlRequestGet_valuesGetSetCorrectly_shouldBeEqual() throws {
        // Arrange
        let dummyInput = "/long-term-forecast/latitude/longitude/"

        // Act
        let requestSut = URLRequest.get(backend: .pent, path: dummyInput, queryItems: nil)

        // Assert
        XCTAssertEqual(requestSut.httpMethod, "GET")
        XCTAssertEqual(requestSut.timeoutInterval, 10)
    }

    func test_concatenate_shouldReturnTrue() {
        // Testing the private function concatenate through URLRequest.
        // The functions purpose is to build 1 string from 2 different strings, and remove/add slashes where needed
        // Without slashes
        let string1 = "long-term-forecast/latitude/longitude"
        // With slashes
        let string2 = "/long-term-forecast/latitude/longitude/"
        // Wanted result
        let wantedResult = "https://pent.no/api/v1/long-term-forecast/latitude/longitude"

        let result1 = URLRequest.get(backend: .pent, path: string1, queryItems: nil)
        let result2 = URLRequest.get(backend: .pent, path: string2, queryItems: nil)

        XCTAssertEqual(result1.description, wantedResult)
        XCTAssertEqual(result2.description, wantedResult)
    }

    func test_concatenate_withEmptyStringArray_shouldReturn_emptyPath() {
        let string1 = ""
        // Wanted result
        let expected = Backend.pent.components.description

        let result = URLRequest.get(backend: .pent, path: string1, queryItems: nil)

        XCTAssertEqual(expected, result.description)
    }

    func test_backendPathStringComponents_shouldEqual_wantedResult() {
        // Arrange
        // Backend.pent = "https://pent.no/api/v1"
        let backendInput = Backend.pent
        let wantedResult = "https://pent.no/api/v1/long-term-forecast/latitude/longitude"

        let request = URLRequest.get(
            backend: backendInput,
            path: "/long-term-forecast/latitude/longitude",
            queryItems: nil
        )
        XCTAssertEqual(wantedResult, request.description, "Something wrong with api-request format")
    }
}
