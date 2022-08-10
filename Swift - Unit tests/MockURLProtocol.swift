//
//  MockURLProtocol.swift
//  VG PentTests

import Foundation
import XCTest

// To use this protocol, use mock-objects and pass them to MockURLProtocol.requestHandler in the individual test-case.
// Examples can be found in APIRequestLoaderTests
class MockURLProtocol: URLProtocol {
    static var requestHandler: ((URLRequest) throws -> (Data?, HTTPURLResponse))?

    override class func canInit(with request: URLRequest) -> Bool {
        return true
    }

    override class func canonicalRequest(for request: URLRequest) -> URLRequest {
        return request
    }

    override func startLoading() {
        guard let handler = MockURLProtocol.requestHandler else {
            XCTFail("Received unexpected request with no handler set")
            return
        }

        do {
            let (data, response) = try handler(request)

            client?.urlProtocol(self, didReceive: response, cacheStoragePolicy: .notAllowed)

            if let data = data {
                client?.urlProtocol(self, didLoad: data)
            }
            client?.urlProtocolDidFinishLoading(self)
        } catch {
            client?.urlProtocol(self, didFailWithError: error)
        }
    }
      override func stopLoading() {
        // This is called if the request gets cancelled or completed.
      }
}
