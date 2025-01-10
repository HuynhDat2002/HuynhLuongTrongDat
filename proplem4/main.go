//With the example, we can see the summation will be calculated from 1 to n. so i will assume that n > 0
// So with n <= 0, I will return 0

package main

import (
	"fmt"
)
func sum_to_n_a(n int) int {
	if n <= 0 {
		return 0
	}
	if n == 1 {
		return 1
	}
	return n + sum_to_n_a(n-1)
}


func sum_to_n_b(n int) int {
	if n <= 0 {
		return 0
	}
	sum := 0
	tmp := n
	for tmp > 0 {
		sum += tmp
		tmp--
	}
	return sum
}

func sum_to_n_c(n int) int {
	if n <= 0 {
		return 0
	}
	return (n * (n + 1)) / 2
}


func main() {
	fmt.Println(sum_to_n_a(5)) // Outputs: 15
	fmt.Println(sum_to_n_b(5)) // Outputs: 15
	fmt.Println(sum_to_n_c(5)) // Outputs: 15
}