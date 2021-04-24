# Instructions

* `yarn`
* `yarn lint`
  => okay

* in libs/lib4756 uncomment "Test case 1"
* `yarn lint`
```
   2:8   error  No exported names found in module 'lib4756'             import/namespace
   3:8   error  No exported names found in module '../../libs/lib4756'  import/namespace
   6:33  error  'ITest1' not found in imported namespace 'lib0'         import/namespace
  10:33  error  'ITest1' not found in imported namespace 'lib1'         import/namespace
```

* in libs/lib4756 comment "Test case 1", uncomment "Test case 2"
* `yarn lint`
```
   6:33  error  'ITest1' not found in imported namespace 'lib0'  import/namespace
  10:33  error  'ITest1' not found in imported namespace 'lib1'  import/namespace
```

* in libs/lib4756 comment "Test case 2", uncomment "Test case 3"
* `yarn lint`
  => okay
