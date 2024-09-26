package streamimprovement;

import java.util.List;
import java.util.stream.Stream;

public class TakeWhile {
    public static void main(String[] args) {

        List<Integer> integerStream = Stream.of(1, 2, 3, 4, 5, 6, 7, 8, 9, 10)
                .takeWhile(number -> number % 2 == 0)
                .toList();

        System.out.println(integerStream);


    }
}
