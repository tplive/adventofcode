using System;
using System.Collections.Generic;
using System.IO;
using System.Text;

namespace adventofcode2021
{
    public class Program
    {
        static void Main(string[] args)
        {

            //var day1result  = Day1.day1(Day1.getInput("input1.txt"));
            //Console.WriteLine(String.Format("1a: {0}\n1b: {1}", day1result[0], day1result[1]));

            //var day2Input = Day2.getInput("input2.txt");
            //var day2aResult = Day2.day2a(day2Input);
            //var day2bResult = Day2.day2b(day2Input);
            //Console.WriteLine(String.Format("2a: {0}\n2b: {1}", day2aResult[0] * day2aResult[1], day2bResult[0] * day2bResult[1]));

            //var day3Input = Day3.getInput("input3.txt");
            //var day3Result = Day3.day3a(day3Input);
            
        }
    }

    public class Day3
    {
        static public List<string> getInput(string inputFileName)
        {
            var result = new List<string>();

            foreach (string line in File.ReadLines(inputFileName))
            {
                result.Add(line);
            }

            return result;
        }

        static public List<int> day3a(List<string> input)
        {
            // Determine number of bits
            var bits = input[0].Length; // 5

            // Make a list to hold number of each bit
            var eachBit = new List<int>(); //0

            // Add a 0 in each bit position to initialize list
            for (int i = 0; i < bits; i++)
            {
                eachBit.Add(0); //0,0,0,0,0
            }

            // Get each line in the input
            for (int i = 0; i < input.Count; i++)
            {
                // Split each line into separate "1" and "0" strings
                var baite = input[i];
                // For each bit position
                for (int j = 0; j <= bits; j++)
                {
                    
                    // Find out if the bit is a "1", if so it's a true, else it's a false
                    bool bit = baite[j].ToString() == "1"; // TODO IndexOutOfBounds

                    // If the bit is true,
                    if (bit)
                    {
                        // Increment the number in that bits position
                        eachBit[j]++;
                    }
                }
            }

            // eachBit now holds the number of 1's for each position: [7, 5, 8, 7, 5]
            // 
            for (int k = 0; k < eachBit.Count; k++)
            {
                // Determine if 1 or 0 is most prevalent in a position;
                // Length of the input minus number of 1's is less than half, that means there are more 1's
                // 12-7=5<half=, 12-5=7>half, 12-8=4<half, 12-7=5<half, 12-5=7>half
                int half = input.Count / 2;
                if (input.Count - eachBit[k] > half)
                {
                    // If so 1 was the most prevalent
                    eachBit[k] = 1;
                } else
                {
                    // else 0 was most prevalent
                    eachBit[k] = 0;
                }
            }
            // eachBit now [1, 0, 1, 1, 0]
            // Gamma rate is the decimal equivalent of the binary, so 22
            var gammaRate = Convert.ToInt32(eachBit.ToString(), 2);

            // The epsilonRate is the bitwise inverted value so 10110 becomes 01001
            var epsilonRate = ~Convert.ToInt32(eachBit.ToString(), 2);

            return new List<int>() { gammaRate, epsilonRate };
        }
    }

    public class Day2
    {
        static public List<string> getInput(string inputFileName)
        {
            var result = new List<string>();

            foreach (string line in File.ReadLines(inputFileName))
            {
                result.Add(line);
            }

            return result;
        }
        static public List<int> day2a(List<string> input)
        {
            int pos = 0;
            int depth = 0;

            for (int i=0; i < input.Count; i++)
            {
                var pair = input[i].Split(" ");
                switch (pair[0])
                {
                    case "forward":
                        pos = pos + Int16.Parse(pair[1]);
                        break;
                    case "down":
                        depth = depth + Int16.Parse(pair[1]);
                        break;
                    case "up":
                        depth = depth - Int16.Parse(pair[1]);
                        break;
                    default:
                        break;
                }
            }
            return new List<int> { pos, depth};

        }

        static public List<int> day2b(List<string> input)
        {
            int pos = 0;
            int depth = 0;
            int aim = 0;

            for (int i = 0; i < input.Count; i++)
            {
                var pair = input[i].Split(" ");
                switch (pair[0])
                {
                    case "forward":
                        depth = depth + (aim * Int16.Parse(pair[1]));
                        pos = pos + Int16.Parse(pair[1]);
                        break;
                    case "down":
                        aim = aim + Int16.Parse(pair[1]);
                        break;
                    case "up":
                        aim = aim - Int16.Parse(pair[1]);
                        break;
                    default:
                        break;
                }
            }
            return new List<int> { pos, depth };
        }
    }

    public class Day1
    {
        static public List<int> getInput(String inputFile)
        {
            var input = new List<int>();

            foreach (string line in File.ReadLines(inputFile))
            {
                input.Add(short.Parse(line));
            }

            return input;
        }

        static public int[] day1(List<int> input)
        {
            var depth = 0;
            var sliding = 0;

            for (int i = 1; i < input.Count; i++)
            {

                if (input[i] > input[i - 1])
                {
                    depth++;
                }

            }

            var sum = input[0] + input[1] + input[2];
            var sumnext = input[1] + input[2] + input[3];


            for (int i = 0; i < input.Count - 3; i++)
            {
                sum = input[i] + input[i + 1] + input[i + 2];
                sumnext = input[i + 1] + input[i + 2] + input[i + 3];

                if (sum < sumnext)
                {
                    sliding++;
                }
            }

            return new int[] { depth, sliding };
        }
    }
}
