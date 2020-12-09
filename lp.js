var longestPalindrome = function(s) {
    let palindromeArray = []
    let palindrome

    if (s.length === 1) {
        return s
    }
    else if (s.length === 2) {
        if (s[0] === s[1]) {
            return s
        }
        else {
            return s[0]
        }
    }

    for (i = 0; i < s.length; i++) {
        if (s[i] === s[i + 1]) {
            palindrome = s.slice(i, i + 2)
            let movement = 0
            while (i - movement != 0) {
                movement++
                if (s[i - movement] === s[i + 1 + movement]) {
                    palindrome = s.slice(i - movement, i + 2 + movement)
                }
                else {
                    break
                }
            }
            palindromeArray.push(palindrome)
        }
        if (s[i] === s[i + 2]) {
            palindrome = s.slice(i, i + 3)
            let movement = 0
            while (i - movement != 0) {
                movement++
                if (s[i - movement] === s[i + 2 + movement]) {
                    palindrome = s.slice(i - movement, i + 3 + movement)
                }
                else {
                    break
                }
            }
            palindromeArray.push(palindrome)
        }
    }

    let longest = palindromeArray[0]

    for (i = 1; i < palindromeArray.length; i++) {
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
};

console.log(longestPalindrome('abcd'))