using System.Collections.Generic;
using adventofcode2021;
using Xunit;

namespace adventofcode2021tests
{
    public class TestDays
    {
        [Fact]
        public void TestDay1()
        {
            var input = new List<int> { 199, 200, 208, 210, 200, 207, 240, 269, 260, 263, };

           
            var result = Day1.day1(input);
            Assert.True(result[0] == 7);
            Assert.True(result[1] == 5);

        }

        [Fact]
        public void TestDay2a()
        {
            var input = new List<string> { "forward 5", "down 5", "forward 8", "up 3", "down 8", "forward 2", };
            var result = Day2.day2a(input);

            Assert.True(result[0] * result[1] == 150);
        }

        [Fact]
        public void TestDay2b()
        {
            var input = new List<string> { "forward 5", "down 5", "forward 8", "up 3", "down 8", "forward 2", };
            var result = Day2.day2b(input);

            Assert.True(result[0] * result[1] == 900);
        }

        [Fact]
        public void TestDay3()
        {
            var input = new List<string> { "00100", "11110", "10110", "10111", "10101", "01111", "00111", "11100", "10000", "11001", "00010", "01010", };
            var result = Day3.day3a(input);

            Assert.True(result[0] * result[1] == 198);
        }
    }
}
