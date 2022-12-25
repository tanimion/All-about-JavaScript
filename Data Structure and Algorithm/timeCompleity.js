//====================== Time Complexity ======================
// What is time complexity?
//Time complexity is defined as the amount of time taken by an algorithm to run, as a function of the length of the input. It measures the time taken to execute each statement of code in an algorithm. It is not going to examine the total execution time of an algorithm. Rather, it is going to give information about the variation (increase or decrease) in execution time when the number of operations (increase or decrease) in an algorithm.
//In specificly, time complexity is the relation of input and the number of operation.

//========================== BIG O ============================
// BIG O - Generalize the formal procedure of counting. It allows us to talk formally about how the run time of an algorithm grows as the inputs grow.
// There are different types of time complexities used, let’s see one by one:
// BIG O(n) - It's a linear way to measure the run time of an algorithm. That means (f(n) = n).
// BIG O(n2) - It's a quadratic way to measure the run time of an algorithm. That means (f(n) = n2).
// BIG O(1) - It's a constant way to measure the run time of an algorithm. That means (f(n) = 1).
// BIG O(log n) - It's a logarithmic way to measure the run time of an algorithm. That means (f(n) = log n).
// BIG O(n log n) - It's a log linear way to measure the run time of an algorithm. That means (f(n) = n log n).
// f(n) could be something entirely different.
// Sequence: BIG O(n^2) - BIG O(nlogn) - BIG O(n) - BIG O(logn) - BIG O(1)