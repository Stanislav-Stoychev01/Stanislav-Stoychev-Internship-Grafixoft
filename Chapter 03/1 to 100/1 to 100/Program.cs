﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _1_to_100
{
    internal class Program
    {
        public static string ConvertNumToString(int num) 
        {
            string convertedNum = "Invalid input";

            if (num >= 0 && num <= 100)
            {
                Dictionary<int, string> oneToNineTeen = new Dictionary<int, string>();
                oneToNineTeen.Add(1, "one");
                oneToNineTeen.Add(0, "zero");
                oneToNineTeen.Add(2, "two");
                oneToNineTeen.Add(3, "three");
                oneToNineTeen.Add(4, "four");
                oneToNineTeen.Add(5, "five");
                oneToNineTeen.Add(6, "six");
                oneToNineTeen.Add(7, "seven");
                oneToNineTeen.Add(8, "eight");
                oneToNineTeen.Add(9, "nine");
                oneToNineTeen.Add(10, "ten");
                oneToNineTeen.Add(11, "eleven");
                oneToNineTeen.Add(12, "twelve");
                oneToNineTeen.Add(13, "thirteen");
                oneToNineTeen.Add(14, "fourteen");
                oneToNineTeen.Add(15, "fifteen");
                oneToNineTeen.Add(16, "sixteen");
                oneToNineTeen.Add(17, "seventeen");
                oneToNineTeen.Add(18, "eighteen");
                oneToNineTeen.Add(19, "nineteen");


                if (num >= 0 && num <= 19)
                {
                    convertedNum = oneToNineTeen[num];
                }
                else if (num >= 20 && num <= 99)
                {
                    int findSecNum = (num / 10);
                    string main = "";
                    if (findSecNum == 2)
                    {
                        main = "Twenty";
                    }
                    else if (findSecNum == 3)
                    {
                        main = "Thirty";
                    }
                    else if (findSecNum == 4)
                    {
                        main = "Fourty";
                    }
                    else if (findSecNum == 5)
                    {
                        main = "Fifty";
                    }
                    else if (findSecNum == 6)
                    {
                        main = "Sixty";
                    }
                    else if (findSecNum == 7)
                    {
                        main = "Seventy";
                    }
                    else if (findSecNum == 8)
                    {
                        main = "Eighty";
                    }
                    else if (findSecNum == 9)
                    {
                        main = "Ninety";
                    }

                    int tail = num % 10;
                    string suffix;

                    foreach (KeyValuePair<int, string> kvp in oneToNineTeen)
                    {
                        if (tail == 0)
                        {
                            convertedNum = main;
                            break;
                        }
                        else if (tail == kvp.Key)
                        {
                            suffix = kvp.Value;
                            convertedNum = main + suffix;
                            break;
                        }
                    }
                }
            }

            return convertedNum;
        }

        static void Main(string[] args)
        {
            Console.WriteLine("Input nuber format");
            int num = int.Parse(Console.ReadLine());
            string result = ConvertNumToString(num);
            Console.WriteLine(result);
            Console.ReadLine();
        }
    }
}
