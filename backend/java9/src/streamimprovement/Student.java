package streamimprovement;

import java.io.*;

public class Student implements Serializable {

     private int id;
     private String name;
     private String mobileNumber;

    public Student() {
    }

    public Student(int id, String name, String mobileNumber) {
        this.id = id;
        this.name = name;
        this.mobileNumber = mobileNumber;
    }

    @Override
    public String toString() {
        return "Student{" +
                "id=" + id +
                ", name='" + name + '\'' +
                ", mobileNumber='" + mobileNumber + '\'' +
                '}';
    }

    public static void main(String[] args) throws IOException {
        Student student = new Student(101, "Sanketh S", "9100200508");

        try {
            FileOutputStream outputStream = new FileOutputStream("student.txt");
            ObjectOutputStream objectOutputStream = new ObjectOutputStream(outputStream);
            objectOutputStream.writeObject(student);
            outputStream.close();
            objectOutputStream.close();
            System.out.println("serialization completed");
        } catch (Exception e) {
            System.err.println("Error");
        }

        try {
            FileInputStream inputStream = new FileInputStream("student.txt");
            ObjectInputStream objectInputStream = new ObjectInputStream(inputStream);
            Student studentObject = (Student) objectInputStream.readObject();
            System.out.println(studentObject);
            inputStream.close();
            objectInputStream.close();
        } catch (Exception e) {
            System.err.println("Error");
        }


    }

}
