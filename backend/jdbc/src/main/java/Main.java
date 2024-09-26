import java.sql.*;

public class Main {

    public static void main(String[] args) {

        try (Connection connection = DriverManager.getConnection("jdbc:mysql://localhost:3306/multi-db", "root", "root")) {
            System.out.println("connection established");

            PreparedStatement ps = connection.prepareStatement("INSERT INTO student (name) VALUES (?)");
            ps.setString(1, "Sanketh S");

            int record = ps.executeUpdate();

            if (record > 0) {
                System.out.println("inserted");
            } else {
                System.out.println("failed");
            }


        } catch (SQLException e) {
            throw new RuntimeException(e);
        }
    }
}
