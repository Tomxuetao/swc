//// [classStaticBlock10.ts]
var a1 = 1;
var a2 = 1;
const b1 = 2;
const b2 = 2;
function f() {
    var a1 = 11;
    const b1 = 22;
    class C1 {
        static{
            var a11 = 111;
            var a2 = 111;
            const b11 = 222;
            const b2 = 222;
        }
    }
}
class C2 {
    static{
        var a11 = 111;
        var a21 = 111;
        const b11 = 222;
        const b21 = 222;
    }
}
