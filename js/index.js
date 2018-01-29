var channels = ["freecodecamp", "test_channel", "ESL_SC2", "jacksofamerica", "faceittv"];
for (var i = 0; i < channels.length; i++) {
    ajax();
}

function ajax() {
    $.ajax({

        url: "https://api.twitch.tv/kraken/streams/" + channels[i] + "?callback=?",
        dataType: "jsnop",


    })

}