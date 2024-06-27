import Operator from "../operator.js";

export default class SumOperator extends Operator{
    constructor(){super(2)}

    f=(...a)=>a[0]+a[1]
}