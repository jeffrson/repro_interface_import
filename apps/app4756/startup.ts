//
import * as lib0 from 'lib4756'
import * as lib1 from '../../libs/lib4756'
import * as lib2 from '../../libs/lib4756/dist'

interface ITest1_0 extends lib0.ITest1 {
    test1_0: string
}

interface ITest1_1 extends lib1.ITest1 {
    test1_1: string
}

interface ITest1_2 extends lib2.ITest1 {
    test1_2: string
}

const i1: lib0.ITest1 = { test1: '1' }

const i2: lib1.ITest1 = { test1: '1' }

const i3: lib2.ITest1 = { test1: '1' }


// prevent "is defined but never used"
const i1_0: ITest1_0 = { test1: '1', test1_0: '1_0' }
const i2_0: ITest1_1 = { test1: '1', test1_1: '1_1' }
const i3_0: ITest1_2 = { test1: '1', test1_2: '1_1' }
console.log(i1)
console.log(i1_0)
console.log(i2)
console.log(i2_0)
console.log(i3)
console.log(i3_0)
