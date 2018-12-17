$(document).ready(function() {

    //set paging to true
    table = $('#movieDataTable').DataTable({
        "paging": true
    });


    $.ajax({
        type: 'GET',
        url: 'https://data.sfgov.org/resource/wwmu-gmzc.json',
        dataType: 'json',
        success: function(data) {
            $('tbody').html('');
            data.forEach(function(item) { //insert rows
                    table.row.add([item.title, item.release_year, item.director])
                })
                //update tables
            table.draw();
        }
    });
    return false;
});