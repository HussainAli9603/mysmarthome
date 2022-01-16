$("#loginAdmin").submit(function (e) {

    e.preventDefault(); // avoid to execute the actual submit of the form.
    $('.loading').css('display', 'block');
    $.ajax({
        type: "POST",
        url: '/admin/loginUser',
        processData: false,
        contentType: false,
        data: new FormData(this),
        // serializes the form's elements.
        success: function (data) {
            $('.loading').css('display', 'none');
            if (data && data.message) {
                $('#error_message').addClass('alert alert-warning');
                $('#error_message').removeClass('alert alert-success');
                $('#error_message').text(data.message);
            }
            else if (data && data.success == true) {
                $('#error_message').removeClass('alert alert-warning');
                $('#error_message').addClass('alert alert-success');
                $('#error_message').text('Login Successful!');
                window.location = "/admin/dashboard";
            }
            else {
                $('#error_message').addClass('alert alert-warning');
                $('#error_message').removeClass('alert alert-success');
                $('#error_message').text(data);
            }
        }
    });


});

function removeThisRow(data){
    $("#record_" + data).remove();
}
$(function () {
    $("#example1").DataTable();

});
function updateHtml(response) {
    let updateHtml = ``;
    response.forEach(sub => {
        updateHtml += `<option value='${sub._id}'>${sub.title}</option>`;
    });
    $('#SubcategoryId').html(updateHtml)

}
function updateHtml1(response) {
    let updateHtml = ``;
    response.forEach(sub => {
        updateHtml += `<option value='${sub._id}'>${sub.title}</option>`;
    });
    $('#SubcategoryId1').html(updateHtml)

}
function updateHtml2(response) {
    let updateHtml = ``;
    response.forEach(sub => {
        updateHtml += `<option value='${sub._id}'>${sub.title}</option>`;
    });
    $('#SubcategoryId2').html(updateHtml)

}
$('#categoryId').change(function () {
    $('.loading').css('display', 'block');
    let pId = this.value;
    $.ajax({
        type: "GET",
        url: `/admin/get/subcategory/${pId}`,
        async: true,
        success: function (response) {
            $('.loading').css('display', 'none');
            if (response) {
                updateHtml(response)
            }
        },
        error: function () {
            $('.loading').css('display', 'none');
        }
    });
});
$('#categoryId1').change(function () {
    $('.loading').css('display', 'block');
    let pId = this.value;
    $.ajax({
        type: "GET",
        url: `/admin/get/subcategory/${pId}`,
        async: true,
        success: function (response) {
            $('.loading').css('display', 'none');
            if (response) {
                updateHtml1(response)
            }
        },
        error: function () {
            $('.loading').css('display', 'none');
        }
    });
});
$('#categoryId2').change(function () {
    $('.loading').css('display', 'block');
    let pId = this.value;
    $.ajax({
        type: "GET",
        url: `/admin/get/subcategory/${pId}`,
        async: true,
        success: function (response) {
            $('.loading').css('display', 'none');
            if (response) {
                updateHtml2(response)
            }
        },
        error: function () {
            $('.loading').css('display', 'none');
        }
    });
});