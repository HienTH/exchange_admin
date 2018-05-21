var table;
$(document).ready(function () {
    table = $('#buyList').DataTable({
        ajax: {
            url: API_URL+"/manager/danhsachgiaodichdangcho/",
            type: "get",
            beforeSend: function (xhr) {
                xhr.setRequestHeader('Authorization', __token);
            }
        },
		columns: [
            { data: "id" },
            { data: "fromcoin" },
            { data: "namefromtypecoin" },
            { data: "tocoin" },
            { data: "nametotypecoin" },
            { data: "userid" },
            { data: "time"},
            { data: "status" }
		],
        fnRowCallback: function (nRow, aData, iDisplayIndex) {
            console.log(aData);
        }
	})
})

/*
function approve (itemID) {
    $a = $('a[attr-id="'+itemID+'"]');
    console.log('del '+itemID+' called!');
    var uname = $a.closest('tr').find('td:nth-child(2)').text();
    if (itemID) {
            $.ajax({
                url: API_URL+'/users/'+itemID+'/',
                type: 'delete',
                beforeSend: function(xhr) {
                    xhr.setRequestHeader('Authorization', __token);
                },
                success: function (response) {
                    console.log(response);
                    mtip('', 'success', '', 'Duyệt thành viên <a href="'+MAIN_URL+'/user/'+itemID+'">@'+uname+'</a> thành công');

                    $a.closest('tr').remove();
                },
                error: function (a, b, c) {
                    console.log(a);
                    mtip('', 'error', '', 'Lỗi hệ thống! Vui lòng liên hệ với quản trị viên để được hỗ trợ sớm nhất!');
                }
            })
        //}
    }
    return false
}


function del (itemID) {
    $a = $('a[attr-id="'+itemID+'"]');
    console.log('del '+itemID+' called!');
    var title = $a.closest('tr').find('td:nth-child(2)').text();
    if (itemID && title) {
        if (confirm("Are you sure want to remove "+title+" permanently?")) {

            $.ajax({
                url: API_URL+'/users/'+itemID+'/',
                type: 'delete',
                beforeSend: function(xhr) {
                    xhr.setRequestHeader('Authorization', __token);
                },
                success: function (response) {
                    console.log(response);
                    mtip('', 'success', '', 'Dự án đã xóa khỏi hệ thống thành công');

                    $a.closest('tr').remove();
                },
                error: function (a, b, c) {
                    console.log(a);
                    mtip('', 'error', '', 'Lỗi hệ thống! Vui lòng liên hệ với quản trị viên để được hỗ trợ sớm nhất!');
                }
            })
        }
    }
    return false
}
*/