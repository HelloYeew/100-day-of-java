import java.util.Scanner;

class Main {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        int i = 0;
        int max = 0;
        while (i < 4) {
            int number = scanner.nextInt();
            scanner.nextLine();
            if (number > max) {
                max = number;
            }
            i++;
        }
        System.out.println(max);
    }
}
