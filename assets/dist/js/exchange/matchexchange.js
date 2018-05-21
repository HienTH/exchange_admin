var table;
$(document).ready(function () {
    table = $('#buyList').DataTable({
        ajax: {
            url: API_URL+"/manager/danhsachgiaodichdakhop/",
            type: "get",
            beforeSend: function (xhr) {
                xhr.setRequestHeader('Authorization', __token);
            }
        },
		columns: [
            { data: "id" },
            { data: "fromexchange" },
            { data: "toexchange" },
            { data: "time"},
		],
        fnRowCallback: function (nRow, aData, iDisplayIndex) {
            console.log(aData);
        }
	})
})