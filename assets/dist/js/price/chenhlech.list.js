var table;
$(document).ready(function () {
    table = $('#buyList').DataTable({
        "ajax": {
            "url": API_URL+"/manager/xemgiachenhlech/",
            "type": "GET",
            "beforeSend": function (xhr) {
                xhr.setRequestHeader('Authorization', __token);
            }
        },
        "ordering": true,
		"columns": [
            { data: "id" },
            { data: "namefromtypecoin" },
			{ data: "nametotypecoin" },
            { data: "value"},
            {
                data: "status",
                render : function (data, type, row) {
                    return '<div class="row-btns"><a attr-id="'+row.id+'" class="row-btn-edit" href="'+location.href+'/'+row.id+'"><i class="fa fa-pencil"></i></a> <a attr-id="'+row.id+'" class="row-btn-del text-danger" href="#" return false"></a></div>'
                }
            }
		],
        "fnRowCallback": function (nRow, aData, iDisplayIndex) {
            console.log(aData);
        }
	})
})
