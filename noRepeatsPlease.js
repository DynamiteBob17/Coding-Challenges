/*

Task:

  Return the number of total permutations of the provided string that
  don't have repeated consecutive letters. Assume that all characters
  in the provided string are each unique.

  For example, 'aab' should return 2 because it has 6 total permutations
  ('aab', 'aab', 'aba', 'aba', 'baa', 'baa'), but only 2 of them
  ('aba', 'aba') don't have the same letter (in this case 'a') repeating.

*/

function permAlone(str) {
  const regex = /(.)\1+/;

  if (str.match(regex) !== null && str.match(regex)[0] === str) return 0;

  const charSeq = str.split('');
  let validPerms = 0;

  // Heap's algorithm for generating all possible permutations
  (function generate(k, arr) {
    if (k === 1) {
      if (!regex.test(arr.join(''))) ++validPerms;
    } else {
      generate(k - 1, arr);

      for (let i = 0; i < k - 1; ++i) {
        k % 2 === 0
          ? [arr[i], arr[k - 1]] = [arr[k - 1], arr[i]]
          : [arr[0], arr[k - 1]] = [arr[k - 1], arr[0]];

        generate(k - 1, arr);
      }
    }
  })(charSeq.length, charSeq);

  return validPerms;
}

console.log(permAlone('abfdefa'));
