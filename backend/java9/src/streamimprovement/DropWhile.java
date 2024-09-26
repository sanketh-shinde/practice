package streamimprovement;

import java.util.List;
import java.util.stream.Stream;

public class DropWhile {
    public static void main(String[] args) {

        List<Integer> list = Stream.of(1, 2, 3, 4, 5, 6, 7, 8, 9, 10)
                .dropWhile(i -> (i % 2 == 0))
                .toList();
        System.out.println(list);
    }
}
