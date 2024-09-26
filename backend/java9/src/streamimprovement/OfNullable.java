package streamimprovement;

import java.util.stream.Stream;

public class OfNullable {

    public static void main(String[] args) {
        Stream.ofNullable(null)
                .forEach(System.out::print);
    }

}
