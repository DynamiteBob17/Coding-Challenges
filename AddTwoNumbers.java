//leetCode 2.

class ListNode {
    int val;
    ListNode next;

    ListNode() {}
    ListNode(int val) { this.val = val; }
    ListNode(int val, ListNode next) { this.val = val; this.next = next; }
}

class AddTwoNumbers {
    public ListNode addTwoNumbers(ListNode l1, ListNode l2) {
        ListNode sum = new ListNode(), curr = sum;
        int carryover = 0, temp;
        boolean hasNext = true;

        while (hasNext) {
            hasNext = false;
            temp = carryover;

            if (l1 != null) {
                temp += l1.val;
                l1 = l1.next;
            }
            if (l2 != null) {
                temp += l2.val;
                l2 = l2.next;
            }

            curr.val = temp % 10;
            carryover = temp / 10;

            if (l1 != null || l2 != null) {
                hasNext = true;
                curr.next = new ListNode();
                curr = curr.next;
            }
        }

        if (carryover > 0) {
            curr.next = new ListNode(carryover);
        }

        return sum;
    }
}
