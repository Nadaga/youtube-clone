// import gapi from "gapi-client";
// import APIKey from "./../Key/YoutubeAPI";

// function Start() {
// 	// 2. Initialize the JavaScript client library.
// 	gapi.client
// 		.init({
// 			apiKey: APIKey,
// 			// clientId and scope are optional if auth is not required.
// 			// clientId: "YOUR_WEB_CLIENT_ID.apps.googleusercontent.com",
// 			// scope: "profile",
// 		})
// 		.then(function () {
// 			// 3. Initialize and make the API request.
// 			return gapi.client.request({
// 				path:
// 					"https://people.googleapis.com/v1/people/me?requestMask.includeField=person.names",
// 			});
// 		})
// 		.then(
// 			function (response) {
// 				console.log(response.result);
// 			},
// 			function (reason) {
// 				console.log("Error: " + reason.result.error.message);
// 			}
// 		);
// }
// // 1. Load the JavaScript client library.
// gapi.load("client", Start);

// // export default Start;
