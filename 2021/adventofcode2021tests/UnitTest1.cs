using System;
using System.Collections.Generic;
using adventofcode2021;
using Xunit;

namespace adventofcode2021tests
{
    public class UnitTest1
    {
        [Fact]
        public void Test1()
        {
            var input = new List<int> { 199, 200, 208, 210, 200, 207, 240, 269, 260, 263, };

           
            var result = Day1.day1(input);
            Assert.True(result[0] == 7);
            Assert.True(result[1] == 5);

        }
    }
}
