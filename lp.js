var longestPalindrome = function(s) {
    let palindromeArray = []
    let palindrome

    for (i = 0; i < s.length; i++) {
        if (s[i] === s[i + 1]) {
            checkNext(i, i + 1)
        }
        if (s[i] === s[i + 2]) {
            checkNext(i, i + 2)
        }
    }

    let longest = palindromeArray[0]

    for (i = 0; i < palindromeArray.length; i++) {
        if (longest.length < palindromeArray[i].length) {
            longest = palindromeArray[i]
        }        
    }

    if (palindromeArray.length === 0) {
        return s[0]
    }
    else {
        return longest
    }    

    function checkNext(index, nextIndex) {
        palindrome = s.slice(index, nextIndex + 1)
        let movement = 0
        while (index - movement != 0) {
            movement++
            if (s[index - movement] === s[nextIndex + movement]) {
                palindrome = s.slice(index - movement, nextIndex + 1 + movement)
            }
            else {
                break
            }
        }
        palindromeArray.push(palindrome)
    }    
};

console.log(longestPalindrome('abba'))