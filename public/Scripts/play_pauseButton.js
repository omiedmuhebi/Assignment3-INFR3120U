let myVideo = document.getElementById("video"); // Retrieves and stores the video element with the ID "video" from the EJS document into the variable 'myVideo'.

function playPause() { // Defines a function named 'playPause'.
    if (myVideo.paused) { // Checks if the video stored in 'myVideo' is currently paused.
        myVideo.play(); // If the video is paused, this line plays the video.
    } else { // If the video is not paused (meaning it is playing),
        myVideo.pause(); // then this line pauses the video.
    }
} // End of the 'playPause' function.
