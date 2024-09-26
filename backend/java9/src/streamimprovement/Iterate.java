package streamimprovement;

import java.util.stream.Stream;

public class Iterate {

    public static void main(String[] args) {

        Stream.iterate(5, i -> i <= 10, i -> i+1)
                .forEach(System.out::println);

        Stream.iterate(1, i -> i <= 10, i -> i+1)
                .forEach(System.out::println);

    }

}
