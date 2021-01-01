document.addEventListener("keydown", function(event){
    if (event.code === "KeyA") {
        let audioA = new Audio("public/aa.mp3");
        console.log("The 'A' key is pressed.");
        console.log("Source: " + audioA.src)
        console.log("Duration: " + audioA.duration)
        console.log("-------------")
        audioA.play();
    } else if (event.code === "KeyS") {
        let audioS = new Audio("public/as.mp3");
        console.log("The 'S' key is pressed.");
        console.log("Source: " + audioS.src)
        console.log("Duration: " + audioS.duration)
        console.log("-------------")
        audioS.play();
    } else if (event.code === "KeyD") {
        let audioD = new Audio("public/ad.mp3");
        console.log("The 'D' key is pressed.");
        console.log("Source: " + audioD.src)
        console.log("Duration: " + audioD.duration)
        console.log("-------------")
        audioD.play();
    } else if (event.code === "KeyF") {
        let audioF = new Audio("public/af.mp3");
        console.log("The 'F' key is pressed.");
        console.log("Source: " + audioF.src)
        console.log("Duration: " + audioF.duration)
        console.log("-------------")
        audioF.play();
    } else if (event.code === "KeyG") {
        let audioG = new Audio("public/ag.mp3");
        console.log("The 'G' key is pressed.");
        console.log("Source: " + audioG.src)
        console.log("Duration: " + audioG.duration)
        console.log("-------------")
        audioG.play();
    } else if (event.code === "KeyH") {
        let audioH = new Audio("public/ah.mp3");
        console.log("The 'H' key is pressed.");
        console.log("Source: " + audioH.src)
        console.log("Duration: " + audioH.duration)
        console.log("-------------")
        audioH.play();
    } else if (event.code === "KeyJ") {
        let audioJ = new Audio("public/aj.mp3");
        console.log("The 'J' key is pressed.");
        console.log("Source: " + audioJ.src)
        console.log("Duration: " + audioJ.duration)
        console.log("-------------")
        audioJ.play();
    } else if (event.code === "KeyW") {
        let audioW = new Audio("public/aw.mp3");
        console.log("The 'W' key is pressed.");
        console.log("Source: " + audioW.src)
        console.log("Duration: " + audioW.duration)
        console.log("-------------")
        audioW.play();
    } else if (event.code === "KeyE") {
        let audioE = new Audio("public/ae.mp3");
        console.log("The 'E' key is pressed.");
        console.log("Source: " + audioE.src)
        console.log("Duration: " + audioE.duration)
        console.log("-------------")
        audioE.play();
    } else if (event.code === "KeyT") {
        let audioT = new Audio("public/at.mp3");
        console.log("The 'T' key is pressed.");
        console.log("Source: " + audioT.src)
        console.log("Duration: " + audioT.duration)
        console.log("-------------")
        audioT.play();
    } else if (event.code === "KeyY") {
        let audioY = new Audio("public/ay.mp3");
        console.log("The 'Y' key is pressed.");
        console.log("Source: " + audioY.src)
        console.log("Duration: " + audioY.duration)
        console.log("-------------")
        audioY.play();
    } else if (event.code === "KeyU") {
        let audioU = new Audio("public/au.mp3");
        console.log("The 'U' key is pressed.");
        console.log("Source: " + audioU.src)
        console.log("Duration: " + audioU.duration)
        console.log("-------------")
        audioU.play();
    } else {
        console.log("Incorrect input")
    }
})
