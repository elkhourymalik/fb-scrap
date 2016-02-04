$(function() {


  $("#btn-info-from-facebook").on("click", function(e) {
    var accessToken = $('#access').val()
    $.get("https://graph.facebook.com/me",
      { access_token: accessToken },
      function(data) {
        console.log(data)
    });

    $.get("https://graph.facebook.com/me",
      { access_token: accessToken },
      function(data) {
        console.log(data);
        var firstName = data.first_name;
        var lastName = data.last_name;

        var pictureUrl = "http://graph.facebook.com/" + data.id + "/picture?type=square";
        var profilePic = $("<img>").attr("src", pictureUrl);

        $("#my-profile .basic").append(profilePic);
        $("#my-profile .basic").append(firstName + ", " + lastName);
      });

    $.get("https://graph.facebook.com/me/photos?fields=album&limit=1000",
      { access_token: accessToken },
    function(data) {
      console.log(data)
      $.each(data.data, function(key, value) {
        console.log(value.id);
        var id = value.id;
        var pictureUrl = "https://graph.facebook.com/" + value.id + "/picture?type=normal&access_token=" + accessToken;
        var profilePic = $("<img>").attr("src", pictureUrl).addClass("images_found");
        $("#my-profile .advanced").append(profilePic);
      });
    });
  });
});

// CAACEdEose0cBAK3xLy8OGUPmJl6eKV8gH2tusCRuwDp4FluXq4ADFF0uX6eOGElVMcRVJdvBEheAhZAzp7T8nhKYWZByykCYS3cUQWEhPKGlZBCXa9VtlVYOHczaKMyNi2mAUxnPMQKLjNWKD8yzu6xMlg9XDhFxEUrVNMPtMca2JAtOdMUHfIfZBqfxCNeUP8upNpGQggZDZD
