   document.addEventListener("DOMContentLoaded", function() {
        var ascending = true; // Default sorting order

        function sortTable(columnIndex) {
            var table, rows, switching, i, x, y, shouldSwitch;
            table = document.getElementById("dataTable");
            if (!table) return; // Check if table exists
            switching = true;
            // Set the sorting direction
            ascending = !ascending;

            while (switching) {
                switching = false;
                rows = table.getElementsByTagName("tr");
                for (i = 1; i < (rows.length - 1); i++) {
                    shouldSwitch = false;
                    x = rows[i].getElementsByTagName("td")[columnIndex];
                    y = rows[i + 1].getElementsByTagName("td")[columnIndex];
                    if (ascending) {
                        if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
                            shouldSwitch = true;
                            break;
                        }
                    } else {
                        if (x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase()) {
                            shouldSwitch = true;
                            break;
                        }
                    }
                }
                if (shouldSwitch) {
                    rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
                    switching = true;
                }
            }
        }
        
        // Attach event listeners to table headers for sorting
        var headers = document.querySelectorAll("#dataTable th");
        headers.forEach(function(header, index) {
            header.addEventListener("click", function() {
                sortTable(index);
            });
        });
    });
