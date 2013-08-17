## Testing todo.txt-node

todo.txt-node is tested using the original, canonical todo.txt-cli test suite.

- This ensures maximum compatibility between todo.txt-node and the canonical
todo.txt-cli.
- However, this also introduces extra dependencies. While todo.txt-node can be
run with only Node.js, the test suite assumes some Unix tools are available
(`make`, `sed`, `grep`, etc...)

### How to run the tests

In a Unix environment, from the project's root directory:

1. `grunt` (build project)
2. `cd test`
3.  `make test` (run test suite)

### Notes

- Some tests are skipped because todo.txt-node does not support features that
depend on Bash.
- Specifically, these tests are skipped:
`SKIP_TESTS='t0002 t1020.[67] t1300.[23] t1300.1[89] t[68]??? t2100.4 t2120.[36]'`
- Out of 427 todo.txt-cli tests, 345 apply to todo.txt-node.
- All 345 tests pass; there are no failed test cases.
