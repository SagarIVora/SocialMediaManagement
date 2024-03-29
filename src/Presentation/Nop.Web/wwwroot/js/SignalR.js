
var connection = new signalR.HubConnectionBuilder()
  .withUrl("/chatHub")
  .build();

connection.on("ReceiveMessage", function (user, message) {
  // Update your UI with the received message
  $("#messages").append("<li><strong>" + user + "</strong>: " + message + "</li>");
});

connection.start().catch(function (err) {
  console.error(err.toString());
});

function sendMessage() {
  console.log("Hello");
  var user = "John"; // Replace with the actual user
  var message = $("#messageInput").val();
  connection.invoke("SendMessage", user, message).catch(function (err) {
    console.error(err.toString());
  });
}