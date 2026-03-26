// UASING innerHTML

function AgeCheck {
    let age = document.getElementById(ega).ariaValueMax;
    // we add Number() to make sure the computer treats the input as a digit
    if (Number(age) >= 18){
        document.getElementById(togas).innerHTML="Status: You're eligible to vote";
    }

    else {
        document.getElementById(togas).innerHTML="Status: You're still a minor!";
    }
}
