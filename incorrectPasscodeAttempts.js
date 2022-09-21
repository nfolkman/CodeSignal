/* Description: DROPBOX CHALLENGE #1
One Very Important User (VIU) has a Very Confidential Document (VCD) stored on his Dropbox account. He doesn't let anyone see the VCD, 
especially his roommates who often have access to his devices.

Opening the Dropbox mobile app on the VIU's tablet requires a four-digit passcode. To ensure the confidentiality of the stored 
information, the device is locked out of Dropbox after 10 consecutive failed passcode attempts. 
We need to implement a function that, given an array of attempts made throughout the day and the correct passcode, 
checks to see if the device should be locked, i.e. 10 or more consecutive failed passcode attempts were made.   */


function solution(passcode, attempts) {
    // loop through attempts and compare each attempt to passcode, if there are 10 failed attempts, return true : return false
    let fails = 0
    for(let i = 0; i<attempts.length;i++){

    if(attempts[i] === passcode) fails = 0
    else{fails+=1}

    if(fails >= 10) return true 
  }
// return false
    return false
}

// test cases:
console.log(solution('1111',["1111", "4444",
            "9999", "3333",
            "8888", "2222",
            "7777", "0000",
            "6666", "7285",
            "5555", "1111"]))  // true
console.log(solution('1234',["9999", "9999",
            "9999", "9999",
            "9999", "9999",
            "9999", "1234",
            "9999", "9999",
            "9999", "9999"]))  // false