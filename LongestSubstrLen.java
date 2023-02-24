// leetCode 3.

class LongestSubstrLen {
    public int lengthOfLongestSubstring(String s) {
        int len = 0;
        String sub;

        for (int i = 0; i < s.length(); ++i) {
            sub = "" + s.charAt(i);

            for (int j = i + 1; j < s.length(); ++j) {
                if (sub.indexOf(s.charAt(j)) < 0) {
                    sub += s.charAt(j);
                } else break;
            }

            if (sub.length() > len) len = sub.length();
        }

        return len;
    }
}
