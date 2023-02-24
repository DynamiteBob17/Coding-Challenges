import java.util.HashSet;
import java.util.Set;

// leetCode 3.

class LongestSubstrLen {
    public int lengthOfLongestSubstring(String s) {
        Set<Character> sub = new HashSet<>();
        int len = 0;
        int left = 0;

        for (int right = 0; right < s.length(); ++right) {
            if (!sub.contains(s.charAt(right))) {
                sub.add(s.charAt(right));
                
                if ((right - left + 1) > len) len = right - left + 1;
            } else {
                while (s.charAt(left) != s.charAt(right)) {
                    sub.remove(s.charAt(left));
                    ++left;
                }

                sub.remove(s.charAt(left++));
                sub.add(s.charAt(right));
            }
        }

        return len;
    }
}
