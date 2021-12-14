using System;
using System.Collections.Generic;
using System.IO;

namespace adventofcode2021
{
    public class Program
    {
        static void Main(string[] args)
        {

            //var day1result  = Day1.day1(Day1.getInput("input1.txt"));
            //Console.WriteLine(String.Format("1a: {0}\n1b: {1}", day1result[0], day1result[1]));

            var day2Input = Day2.getInput("input2.txt");

            var day2aResult = Day2.day2a(day2Input);
            var day2bResult = Day2.day2b(day2Input);

            Console.WriteLine(String.Format("2a: {0}\n2b: {1}", day2aResult[0] * day2aResult[1], day2bResult[0] * day2bResult[1]));
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
