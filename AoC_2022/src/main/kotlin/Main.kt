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

    val parts = readAndSplitInput(args[0])

    val list = mutableListOf<Int>()

    for (part in parts) {
        val elf = part.split("\n")

        var cals = 0
        for (calories in elf) {
            cals += sumCalories(calories)
        }

        list.add(cals)

    }

    val sortedList = list.sortedDescending()
    println(sortedList[0])
    println(sortedList[1])
    println(sortedList[2])
    println(sortedList[0] + sortedList[1] + sortedList[2])



}