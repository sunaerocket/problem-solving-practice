import unittest

solution = __import__('15596-sum')


class Test(unittest.TestCase):
    def test_solve(self):
        result = solution.solve([2, 3, 4])
        self.assertEqual(9, result, "ERROR: wrong output")


if __name__ == '__main__':
    unittest.main()
