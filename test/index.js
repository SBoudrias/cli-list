var test = require('tape');
var list = require('..');

var fake = ['hello', 'world,', '--foo,', 'bar'];

test('argv splitting', function(t) {
  t.plan(1);

  t.same(
    list(fake),
    [['hello', 'world'], ['--foo'], ['bar']],
    'split argv-like array into list'
  );
});
