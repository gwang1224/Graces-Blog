---

---

```java
System.out.print("hello ");
System.out.println("hello");
System.out.println("my name is Grace")
```

    hello hello
    my name is Grace


![](https://cdn.discordapp.com/attachments/879557685253664768/1220616445583429733/Screenshot_2024-03-21_at_11.09.52_PM.png?ex=660f96a6&is=65fd21a6&hm=56a2e6bc05fe5db7dee0fc5e662fded8171a2e0b699fc9e33c7d81f1a791283f&)


```java
import java.io.BufferedReader;
import java.io.FileReader;
import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

public class TsvToArraylist {

    public static void main(String[] args) {
        // Path to your TSV file
        String filePath = "/Users/gracewang/Documents/csa/Graces-Blog/PanglaoDB_cluster0.tsv";

        // ArrayList to store the data
        List<TsvRow> dataList = new ArrayList<>();

        try (BufferedReader br = new BufferedReader(new FileReader(filePath))) {
            String line;
            int lineNumber = 1; // Track the line number

            // Skip the header line
            br.readLine();

            // Read each line from the file
            while ((line = br.readLine()) != null) {
                try {
                    // Split the line by tabs ("\t")
                    String[] fields = line.split("\t");

                    // Create a TsvRow object and add it to the ArrayList
                    dataList.add(new TsvRow(
                            fields[0],  // Species
                            fields[1],  // Gene
                            fields[2],  // Study/sample identifier
                            Integer.parseInt(fields[3]),  // Cluster Index (assuming it's an integer)
                            fields[4],  // Sampled Tissue
                            fields[5],  // Inferred Cell Type
                            Integer.parseInt(fields[6])  // Rank (assuming it's an integer)
                    ));
                } catch (ArrayIndexOutOfBoundsException e) {
                    // Print the line number along with the error message
                    System.err.println("Error processing line " + lineNumber + ": " + e.getMessage());
                }
                lineNumber++;
            }
        } catch (IOException e) {
            e.printStackTrace();
        }

        // Print the unsorted data
        System.out.println("Unsorted List:");

        // Bubble Sort
        System.out.println("---------- Bubble Sort ----------");
        bubbleSort(dataList);
        printArrayList(dataList);

        // Insertion Sort
        System.out.println("---------- Insertion Sort ----------");
        insertionSort(dataList);
        printArrayList(dataList);

        // Merge Sort
        System.out.println("---------- Merge Sort ----------");
        mergeSort(dataList);
        printArrayList(dataList);

        // Selection Sort
        System.out.println("---------- Selection Sort ----------");
        selectionSortSort(dataList);
        printArrayList(dataList);


    }

    // Bubble sort implementation to sort by rank
    public static void bubbleSort(List<TsvRow> list) {
        int n = list.size();
        for (int i = 0; i < n - 1; i++) {
            for (int j = 0; j < n - i - 1; j++) {
                // Compare ranks of adjacent TsvRow objects
                if (list.get(j).getRank() > list.get(j + 1).getRank()) {
                    // Swap if out of order
                    TsvRow temp = list.get(j);
                    list.set(j, list.get(j + 1));
                    list.set(j + 1, temp);
                }
            }
        }
    }

    // Insertion sort implementation to sort dataList based on rank
    public static void insertionSort(List<TsvRow> list) {
        int n = list.size();
        for (int i = 1; i < n; ++i) {
            TsvRow key = list.get(i);
            int j = i - 1;

            // Move elements of list[0..i-1], that are greater than key.rank,
            // to one position ahead of their current position
            while (j >= 0 && list.get(j).getRank() > key.getRank()) {
                list.set(j + 1, list.get(j));
                j = j - 1;
            }
            list.set(j + 1, key);
        }
    }

    // Merge Sort
    public static void mergeSort(List<TsvRow> list, int left, int mid, int right) {
        int n1 = mid - left + 1;
        int n2 = right - mid;

        List<TsvRow> leftList = new ArrayList<>(list.subList(left, mid + 1));
        List<TsvRow> rightList = new ArrayList<>(list.subList(mid + 1, right + 1));

        int i = 0, j = 0, k = left;

        while (i < n1 && j < n2) {
            if (leftList.get(i).getRank() <= rightList.get(j).getRank()) {
                list.set(k++, leftList.get(i++));
            } else {
                list.set(k++, rightList.get(j++));
            }
        }

        while (i < n1) {
            list.set(k++, leftList.get(i++));
        }

        while (j < n2) {
            list.set(k++, rightList.get(j++));
        }
    }

    // Selection sort
    public static void selectionSort(List<TsvRow> list) {
        int n = list.size();
        for (int i = 0; i < n - 1; i++) {
            int minIndex = i;
            for (int j = i + 1; j < n; j++) {
                if (list.get(j).getRank() < list.get(minIndex).getRank()) {
                    minIndex = j;
                }
            }
            // Swap the elements
            TsvRow temp = list.get(minIndex);
            list.set(minIndex, list.get(i));
            list.set(i, temp);
        }
    }


    // Method to print the ArrayList
    public static void printArrayList(List<TsvRow> list) {
        for (TsvRow row : list) {
            System.out.println(row);
        }
    }
}

class TsvRow {
    private String species;
    private String gene;
    private String studySampleIdentifier;
    private int clusterIndex;
    private String sampledTissue;
    private String inferredCellType;
    private int rank;

    public TsvRow(String species, String gene, String studySampleIdentifier, int clusterIndex,
                  String sampledTissue, String inferredCellType, int rank) {
        this.species = species;
        this.gene = gene;
        this.studySampleIdentifier = studySampleIdentifier;
        this.clusterIndex = clusterIndex;
        this.sampledTissue = sampledTissue;
        this.inferredCellType = inferredCellType;
        this.rank = rank;
    }

    // Getter for rank
    public int getRank() {
        return clusterIndex;
    }

    // toString method
    @Override
    public String toString() {
        return "Species: " + species +
                ", Gene: " + gene +
                ", Study/Sample Identifier: " + studySampleIdentifier +
                ", Cluster Index: " + clusterIndex +
                ", Sampled Tissue: " + sampledTissue +
                ", Inferred Cell Type: " + inferredCellType +
                ", Rank: " + rank;
    }
}

TsvToArraylist.main(null);
```
