import Calculate from "../components/Calculate/Calculate";
import Timer from "../components/Timer/Timer";
import Payment from '../components/Payment/Payment'
import Select from '../components/select/Select'
import HardCalculate from "../components/HardCalculate/HardCalculate";
export default function Hard() {
     return(
            <main>
            <h2>Calculate</h2>
            <Calculate></Calculate>
            <h2>Timer</h2>
            <Timer></Timer>
            <h2>Payment</h2>
            <Payment></Payment>
            <h2>Select</h2>
            <Select></Select>
            <h2>Hard-calculate</h2>
            <HardCalculate></HardCalculate>
            </main>
        )

}
