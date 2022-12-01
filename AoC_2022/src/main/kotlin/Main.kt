import java.io.BufferedReader
import java.io.File

fun main(args: Array<String>) {
    println("Day 1 file is ${args[0]}")

    fun sumCalories(load: String): Int {
        val calories = load.split("\n")
        var sumCalories = 0
        for (calorie in calories) {
            sumCalories += if (calorie == "") 0 else calorie.toInt()
        }
        return sumCalories

    }

    fun readAndSplitInput(file: String): List<String> {

        val reader: BufferedReader = File(file).bufferedReader()
        val inputString = reader.use { it.readText() }

        return inputString.split("\n\n")

    }

    var max = 0
    val parts = readAndSplitInput(args[0])
    for (part in parts) {
        for (calories in part) {
            val cal = sumCalories(part)
            if (max < cal)
                max = cal
        }
    }

    println(max)


}