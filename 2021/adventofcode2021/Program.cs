using System;
using System.Collections.Generic;
using System.IO;

namespace adventofcode2021
{
    public class Program
    {
        static void Main(string[] args)
        {
            
            var day1result  = Day1.day1(Day1.getInput("input.txt"));
            Console.WriteLine(String.Format("1a: {0}\n1b: {1}", day1result[0], day1result[1]));

            //Day2.day2();
        }
    }

    internal class Day2
    {
        static public void day2()
        {
            Console.WriteLine("Day 2");

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
