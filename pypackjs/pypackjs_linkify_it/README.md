# pypackjs-linkify-it

Links recognition library with full unicode support http://markdown-it.github.io/linkify-it/


```js
var linkify = require('linkify-it')();

// Reload full tlds list & add unofficial `.onion` domain.
linkify
  .tlds(require('tlds'))          // Reload with full tlds list
  .tlds('onion', true)            // Add unofficial `.onion` domain
  .add('git:', 'http:')           // Add `git:` protocol as "alias"
  .add('ftp:', null)              // Disable `ftp:` protocol
  .set({ fuzzyIP: true });        // Enable IPs in fuzzy links (without schema)

console.log(linkify.test('Site github.com!'));  // true

console.log(linkify.match('Site github.com!')); // [ {
                                                //   schema: "",
                                                //   index: 5,
                                                //   lastIndex: 15,
                                                //   raw: "github.com",
                                                //   text: "github.com",
                                                //   url: "http://github.com",
                                                // } ]
```
Example 2. Add twitter mentions handler
```js
linkify.add('@', {
  validate: function (text, pos, self) {
    var tail = text.slice(pos);

    if (!self.re.twitter) {
      self.re.twitter =  new RegExp(
        '^([a-zA-Z0-9_]){1,15}(?!_)(?=$|' + self.re.src_ZPCc + ')'
      );
    }
    if (self.re.twitter.test(tail)) {
      // Linkifier allows punctuation chars before prefix,
      // but we additionally disable `@` ("@@mention" is invalid)
      if (pos >= 2 && tail[pos - 2] === '@') {
        return false;
      }
      return tail.match(self.re.twitter)[0].length;
    }
    return 0;
  },
  normalize: function (match) {
    match.url = 'https://twitter.com/' + match.url.replace(/^@/, '');
  }
});
```