/* styles.css */
body {
    font-family: 'Roboto', sans-serif;
    margin: 0;
    padding: 0;
    height: 100vh;
   /* background: linear-gradient(175deg, #f40273af, #0c04eb95);*/
   background-color: #f9eeeef6;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #333;
}

.container {
   
    width: 1400px;
    height: 800px;
}

h1 {
    font-size: 2.5em;
    margin-bottom: 20px;
    text-shadow: 0 0 10px rgba(255, 255, 255, 0.5);
    color: #111111; /* Soft pink hue */
}

.button-container {
    margin-bottom: 20px;
}

button {
    background-color: #4e8ec2dc; /* Soft pink */
    color: white;
    border: none;
    border-radius: 25px; /* Rounded edges */
    padding: 12px 20px;
    font-size: 1.1em;
    margin: 0 10px;
    cursor: pointer;
    transition: background-color 0.3s, transform 0.2s;
    box-shadow: 0 4px 15px rgba(255, 111, 97, 0.5);
}

button:hover {
    background-color: #ff4c3b; /* Darker pink on hover */
    transform: translateY(-2px);
}

button:active {
    transform: translateY(0);
    box-shadow: 0 2px 10px rgba(255, 111, 97, 0.5);
}

.video-container {
   
    
    margin-top: 20px;
    gap: 20px; /* Space between videos */
  
    width: 1400px;
    height: 650px;
    display: flex;
    flex-direction: row;
}

.local-video {
    width: 400px; /* Smaller local video frame */
    height: 300px; /* Maintain aspect ratio */
    border: 2px solid rgba(255, 255, 255, 0.7);
    border-radius: 10px;
    box-shadow: 0 0 30px rgba(0, 0, 0, 0.7);
    transition: box-shadow 0.3s;
    margin-right: 100px;
    margin-top: 280px;
    
   
}

.remote-video {
    width: 800px; /* Larger remote video frame */
    height: auto; /* Maintain aspect ratio */
    border: 2px solid rgba(255, 255, 255, 0.7);
    border-radius: 10px;
    box-shadow: 0 0 30px rgba(0, 0, 0, 0.7);
    transition: box-shadow 0.3s;
}

.local-video:hover, .remote-video:hover {
    box-shadow: 0 0 40px rgba(255, 111, 97, 1);
}

/* Animation effect */
.animate {
    animation: scaleFade 0.5s forwards;
}

@keyframes scaleFade {
    0% {
        opacity: 1;
        transform: scale(1);
    }
    50% {
        opacity: 0.5;
        transform: scale(1.1);
    }
    100% {
        opacity: 1;
        transform: scale(1);
    }
}