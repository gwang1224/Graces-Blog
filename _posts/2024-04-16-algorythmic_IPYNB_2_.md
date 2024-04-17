---
title: Algorythmic
toc: True
comments: True
layout: default
type: hacks
---

```Java
import java.util.List;
import java.util.ArrayList;
import java.io.BufferedReader;
import java.io.FileReader;
import java.io.IOException;

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


public class TsvToArraylist {
    private List<TsvRow> dataList = new ArrayList<>();

    // Method to read data from file
    public void readDataFromFile(String filePath) {
        try (BufferedReader br = new BufferedReader(new FileReader(filePath))) {
            String line;
            int lineNumber = 1;

            br.readLine(); // Skip header

            while ((line = br.readLine()) != null) {
                try {
                    String[] fields = line.split("\t");
                    dataList.add(new TsvRow(
                            fields[0], fields[1], fields[2],
                            Integer.parseInt(fields[3]), fields[4],
                            fields[5], Integer.parseInt(fields[6])
                    ));
                } catch (ArrayIndexOutOfBoundsException e) {
                    System.err.println("Error processing line " + lineNumber + ": " + e.getMessage());
                }
                lineNumber++;
            }
        } catch (IOException e) {
            e.printStackTrace();
        }
    }


    // Getter for dataList
    public List<TsvRow> getDataList() {
        return dataList;
    }


    // Bubble sort 
    public void bubbleSort() {
        long startTime = System.nanoTime();

        int n = dataList.size();
        // Iterate over each element in the dataList
        for (int i = 0; i < n - 1; i++) {
            // Iterate over each element except the last i elements
            for (int j = 0; j < n - i - 1; j++) {
                // Compare ranks of adjacent elements
                if (dataList.get(j).getRank() > dataList.get(j + 1).getRank()) {
                    // Swap the elements if they are in the wrong order
                    TsvRow temp = dataList.get(j);
                    dataList.set(j, dataList.get(j + 1));
                    dataList.set(j + 1, temp);
                }
            }
        }

        long endTime = System.nanoTime(); // Get end time
        long duration = (endTime - startTime);  // Calculate duration
        System.out.println("Bubble Sort Time: " + duration + " nanoseconds");
    }

    // Insertion sort implementation
    public void insertionSort() {
        long startTime = System.nanoTime();

        int n = dataList.size();
        // Iterate over each element in the dataList starting from the second element
        for (int i = 1; i < n; ++i) {
            // Store the current element to be inserted
            TsvRow key = dataList.get(i);
            // Initialize j to be the index of the element before the current one
            int j = i - 1;
            
            // Move elements of the dataList[0..i-1], that are greater than key, to one position ahead of their current position
            while (j >= 0 && dataList.get(j).getRank() > key.getRank()) {
                dataList.set(j + 1, dataList.get(j));
                j = j - 1;
            }
            
            // Insert the key into its correct position
            dataList.set(j + 1, key);
        }

        long endTime = System.nanoTime(); // Get end time
        long duration = (endTime - startTime);  // Calculate duration
        System.out.println("Bubble Sort Time: " + duration + " nanoseconds");
    }


   // Merge sort implementation
   public void mergeSort(int left, int right) {

        // Check if the left index is less than the right index
        if (left < right) {
            // Calculate the middle index
            int mid = (left + right) / 2;
            
            // Recursively sort the left and right halves
            mergeSort(left, mid);
            mergeSort(mid + 1, right);
            
            // Merge the sorted halves
            merge(left, mid, right);
        }
    }

    private void merge(int left, int mid, int right) {
        int n1 = mid - left + 1;
        int n2 = right - mid;

        List<TsvRow> leftList = new ArrayList<>(dataList.subList(left, mid + 1));
        List<TsvRow> rightList = new ArrayList<>(dataList.subList(mid + 1, right + 1));

        int i = 0, j = 0, k = left;

        while (i < n1 && j < n2) {
            if (leftList.get(i).getRank() <= rightList.get(j).getRank()) {
                dataList.set(k++, leftList.get(i++));
            } else {
                dataList.set(k++, rightList.get(j++));
            }
        }

        while (i < n1) {
            dataList.set(k++, leftList.get(i++));
        }

        while (j < n2) {
            dataList.set(k++, rightList.get(j++));
        }
    }


    // Selection sort implementation
    public void selectionSort() {
        long startTime = System.nanoTime();
        
        int n = dataList.size();
        
        // Iterate over each element in the dataList
        for (int i = 0; i < n - 1; i++) {
            // Assume the current index has the minimum value
            int minIndex = i;
            
            // Iterate over elements to the right of the current index
            for (int j = i + 1; j < n; j++) {
                // Update minIndex if a smaller element is found
                if (dataList.get(j).getRank() < dataList.get(minIndex).getRank()) {
                    minIndex = j;
                }
            }
            
            // Swap the elements at minIndex and the current index
            TsvRow temp = dataList.get(minIndex);
            dataList.set(minIndex, dataList.get(i));
            dataList.set(i, temp);
        }
        
        long endTime = System.nanoTime();
        long duration = (endTime - startTime);
        System.out.println("Selection Sort Time: " + duration + " nanoseconds");
    }


    public void quickSort(int low, int high) {
        // Check if the lower index is less than the higher index
        if (low < high) {
            // Partition the array and get the pivot index
            int pi = partition(low, high);

            // Recursively sort the sub-arrays before and after the pivot
            quickSort(low, pi - 1);
            quickSort(pi + 1, high);
        }
    }

    private int partition(int low, int high) {
        int pivot = dataList.get(high).getRank();
        int i = low - 1;

        for (int j = low; j < high; j++) {
            if (dataList.get(j).getRank() < pivot) {
                i++;
                swap(i, j);
            }
        }

        swap(i + 1, high);
        return i + 1;
    }
    
    private void swap(int i, int j) {
        TsvRow temp = dataList.get(i);
        dataList.set(i, dataList.get(j));
        dataList.set(j, temp);
    }
    

    // Method to print the dataList
    public void printDataList() {
        for (TsvRow row : dataList) {
            System.out.println(row);
        }
    }

    public static void main(String[] args) {
        TsvToArraylist tsvToArraylist = new TsvToArraylist();
        String filePath = "/Users/gracewang/Documents/csa/Graces-Blog/PanglaoDB_cluster0.tsv";
        tsvToArraylist.readDataFromFile(filePath);

        System.out.println("Unsorted List:");
        tsvToArraylist.printDataList();

        System.out.println();
        System.out.println("---------- Bubble Sort ----------");
        tsvToArraylist.bubbleSort();
        tsvToArraylist.printDataList();

        System.out.println();
        System.out.println("---------- Insertion Sort ----------");
        tsvToArraylist.insertionSort();
        tsvToArraylist.printDataList();

        System.out.println();
        System.out.println("---------- Merge Sort ----------");
        tsvToArraylist.mergeSort(0, tsvToArraylist.getDataList().size() - 1);
        tsvToArraylist.printDataList();

        System.out.println();
        System.out.println("---------- Selection Sort ----------");
        tsvToArraylist.selectionSort();
        tsvToArraylist.printDataList();

        System.out.println();
        System.out.println("---------- Quick Sort ----------");
        tsvToArraylist.quickSort(0, tsvToArraylist.getDataList().size() - 1);
        tsvToArraylist.printDataList();
    }

    public static void bubble(String[] args) {
        TsvToArraylist tsvToArraylist = new TsvToArraylist();
        String filePath = "/Users/gracewang/Documents/csa/Graces-Blog/PanglaoDB_cluster0.tsv";
        tsvToArraylist.readDataFromFile(filePath);

        System.out.println();
        System.out.println("---------- Bubble Sort ----------");
        tsvToArraylist.bubbleSort();
        tsvToArraylist.printDataList();
    }

    public static void insertion(String[] args) {
        TsvToArraylist tsvToArraylist = new TsvToArraylist();
        String filePath = "/Users/gracewang/Documents/csa/Graces-Blog/PanglaoDB_cluster0.tsv";
        tsvToArraylist.readDataFromFile(filePath);

        System.out.println();
        System.out.println("---------- Insertion Sort ----------");
        tsvToArraylist.insertionSort();
        tsvToArraylist.printDataList();
    }

    public static void selection(String[] args) {
        TsvToArraylist tsvToArraylist = new TsvToArraylist();
        String filePath = "/Users/gracewang/Documents/csa/Graces-Blog/PanglaoDB_cluster0.tsv";
        tsvToArraylist.readDataFromFile(filePath);

        System.out.println();
        System.out.println("---------- Selection Sort ----------");
        tsvToArraylist.selectionSort();
        tsvToArraylist.printDataList();
    }

    public static void merge(String[] args) {
        TsvToArraylist tsvToArraylist = new TsvToArraylist();
        String filePath = "/Users/gracewang/Documents/csa/Graces-Blog/PanglaoDB_cluster0.tsv";
        tsvToArraylist.readDataFromFile(filePath);

        System.out.println();
        long startTime = System.nanoTime();
        System.out.println("---------- Merge Sort ----------");
        tsvToArraylist.mergeSort(0, tsvToArraylist.getDataList().size() - 1);
        long endTime = System.nanoTime();
        long duration = (endTime - startTime);
        System.out.println("Merge Sort Time: " + duration + " nanoseconds");

        tsvToArraylist.printDataList();
    }

    public static void quick(String[] args) {
        TsvToArraylist tsvToArraylist = new TsvToArraylist();
        String filePath = "/Users/gracewang/Documents/csa/Graces-Blog/PanglaoDB_cluster0.tsv";
        tsvToArraylist.readDataFromFile(filePath);

        System.out.println();
        long startTime = System.nanoTime();
        System.out.println("---------- Quick Sort ----------");
        tsvToArraylist.quickSort(0, tsvToArraylist.getDataList().size() - 1);
        long endTime = System.nanoTime();
        long duration = (endTime - startTime);
        System.out.println("Merge Sort Time: " + duration + " nanoseconds");

        tsvToArraylist.printDataList();
    }
}

```


```Java
TsvToArraylist.main(null);
```

    Unsorted List:
    Species: Homo_sapiens, Gene: CCL5, Study/Sample Identifier: SRA719952_SRS3407249, Cluster Index: 12, Sampled Tissue: NK cells, Inferred Cell Type: Gamma delta T cells, Rank: 6
    Species: Homo_sapiens, Gene: CCL5, Study/Sample Identifier: SRA719952_SRS3407249, Cluster Index: 2, Sampled Tissue: NK cells, Inferred Cell Type: Gamma delta T cells, Rank: 7
    Species: Homo_sapiens, Gene: CCL5, Study/Sample Identifier: SRA719952_SRS3407249, Cluster Index: 11, Sampled Tissue: NK cells, Inferred Cell Type: NK cells, Rank: 7
    Species: Homo_sapiens, Gene: CCL5, Study/Sample Identifier: SRA719952_SRS3407249, Cluster Index: 13, Sampled Tissue: NK cells, Inferred Cell Type: Gamma delta T cells, Rank: 7
    Species: Homo_sapiens, Gene: CCL5, Study/Sample Identifier: SRA719952_SRS3407249, Cluster Index: 14, Sampled Tissue: NK cells, Inferred Cell Type: Gamma delta T cells, Rank: 7
    Species: Homo_sapiens, Gene: CCL5, Study/Sample Identifier: SRA728025_SRS3454423, Cluster Index: 7, Sampled Tissue: Colon, Inferred Cell Type: T cells, Rank: 7
    Species: Homo_sapiens, Gene: CCL5, Study/Sample Identifier: SRA728025_SRS3454428, Cluster Index: 16, Sampled Tissue: Colon, Inferred Cell Type: NK cells, Rank: 7
    Species: Homo_sapiens, Gene: CCL5, Study/Sample Identifier: SRA719952_SRS3407249, Cluster Index: 0, Sampled Tissue: NK cells, Inferred Cell Type: Gamma delta T cells, Rank: 8
    Species: Homo_sapiens, Gene: CCL5, Study/Sample Identifier: SRA719952_SRS3407249, Cluster Index: 4, Sampled Tissue: NK cells, Inferred Cell Type: NK cells, Rank: 8
    Species: Homo_sapiens, Gene: CCL5, Study/Sample Identifier: SRA719952_SRS3407249, Cluster Index: 8, Sampled Tissue: NK cells, Inferred Cell Type: Gamma delta T cells, Rank: 8
    Species: Homo_sapiens, Gene: CCL5, Study/Sample Identifier: SRA728025_SRS3454425, Cluster Index: 9, Sampled Tissue: Colon, Inferred Cell Type: T cells, Rank: 9
    Species: Homo_sapiens, Gene: CCL5, Study/Sample Identifier: SRA713577_SRS3363004, Cluster Index: 11, Sampled Tissue: Peripheral blood mononuclear cells, Inferred Cell Type: Platelets, Rank: 10
    Species: Homo_sapiens, Gene: CCL5, Study/Sample Identifier: SRA719952_SRS3407249, Cluster Index: 17, Sampled Tissue: NK cells, Inferred Cell Type: Gamma delta T cells, Rank: 10
    Species: Homo_sapiens, Gene: CCL5, Study/Sample Identifier: SRA728025_SRS3454430, Cluster Index: 13, Sampled Tissue: Colon, Inferred Cell Type: T cells, Rank: 11
    Species: Homo_sapiens, Gene: CCL5, Study/Sample Identifier: SRA728025_SRS3454426, Cluster Index: 9, Sampled Tissue: Colon, Inferred Cell Type: T cells, Rank: 12
    Species: Homo_sapiens, Gene: CCL5, Study/Sample Identifier: SRA878024_SRS4660846, Cluster Index: 7, Sampled Tissue: Lungs, Inferred Cell Type: Unknown, Rank: 13
    Species: Homo_sapiens, Gene: CCL5, Study/Sample Identifier: SRA779509_SRS3805260, Cluster Index: 9, Sampled Tissue: Bone marrow, Inferred Cell Type: NK cells, Rank: 14
    Species: Homo_sapiens, Gene: CCL5, Study/Sample Identifier: SRA779509_SRS3805265, Cluster Index: 1, Sampled Tissue: Bone marrow, Inferred Cell Type: NK cells, Rank: 14
    Species: Homo_sapiens, Gene: CCL5, Study/Sample Identifier: SRA728025_SRS3454422, Cluster Index: 8, Sampled Tissue: Colon, Inferred Cell Type: T cells, Rank: 14
    
    ---------- Bubble Sort ----------
    Bubble Sort Time: 67792 nanoseconds
    Species: Homo_sapiens, Gene: CCL5, Study/Sample Identifier: SRA719952_SRS3407249, Cluster Index: 0, Sampled Tissue: NK cells, Inferred Cell Type: Gamma delta T cells, Rank: 8
    Species: Homo_sapiens, Gene: CCL5, Study/Sample Identifier: SRA779509_SRS3805265, Cluster Index: 1, Sampled Tissue: Bone marrow, Inferred Cell Type: NK cells, Rank: 14
    Species: Homo_sapiens, Gene: CCL5, Study/Sample Identifier: SRA719952_SRS3407249, Cluster Index: 2, Sampled Tissue: NK cells, Inferred Cell Type: Gamma delta T cells, Rank: 7
    Species: Homo_sapiens, Gene: CCL5, Study/Sample Identifier: SRA719952_SRS3407249, Cluster Index: 4, Sampled Tissue: NK cells, Inferred Cell Type: NK cells, Rank: 8
    Species: Homo_sapiens, Gene: CCL5, Study/Sample Identifier: SRA728025_SRS3454423, Cluster Index: 7, Sampled Tissue: Colon, Inferred Cell Type: T cells, Rank: 7
    Species: Homo_sapiens, Gene: CCL5, Study/Sample Identifier: SRA878024_SRS4660846, Cluster Index: 7, Sampled Tissue: Lungs, Inferred Cell Type: Unknown, Rank: 13
    Species: Homo_sapiens, Gene: CCL5, Study/Sample Identifier: SRA719952_SRS3407249, Cluster Index: 8, Sampled Tissue: NK cells, Inferred Cell Type: Gamma delta T cells, Rank: 8
    Species: Homo_sapiens, Gene: CCL5, Study/Sample Identifier: SRA728025_SRS3454422, Cluster Index: 8, Sampled Tissue: Colon, Inferred Cell Type: T cells, Rank: 14
    Species: Homo_sapiens, Gene: CCL5, Study/Sample Identifier: SRA728025_SRS3454425, Cluster Index: 9, Sampled Tissue: Colon, Inferred Cell Type: T cells, Rank: 9
    Species: Homo_sapiens, Gene: CCL5, Study/Sample Identifier: SRA728025_SRS3454426, Cluster Index: 9, Sampled Tissue: Colon, Inferred Cell Type: T cells, Rank: 12
    Species: Homo_sapiens, Gene: CCL5, Study/Sample Identifier: SRA779509_SRS3805260, Cluster Index: 9, Sampled Tissue: Bone marrow, Inferred Cell Type: NK cells, Rank: 14
    Species: Homo_sapiens, Gene: CCL5, Study/Sample Identifier: SRA719952_SRS3407249, Cluster Index: 11, Sampled Tissue: NK cells, Inferred Cell Type: NK cells, Rank: 7
    Species: Homo_sapiens, Gene: CCL5, Study/Sample Identifier: SRA713577_SRS3363004, Cluster Index: 11, Sampled Tissue: Peripheral blood mononuclear cells, Inferred Cell Type: Platelets, Rank: 10
    Species: Homo_sapiens, Gene: CCL5, Study/Sample Identifier: SRA719952_SRS3407249, Cluster Index: 12, Sampled Tissue: NK cells, Inferred Cell Type: Gamma delta T cells, Rank: 6
    Species: Homo_sapiens, Gene: CCL5, Study/Sample Identifier: SRA719952_SRS3407249, Cluster Index: 13, Sampled Tissue: NK cells, Inferred Cell Type: Gamma delta T cells, Rank: 7
    Species: Homo_sapiens, Gene: CCL5, Study/Sample Identifier: SRA728025_SRS3454430, Cluster Index: 13, Sampled Tissue: Colon, Inferred Cell Type: T cells, Rank: 11
    Species: Homo_sapiens, Gene: CCL5, Study/Sample Identifier: SRA719952_SRS3407249, Cluster Index: 14, Sampled Tissue: NK cells, Inferred Cell Type: Gamma delta T cells, Rank: 7
    Species: Homo_sapiens, Gene: CCL5, Study/Sample Identifier: SRA728025_SRS3454428, Cluster Index: 16, Sampled Tissue: Colon, Inferred Cell Type: NK cells, Rank: 7
    Species: Homo_sapiens, Gene: CCL5, Study/Sample Identifier: SRA719952_SRS3407249, Cluster Index: 17, Sampled Tissue: NK cells, Inferred Cell Type: Gamma delta T cells, Rank: 10
    
    ---------- Insertion Sort ----------
    Bubble Sort Time: 8167 nanoseconds
    Species: Homo_sapiens, Gene: CCL5, Study/Sample Identifier: SRA719952_SRS3407249, Cluster Index: 0, Sampled Tissue: NK cells, Inferred Cell Type: Gamma delta T cells, Rank: 8
    Species: Homo_sapiens, Gene: CCL5, Study/Sample Identifier: SRA779509_SRS3805265, Cluster Index: 1, Sampled Tissue: Bone marrow, Inferred Cell Type: NK cells, Rank: 14
    Species: Homo_sapiens, Gene: CCL5, Study/Sample Identifier: SRA719952_SRS3407249, Cluster Index: 2, Sampled Tissue: NK cells, Inferred Cell Type: Gamma delta T cells, Rank: 7
    Species: Homo_sapiens, Gene: CCL5, Study/Sample Identifier: SRA719952_SRS3407249, Cluster Index: 4, Sampled Tissue: NK cells, Inferred Cell Type: NK cells, Rank: 8
    Species: Homo_sapiens, Gene: CCL5, Study/Sample Identifier: SRA728025_SRS3454423, Cluster Index: 7, Sampled Tissue: Colon, Inferred Cell Type: T cells, Rank: 7
    Species: Homo_sapiens, Gene: CCL5, Study/Sample Identifier: SRA878024_SRS4660846, Cluster Index: 7, Sampled Tissue: Lungs, Inferred Cell Type: Unknown, Rank: 13
    Species: Homo_sapiens, Gene: CCL5, Study/Sample Identifier: SRA719952_SRS3407249, Cluster Index: 8, Sampled Tissue: NK cells, Inferred Cell Type: Gamma delta T cells, Rank: 8
    Species: Homo_sapiens, Gene: CCL5, Study/Sample Identifier: SRA728025_SRS3454422, Cluster Index: 8, Sampled Tissue: Colon, Inferred Cell Type: T cells, Rank: 14
    Species: Homo_sapiens, Gene: CCL5, Study/Sample Identifier: SRA728025_SRS3454425, Cluster Index: 9, Sampled Tissue: Colon, Inferred Cell Type: T cells, Rank: 9
    Species: Homo_sapiens, Gene: CCL5, Study/Sample Identifier: SRA728025_SRS3454426, Cluster Index: 9, Sampled Tissue: Colon, Inferred Cell Type: T cells, Rank: 12
    Species: Homo_sapiens, Gene: CCL5, Study/Sample Identifier: SRA779509_SRS3805260, Cluster Index: 9, Sampled Tissue: Bone marrow, Inferred Cell Type: NK cells, Rank: 14
    Species: Homo_sapiens, Gene: CCL5, Study/Sample Identifier: SRA719952_SRS3407249, Cluster Index: 11, Sampled Tissue: NK cells, Inferred Cell Type: NK cells, Rank: 7
    Species: Homo_sapiens, Gene: CCL5, Study/Sample Identifier: SRA713577_SRS3363004, Cluster Index: 11, Sampled Tissue: Peripheral blood mononuclear cells, Inferred Cell Type: Platelets, Rank: 10
    Species: Homo_sapiens, Gene: CCL5, Study/Sample Identifier: SRA719952_SRS3407249, Cluster Index: 12, Sampled Tissue: NK cells, Inferred Cell Type: Gamma delta T cells, Rank: 6
    Species: Homo_sapiens, Gene: CCL5, Study/Sample Identifier: SRA719952_SRS3407249, Cluster Index: 13, Sampled Tissue: NK cells, Inferred Cell Type: Gamma delta T cells, Rank: 7
    Species: Homo_sapiens, Gene: CCL5, Study/Sample Identifier: SRA728025_SRS3454430, Cluster Index: 13, Sampled Tissue: Colon, Inferred Cell Type: T cells, Rank: 11
    Species: Homo_sapiens, Gene: CCL5, Study/Sample Identifier: SRA719952_SRS3407249, Cluster Index: 14, Sampled Tissue: NK cells, Inferred Cell Type: Gamma delta T cells, Rank: 7
    Species: Homo_sapiens, Gene: CCL5, Study/Sample Identifier: SRA728025_SRS3454428, Cluster Index: 16, Sampled Tissue: Colon, Inferred Cell Type: NK cells, Rank: 7
    Species: Homo_sapiens, Gene: CCL5, Study/Sample Identifier: SRA719952_SRS3407249, Cluster Index: 17, Sampled Tissue: NK cells, Inferred Cell Type: Gamma delta T cells, Rank: 10
    
    ---------- Merge Sort ----------
    Species: Homo_sapiens, Gene: CCL5, Study/Sample Identifier: SRA719952_SRS3407249, Cluster Index: 0, Sampled Tissue: NK cells, Inferred Cell Type: Gamma delta T cells, Rank: 8
    Species: Homo_sapiens, Gene: CCL5, Study/Sample Identifier: SRA779509_SRS3805265, Cluster Index: 1, Sampled Tissue: Bone marrow, Inferred Cell Type: NK cells, Rank: 14
    Species: Homo_sapiens, Gene: CCL5, Study/Sample Identifier: SRA719952_SRS3407249, Cluster Index: 2, Sampled Tissue: NK cells, Inferred Cell Type: Gamma delta T cells, Rank: 7
    Species: Homo_sapiens, Gene: CCL5, Study/Sample Identifier: SRA719952_SRS3407249, Cluster Index: 4, Sampled Tissue: NK cells, Inferred Cell Type: NK cells, Rank: 8
    Species: Homo_sapiens, Gene: CCL5, Study/Sample Identifier: SRA728025_SRS3454423, Cluster Index: 7, Sampled Tissue: Colon, Inferred Cell Type: T cells, Rank: 7
    Species: Homo_sapiens, Gene: CCL5, Study/Sample Identifier: SRA878024_SRS4660846, Cluster Index: 7, Sampled Tissue: Lungs, Inferred Cell Type: Unknown, Rank: 13
    Species: Homo_sapiens, Gene: CCL5, Study/Sample Identifier: SRA719952_SRS3407249, Cluster Index: 8, Sampled Tissue: NK cells, Inferred Cell Type: Gamma delta T cells, Rank: 8
    Species: Homo_sapiens, Gene: CCL5, Study/Sample Identifier: SRA728025_SRS3454422, Cluster Index: 8, Sampled Tissue: Colon, Inferred Cell Type: T cells, Rank: 14
    Species: Homo_sapiens, Gene: CCL5, Study/Sample Identifier: SRA728025_SRS3454425, Cluster Index: 9, Sampled Tissue: Colon, Inferred Cell Type: T cells, Rank: 9
    Species: Homo_sapiens, Gene: CCL5, Study/Sample Identifier: SRA728025_SRS3454426, Cluster Index: 9, Sampled Tissue: Colon, Inferred Cell Type: T cells, Rank: 12
    Species: Homo_sapiens, Gene: CCL5, Study/Sample Identifier: SRA779509_SRS3805260, Cluster Index: 9, Sampled Tissue: Bone marrow, Inferred Cell Type: NK cells, Rank: 14
    Species: Homo_sapiens, Gene: CCL5, Study/Sample Identifier: SRA719952_SRS3407249, Cluster Index: 11, Sampled Tissue: NK cells, Inferred Cell Type: NK cells, Rank: 7
    Species: Homo_sapiens, Gene: CCL5, Study/Sample Identifier: SRA713577_SRS3363004, Cluster Index: 11, Sampled Tissue: Peripheral blood mononuclear cells, Inferred Cell Type: Platelets, Rank: 10
    Species: Homo_sapiens, Gene: CCL5, Study/Sample Identifier: SRA719952_SRS3407249, Cluster Index: 12, Sampled Tissue: NK cells, Inferred Cell Type: Gamma delta T cells, Rank: 6
    Species: Homo_sapiens, Gene: CCL5, Study/Sample Identifier: SRA719952_SRS3407249, Cluster Index: 13, Sampled Tissue: NK cells, Inferred Cell Type: Gamma delta T cells, Rank: 7
    Species: Homo_sapiens, Gene: CCL5, Study/Sample Identifier: SRA728025_SRS3454430, Cluster Index: 13, Sampled Tissue: Colon, Inferred Cell Type: T cells, Rank: 11
    Species: Homo_sapiens, Gene: CCL5, Study/Sample Identifier: SRA719952_SRS3407249, Cluster Index: 14, Sampled Tissue: NK cells, Inferred Cell Type: Gamma delta T cells, Rank: 7
    Species: Homo_sapiens, Gene: CCL5, Study/Sample Identifier: SRA728025_SRS3454428, Cluster Index: 16, Sampled Tissue: Colon, Inferred Cell Type: NK cells, Rank: 7
    Species: Homo_sapiens, Gene: CCL5, Study/Sample Identifier: SRA719952_SRS3407249, Cluster Index: 17, Sampled Tissue: NK cells, Inferred Cell Type: Gamma delta T cells, Rank: 10
    
    ---------- Selection Sort ----------
    Selection Sort Time: 20459 nanoseconds
    Species: Homo_sapiens, Gene: CCL5, Study/Sample Identifier: SRA719952_SRS3407249, Cluster Index: 0, Sampled Tissue: NK cells, Inferred Cell Type: Gamma delta T cells, Rank: 8
    Species: Homo_sapiens, Gene: CCL5, Study/Sample Identifier: SRA779509_SRS3805265, Cluster Index: 1, Sampled Tissue: Bone marrow, Inferred Cell Type: NK cells, Rank: 14
    Species: Homo_sapiens, Gene: CCL5, Study/Sample Identifier: SRA719952_SRS3407249, Cluster Index: 2, Sampled Tissue: NK cells, Inferred Cell Type: Gamma delta T cells, Rank: 7
    Species: Homo_sapiens, Gene: CCL5, Study/Sample Identifier: SRA719952_SRS3407249, Cluster Index: 4, Sampled Tissue: NK cells, Inferred Cell Type: NK cells, Rank: 8
    Species: Homo_sapiens, Gene: CCL5, Study/Sample Identifier: SRA728025_SRS3454423, Cluster Index: 7, Sampled Tissue: Colon, Inferred Cell Type: T cells, Rank: 7
    Species: Homo_sapiens, Gene: CCL5, Study/Sample Identifier: SRA878024_SRS4660846, Cluster Index: 7, Sampled Tissue: Lungs, Inferred Cell Type: Unknown, Rank: 13
    Species: Homo_sapiens, Gene: CCL5, Study/Sample Identifier: SRA719952_SRS3407249, Cluster Index: 8, Sampled Tissue: NK cells, Inferred Cell Type: Gamma delta T cells, Rank: 8
    Species: Homo_sapiens, Gene: CCL5, Study/Sample Identifier: SRA728025_SRS3454422, Cluster Index: 8, Sampled Tissue: Colon, Inferred Cell Type: T cells, Rank: 14
    Species: Homo_sapiens, Gene: CCL5, Study/Sample Identifier: SRA728025_SRS3454425, Cluster Index: 9, Sampled Tissue: Colon, Inferred Cell Type: T cells, Rank: 9
    Species: Homo_sapiens, Gene: CCL5, Study/Sample Identifier: SRA728025_SRS3454426, Cluster Index: 9, Sampled Tissue: Colon, Inferred Cell Type: T cells, Rank: 12
    Species: Homo_sapiens, Gene: CCL5, Study/Sample Identifier: SRA779509_SRS3805260, Cluster Index: 9, Sampled Tissue: Bone marrow, Inferred Cell Type: NK cells, Rank: 14
    Species: Homo_sapiens, Gene: CCL5, Study/Sample Identifier: SRA719952_SRS3407249, Cluster Index: 11, Sampled Tissue: NK cells, Inferred Cell Type: NK cells, Rank: 7
    Species: Homo_sapiens, Gene: CCL5, Study/Sample Identifier: SRA713577_SRS3363004, Cluster Index: 11, Sampled Tissue: Peripheral blood mononuclear cells, Inferred Cell Type: Platelets, Rank: 10
    Species: Homo_sapiens, Gene: CCL5, Study/Sample Identifier: SRA719952_SRS3407249, Cluster Index: 12, Sampled Tissue: NK cells, Inferred Cell Type: Gamma delta T cells, Rank: 6
    Species: Homo_sapiens, Gene: CCL5, Study/Sample Identifier: SRA719952_SRS3407249, Cluster Index: 13, Sampled Tissue: NK cells, Inferred Cell Type: Gamma delta T cells, Rank: 7
    Species: Homo_sapiens, Gene: CCL5, Study/Sample Identifier: SRA728025_SRS3454430, Cluster Index: 13, Sampled Tissue: Colon, Inferred Cell Type: T cells, Rank: 11
    Species: Homo_sapiens, Gene: CCL5, Study/Sample Identifier: SRA719952_SRS3407249, Cluster Index: 14, Sampled Tissue: NK cells, Inferred Cell Type: Gamma delta T cells, Rank: 7
    Species: Homo_sapiens, Gene: CCL5, Study/Sample Identifier: SRA728025_SRS3454428, Cluster Index: 16, Sampled Tissue: Colon, Inferred Cell Type: NK cells, Rank: 7
    Species: Homo_sapiens, Gene: CCL5, Study/Sample Identifier: SRA719952_SRS3407249, Cluster Index: 17, Sampled Tissue: NK cells, Inferred Cell Type: Gamma delta T cells, Rank: 10
    
    ---------- Quick Sort ----------
    Species: Homo_sapiens, Gene: CCL5, Study/Sample Identifier: SRA719952_SRS3407249, Cluster Index: 0, Sampled Tissue: NK cells, Inferred Cell Type: Gamma delta T cells, Rank: 8
    Species: Homo_sapiens, Gene: CCL5, Study/Sample Identifier: SRA779509_SRS3805265, Cluster Index: 1, Sampled Tissue: Bone marrow, Inferred Cell Type: NK cells, Rank: 14
    Species: Homo_sapiens, Gene: CCL5, Study/Sample Identifier: SRA719952_SRS3407249, Cluster Index: 2, Sampled Tissue: NK cells, Inferred Cell Type: Gamma delta T cells, Rank: 7
    Species: Homo_sapiens, Gene: CCL5, Study/Sample Identifier: SRA719952_SRS3407249, Cluster Index: 4, Sampled Tissue: NK cells, Inferred Cell Type: NK cells, Rank: 8
    Species: Homo_sapiens, Gene: CCL5, Study/Sample Identifier: SRA878024_SRS4660846, Cluster Index: 7, Sampled Tissue: Lungs, Inferred Cell Type: Unknown, Rank: 13
    Species: Homo_sapiens, Gene: CCL5, Study/Sample Identifier: SRA728025_SRS3454423, Cluster Index: 7, Sampled Tissue: Colon, Inferred Cell Type: T cells, Rank: 7
    Species: Homo_sapiens, Gene: CCL5, Study/Sample Identifier: SRA728025_SRS3454422, Cluster Index: 8, Sampled Tissue: Colon, Inferred Cell Type: T cells, Rank: 14
    Species: Homo_sapiens, Gene: CCL5, Study/Sample Identifier: SRA719952_SRS3407249, Cluster Index: 8, Sampled Tissue: NK cells, Inferred Cell Type: Gamma delta T cells, Rank: 8
    Species: Homo_sapiens, Gene: CCL5, Study/Sample Identifier: SRA779509_SRS3805260, Cluster Index: 9, Sampled Tissue: Bone marrow, Inferred Cell Type: NK cells, Rank: 14
    Species: Homo_sapiens, Gene: CCL5, Study/Sample Identifier: SRA728025_SRS3454425, Cluster Index: 9, Sampled Tissue: Colon, Inferred Cell Type: T cells, Rank: 9
    Species: Homo_sapiens, Gene: CCL5, Study/Sample Identifier: SRA728025_SRS3454426, Cluster Index: 9, Sampled Tissue: Colon, Inferred Cell Type: T cells, Rank: 12
    Species: Homo_sapiens, Gene: CCL5, Study/Sample Identifier: SRA713577_SRS3363004, Cluster Index: 11, Sampled Tissue: Peripheral blood mononuclear cells, Inferred Cell Type: Platelets, Rank: 10
    Species: Homo_sapiens, Gene: CCL5, Study/Sample Identifier: SRA719952_SRS3407249, Cluster Index: 11, Sampled Tissue: NK cells, Inferred Cell Type: NK cells, Rank: 7
    Species: Homo_sapiens, Gene: CCL5, Study/Sample Identifier: SRA719952_SRS3407249, Cluster Index: 12, Sampled Tissue: NK cells, Inferred Cell Type: Gamma delta T cells, Rank: 6
    Species: Homo_sapiens, Gene: CCL5, Study/Sample Identifier: SRA728025_SRS3454430, Cluster Index: 13, Sampled Tissue: Colon, Inferred Cell Type: T cells, Rank: 11
    Species: Homo_sapiens, Gene: CCL5, Study/Sample Identifier: SRA719952_SRS3407249, Cluster Index: 13, Sampled Tissue: NK cells, Inferred Cell Type: Gamma delta T cells, Rank: 7
    Species: Homo_sapiens, Gene: CCL5, Study/Sample Identifier: SRA719952_SRS3407249, Cluster Index: 14, Sampled Tissue: NK cells, Inferred Cell Type: Gamma delta T cells, Rank: 7
    Species: Homo_sapiens, Gene: CCL5, Study/Sample Identifier: SRA728025_SRS3454428, Cluster Index: 16, Sampled Tissue: Colon, Inferred Cell Type: NK cells, Rank: 7
    Species: Homo_sapiens, Gene: CCL5, Study/Sample Identifier: SRA719952_SRS3407249, Cluster Index: 17, Sampled Tissue: NK cells, Inferred Cell Type: Gamma delta T cells, Rank: 10



```Java
TsvToArraylist.bubble(null);
```

    
    ---------- Bubble Sort ----------
    Bubble Sort Time: 31750 nanoseconds
    Species: Homo_sapiens, Gene: CCL5, Study/Sample Identifier: SRA719952_SRS3407249, Cluster Index: 0, Sampled Tissue: NK cells, Inferred Cell Type: Gamma delta T cells, Rank: 8
    Species: Homo_sapiens, Gene: CCL5, Study/Sample Identifier: SRA779509_SRS3805265, Cluster Index: 1, Sampled Tissue: Bone marrow, Inferred Cell Type: NK cells, Rank: 14
    Species: Homo_sapiens, Gene: CCL5, Study/Sample Identifier: SRA719952_SRS3407249, Cluster Index: 2, Sampled Tissue: NK cells, Inferred Cell Type: Gamma delta T cells, Rank: 7
    Species: Homo_sapiens, Gene: CCL5, Study/Sample Identifier: SRA719952_SRS3407249, Cluster Index: 4, Sampled Tissue: NK cells, Inferred Cell Type: NK cells, Rank: 8
    Species: Homo_sapiens, Gene: CCL5, Study/Sample Identifier: SRA728025_SRS3454423, Cluster Index: 7, Sampled Tissue: Colon, Inferred Cell Type: T cells, Rank: 7
    Species: Homo_sapiens, Gene: CCL5, Study/Sample Identifier: SRA878024_SRS4660846, Cluster Index: 7, Sampled Tissue: Lungs, Inferred Cell Type: Unknown, Rank: 13
    Species: Homo_sapiens, Gene: CCL5, Study/Sample Identifier: SRA719952_SRS3407249, Cluster Index: 8, Sampled Tissue: NK cells, Inferred Cell Type: Gamma delta T cells, Rank: 8
    Species: Homo_sapiens, Gene: CCL5, Study/Sample Identifier: SRA728025_SRS3454422, Cluster Index: 8, Sampled Tissue: Colon, Inferred Cell Type: T cells, Rank: 14
    Species: Homo_sapiens, Gene: CCL5, Study/Sample Identifier: SRA728025_SRS3454425, Cluster Index: 9, Sampled Tissue: Colon, Inferred Cell Type: T cells, Rank: 9
    Species: Homo_sapiens, Gene: CCL5, Study/Sample Identifier: SRA728025_SRS3454426, Cluster Index: 9, Sampled Tissue: Colon, Inferred Cell Type: T cells, Rank: 12
    Species: Homo_sapiens, Gene: CCL5, Study/Sample Identifier: SRA779509_SRS3805260, Cluster Index: 9, Sampled Tissue: Bone marrow, Inferred Cell Type: NK cells, Rank: 14
    Species: Homo_sapiens, Gene: CCL5, Study/Sample Identifier: SRA719952_SRS3407249, Cluster Index: 11, Sampled Tissue: NK cells, Inferred Cell Type: NK cells, Rank: 7
    Species: Homo_sapiens, Gene: CCL5, Study/Sample Identifier: SRA713577_SRS3363004, Cluster Index: 11, Sampled Tissue: Peripheral blood mononuclear cells, Inferred Cell Type: Platelets, Rank: 10
    Species: Homo_sapiens, Gene: CCL5, Study/Sample Identifier: SRA719952_SRS3407249, Cluster Index: 12, Sampled Tissue: NK cells, Inferred Cell Type: Gamma delta T cells, Rank: 6
    Species: Homo_sapiens, Gene: CCL5, Study/Sample Identifier: SRA719952_SRS3407249, Cluster Index: 13, Sampled Tissue: NK cells, Inferred Cell Type: Gamma delta T cells, Rank: 7
    Species: Homo_sapiens, Gene: CCL5, Study/Sample Identifier: SRA728025_SRS3454430, Cluster Index: 13, Sampled Tissue: Colon, Inferred Cell Type: T cells, Rank: 11
    Species: Homo_sapiens, Gene: CCL5, Study/Sample Identifier: SRA719952_SRS3407249, Cluster Index: 14, Sampled Tissue: NK cells, Inferred Cell Type: Gamma delta T cells, Rank: 7
    Species: Homo_sapiens, Gene: CCL5, Study/Sample Identifier: SRA728025_SRS3454428, Cluster Index: 16, Sampled Tissue: Colon, Inferred Cell Type: NK cells, Rank: 7
    Species: Homo_sapiens, Gene: CCL5, Study/Sample Identifier: SRA719952_SRS3407249, Cluster Index: 17, Sampled Tissue: NK cells, Inferred Cell Type: Gamma delta T cells, Rank: 10



```Java
TsvToArraylist.insertion(null);
```

    
    ---------- Insertion Sort ----------
    Bubble Sort Time: 17625 nanoseconds
    Species: Homo_sapiens, Gene: CCL5, Study/Sample Identifier: SRA719952_SRS3407249, Cluster Index: 0, Sampled Tissue: NK cells, Inferred Cell Type: Gamma delta T cells, Rank: 8
    Species: Homo_sapiens, Gene: CCL5, Study/Sample Identifier: SRA779509_SRS3805265, Cluster Index: 1, Sampled Tissue: Bone marrow, Inferred Cell Type: NK cells, Rank: 14
    Species: Homo_sapiens, Gene: CCL5, Study/Sample Identifier: SRA719952_SRS3407249, Cluster Index: 2, Sampled Tissue: NK cells, Inferred Cell Type: Gamma delta T cells, Rank: 7
    Species: Homo_sapiens, Gene: CCL5, Study/Sample Identifier: SRA719952_SRS3407249, Cluster Index: 4, Sampled Tissue: NK cells, Inferred Cell Type: NK cells, Rank: 8
    Species: Homo_sapiens, Gene: CCL5, Study/Sample Identifier: SRA728025_SRS3454423, Cluster Index: 7, Sampled Tissue: Colon, Inferred Cell Type: T cells, Rank: 7
    Species: Homo_sapiens, Gene: CCL5, Study/Sample Identifier: SRA878024_SRS4660846, Cluster Index: 7, Sampled Tissue: Lungs, Inferred Cell Type: Unknown, Rank: 13
    Species: Homo_sapiens, Gene: CCL5, Study/Sample Identifier: SRA719952_SRS3407249, Cluster Index: 8, Sampled Tissue: NK cells, Inferred Cell Type: Gamma delta T cells, Rank: 8
    Species: Homo_sapiens, Gene: CCL5, Study/Sample Identifier: SRA728025_SRS3454422, Cluster Index: 8, Sampled Tissue: Colon, Inferred Cell Type: T cells, Rank: 14
    Species: Homo_sapiens, Gene: CCL5, Study/Sample Identifier: SRA728025_SRS3454425, Cluster Index: 9, Sampled Tissue: Colon, Inferred Cell Type: T cells, Rank: 9
    Species: Homo_sapiens, Gene: CCL5, Study/Sample Identifier: SRA728025_SRS3454426, Cluster Index: 9, Sampled Tissue: Colon, Inferred Cell Type: T cells, Rank: 12
    Species: Homo_sapiens, Gene: CCL5, Study/Sample Identifier: SRA779509_SRS3805260, Cluster Index: 9, Sampled Tissue: Bone marrow, Inferred Cell Type: NK cells, Rank: 14
    Species: Homo_sapiens, Gene: CCL5, Study/Sample Identifier: SRA719952_SRS3407249, Cluster Index: 11, Sampled Tissue: NK cells, Inferred Cell Type: NK cells, Rank: 7
    Species: Homo_sapiens, Gene: CCL5, Study/Sample Identifier: SRA713577_SRS3363004, Cluster Index: 11, Sampled Tissue: Peripheral blood mononuclear cells, Inferred Cell Type: Platelets, Rank: 10
    Species: Homo_sapiens, Gene: CCL5, Study/Sample Identifier: SRA719952_SRS3407249, Cluster Index: 12, Sampled Tissue: NK cells, Inferred Cell Type: Gamma delta T cells, Rank: 6
    Species: Homo_sapiens, Gene: CCL5, Study/Sample Identifier: SRA719952_SRS3407249, Cluster Index: 13, Sampled Tissue: NK cells, Inferred Cell Type: Gamma delta T cells, Rank: 7
    Species: Homo_sapiens, Gene: CCL5, Study/Sample Identifier: SRA728025_SRS3454430, Cluster Index: 13, Sampled Tissue: Colon, Inferred Cell Type: T cells, Rank: 11
    Species: Homo_sapiens, Gene: CCL5, Study/Sample Identifier: SRA719952_SRS3407249, Cluster Index: 14, Sampled Tissue: NK cells, Inferred Cell Type: Gamma delta T cells, Rank: 7
    Species: Homo_sapiens, Gene: CCL5, Study/Sample Identifier: SRA728025_SRS3454428, Cluster Index: 16, Sampled Tissue: Colon, Inferred Cell Type: NK cells, Rank: 7
    Species: Homo_sapiens, Gene: CCL5, Study/Sample Identifier: SRA719952_SRS3407249, Cluster Index: 17, Sampled Tissue: NK cells, Inferred Cell Type: Gamma delta T cells, Rank: 10



```Java
TsvToArraylist.selection(null);
```

    
    ---------- Selection Sort ----------
    Selection Sort Time: 37417 nanoseconds
    Species: Homo_sapiens, Gene: CCL5, Study/Sample Identifier: SRA719952_SRS3407249, Cluster Index: 0, Sampled Tissue: NK cells, Inferred Cell Type: Gamma delta T cells, Rank: 8
    Species: Homo_sapiens, Gene: CCL5, Study/Sample Identifier: SRA779509_SRS3805265, Cluster Index: 1, Sampled Tissue: Bone marrow, Inferred Cell Type: NK cells, Rank: 14
    Species: Homo_sapiens, Gene: CCL5, Study/Sample Identifier: SRA719952_SRS3407249, Cluster Index: 2, Sampled Tissue: NK cells, Inferred Cell Type: Gamma delta T cells, Rank: 7
    Species: Homo_sapiens, Gene: CCL5, Study/Sample Identifier: SRA719952_SRS3407249, Cluster Index: 4, Sampled Tissue: NK cells, Inferred Cell Type: NK cells, Rank: 8
    Species: Homo_sapiens, Gene: CCL5, Study/Sample Identifier: SRA728025_SRS3454423, Cluster Index: 7, Sampled Tissue: Colon, Inferred Cell Type: T cells, Rank: 7
    Species: Homo_sapiens, Gene: CCL5, Study/Sample Identifier: SRA878024_SRS4660846, Cluster Index: 7, Sampled Tissue: Lungs, Inferred Cell Type: Unknown, Rank: 13
    Species: Homo_sapiens, Gene: CCL5, Study/Sample Identifier: SRA719952_SRS3407249, Cluster Index: 8, Sampled Tissue: NK cells, Inferred Cell Type: Gamma delta T cells, Rank: 8
    Species: Homo_sapiens, Gene: CCL5, Study/Sample Identifier: SRA728025_SRS3454422, Cluster Index: 8, Sampled Tissue: Colon, Inferred Cell Type: T cells, Rank: 14
    Species: Homo_sapiens, Gene: CCL5, Study/Sample Identifier: SRA728025_SRS3454425, Cluster Index: 9, Sampled Tissue: Colon, Inferred Cell Type: T cells, Rank: 9
    Species: Homo_sapiens, Gene: CCL5, Study/Sample Identifier: SRA728025_SRS3454426, Cluster Index: 9, Sampled Tissue: Colon, Inferred Cell Type: T cells, Rank: 12
    Species: Homo_sapiens, Gene: CCL5, Study/Sample Identifier: SRA779509_SRS3805260, Cluster Index: 9, Sampled Tissue: Bone marrow, Inferred Cell Type: NK cells, Rank: 14
    Species: Homo_sapiens, Gene: CCL5, Study/Sample Identifier: SRA713577_SRS3363004, Cluster Index: 11, Sampled Tissue: Peripheral blood mononuclear cells, Inferred Cell Type: Platelets, Rank: 10
    Species: Homo_sapiens, Gene: CCL5, Study/Sample Identifier: SRA719952_SRS3407249, Cluster Index: 11, Sampled Tissue: NK cells, Inferred Cell Type: NK cells, Rank: 7
    Species: Homo_sapiens, Gene: CCL5, Study/Sample Identifier: SRA719952_SRS3407249, Cluster Index: 12, Sampled Tissue: NK cells, Inferred Cell Type: Gamma delta T cells, Rank: 6
    Species: Homo_sapiens, Gene: CCL5, Study/Sample Identifier: SRA719952_SRS3407249, Cluster Index: 13, Sampled Tissue: NK cells, Inferred Cell Type: Gamma delta T cells, Rank: 7
    Species: Homo_sapiens, Gene: CCL5, Study/Sample Identifier: SRA728025_SRS3454430, Cluster Index: 13, Sampled Tissue: Colon, Inferred Cell Type: T cells, Rank: 11
    Species: Homo_sapiens, Gene: CCL5, Study/Sample Identifier: SRA719952_SRS3407249, Cluster Index: 14, Sampled Tissue: NK cells, Inferred Cell Type: Gamma delta T cells, Rank: 7
    Species: Homo_sapiens, Gene: CCL5, Study/Sample Identifier: SRA728025_SRS3454428, Cluster Index: 16, Sampled Tissue: Colon, Inferred Cell Type: NK cells, Rank: 7
    Species: Homo_sapiens, Gene: CCL5, Study/Sample Identifier: SRA719952_SRS3407249, Cluster Index: 17, Sampled Tissue: NK cells, Inferred Cell Type: Gamma delta T cells, Rank: 10



```Java
TsvToArraylist.merge(null);
```

    
    ---------- Merge Sort ----------
    Merge Sort Time: 105500 nanoseconds
    Species: Homo_sapiens, Gene: CCL5, Study/Sample Identifier: SRA719952_SRS3407249, Cluster Index: 0, Sampled Tissue: NK cells, Inferred Cell Type: Gamma delta T cells, Rank: 8
    Species: Homo_sapiens, Gene: CCL5, Study/Sample Identifier: SRA779509_SRS3805265, Cluster Index: 1, Sampled Tissue: Bone marrow, Inferred Cell Type: NK cells, Rank: 14
    Species: Homo_sapiens, Gene: CCL5, Study/Sample Identifier: SRA719952_SRS3407249, Cluster Index: 2, Sampled Tissue: NK cells, Inferred Cell Type: Gamma delta T cells, Rank: 7
    Species: Homo_sapiens, Gene: CCL5, Study/Sample Identifier: SRA719952_SRS3407249, Cluster Index: 4, Sampled Tissue: NK cells, Inferred Cell Type: NK cells, Rank: 8
    Species: Homo_sapiens, Gene: CCL5, Study/Sample Identifier: SRA728025_SRS3454423, Cluster Index: 7, Sampled Tissue: Colon, Inferred Cell Type: T cells, Rank: 7
    Species: Homo_sapiens, Gene: CCL5, Study/Sample Identifier: SRA878024_SRS4660846, Cluster Index: 7, Sampled Tissue: Lungs, Inferred Cell Type: Unknown, Rank: 13
    Species: Homo_sapiens, Gene: CCL5, Study/Sample Identifier: SRA719952_SRS3407249, Cluster Index: 8, Sampled Tissue: NK cells, Inferred Cell Type: Gamma delta T cells, Rank: 8
    Species: Homo_sapiens, Gene: CCL5, Study/Sample Identifier: SRA728025_SRS3454422, Cluster Index: 8, Sampled Tissue: Colon, Inferred Cell Type: T cells, Rank: 14
    Species: Homo_sapiens, Gene: CCL5, Study/Sample Identifier: SRA728025_SRS3454425, Cluster Index: 9, Sampled Tissue: Colon, Inferred Cell Type: T cells, Rank: 9
    Species: Homo_sapiens, Gene: CCL5, Study/Sample Identifier: SRA728025_SRS3454426, Cluster Index: 9, Sampled Tissue: Colon, Inferred Cell Type: T cells, Rank: 12
    Species: Homo_sapiens, Gene: CCL5, Study/Sample Identifier: SRA779509_SRS3805260, Cluster Index: 9, Sampled Tissue: Bone marrow, Inferred Cell Type: NK cells, Rank: 14
    Species: Homo_sapiens, Gene: CCL5, Study/Sample Identifier: SRA719952_SRS3407249, Cluster Index: 11, Sampled Tissue: NK cells, Inferred Cell Type: NK cells, Rank: 7
    Species: Homo_sapiens, Gene: CCL5, Study/Sample Identifier: SRA713577_SRS3363004, Cluster Index: 11, Sampled Tissue: Peripheral blood mononuclear cells, Inferred Cell Type: Platelets, Rank: 10
    Species: Homo_sapiens, Gene: CCL5, Study/Sample Identifier: SRA719952_SRS3407249, Cluster Index: 12, Sampled Tissue: NK cells, Inferred Cell Type: Gamma delta T cells, Rank: 6
    Species: Homo_sapiens, Gene: CCL5, Study/Sample Identifier: SRA719952_SRS3407249, Cluster Index: 13, Sampled Tissue: NK cells, Inferred Cell Type: Gamma delta T cells, Rank: 7
    Species: Homo_sapiens, Gene: CCL5, Study/Sample Identifier: SRA728025_SRS3454430, Cluster Index: 13, Sampled Tissue: Colon, Inferred Cell Type: T cells, Rank: 11
    Species: Homo_sapiens, Gene: CCL5, Study/Sample Identifier: SRA719952_SRS3407249, Cluster Index: 14, Sampled Tissue: NK cells, Inferred Cell Type: Gamma delta T cells, Rank: 7
    Species: Homo_sapiens, Gene: CCL5, Study/Sample Identifier: SRA728025_SRS3454428, Cluster Index: 16, Sampled Tissue: Colon, Inferred Cell Type: NK cells, Rank: 7
    Species: Homo_sapiens, Gene: CCL5, Study/Sample Identifier: SRA719952_SRS3407249, Cluster Index: 17, Sampled Tissue: NK cells, Inferred Cell Type: Gamma delta T cells, Rank: 10



```Java
TsvToArraylist.quick(null);
```

    
    ---------- Quick Sort ----------
    Merge Sort Time: 47417 nanoseconds
    Species: Homo_sapiens, Gene: CCL5, Study/Sample Identifier: SRA719952_SRS3407249, Cluster Index: 0, Sampled Tissue: NK cells, Inferred Cell Type: Gamma delta T cells, Rank: 8
    Species: Homo_sapiens, Gene: CCL5, Study/Sample Identifier: SRA779509_SRS3805265, Cluster Index: 1, Sampled Tissue: Bone marrow, Inferred Cell Type: NK cells, Rank: 14
    Species: Homo_sapiens, Gene: CCL5, Study/Sample Identifier: SRA719952_SRS3407249, Cluster Index: 2, Sampled Tissue: NK cells, Inferred Cell Type: Gamma delta T cells, Rank: 7
    Species: Homo_sapiens, Gene: CCL5, Study/Sample Identifier: SRA719952_SRS3407249, Cluster Index: 4, Sampled Tissue: NK cells, Inferred Cell Type: NK cells, Rank: 8
    Species: Homo_sapiens, Gene: CCL5, Study/Sample Identifier: SRA728025_SRS3454423, Cluster Index: 7, Sampled Tissue: Colon, Inferred Cell Type: T cells, Rank: 7
    Species: Homo_sapiens, Gene: CCL5, Study/Sample Identifier: SRA878024_SRS4660846, Cluster Index: 7, Sampled Tissue: Lungs, Inferred Cell Type: Unknown, Rank: 13
    Species: Homo_sapiens, Gene: CCL5, Study/Sample Identifier: SRA728025_SRS3454422, Cluster Index: 8, Sampled Tissue: Colon, Inferred Cell Type: T cells, Rank: 14
    Species: Homo_sapiens, Gene: CCL5, Study/Sample Identifier: SRA719952_SRS3407249, Cluster Index: 8, Sampled Tissue: NK cells, Inferred Cell Type: Gamma delta T cells, Rank: 8
    Species: Homo_sapiens, Gene: CCL5, Study/Sample Identifier: SRA779509_SRS3805260, Cluster Index: 9, Sampled Tissue: Bone marrow, Inferred Cell Type: NK cells, Rank: 14
    Species: Homo_sapiens, Gene: CCL5, Study/Sample Identifier: SRA728025_SRS3454426, Cluster Index: 9, Sampled Tissue: Colon, Inferred Cell Type: T cells, Rank: 12
    Species: Homo_sapiens, Gene: CCL5, Study/Sample Identifier: SRA728025_SRS3454425, Cluster Index: 9, Sampled Tissue: Colon, Inferred Cell Type: T cells, Rank: 9
    Species: Homo_sapiens, Gene: CCL5, Study/Sample Identifier: SRA719952_SRS3407249, Cluster Index: 11, Sampled Tissue: NK cells, Inferred Cell Type: NK cells, Rank: 7
    Species: Homo_sapiens, Gene: CCL5, Study/Sample Identifier: SRA713577_SRS3363004, Cluster Index: 11, Sampled Tissue: Peripheral blood mononuclear cells, Inferred Cell Type: Platelets, Rank: 10
    Species: Homo_sapiens, Gene: CCL5, Study/Sample Identifier: SRA719952_SRS3407249, Cluster Index: 12, Sampled Tissue: NK cells, Inferred Cell Type: Gamma delta T cells, Rank: 6
    Species: Homo_sapiens, Gene: CCL5, Study/Sample Identifier: SRA719952_SRS3407249, Cluster Index: 13, Sampled Tissue: NK cells, Inferred Cell Type: Gamma delta T cells, Rank: 7
    Species: Homo_sapiens, Gene: CCL5, Study/Sample Identifier: SRA728025_SRS3454430, Cluster Index: 13, Sampled Tissue: Colon, Inferred Cell Type: T cells, Rank: 11
    Species: Homo_sapiens, Gene: CCL5, Study/Sample Identifier: SRA719952_SRS3407249, Cluster Index: 14, Sampled Tissue: NK cells, Inferred Cell Type: Gamma delta T cells, Rank: 7
    Species: Homo_sapiens, Gene: CCL5, Study/Sample Identifier: SRA728025_SRS3454428, Cluster Index: 16, Sampled Tissue: Colon, Inferred Cell Type: NK cells, Rank: 7
    Species: Homo_sapiens, Gene: CCL5, Study/Sample Identifier: SRA719952_SRS3407249, Cluster Index: 17, Sampled Tissue: NK cells, Inferred Cell Type: Gamma delta T cells, Rank: 10


## Our dance!

![](https://cdn.discordapp.com/attachments/879557685253664768/1230219988489474069/319309794-2754b581-4dbe-472b-a7aa-66977985b948.png?ex=663286a5&is=662011a5&hm=d826968197255e6a5438b102df6eadf2e22c21e6300c86adb985afb1bb9f9c5e&)

- 7 girls 6 boys (Women in STEM ⬆️, CSP & CSA 👍): Grace, Vivian, Emma, Aliya, Luna, Isabelle, Pranavi & Justin, Finn, Theo, Shivansh, Rayhan, Rachit 

<img width="618" alt="image" src="https://github.com/Codemaxxers/triangleblogs/assets/104966589/d82790f7-a1b3-40d8-9317-b098fb8b37fe">

Publicist: Key events documented on YouTube & TikTok 

Email: codemaxxers@gmail.com

YouTube: codemaxxers (post wednesday performance) 

[Performance Video](url)

TikTok: codemaxxers7 (viral tiktok trends to gain MASS attention) 

[Theo Thirst Trap](https://www.tiktok.com/t/ZTLkLeKQd/)
[Why Did This Dance Go Viral](https://www.tiktok.com/t/ZTLknNKYP/)

Clearly explain what we are trying to show before start actual performance (much thanks to Tanisha 🤩 )
Artistic impression & algorithmic accuracy > 10/10/10/10/10 🏅 
 Performance: 4/3 8:30 AM Wednesday --> PLACED #1 YURR

Reflection: Overall was a very fun experience! I now fully know what bubble sort is. Other teams had interesting sorting as well, such as the merge sort team who sorted flowers. Their choreography was very cool. 
